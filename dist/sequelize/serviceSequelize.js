"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize_2 = require("../config/sequelize");
const userSequelize_1 = __importDefault(require("./userSequelize"));
class ServiceSequelize extends sequelize_1.Model {
}
ServiceSequelize.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: false,
        unique: true,
    },
    description: {
        type: sequelize_1.DataTypes.STRING(200),
        allowNull: false,
    },
    userId: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: false,
        unique: true,
    },
    subCategoryId: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: false,
        field: "subcategoryId",
    },
    created_at: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
        field: "created_at",
        // defaultValue: now,
    },
    updated_at: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true,
        field: "updated_at",
    },
    deleted_at: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true,
        field: "deleted_at",
    },
}, {
    sequelize: sequelize_2.sequelize,
    tableName: "services",
    timestamps: true,
    underscored: true,
    paranoid: true,
});
ServiceSequelize.belongsTo(userSequelize_1.default, { foreignKey: "user_id" });
ServiceSequelize.belongsTo(userSequelize_1.default, { foreignKey: "user_id" });
exports.default = ServiceSequelize;
