import User from "../models/user.model.js"
import Donation from "../models/donation.model.js"



const calculateProgressHelper = (lastDonationDate) => {
    if (!lastDonationDate) return { progress: 0, nextEligibleDate: null };

    const today = new Date();
    const lastDate = new Date(lastDonationDate);
    const nextEligibleDate = new Date(lastDate);
    nextEligibleDate.setDate(lastDate.getDate() + 90);

    const totalDuration = nextEligibleDate - lastDate; //total time duration between
    const elapsed = today - lastDate;//how much time has passed

    let progress = Math.min(100, Math.max(0, (elapsed / totalDuration) * 100));

    // If eligible, progress should be 100
    if (today >= nextEligibleDate) {
        progress = 100;
    }

    return {
        progress: Math.round(progress),
        nextEligibleDate,
        lastDonationDate
    };
};

const calculateProgress = async (req, res) => {
    try {
        const userId = req.user.id;

        const latestDonation = await Donation.findOne({
            donatedBy: userId,
            status: "completed"
        }).sort({ donationDate: -1 });

        const stats = calculateProgressHelper(latestDonation ? latestDonation.donationDate : null);

        res.status(200).json(stats);
    } catch (error) {
        console.log("Error in calculateProgress:", error);
        res.status(500).json({ message: "Server error" });
    }
};

const accountDetails = async (req, res) => {
    try {
        const userId = req.user.id;

        const userDetails = await User.findById(userId).select("-hash");//it means exclude password

        if (!userDetails) {
            return res.status(400).json({ message: "User does not exitst" })
        }

        const totalDonation = await Donation.countDocuments({
            donatedBy: userId,
            status: "completed"
        })

        const latestDonation = await Donation.findOne({
            donatedBy: userId,
            status: "completed"
        }).sort({ donationDate: -1 });

        const stats = calculateProgressHelper(latestDonation ? latestDonation.donationDate : null);

        const userData = {
            userDetails,
            totalDonation,
            stats: {
                ...stats,
                lastDonationDate: latestDonation ? latestDonation.donationDate : null
            }
        }

        return res.status(200).json(userData)
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json({ message: "Server error" })
    }

}







const getDonationHistory = async (req, res) => {
    try {
        const userId = req.user.id;
        const history = await Donation.find({ donatedBy: userId })
            .sort({ donationDate: -1 })
            .populate('donatedTo', 'name email'); 

        // Debug log
        console.log(`History for user ${userId}:`, history);
        res.status(200).json(history);
    } catch (error) {
        console.log("Error fetching history:", error);
        res.status(500).json({ message: "Server error" });
    }
};

export { accountDetails, getDonationHistory, calculateProgress };
