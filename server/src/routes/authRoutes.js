import express from 'express';
import { registerUser, signIn} from '../controller/authController.js';
import {forgetPassword} from '../services/auth.services.js'
import resetPassword from '../services/auth.resetPassword.js';



const router = express.Router();

router.post("/signup", registerUser);

router.post("/signin", signIn)






router.post("/forgot-password", forgetPassword);
router.post("/update-password", resetPassword)


export default router;