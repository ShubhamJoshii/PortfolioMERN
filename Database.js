const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
const SECRET_KEY = "SHUBHAMJOSHIISGOODBOYQWERTYUIOP"
mongoose.connect("mongodb+srv://Portfolio:n4dGNXL7Zac3dH6E@portfolio.nxlbqzh.mongodb.net/?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology : true
}).then(()=>{
    console.log("DataBase Connected")
})

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    occupation:{
        type:String,
        require:true
    },
    phone:{
        type:Number,
        require:true
    },
    gender:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    Cpassword:{
        type:String,
        require:true
    },
    tokens:[{
        token:{
            type:String,
            require:true
        }
    }],
    messages:[{
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
    }]
})

userSchema.pre("save",async function(next){
    // console.log(this.password,"Pre")
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password,12) 
        this.Cpassword = await bcrypt.hash(this.Cpassword,12) 
        console.log(this)
    }
    next()
})

userSchema.methods.generateAuthToken = async function(){
    try{
        let token = jwt.sign({_id:this._id},SECRET_KEY)
        this.tokens = this.tokens.concat({token:token})
        await this.save()
        return token;
    }catch(err){
        console.log(err)
    }
}

userSchema.methods.addMessage =async function(name,email,message){
    console.log(name,email,message);
    try{
        this.messages = this.messages.concat({name,email,message})
        await this.save()
        return this.messages;
    }catch(err){
        console.log(err)
    }
} 

const User = new mongoose.model("userData",userSchema);


module.exports = User