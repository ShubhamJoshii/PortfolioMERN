const express = require("express")
const mongoose = require("mongoose")
const cookieParser = require("cookie-parser")
const path = require("path");
const app = express();

// for taking existing Cookies from Frontend
app.use(cookieParser())
app.use(express.json());

const User = require("./Database")
app.use(require("./auth"))

app.use(express.static(path.resolve(__dirname,"client","build")));
app.get("/",(req,res)=>{
    console.log(path.resolve(__dirname,"client","build"))
    res.status(200).sendFile(path.resolve(__dirname,"client","build"));  
})

app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

app.listen("8000",()=>{
    console.log("Server Connected at 8000")
})