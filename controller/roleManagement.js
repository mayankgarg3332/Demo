const Roles = require("../models/roles");

exports.getRoles = async(req, res) => {
    try {
        const rolesData = await Roles.find();
        res.status(200).json({
            message: "data fetched successfully",
            data: rolesData
        })
    } catch (error) {
        return res.send(500).send({
            error: error.message,
            status: false
        })
    }
}