const express = require("express")
const mongoose = require("mongoose")
const path = require("path");
const app = express();

app.use(express.json());
const User = require("./Database")
app.use(require("./auth"))

app.get("/",(req,res)=>{
    console.log(path.resolve(__dirname,"client","build"))
    app.use(express.static(path.resolve(__dirname,"client","build")));
    res.status(200).sendFile(path.resolve(__dirname,"client","build"));  
})

app.listen("8000",()=>{
    console.log("Server Connected at 8000")
})