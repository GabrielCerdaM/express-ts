"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllAccounts = void 0;
const dbconfig_1 = require("./config/dbconfig");
const getAllAccounts = () => {
    return new Promise((resolve, reject) => {
        return dbconfig_1.pool.query("SELECT * FROM cuenta_emp", (error, results) => {
            if (error) {
                return reject(error);
            }
            return resolve(results);
        });
    });
};
exports.getAllAccounts = getAllAccounts;
