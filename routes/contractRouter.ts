import { getAllContracts } from "../contracts";
import express from "express";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const contracts = await getAllContracts();
    res.json(contracts);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
});

export default router;
