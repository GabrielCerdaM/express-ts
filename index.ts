const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const port = process.env.PORT;
const key = process.env.SECRET_SESSION;

import session from "express-session";
import bodyParser from "body-parser";

import authRouter from "./routes/authRouter";
import userRouter from "./routes/userRouter";
import serviceRouter from "./routes/serviceRouter";
import contractRouter from "./routes/contractRouter";
import appointmentRouter from "./routes/appointmentRouter";

import logged from "./middlewares/logged";
import { getAllUsers } from "./repository/UserRepository";

// Middleware para analizar el cuerpo de la solicitud
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(
  session({
    secret: key,
    resave: false,
    saveUninitialized: true,
  })
);

app.get("/", async (req, res) => {
  try {
    const user = await getAllUsers;
    res.json(user);
  } catch (error) {
    res.send(error);
  }
});

app.use("/auth", authRouter);

app.use("/user", logged, userRouter);

app.use("/services", logged, serviceRouter);

app.use("/contracts", logged, contractRouter);

app.use("/appointment", logged, appointmentRouter);

app.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`);
});
