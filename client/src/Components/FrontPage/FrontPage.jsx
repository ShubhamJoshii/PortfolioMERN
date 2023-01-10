import React from "react";
import Data from "../../AllData";
import { useState, useEffect } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
// import { FaArrowUp } from "react-icons/fa";
import TopBtn from "../../Images/ArrowTop.gif"
import "./FrontPage.css";
// import arrowDown from "../Images/Arrowdown.gif";

const FrontPage = () => {
  const [mode, setMode] = useState("darkmode");
  let NameText = "Shubham Joshi";
  let i = 0,
    count = 0;
  useEffect(() => {
    setInterval(() => {
      if (i < NameText.length) {
        document.getElementsByClassName("AutoType")[0].innerHTML += NameText[i];
        document.getElementsByClassName("AutotypeRemove")[0].style.display =
          "inline";
      }
      if (i === NameText.length) {
        document.getElementsByClassName("AutotypeRemove")[0].style.display =
          "none";
        if (count === 0) {
          NameText = "Web Developer";
          document.getElementsByClassName("AutoType")[0].innerHTML = "W";
          count++;
        } else {
          NameText = "Shubham Joshi";
          document.getElementsByClassName("AutoType")[0].innerHTML = "S";
          count--;
        }
        i = 0;
      }
      i++;
    }, 400);
  }, []);

  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  window.addEventListener("scroll", toggleVisible);

  const modeChanger = () => {
    mode === "darkmode" ? setMode("lightmode") : setMode("darkmode");
  };

  useEffect(() => {
    document.body.classList = mode;
  }, [mode]);

  return (
    <>
      <div className="ContentPage1" id="home">
        <div className="modeChange" onClick={modeChanger}>
          {mode === "darkmode" ? (
            <MdLightMode className="modesDarkLight" />
          ) : (
            <MdDarkMode className="modesDarkLight" />
          )}
        </div>
        <div>
          <img src={Data.MainPageImg} alt="Shubham Joshi" id="FrontImg" />
        </div>
        <div className="First_second">
          <h2>Hi there! I'm</h2>
          <h1>
            {/* <span id="TextPara2">Shubham</span> Joshi{" "}
            Shubham Joshi */}
            <span className="AutoType" id="TextPara2"></span>
            <span className="AutotypeRemove" id="TextPara2">
              |
            </span>
          </h1>
          <h2>
            A <span id="TextPara3">Front-End Web Developer</span> passionate
            about creating interactive application and experiences on the web{" "}
          </h2>
        </div>
        <div className="slideBtn">
          <a href="#AboutMe">
            <img
              src="https://drive.google.com/uc?export=view&id=1nIDoKl3rDhwxgjIBCRgbI9zHbB4smZ4_"
              alt="Arrow Down"
            />
            {/* <img src={arrowDown} alt="Arrow Down" /> */}
          </a>
        </div>
      </div>
      <a
        href="#home"
        onClick={scrollToTop}
        style={{ display: visible ? "inline" : "none" }}
        id="ToTopBtn"
      >
        {/* <img src={TopBtn} width="30px" alt="" /> */}
        <img src="https://drive.google.com/uc?export=view&id=1TI54KUgKlmw1qOEwnvPS6EwgjbsCU0bA" width="30px" alt="TopBtn" />
      </a>
    </>
  );
};

export default FrontPage;
