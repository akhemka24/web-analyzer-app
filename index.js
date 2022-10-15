import express from "express";
import {
  createData,
  getData,
} from "./data_controller.js";

const router = express.Router();
router.post("/", createData);
router.get("/", getData);
export default router;

