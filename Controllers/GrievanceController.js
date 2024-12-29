const grievances=require('../Models/GrievanceModel')

// add-project

exports.addGrievancesController= async(req,res)=>{
    console.log("inside addGrievancesController");
    console.log(req.body);
    console.log(req.userId);
    // res.status(200).json("Add gievance request recieved!!!")

    const{title,description,status,reply=""}=req.body;
    const newGrievance= new grievances({
        title,
        description,
        status,
        reply,
        userId:req.userId
    })
    await newGrievance.save()
    res.status(200).json(newGrievance)
}

// all Grievances
exports.getallGrievancesController = async (req, res) => {
    console.log("inside allGrievancesController");
    const userId = req.userId;
    try {
        const allGrievances = await grievances.find({ userId });
        res.status(200).json(allGrievances);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error', error: err.message });
    }
};

// resolved history
exports.getResolvedHistoryController=async(req,res)=>{
    console.log("inside getResolvedHistoryController");
    const userId = req.userId;
    try{
        const resolvedGrievances=await grievances.find({userId:userId,status:"resolved"})
        res.status(200).json(resolvedGrievances);
    }catch(err){
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error', error: err.message });
    }
    
}


// remove Grievance
exports.removeGrievanceController=async(req,res)=>{
    console.log("inside removeGrievanceController");
    const {gid}= req.params
    try{
        const removeGrievnace= await grievances.findByIdAndDelete({_id:gid})
        res.status(200).json(removeGrievnace)

    }catch(err){
        res.status(401).json(err)
    }
}

// view Reply
exports.viewReplyController=async(req,res)=>{
    console.log("inside viewReplyController");
    const {gid}=req.params
    try{
        const viewReply= await grievances.findById({_id:gid})
        res.status(200).json(viewReply)
    }catch(err){
        res.status(401).json(err)
    }
    
}
