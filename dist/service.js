"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const serviceSequelize_1 = __importDefault(require("./sequelize/serviceSequelize"));
class Service extends serviceSequelize_1.default {
    constructor(subcategoryId, name, description, id, created_at, updated_at, deleted_at) {
        super();
        this.name = name;
        this.description = description;
        this.subcategoryId = subcategoryId;
        this.created_at = created_at;
        this.updated_at = updated_at;
        this.deleted_at = deleted_at;
    }
}
exports.default = Service;
