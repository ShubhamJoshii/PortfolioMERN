import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {FaUserAlt,FaLock,FaEye,FaEyeSlash,FaPhoneAlt} from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { SiGmail} from "react-icons/si";

import "./Register.css";
function Register() {
  const [passwordshowBtn,setpasswordShowBtn] = useState(false)
  const [CpasswordShowBtn,setCasswordShowBtn] = useState(false)
  const [RegisterData, setRegisterData] = useState({});
  let navigate = useNavigate();
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setRegisterData({ ...RegisterData, [name]: value });
  };
  const handleInputData = async (e) => {
    e.preventDefault();
    const { name, email, phone, occupation, gender, password, Cpassword } =
      RegisterData;
    // console.log(name,email,phone,occupation,gender,password,Cpassword)
    if (
      password !== Cpassword ||
      password.length <= 8 ||
      Cpassword.length <= 8
    ) {
      alert("Password and Confirm should be same or greater than 8");
      document.getElementsByClassName(
        "RegisterInput"
      )[5].style.backgroundColor = "red";
      document.getElementsByClassName(
        "RegisterInput"
      )[6].style.backgroundColor = "red";
    } else {
      document.getElementsByClassName(
        "RegisterInput"
      )[5].style.backgroundColor = "rgb(42, 39, 39)";
      document.getElementsByClassName(
        "RegisterInput"
      )[6].style.backgroundColor = "rgb(42, 39, 39)";
      try {
        const res = await fetch("/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            phone,
            occupation,
            gender,
            password,
            Cpassword,
          }),
        });
        const Data = await res.json();
        // console.log(Data);
        alert(Data.message);
        if (Data.message === "User Registered") {
          navigate("/login");
        } else if (Data.message === "User Already Registered") {
          document.getElementsByClassName(
            "RegisterInput"
          )[1].style.backgroundColor = "red";
        }
      } catch (err) {
        console.log(err);
      }
    }
  };
  
  const passwordShow = ()=>{
    let a = document.getElementsByClassName("RegisterInput")[5];
    if(a.type === "password"){
      a.type="text";
      setpasswordShowBtn(true)
    }
    else{
      a.type="password";
      setpasswordShowBtn(false)
    }  
  }

  const ConfirmpasswordShow = () => {
    let a = document.getElementsByClassName("RegisterInput")[6];
    if (a.type === "password") {
      a.type = "text";
      setCasswordShowBtn(true)
    } else {
      a.type = "password";
      setCasswordShowBtn(false)
    }
  };
  
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
            <div className="registerInputDiv">
              <FaUserAlt />
              <input
                type="text"
                placeholder="Enter Username"
                name="name"
                className="RegisterInput"
                autoComplete="on"
                onChange={handleInput}
              />
            </div>
            <br />
            <div className="registerInputDiv">
              <SiGmail />
              <input
                type="text"
                placeholder="Enter Email ID"
                name="email"
                className="RegisterInput"
                autoComplete="off"
                onChange={handleInput}
              />
            </div>
            <br />
            <div className="registerInputDiv">
              <FaPhoneAlt />
              <input
                type="text"
                placeholder="Phone Number"
                name="phone"
                autoComplete="on"
                className="RegisterInput"
                onChange={handleInput}
              />
            </div>
            <br />
            <div className="registerInputDiv">
              <MdWork />
              <input
                type="text"
                placeholder="Occupation"
                name="occupation"
                autoComplete="on"
                className="RegisterInput"
                onChange={handleInput}
              />
            </div>
            <br />
            <div className="registerInputDiv">
              <FaUserAlt />
              <select
                name="gender"
                placeholder="Gender"
                className="RegisterInput"
                autoComplete="off"
                onChange={handleInput}
              >
                <option value="" className="optionGender">Gender</option>
                <option value="Male" className="optionGender">Male</option>
                <option value="Female" className="optionGender">Female</option>
                <option value="Other" className="optionGender">Other</option>
              </select>
            </div>
            <br />
            <div className="registerInputDiv">
              <FaLock />
              <input
                type="password"
                placeholder="Password"
                name="password"
                autoComplete="off"
                className="RegisterInput"
                onChange={handleInput}
              />
              {passwordshowBtn === true ? <FaEye onClick={passwordShow} id="passwordShow" /> : <FaEyeSlash onClick={passwordShow} id="passwordShow"/>}
            </div>
            <br />
            <div className="registerInputDiv">
              <FaLock />
              <input
                type="password"
                placeholder="Confirm Password"
                name="Cpassword"
                autoComplete="off"
                className="RegisterInput"
                onChange={handleInput}
              />
              {CpasswordShowBtn === true ? <FaEye onClick={ConfirmpasswordShow} id="ConfirmpasswordShow"/> : <FaEyeSlash onClick={ConfirmpasswordShow} id="ConfirmpasswordShow"/>}
            </div>
            <br />
            <br />
            <input
              type="submit"
              value="Register Your Account"
              id="submitBTN"
              onClick={handleInputData}
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
