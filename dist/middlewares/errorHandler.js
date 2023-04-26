"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
// Middleware para manejar errores
const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(401).send(err.stack);
};
exports.errorHandler = errorHandler;
