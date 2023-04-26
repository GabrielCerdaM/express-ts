"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllProductos = void 0;
const dbconfig_1 = require("./dbconfig");
const getAllProductos = () => {
    return new Promise((resolve, reject) => {
        dbconfig_1.pool.query("SELECT * FROM producto");
    });
};
exports.getAllProductos = getAllProductos;
