import Request from "../models/request.model.js";

const createRequest = async (req, res) => {
  try {
    const {
      patientName,
      bloodGroup,
      condition,
      hospitalName,
      unit,
      reason,
      address,
    } = req.body;
    console.log("Body", req.user);
    

    if (
      !patientName ||
      !bloodGroup ||
      !condition ||
      !hospitalName ||
      !unit ||
      !reason ||
      !address
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const now = new Date();
    const expiresAt = new Date(now.getTime() + 24 * 60 * 60 * 1000);

    const request = await Request.create({
      patientName,
      bloodGroup,
      condition,
      hospitalName,
      unit,
      reason,
      address,
      expiresAt,
      requester: req.user.id,
    });

    return res.status(200).json({
      success: true,
      message: "Request has been created",
      request,
    });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export { createRequest };
