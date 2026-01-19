import express from "express"
import { accountDetails, getDonationHistory, calculateProgress } from '../controller/donorController.js'

const router = express.Router();

router.get("/account", accountDetails);
router.get("/history", getDonationHistory);
router.get("/calculate-progress", calculateProgress)

export default router;

