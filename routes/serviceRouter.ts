// import { getAllServices, getAllServices2 } from "../service";
import express from "express";
import { getAllServices, getService } from "../repository/serviceRepository";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const services = await getAllServices();
    res.json(services);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log({ id });
    const services = await getService(+id);
    res.json(services);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
});

export default router;
