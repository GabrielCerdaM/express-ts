"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize_2 = require("../config/sequelize");
const serviceSequelize_1 = __importDefault(require("./serviceSequelize"));
const userSequelize_1 = __importDefault(require("./userSequelize"));
class ContractSequelize extends sequelize_1.Model {
}
ContractSequelize.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    serviceId: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: false,
        unique: true,
        field: "serviceId",
    },
    clientId: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: false,
        unique: true,
        field: "clientId",
    },
    name: {
        type: sequelize_1.DataTypes.STRING(200),
        allowNull: false,
        field: "name",
    },
    price: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: false,
        unique: false,
        field: "price",
    },
    duration: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: true,
        field: "duration",
    },
    durationType: {
        type: sequelize_1.DataTypes.STRING(20),
        allowNull: false,
        field: "durationType",
        defaultValue: "Hrs",
    },
    created_at: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
        field: "created_at",
        defaultValue: new Date(),
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
    tableName: "contracts",
    timestamps: true,
    underscored: true,
    paranoid: true,
    indexes: [
        {
            unique: true,
            fields: ["email"],
        },
        {
            unique: true,
            fields: ["username"],
        },
    ],
});
ContractSequelize.hasOne(serviceSequelize_1.default, { foreignKey: "id" });
ContractSequelize.belongsTo(userSequelize_1.default, { foreignKey: "id" });
exports.default = ContractSequelize;
