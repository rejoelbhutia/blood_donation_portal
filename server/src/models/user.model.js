import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    accountType: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    hash: { // I assume this is your password field
        type: String,
        required: true,
        minLength: 6
    },
    address: {
        type: String,
        required: true
    },
    DOB: {
        type: Date,
        required: true
    },
    joiningDate: {
        year: Number,
        month: String,
        weekday: String,
        day: Number
    },
    bloodGroup: {
        type: String,
        enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
        required: true
    },
    
    resetPasswordToken: {
        type: String,
        default: undefined
    },
    resetPasswordExpires: {
        type: Date,
        default: undefined
    }
});

const User = mongoose.model("User", userSchema)
export default User;