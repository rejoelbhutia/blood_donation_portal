import nm from "nodemailer";
import User from "../models/user.model.js";
import crypto from "crypto";
import { getPasswordResetTemplate } from "../utils/emailTemplate.js";
import dotenv from "dotenv";

dotenv.config();

const forgetPassword = async (req, res) => {
  const { email } = req.body;

  console.log(email);
  console.log(process.env.EMAIL_USER);
  console.log(process.env.EMAIL_PASS);

  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  const user = await User.findOne({ email: email });

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  const resetToken = crypto.randomBytes(32).toString("hex");
  const resetLink = `${process.env.CLIENT_URL}reset-password/${resetToken}`;

  user.resetPasswordToken = resetToken;
  user.resetPasswordExpires = Date.now() + 15 * 60 * 1000; //15 min - 60 sec a minute - 1000 ms per sec

  await user.save({ validateBeforeSave: false }); //skips other required fields in model

  const transporter = nm.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER, // Sender address is required
      to: user.email,
      subject: "Password Reset Request",
      html: getPasswordResetTemplate(resetLink),
    });

    return res.status(200).json({ message: "Reset link sent successfully" });
  } catch (error) {
    console.log(error);
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;
    await user.save({ validateBeforeSave: false });

    return res.status(500).json({ message: "Something went wrong" });
  }
};

export { forgetPassword };
