"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const basic_auth_1 = __importDefault(require("basic-auth"));
const UserRepository_1 = require("../repository/UserRepository");
const encrypt_1 = __importDefault(require("../helpers/encrypt"));
const users_1 = __importDefault(require("../users"));
const router = express_1.default.Router();
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.json("ok auth");
    }
    catch (error) {
        console.error(error);
        res.status(500).send("Internal server error");
    }
}));
router.post("/login", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = (0, basic_auth_1.default)(req);
        // Verificar si el usuario está autenticado
        if (!user || !user.name || !user.pass) {
            res.setHeader("WWW-Authenticate", 'Basic realm="Enter credentials"');
            res.status(401).send("Authentication required");
        }
        // Verificar las credenciales del usuario
        const verified = yield (0, UserRepository_1.login)(user.name, user.pass);
        if (verified) {
            req.session.loggedin = true;
            req.session.username = user.name;
            res.send("Logged in successfully");
        }
        else {
            res.setHeader("WWW-Authenticate", 'Basic realm="Enter credentials"');
            res.status(401).send("Invalid credentials");
        }
        // if (user.name === "username" && user.pass === "password") {
        //   req.session.loggedin = true;
        //   req.session.username = user.name;
        //   res.send("Logged in successfully");
        // } else {
        //   res.setHeader("WWW-Authenticate", 'Basic realm="Enter credentials"');
        //   res.status(401).send("Invalid credentials");
        // }
    }
    catch (error) {
        console.error(error);
        res.status(500).send("Internal server error");
    }
}));
// Ruta para verificar la sesión del usuario
router.get("/profile", (req, res) => {
    if (req.session.loggedin) {
        res.send("Welcome " + req.session.username);
    }
    else {
        res.status(401).send("Unauthorized");
    }
});
router.post("/register", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, name, lastname, email, password } = req.body;
        const passwordEncrypted = yield (0, encrypt_1.default)(password);
        const usuario = new users_1.default(username, name, lastname, email, passwordEncrypted);
        const newUser = yield (0, UserRepository_1.register)(usuario);
        if (!newUser) {
            res.status(500).send("User already exist");
        }
        else {
            res.status(200).json(newUser);
        }
    }
    catch (error) {
        console.error({ error });
        res.status(500).send("Internal Server Error");
    }
}));
// Ruta para cerrar sesión
router.get("/logout", (req, res) => {
    req.session.destroy(() => {
        res.redirect("/");
    });
});
exports.default = router;
