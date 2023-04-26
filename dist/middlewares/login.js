"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logged = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    if (!req.session.loggedin) {
        res.status(401).send("Unauthorized");
    }
    next();
};
exports.default = logged;
