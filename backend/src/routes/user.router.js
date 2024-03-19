import { Router } from "express";
import { registerUser, loginUser, logoutUser, getCurrentUser } from "../controllers/user.controller.js";

const router = Router();

router.route("/register").post(registerUser)

router.route("/login").post(loginUser)

router.route("/currentUser").post(getCurrentUser)

router.route("/logout").post(logoutUser)

export default router;