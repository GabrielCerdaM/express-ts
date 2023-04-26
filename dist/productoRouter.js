"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllProductos = void 0;
const dbconfig_1 = require("./dbconfig");
const getAllProductos = () => {
    return new Promise((resolve, reject) => {
        return dbconfig_1.pool.query("SELECT * FROM producto", (error, results) => {
            if (error) {
                return reject(error);
            }
            return resolve(results);
        });
        // pool.query('SELECT * FROM users', (error, results) => {
        //   if (error) {
        //     return reject(error);
        //   }
        //   return resolve(results);
        // });
    });
};
exports.getAllProductos = getAllProductos;
