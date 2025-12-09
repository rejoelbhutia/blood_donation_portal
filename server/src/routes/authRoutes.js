import express from 'express';
import {registerUser, signIn} from '../controller/authController.js';

const router = express.Router();

router.post("/signup", registerUser);

router.post("/signin", signIn)



export default router;