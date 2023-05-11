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
// import { getAllServices, getAllServices2 } from "../service";
const express_1 = __importDefault(require("express"));
const serviceRepository_1 = require("../repository/serviceRepository");
const router = express_1.default.Router();
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const services = yield (0, serviceRepository_1.getAllServices)();
        res.json(services);
    }
    catch (error) {
        console.error(error);
        res.status(500).send("Internal server error");
    }
}));
router.get("/2", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // const services = await getAllServices2();
        // res.json(services);
    }
    catch (error) {
        console.error(error);
        res.status(500).send("Internal server error");
    }
}));
exports.default = router;
