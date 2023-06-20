const express = require("express");
const cors = require("cors");
const app = express();
const user = require("./model/register");
require("./db/conn");
app.use(express.json());

app.use(
  cors({
    credentials: true,
    origin: ['https://itsmyportfolio-3k11.onrender.com'],
    methods: ['POST', 'GET'],
    allowedHeaders: ["Content-Type", "Authorization"]
  }))


app.get("/",(req, res)=>{
    res.send("Hello World");
})
app.post("/addmessage" ,async (req,res)=>{
  res.header('Access-Control-Allow-Origin', `https://itsmyportfolio-3k11.onrender.com`);
  try{
    const {name , email,message}= req.body;
    if(!email || !name ,!message){
      console.log("error in add Notes Page");
      return res.status(401).json({ message: "Please fill in all the fields." });
    }
    const userExist  =await  user.findOne({email});
    if(userExist){
      await userExist.addMessage(message);
      // dataExist.messages.push({ title: title, message: message });
      await userExist.save();
    }
    else{
      const newMessage = new user({ name,email });
      // newNote.messages.push({ title: title, message: message });
      await newMessage.addMessage(message);
      await newMessage.save();
    }
    res.status(201).json({ message: "Message saved successfully." });
  }
catch(err){
  console.log(err);
  res.status(500).json({ err });
}
  

})
app.listen(8000 , ()=>{
  console.log("Listening on the port number 8000");
}
)