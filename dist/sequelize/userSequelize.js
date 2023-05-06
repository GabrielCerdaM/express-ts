"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize_2 = require("../config/sequelize");
class UserSequelize extends sequelize_1.Model {
}
UserSequelize.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    email: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: false,
        unique: true,
    },
    password: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: false,
    },
    username: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: false,
        unique: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: false,
    },
    lastname: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: false,
    },
    createdAt: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
        field: "createdAt",
    },
    updatedAt: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true,
        field: "updatedAt",
    },
    deletedAt: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true,
        field: "deletedAt",
    },
}, {
    sequelize: sequelize_2.sequelize,
    tableName: "users",
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
exports.default = UserSequelize;
