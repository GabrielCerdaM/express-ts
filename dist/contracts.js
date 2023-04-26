"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllContracts = void 0;
const dbconfig_1 = require("./config/dbconfig");
const getAllContracts = () => {
    return new Promise((resolve, reject) => {
        return dbconfig_1.pool.query("SELECT * FROM contracts", (error, results) => {
            if (error) {
                return reject(error);
            }
            return resolve(results);
        });
    });
};
exports.getAllContracts = getAllContracts;
