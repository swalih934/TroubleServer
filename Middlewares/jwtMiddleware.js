const jwt = require('jsonwebtoken')

// miidleware
const jwtMidlleware=(req,res,next)=>{
    console.log("inside jwtMidlleware");
    // get token from rq Header "Autherization key"
    const token = req.headers["authorization"].split(' ')[1]
    if(token){
        try{
            console.log(token);
        const jwtResponse=jwt.verify(token,process.env.JWT_PASSWORD)
        console.log(jwtResponse);
        req.userId=jwtResponse.userId
        next()
        }catch{
            res.status(401).json("please login!!!")
    
        }
    }else{
        res.status(406).json("Token Missing")
    }
    
}

module.exports=jwtMidlleware