import User from "../models/user.model.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config()
export const registerUser = async (req, res) => {
    try {
        const { accountType, name, email, password, address, DOB, bloodGroup } = req.body;

        const existingUser = await User.findOne({ email: email.toLowerCase() });
        if (existingUser) {
            return res.status(400).json({ message: "User already registered! Please login." })
        }
        const date = new Date();
        const joiningDate = {
            year: date.getFullYear(),
            month: date.toLocaleDateString("en-US", { month: "long" }),
            weekday: date.toLocaleDateString("en-US", { weekday: "long" }),
            day: date.getDate()

        }
        const hash = await bcrypt.hash(password, 13);
        const newUser = await User.create({ accountType, name, email: email.toLowerCase(), hash, address, DOB, bloodGroup, joiningDate });

        const token = jwt.sign({ id: newUser._id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "1d" });

        if (!token) {
            return res.status(401).json({ message: "Expired or invalid token" });
        }

        res.status(201).json({
            message: "User created successfully",
            user: newUser,
            token: token
        })


    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message })
    }
}

export const signIn = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email: email.toLowerCase() });




        if (!user) {
            return res.status(400).json({ message: "User not found" })

        }
        const isPassword = await bcrypt.compare(password, user.hash)

        if (!isPassword) {
            return res.status(400).json({ message: "Invalid credential" })
        }

        const token = jwt.sign({ id: user._id },//payload
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: '1d' }
        )
        if (!token) {
            return res.status(401).json({ message: "Expired or invalid token" })
        }

        res.status(201).json({
            message: "Logged In successfully", user: {
                accountType: user.accountType,
                name: user.name,
                email: user.email,
                address: user.address,
                DOB: user.DOB,
                bloodGroup: user.bloodGroup,
                token: token
            }
        });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message })
    }
}

