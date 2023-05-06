import encrypt from "../helpers/encrypt";
import { getAllUsers } from "../repository/UserRepository";
import express from "express";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const users = await getAllUsers();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
});

export default router;
