"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllServices2 = exports.getAllServices = void 0;
const dbconfig_1 = require("./config/dbconfig");
const getAllServices = () => {
    return new Promise((resolve, reject) => {
        return dbconfig_1.pool.query("SELECT * FROM services", (error, results) => {
            if (error) {
                return reject(error);
            }
            return resolve(results);
        });
    });
};
exports.getAllServices = getAllServices;
const getAllServices2 = () => {
    return new Promise((resolve, reject) => {
        return dbconfig_1.pool.query(`
    SELECT *
    FROM services
    INNER JOIN users ON services.userId = users.id
  `, (error, results) => {
            if (error) {
                return reject(error);
            }
            return resolve(results);
        });
    });
};
exports.getAllServices2 = getAllServices2;
