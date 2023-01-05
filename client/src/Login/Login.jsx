import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaFacebookF,FaGoogle,FaApple,FaLock,FaEye,FaEyeSlash} from "react-icons/fa"
import { SiGmail} from "react-icons/si";
// import {GrMail} from "react-icons/gr";
import "./Login.css";
import { useEffect } from "react";

function Login({setShow}) {
  const [loginData, setLoginData] = useState({});
  // const [eye,setEye] = useState(<FaEyeSlash id="passwordShow"/>)
  const [eye,setEye] = useState(true)
  let navigate = useNavigate();
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setLoginData({ ...loginData, [name]: value });
  };
  const handleInputData = async (e) => {
    e.preventDefault();
    // console.log(loginData)
    const { email, password } = loginData;
    try {
      const res = await fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const Data = await res.json();
      alert(Data.message);
      if (Data.message === "User Login") {
        navigate("/");
        setShow(false)
        window.location.reload(false);
      }
    } catch (err) {
      alert("User Not Registered");
      
      navigate("/register");
      console.log(err);
    }
  };
  
  const passwordShow = ()=>{
    let a = document.getElementsByClassName("password")[0];
    if(a.type === "password"){
      a.type="text";
      setEye(false) 
    }
    else{
      a.type="password";
      setEye(true) 
    }  
  }
  
  useEffect(()=>{
    setShow(true)
  },[])

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
            <div className="loginInput_Div">
              <SiGmail />
              {/* <GrMail /> */}
              <input
                type="text"
                placeholder="Enter Email ID"
                name="email"
                className="loginInput"
                onChange={handleInput}
              />
            </div>
            <br />
            <div className="loginInput_Div">
              <FaLock />
              <input
                type="password"
                placeholder="Enter Password"
                name="password"
                className="loginInput password"
                autoComplete="on"
                onChange={handleInput}
              />
              {eye === true ? <FaEyeSlash onClick={passwordShow} id="passwordShow"/> : <FaEye onClick={passwordShow} id="passwordShow"/>}
              <br />
            </div>
            <input
              type="submit"
              value="Sign in Your Account"
              id="submitBTN"
              onClick={handleInputData}
            />
          </form>
          <div className="loginType">
            <div className="loginTypeDiv">
              <div>
                <FaGoogle id="loginTypeAwesome"/>
                Sign in with Google
              </div>
            </div>
            <div className="loginTypeDiv">
              <div>
                <FaFacebookF  id="loginTypeAwesome"/>
                Sign in with Facebook

              </div>
            </div>
            <div className="loginTypeDiv">
              <div>
                <FaApple  id="loginTypeAwesome"/>
                 Sign in with Apple
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
