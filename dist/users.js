"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userSequelize_1 = __importDefault(require("./sequelize/userSequelize"));
class User extends userSequelize_1.default {
    constructor(email, password, username, name, lastname, id, created_at, updated_at, deleted_at) {
        super();
        this.id = id;
        this.email = email;
        this.password = password;
        this.username = username;
        this.name = name;
        this.lastname = lastname;
        this.created_at = created_at;
        this.updated_at = updated_at;
        this.deleted_at = deleted_at;
    }
}
exports.default = User;
