"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exist = exports.register = exports.getUserByEmail = exports.getUserById = exports.getAllUsers = void 0;
const dbconfig_1 = require("./config/dbconfig");
const getAllUsers = () => {
    return new Promise((resolve, reject) => {
        return dbconfig_1.pool.query("SELECT * FROM users", (error, results) => {
            if (error) {
                return reject(error);
            }
            return resolve(results);
        });
    });
};
exports.getAllUsers = getAllUsers;
const getUserById = (id) => {
    return new Promise((resolve, reject) => {
        return dbconfig_1.pool.query(`SELECT * FROM users where id = ${id}`, (error, results) => {
            if (error) {
                return reject(error);
            }
            return resolve(results);
        });
    });
};
exports.getUserById = getUserById;
const getUserByEmail = (email) => {
    return new Promise((resolve, reject) => {
        return dbconfig_1.pool.query(`SELECT * FROM users where email =  ?`, email, (error, results) => {
            if (error) {
                return reject(error);
            }
            return resolve(results);
        });
    });
};
exports.getUserByEmail = getUserByEmail;
const register = (user) => {
    return new Promise((resolve, reject) => {
        const sql = "INSERT INTO users SET ?";
        return dbconfig_1.pool.query(sql, user, (error, results) => {
            if (error) {
                return reject(error);
            }
            return resolve(results.insertId);
        });
    });
};
exports.register = register;
const exist = (email) => {
    return new Promise((resolve, reject) => {
        try {
            const user = getUser(userId);
            if (!user) {
                throw new Error(user);
            }
            return resolve(true);
        }
        catch (error) {
            return reject(false);
        }
    });
};
exports.exist = exist;
