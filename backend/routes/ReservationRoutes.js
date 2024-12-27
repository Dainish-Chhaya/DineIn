import express from "express";
import { sendReservation } from "../controller/reservation.js";

const router = express.Router(); //Creating instance of Router

router.post("/send", sendReservation);

export default router;