"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getService = exports.getAllServices = void 0;
const serviceSequelize_1 = __importDefault(require("../sequelize/serviceSequelize"));
const userSequelize_1 = __importDefault(require("../sequelize/userSequelize"));
const getAllServices = () => {
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const services = yield serviceSequelize_1.default.findAll({
                include: userSequelize_1.default,
            });
            // if (services) {
            //   reject(null);
            // }
            resolve(services);
        }
        catch (error) {
            reject(JSON.stringify(error));
        }
    }));
};
exports.getAllServices = getAllServices;
const getService = (id) => {
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const service = yield serviceSequelize_1.default.findByPk(id, {
                include: { all: true, nested: true },
            });
            console.log(service);
            resolve(service);
        }
        catch (error) {
            reject(JSON.stringify(error));
        }
    }));
};
exports.getService = getService;
