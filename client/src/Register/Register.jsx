import React, { useState } from "react";
// import appleLogo from "../Images/AppleLogo.png";
// import Facebook from "../Images/FacebookWhite.png";
// import Google from "../Images/googleLogo.png";
import "./Register.css";
function Register() {
    const [RegisterData,setRegisterData] = useState({})
    const handleInput = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setRegisterData({...RegisterData,[name]:value})
    }
    const handleInputData = async(e)=>{
        e.preventDefault();
        const{name,email,phone,occupation,gender,password,Cpassword} = RegisterData;
        // console.log(name,email,phone,occupation,gender,password,Cpassword)
        try{
            const res = await fetch("/register",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({name,email,phone,occupation,gender,password,Cpassword})
            })
            const Data = await res.json()
            console.log(Data)
            alert(Data.message)
        } catch(err){
            console.log(err)
        }
    }
  return (
    <div className="RegisterContainer">
      <div className="Register">
        <h1>Register to Your Account</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
          accusantium
          <br /> vitae sequi exercitationem nesciunt adipisci?
        </p>
        <div className="RegisterForm">
          <form action="" method="POST">
            {/* <h1>Register Details</h1> */}
            <input type="text" placeholder="Enter Username" name="name" id="RegisterInput" onChange={handleInput} />
            <br />
            <input type="text" placeholder="Enter Email ID" name="email" id="RegisterInput" onChange={handleInput} />
            <br />
            <input type="text" placeholder="Phone Number" name="phone" id="RegisterInput" onChange={handleInput} />
            <br />
            <input type="text" placeholder="Occupation" name="occupation" id="RegisterInput" onChange={handleInput} />
            <br />
            <select name="gender" placeholder="Gender" id="RegisterInput" onChange={handleInput} >
                <option value="">Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
            </select>
            <br/>
            <input type="text" placeholder="Password" name="password" id="RegisterInput" onChange={handleInput} />
            <br />
            <input type="text" placeholder="Confirm Password" name="Cpassword" id="RegisterInput" onChange={handleInput} />
            <br />
            <br />
            <input type="submit" value="Register Your Account" id="submitBTN" onClick={handleInputData}/>
          </form>
        </div>
        </div>
    </div>
  );
}

export default Register;
