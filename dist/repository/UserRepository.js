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
exports.register = exports.login = exports.getUserByEmail = exports.getUserById = exports.getAllUsers = exports.buscarUsuario = void 0;
const sequelize_1 = require("../config/sequelize");
const userSequelize_1 = __importDefault(require("../sequelize/userSequelize"));
const buscarUsuario = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const usuarioEncontrado = yield sequelize_1.sequelize.models.User.findByPk(id);
    return usuarioEncontrado !== null && usuarioEncontrado !== void 0 ? usuarioEncontrado : null;
});
exports.buscarUsuario = buscarUsuario;
const getAllUsers = () => {
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        const users = yield userSequelize_1.default.findAll();
        if (!users) {
            reject(null);
        }
        resolve(users);
    }));
};
exports.getAllUsers = getAllUsers;
const getUserById = (id) => {
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        const user = yield userSequelize_1.default.findByPk(id);
        if (!user) {
            reject(null);
        }
        resolve(user);
    }));
};
exports.getUserById = getUserById;
const getUserByEmail = (email) => {
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        const user = yield userSequelize_1.default.findAll({
            where: { email },
        });
        if (!user || user.length < 1) {
            reject(null);
        }
        resolve(user);
    }));
};
exports.getUserByEmail = getUserByEmail;
const login = (email, password) => {
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const user = yield userSequelize_1.default.findAll({
                where: {
                    email,
                    password,
                },
            });
            if (!user || user.length < 1) {
                throw new Error(`doesn't exist`);
            }
            resolve(true);
        }
        catch (error) {
            console.log({ error });
            reject(false);
        }
    }));
};
exports.login = login;
const register = (user) => {
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        const { email, password, username, name, lastname } = user;
        const userEmail = yield (0, exports.getUserByEmail)(email);
        if (user || userEmail.length > 0) {
            reject(null);
        }
        const savedUser = yield user.save();
        console.log({ savedUser });
        // const newUser = new User(email, password, username, name, lastname);
        // await newUser.save();
        resolve(savedUser);
    }));
};
exports.register = register;
