const mongoose = require('mongoose')

const dbConnection = process.env.CONNECTION_STRING

mongoose.connect(dbConnection).then(res=>{
    console.log("mongoDB atlas connected succesfully connected with ts server");
}).catch(err=>{
    console.log("Connection failed");
    console.log(err);
})