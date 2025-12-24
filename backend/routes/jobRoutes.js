import express from "express";
import { createJob, getJobs } from "../controllers/jobController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getJobs);
router.post("/", authMiddleware, createJob);

export default router;
