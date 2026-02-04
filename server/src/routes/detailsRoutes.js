import express from "express"
import { accountDetails, getDonationHistory, calculateProgress, getCritcalMatches } from '../controller/donorController.js'

const router = express.Router();

router.get("/account", accountDetails);
router.get("/history", getDonationHistory);
router.get("/calculate-progress", calculateProgress)
router.get("/critcalmatches", getCritcalMatches)
export default router;

