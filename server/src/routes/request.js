import express from "express";
import { createRequest } from "../controller/receiverController.js";

const router = express.Router();


router.post("/bloodrequest", createRequest);


export default router;