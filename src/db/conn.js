const mongoose  = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Portfolio",{
    useNewUrlParser:true
}).then(()=>{
    console.log("Connection Successfull")
}).catch(()=>{
    console.log("No connection")
})

