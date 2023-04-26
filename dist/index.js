"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const port = process.env.PORT;
const key = process.env.SECRET_SESSION;
const express_session_1 = __importDefault(require("express-session"));
const body_parser_1 = __importDefault(require("body-parser"));
const productsRouter_1 = __importDefault(require("./routes/productsRouter"));
const authRouter_1 = __importDefault(require("./routes/authRouter"));
const accountRouter_1 = __importDefault(require("./routes/accountRouter"));
const userRouter_1 = __importDefault(require("./routes/userRouter"));
const serviceRouter_1 = __importDefault(require("./routes/serviceRouter"));
const contractRouter_1 = __importDefault(require("./routes/contractRouter"));
const logged_1 = __importDefault(require("./middlewares/logged"));
// Middleware para analizar el cuerpo de la solicitud
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
app.use((0, express_session_1.default)({
    secret: key,
    resave: false,
    saveUninitialized: true,
}));
app.get("/", (req, res) => {
    res.send("Express + Typescrypt Server");
});
app.use("/auth", authRouter_1.default);
app.use("/user", logged_1.default, userRouter_1.default);
app.use("/products", logged_1.default, productsRouter_1.default);
app.use("/accounts", logged_1.default, accountRouter_1.default);
app.use("/services", logged_1.default, serviceRouter_1.default);
app.use("/contracts", logged_1.default, contractRouter_1.default);
app.listen(port, () => {
    console.log(`[server]: Server is running at https://localhost:${port}`);
});
