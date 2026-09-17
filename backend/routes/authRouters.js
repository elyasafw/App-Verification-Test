import Router from "express";
import { register } from "../controllers/authController.js";

const router = Router();

router.post("/singUp", register);

// router.post("/login");

export default router;
