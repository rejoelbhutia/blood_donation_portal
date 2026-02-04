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


        const request = await Request.create(req.body);

        return res.status(200).json({
            success: true,
            message: "Request has been created",
            request
        })

  } catch (error) {
    console.error(error.message);
    return res.status(500).json({
        success: false,
        message: error.message,
    })
   }
};


export {createRequest};