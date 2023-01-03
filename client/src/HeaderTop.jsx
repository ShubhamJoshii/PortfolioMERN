import Data from "./AllData";
import "./Header.css";
// import NavChanger from "./Images/NavChanger.png"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";
const HeaderTop = () => {
  const [show, setShow] = useState(true);
  let navigate = useNavigate();

  const logoutBtn = async () => {
    const res = await fetch("/logout", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="Header">
      <h1>
        <a href="#home">SHUBHAM JOSHI</a>
      </h1>

      <ol className="Orderheader">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#AboutMe">About Us</a>
        </li>
        <li>
          Contact
          <ul className="DropDown">
            {Data.SocialLogo.map((curr) => {
              return (
                <li>
                  <a href={curr.link} target="_blank" rel="noopener noreferrer">
                    <img src={curr.logo} alt="Logo" width="15px" /> {curr.text}
                  </a>
                </li>
              );
            })}
          </ul>
        </li>
        <li>
          Projects
          <ul className="DropDown">
            {Data.Project.map((curr, id) => {
              return (
                <li>
                  <a
                    href={curr.link}
                    key={id}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {curr.text}
                  </a>
                </li>
              );
            })}
          </ul>
        </li>
        {/* <li>
          <a href={Data.resume} target="_blank" rel="noopener noreferrer">
            Resume
          </a>
        </li> */}
        <div className="loginRegister">
          <button
            onClick={() => {
              show === true ? navigate("/login") : logoutBtn();
              show === true ? setShow(false):setShow(true)
            }}
          >
            {show === true ? "Sign in":"Logout"}
          </button>
          {/* // <button onClick={logoutBtn}>Logout</button> */}
          <button
            onClick={() => {
              navigate("/register");
            }}
          >
            Register
          </button>
        </div>
      </ol>
      <div className="burgerOuter">
        <div className="burger">
          <div className="BurgerLine"></div>
          <div className="BurgerLine"></div>
          <div className="BurgerLine"></div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
