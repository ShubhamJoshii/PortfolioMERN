import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import userLogo from "../Images/userLogo.png";
import lockLogo from "../Images/lockLogo.png";
import eyeOpen from "../Images/eyeOpen.png";
import eyeClose from "../Images/eyeClose.png";
import phone from "../Images/ContactPhone.png";
import workLogo from "../Images/WorkLogo.png";
import "./Register.css";
function Register() {
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
  const ConfirmpasswordShow = () => {
    let a = document.getElementsByClassName("RegisterInput")[6];
    let b = document.getElementById("ConfirmpasswordShow");
    if (a.type === "password") {
      a.type = "text";
      b.src = eyeOpen;
    } else {
      a.type = "password";
      b.src = eyeClose;
    }
  };

  const passwordShow = ()=>{
    let a = document.getElementsByClassName("RegisterInput")[5];
    let b = document.getElementById("passwordShow");
    if(a.type === "password"){
      a.type="text";
      b.src=eyeOpen;  
    }
    else{
      a.type="password";
      b.src=eyeClose;
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
            <div className="registerInputDiv">
              <img src={userLogo} alt="" width="20px" />
              <input
                type="text"
                placeholder="Enter Username"
                name="name"
                id="RegisterInput"
                className="RegisterInput"
                autoComplete="on"
                onChange={handleInput}
              />
            </div>
            <br />
            <div className="registerInputDiv">
              <img src={userLogo} alt="" width="20px" />
              <input
                type="text"
                placeholder="Enter Email ID"
                name="email"
                id="RegisterInput"
                className="RegisterInput"
                autoComplete="off"
                onChange={handleInput}
              />
            </div>
            <br />
            <div className="registerInputDiv">
              <img src={phone} alt="" width="20px" />
              <input
                type="text"
                placeholder="Phone Number"
                name="phone"
                id="RegisterInput"
                autoComplete="on"
                className="RegisterInput"
                onChange={handleInput}
              />
            </div>
            <br />
            <div className="registerInputDiv">
              <img src={workLogo} alt="" width="20px" />
              <input
                type="text"
                placeholder="Occupation"
                name="occupation"
                id="RegisterInput"
                autoComplete="on"
                className="RegisterInput"
                onChange={handleInput}
              />
            </div>
            <br />
            <div className="registerInputDiv">
              <img src={userLogo} alt="" width="20px" />
              <select
                name="gender"
                placeholder="Gender"
                id="RegisterInput"
                className="RegisterInput"
                autoComplete="off"
                onChange={handleInput}
              >
                <option value="">Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <br />
            <div className="registerInputDiv">
              <img src={lockLogo} alt="" width="18px" />
              <input
                type="password"
                placeholder="Password"
                name="password"
                id="RegisterInput"
                autoComplete="off"
                className="RegisterInput"
                onChange={handleInput}
              />
              <img
                src={eyeClose}
                alt=""
                width="20px"
                onClick={passwordShow}
                id="passwordShow"
              />
            </div>
            <br />
            <div className="registerInputDiv">
              <img src={lockLogo} alt="" width="18px" />
              <input
                type="password"
                placeholder="Confirm Password"
                name="Cpassword"
                autoComplete="off"
                id="RegisterInput"
                className="RegisterInput"
                onChange={handleInput}
              />
              <img
                src={eyeClose}
                alt=""
                width="20px"
                onClick={ConfirmpasswordShow}
                id="ConfirmpasswordShow"
              />
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
