"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize_2 = require("../config/sequelize");
class productSequelize extends sequelize_1.Model {
}
productSequelize.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    password: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: false,
    },
}, {
    sequelize: sequelize_2.sequelize,
    tableName: "users",
    timestamps: true,
    underscored: true,
    paranoid: true,
});
exports.default = productSequelize;
