import { Router } from "express";
import { getProfile } from "../controllers/userController.js";
import { requireAuth } from "../middlewares/authMiddleware.js";

const router = Router();

router.get("/user", requireAuth, getProfile);

export default router;
