const grievances = require('../Models/GrievanceModel')

// all Grievances
exports.getallGrievancesAdminController = async (req, res) => {
    console.log("inside getallGrievancesAdminController");
    try {
        const allGrievancesHero = await grievances.find();
        res.status(200).json(allGrievancesHero);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error', error: err.message });
    }
};

// update reply
exports.updateReplyController = async (req, res) => {
    const { gid } = req.params;  // Get the grievance ID from the URL
    const { reply } = req.body;

    try {
        const updatedGrievance = await grievances.findByIdAndUpdate(gid, { reply }, { new: true });
        if (!updatedGrievance) {
            return res.status(404).json({ message: "Grievance not found" });
        }

        res.status(200).json(updatedGrievance);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error" });
    }
};


// update status
exports.updateStatusController = async (req, res) => {
    const { gid } = req.params;  // Get the grievance ID from the URL
    const { status } = req.body;

    try {
        const updatedStatus = await grievances.findByIdAndUpdate(gid, { status }, { new: true });
        if (!updatedStatus) {
            return res.status(404).json({ message: "Grievance not found" });
        }

        res.status(200).json(updatedStatus);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error" });
    }
};


    

