const express = require("express")
const router = express.Router();

const User = require("./Database")


router.post("/contact",async (req,res)=>{
    const {name,email,message} = req.body;
    console.log(name,email,message);
    try{
        const userData = new User({name,email,message});
        await userData.save()
    }catch(err){
        console.log(err)
    }
})

module.exports = router;