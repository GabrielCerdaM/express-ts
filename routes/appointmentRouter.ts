import express from "express";
import { appointment } from "../repository/appointmentRepository";
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const { serviceId, userId, price, name } = req.body;
    const newAppointment = await appointment(serviceId, userId, price, name);
    // res.json({ serviceId, userId });
    res.json(newAppointment);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
});

export default router;
