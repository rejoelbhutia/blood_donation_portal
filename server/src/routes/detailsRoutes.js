import express from "express"
import { accountDetails, getDonationHistory } from '../controller/donorController.js'

const router = express.Router();

router.get("/account", accountDetails);
router.get("/history", getDonationHistory);

export default router;

