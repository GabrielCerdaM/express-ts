"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const subCategorySequelize_1 = __importDefault(require("./sequelize/subCategorySequelize"));
class Subcategory extends subCategorySequelize_1.default {
    constructor(id, categoryId, name, description, created_at, updated_at, deleted_at) {
        super();
        this.id = id;
        categoryId;
        this.name = name;
        this.description = description;
        this.created_at = created_at;
        this.updated_at = updated_at;
        this.deleted_at = deleted_at;
    }
}
exports.default = Subcategory;
