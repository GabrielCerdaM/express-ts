import express from "express";
import { getAllContracts } from "../repository/contractRepository";
const router = express.Router();

router.get("/", async (req, res) => {
  const services = await getAllContracts();
  res.send(services);
});

export default router;
