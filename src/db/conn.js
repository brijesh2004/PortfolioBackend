const mongoose  = require("mongoose");

mongoose.connect("mongodb+srv://brijesh122004:portfolio2023@cluster0.5awcyfk.mongodb.net/?retryWrites=true&w=majority/Portfolio",{
    useNewUrlParser:true
}).then(()=>{
    console.log("Connection Successfull")
}).catch(()=>{
    console.log("No connection")
})

