import express from 'express';
import cors from 'cors';
import connectDb from './config/db.js';
import authRoutes from './routes/authRoutes.js'
import detailsRoutes from "./routes/detailsRoutes.js"
import authMiddleware from "./middleware/authMiddleware.js"



const app = express()

connectDb();

app.use(express.json());
app.use(cors({
    origin : "http://localhost:5173",
     methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}));

app.use("/api/auth", authRoutes)
app.use("/api/details", authMiddleware, detailsRoutes)


export default app;