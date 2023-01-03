import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import appleLogo from "../Images/AppleLogo.png";
import Facebook from "../Images/FacebookWhite.png";
import Google from "../Images/googleLogo.png";
import "./Login.css";

function Login() {
    const [loginData,setLoginData] = useState({})
    let navigate = useNavigate();
    const handleInput = (e)=>{

        const name = e.target.name;
        const value = e.target.value;
        setLoginData({...loginData,[name]:value})
    }
    const handleInputData = async(e)=>{
        e.preventDefault()
        // console.log(loginData)
        const{email,password} = loginData;
        try{
            const res = await fetch("/login",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({email,password})
            })
            const Data = await res.json()
            alert(Data.message)
            navigate("/")
          } catch(err){
            alert("User Not Registered")
            navigate("/register")
            console.log(err)
        }
    }
  return (
    <div className="LoginContainer">
      <div className="login">
        <h1>Login to Your Account</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
          accusantium
          <br /> vitae sequi exercitationem nesciunt adipisci?
        </p>
        <div className="loginForm">
          <form action="" method="POST">
            <h1>Login Details</h1>
            <input type="text" placeholder="Enter Email ID" name="email" id="loginInput" onChange={handleInput} />
            <br />
            <input type="text" placeholder="Enter Password" name="password" id="loginInput" onChange={handleInput} />
            <br />
            <input type="submit" value="Sign in Your Account" id="submitBTN" onClick={handleInputData}/>
          </form>
          <div className="loginType">
            <div className="loginTypeDiv">
              <div>
                <img src={Google} alt="" width="20px" /> Sign in with Google
              </div>
            </div>
            <div className="loginTypeDiv">
              <div>
                <img src={Facebook} alt="" width="20px" /> Sign in with Facebook
              </div>
            </div>
            <div className="loginTypeDiv">
              <div>
                <img src={appleLogo} alt="" width="20px" /> Sign in with Apple
              </div>
            </div>
          </div>
        </div>
        <p id="forget">Forget Password?</p>
      </div>
    </div>
  );
}

export default Login;
