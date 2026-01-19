import mongoose from "mongoose";

const donationSchema = new mongoose.Schema({
    donatedBy : {
        type : mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },

    donatedTo : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    },

    bloodType : {
        type : String,
        enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
        required : true
    },

    donationDate : {
        type : Date,
        required : true,
        default : Date.now
    },

    units : {
        type : Number,
        required : true
    },
    place : {
        type : String
    },
    reason : {
        type: String
    },
    status : {
        type : String,
        enum : ["completed", "pending"],
        required : true
    }

})

const Donation = mongoose.model("Donation", donationSchema);
export default Donation