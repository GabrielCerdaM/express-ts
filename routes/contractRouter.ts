import express from "express";
import { getAllContracts } from "../repository/contractRepository";
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const contracts = await getAllContracts();
    res.send(contracts);
  } catch (error) {
    res.send(error);
  }
});

export default router;
