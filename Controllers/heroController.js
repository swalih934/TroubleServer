const heros = require('../Models/heroModel')
const jwt = require('jsonwebtoken')

exports.herologinController = async(req,res)=>{
    console.log("inside login controller");
    // get user details from req body
    const {email,password}=req.body
    console.log(email,password);
    // chech email and password in user model
    try{
        
        const existingUser = await heros.findOne({email,password})
        if(existingUser){
            const token = jwt.sign({userId:existingUser._id},process.env.JWT_PASSWORD)
            // allow login
            res.status(200).json({
                user:existingUser,
                token
            })
        }else{
            // incorrect
            res.status(404).json("invalid email or password")
        }
    }catch(err){
        res.status(401).json(err)
    }
    
    
}