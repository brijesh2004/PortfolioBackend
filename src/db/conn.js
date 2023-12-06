const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://brijesh122004:portfolio2023@cluster0.5awcyfk.mongodb.net/Portfolio", {
    useNewUrlParser: true,
    useUnifiedTopology: true,  // Add this line to avoid deprecation warning
    retryWrites: true,         // Add this line to specify retryWrites
    w: 'majority'              // Add this line to specify write concern
}).then(() => {
    console.log("Connection Successful");
}).catch((error) => {
    console.log("Connection Failed:", error);
});

