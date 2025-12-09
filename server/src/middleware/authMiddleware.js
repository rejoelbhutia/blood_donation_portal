//here i have to verify token from front end
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
dotenv.config();

const verifyToken = (req, res, next) => {
    const authHeader = req.headers["authorization"];//type of header
    const token = authHeader && authHeader.split(' ')[1];//if auth exist return second Autharisation : Bearer <jwt-token>(represemts space betwen bearer and token  )

    if (!token) {
        return res.status(401).json({message : "Access Denied"});
    }

    try {
        const verified = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
        req.user = verified;
        next(); //pass the control to next middlware
    } catch (error) {
        res.status(403).json({message : "Invalid or expired token"})
        console.log(error);
        
    }
}

export default verifyToken;