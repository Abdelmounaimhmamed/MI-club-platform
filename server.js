const express = require("express")
const bodyParser = require("body-parser")
const dotenv = require("dotenv")
dotenv.config()
const app = express() 
const Port = process.env.PORT || 3000 
const mongoose = require("mongoose")
const homeRoute = require("./routes/Home/home")

// db base connection : 
mongoose.connect(process.env.DB_URI).then(() => {
    console.log("--Db connected ")
}).catch(err => {  
    console.log(err.message)
})

// middlewares : 
app.use(express.json())
app.set("view engine" , "ejs")
app.use(express.static("./public/styles/"))

//routes : 
app.use("/" , homeRoute)




app.listen(Port , () => {
    console.log(`-- App running on Port ${Port}`);
    console.log(`http://localhost/${Port}`);
    console.log("....");
})