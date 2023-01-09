import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Data from "../../AllData";
import "./Header.css";
const Header = ({setShow,show}) => {
  // const [show, setShow] = useState(true);
  const [userName, setUserName] = useState("UN");
  let navigate = useNavigate();

  const signinOUT = () => {
    show === true ? navigate("/login") : logoutBtn();
    setShow(!show);
  };
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
        window.location.reload(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const userDP = (name) => {
    const x = name
      .split(" ")
      .map((x) => x[0])
      .join("");
    return x;
  };
  const userData = async () => {
    try {
      const res = await fetch("/home", {
        // method:"POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(),
      });
      const data = await res.json();
      const DPname = userDP(data.name);
      setUserName(DPname);
      setShow(false);
    } catch (err) {
      setShow(true);
    }
  };

  useEffect(() => {
    userData();
  }, []);

  return (
    <div className="Header">
      <h1>
        <a href="#home">SHUBHAM JOSHI</a>
      </h1>
      <ol className="Orderheader">
        <li onClick={() => navigate("/")}>Home</li>
        <li>About Us</li>
        <li>
          Contact
          <ul className="DropDown">
            {Data.SocialLogo.map((curr,index) => {
              return (
                <li key={index}>
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
            {Data.Project.map((curr, index) => {
              return (
                <li key={index}>
                  <a
                    href={curr.link}
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
        <li>
          <a href={Data.resume} target="_blank" rel="noopener noreferrer">
            Resume
          </a>
        </li>
      </ol>
      <div className="userDP">
        {userName}
        <div className="loginRegister">
          <h3 onClick={signinOUT}>{show === true ? "Sign in" : "Logout"}</h3>
          <h3 onClick={() => navigate("/register")}>Register</h3>
        </div>
      </div>
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

export default Header;
