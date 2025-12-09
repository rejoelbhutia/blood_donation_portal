import express from "express"
import accountDetails from '../controller/donorController.js'

const router = express.Router();

router.get("/account", accountDetails);

export default router;

