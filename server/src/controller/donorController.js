import User from "../models/user.model.js"
import Donation from "../models/donation.model.js"



const accountDetails = async (req, res) => {
    try {
        const userId = req.user.id;

        const userDetails = await User.findById(userId).select("-hash");//it means exclude password

        if (!userDetails) {
            return res.status(400).json({message : "User does not exitst"})
        }
        
        const totalDonation = await Donation.countDocuments({
            donatedBy: userId,
            status: "completed"
        })

        const userData = {
            userDetails,
            totalDonation
        }

        return res.status(200).json(userData)
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json({message : "Server error"})
    }

}





const stats = async (req, res) => {

    try {
        const userId = req.body.id;
        const totalDonation = await Donation.countDocuments({
            donatedBy: userId,
            status: "completed"
        })
        

        const userStat = {
            totalDonation,
            
        }

        res.status(200).json(userStat)
        
    } catch (error) {

    }




}   

export default accountDetails;