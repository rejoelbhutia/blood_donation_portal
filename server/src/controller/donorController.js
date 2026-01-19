import User from "../models/user.model.js"
import Donation from "../models/donation.model.js"



const calculateProgress = (lastDonationDate) => {
    if (!lastDonationDate) return { progress: 0, nextEligibleDate: null };

    const today = new Date();
    const lastDate = new Date(lastDonationDate);
    const nextEligibleDate = new Date(lastDate);
    nextEligibleDate.setDate(lastDate.getDate() + 90);

    const totalDuration = nextEligibleDate - lastDate;
    const elapsed = today - lastDate;

    let progress = Math.min(100, Math.max(0, (elapsed / totalDuration) * 100));

    // If eligible, progress should be 100
    if (today >= nextEligibleDate) {
        progress = 100;
    }

    return {
        progress: Math.round(progress),
        nextEligibleDate
    };
};

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

        const latestDonation = await Donation.findOne({
            donatedBy: userId,
            status: "completed"
        }).sort({ donationDate: -1 });

        const stats = calculateProgress(latestDonation ? latestDonation.donationDate : null);

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
        res.status(500).json({message : "Server error"})
    }

}







const getDonationHistory = async (req, res) => {
    try {
        const userId = req.user.id;
        const history = await Donation.find({ donatedBy: userId })
            .sort({ donationDate: -1 })
            .populate('donatedTo', 'name email'); // Optional: populate receiver details if needed

        res.status(200).json(history);
    } catch (error) {
        console.log("Error fetching history:", error);
        res.status(500).json({ message: "Server error" });
    }
};

export { accountDetails, getDonationHistory };
export default accountDetails; // Keeping default export for backward compatibility if any, but named exports are better