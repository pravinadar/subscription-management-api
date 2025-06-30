import express from "express";
import { registerUser, loginUser, getUserProfile } from "../controllers/user.controller.js";

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/get-profile', getUserProfile);


export default router;