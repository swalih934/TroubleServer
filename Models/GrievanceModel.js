const mongoose = require('mongoose')

const GrievanceSchema= new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    status:{
        type:String,
    },
    reply:{
        type:String
    },
    userId:{
        type:String,
        required:true
    }
})

const grievances=mongoose.model("grievances",GrievanceSchema)
module.exports=grievances