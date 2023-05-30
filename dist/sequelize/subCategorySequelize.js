"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize_2 = require("../config/sequelize");
const contractSequelize_1 = __importDefault(require("./contractSequelize"));
class SubcategorySequelize extends sequelize_1.Model {
}
SubcategorySequelize.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    categoryId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    created_at: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize_1.DataTypes.NOW,
    },
    updated_at: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize_1.DataTypes.NOW,
    },
    deleted_at: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true,
    },
}, {
    sequelize: sequelize_2.sequelize,
    tableName: "subcategories",
    timestamps: true,
});
SubcategorySequelize.belongsTo(contractSequelize_1.default, { foreignKey: "id" });
exports.default = SubcategorySequelize;
