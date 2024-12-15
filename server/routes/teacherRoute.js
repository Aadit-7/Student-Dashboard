import express from "express";
import { login, logout, signup } from "../controllers/teacherController.js"

const router = express.Router();

router.post("/signup",signup);
router.post("/login",login);
router.get("/logout",logout);
export default router;