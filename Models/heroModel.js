const mongoose= require('mongoose')

const heroSchema = new mongoose.Schema({
    username:{
        type: String,
        required:true
    },
    password:{
        type: String,
        required:true
    },
})

const heros=mongoose.model("heros",heroSchema)

module.exports=heros