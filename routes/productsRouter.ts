import { getAllProductos } from "../producto";
import express from "express";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const productos = await getAllProductos();
    res.json(productos);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
});

export default router;
