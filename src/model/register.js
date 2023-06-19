const mongoose = require("mongoose");

const userMessage = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    messages:[
     {
        message:{
            type:String,
        }
     }
    ]
})


userMessage.methods.addMessage = async function(message){
    try{
        this.messages= this.messages.concat({message});
        await this.save();
        return this.messages;
    }
    catch(err){
        console.log(err);
    }
}

const user = mongoose.model('user',userMessage);

module.exports = user;