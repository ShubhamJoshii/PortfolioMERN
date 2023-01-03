const express = require("express")
const router = express.Router();
const User = require("./Database")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const Authenication = require("./Authenication")



router.post("/register", async (req, res) => {
    const {name,email,phone,occupation,gender,password,Cpassword} = req.body;
    if (!name || !email || !occupation || !gender || !phone  || !password || !Cpassword) {
      return res.send({ message: "Fill Form Properly" });
    }
    try {
      const userExist = await User.findOne({ email });
      if (!userExist) {
        const userData = new User({name,email,phone,occupation,gender,password,Cpassword});
        const data = await userData.save();
        res.send({ message: "User Registered" });
      } else {
        res.send({ message: "User Already Registered" });
      }
      // console.log(data);
    } catch (err) {
      res.send({ message: "User Not Registered" });
      console.log(err);
    }
  });


router.post("/login", async (req, res) => {
    try {
      const { email, password } = req.body;
      console.log(req.body);
      const userExist = await User.findOne({ email });
      const passwordMatch = await bcrypt.compare(password, userExist.password);
      const token = await userExist.generateAuthToken();
      console.log(token);
  
      //Cookies Sending
      res.cookie("jwtoken", token, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly: true,
      });
  
      if (passwordMatch) {
        // console.log(userData);
        res.status(200).send({ message: "User Login" });
      } else {
        res.status(422).send({ message: "User Password Not Match" });
      }
    } catch (err) {
      res.send({ message: "User not Registered" });
      console.log(err);
    }
});

router.post("/contact",Authenication,(req,res)=>{
    res.send(req.rootUser)
    // const 
})

router.post("/contactMessage",Authenication,async(req,res)=>{
    const {name,email,message}=req.body;
    // console.log(name,email,message)
    // console.log(req.rootUser)
    try{

        if(!name || !email || !message){
            res.send({message:"Write a Message"})
        }
        
        const userContact = await User.findOne({_id:req.userID});
        if(userContact){
            const userUpdate = await userContact.addMessage(name,email,message);
            await userContact.save()
            res.status(200).send({message:"Message send"})
        }
    } catch(err){
        console.log(err)
        res.send({message:"User Not Registered"})
    }
})

router.get("/home",Authenication,(req,res)=>{
    res.send(req.rootUser)
})

router.get("/logout", (req, res) => {
  res.clearCookie("jwtoken", { path: "/" });
  res.status(200).send("User Logout");
});


module.exports = router;