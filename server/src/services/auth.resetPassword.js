import User from "../models/user.model.js";
import bcrypt from 'bcrypt';

const resetPassword = async (req, res) => {
    
    const { newPassword, token } = req.body;

    if (!newPassword) {
        return res.status(400).json({message : "Password cannot be empty"})
    }

    //Find user AND check if token is not expired ($gt means Greater Than)
    const user = await User.findOne({
        resetPasswordToken: token,
        resetPasswordExpires: { $gt: Date.now() } 
    });

    // FIX 1 (Crash Prevention): If no user found (or token expired), stop here.
    if (!user) {
        return res.status(400).json({ message: "Token is invalid or has expired." });
    }

    try {
        const hashedPassword = await bcrypt.hash(newPassword, 10);
        user.hash = hashedPassword;

        // FIX 3: Burn the token so it cannot be used again
        user.resetPasswordToken = undefined;
        user.resetPasswordExpires = undefined;

        await user.save(); 

        return res.status(200).json({message : "Password updated successfully"})

    } catch (error) {
        console.log(error);
        return res.status(500).json({message : `Error ${error}`})
    }
}

export default resetPassword;