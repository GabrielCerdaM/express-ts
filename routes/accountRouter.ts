import { getAllAccounts } from "../cuenta_emp";
import express from "express";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const accounts = await getAllAccounts();
    res.json(accounts);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
});

export default router;
