import mongoose from "mongoose";

const requestSchema = new mongoose.Schema({
    requester: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    patientName:{
        type: String,
        required: true,
        trim: true
    },
    bloodGroup: {
        type: String,
        enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
        required: true
    },
    condition: {
        type: String,
        enum: ["critical", "urgent", "stable"],
        required: true
    },
    hospitalName: {
        type: String,
        required: true,
        trim: true
    },
    unit: {
        type: Number,
        required: true,
        min: 1
    },
    reason: {
        type: String,
        required: true,
        trim: true
    },
    address: {
        type: String,
        required: true,
        trim: true
    },
    status: {
        type: String,
        enum: ["completed", "ongoing", "expired"],
        default: "ongoing",
    },
    expiresAt: {
        type: Date,
        required: true,
        validate: {
            validator: (value) => {
                return value > Date.now()
            },
            message: "Expiry date must be in future"
        }
    }
},
    {timestamps: true}
)   

const Request = mongoose.model("Request", requestSchema);
export default Request;