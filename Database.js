const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://Portfolio:n4dGNXL7Zac3dH6E@portfolio.nxlbqzh.mongodb.net/?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology : true
}).then(()=>{
    console.log("DataBase Connected")
})

const userSchema = new mongoose.Schema({
    // name:{
    //     type:String,
    //     require:true
    // },
    // email:{
    //     type:String,
    //     require:true
    // },
    // password:{
    //     type:String,
    //     require:true
    // },
    // Cpassword:{
    //     type:String,
    //     require:true
    // },
    // messages:[{
        name:{
            type:String,
            require:true
        },
        email:{
            type:String,
            require:true
        },
        message:{
            type:String,
            require:true
        }
    // }]
})

const User = new mongoose.model("userData",userSchema);


module.exports = User