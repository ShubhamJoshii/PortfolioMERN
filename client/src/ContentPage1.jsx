import Data from "./AllData";
import arrowDown from "./Images/Arrowdown.gif";
import React from "react";
import { useState,useEffect } from "react";
import { MdDarkMode,MdLightMode } from "react-icons/md";

const ContentPage1 = () => {
  const [mode, setMode] = useState("darkmode")
  let NameText = "Shubham Joshi";
  let i = 0 , count = 0;
  useEffect(()=>{
    // window.location.reload(false);
    setInterval(() => {
      if (i < NameText.length) {
        document.getElementsByClassName("AutoType")[0].innerHTML += NameText[i];
        document.getElementsByClassName("AutotypeRemove")[0].style.display = "inline";
      }
      if (i === NameText.length) {
        document.getElementsByClassName("AutotypeRemove")[0].style.display = "none";
        if(count === 0){
          NameText = "Web Developer"
          document.getElementsByClassName("AutoType")[0].innerHTML="W";
          count++;
        }
        else{
          NameText = "Shubham Joshi";
          document.getElementsByClassName("AutoType")[0].innerHTML="S";
          count--;
        }
        i = 0;
      }
      i++;
    }, 400);
  },[])

  const modeChanger = ()=>{
    (mode === "darkmode") ? (setMode("lightmode")) : (setMode("darkmode"));
  }

  useEffect(()=>{
    document.body.classList = mode;
  },[mode])
  
  return (
    <>
      <div className="ContentPage1" id="home">
        <div className="modeChange" onClick={modeChanger}>
          {mode === "darkmode" ? <MdLightMode className="modesDarkLight" /> : <MdDarkMode  className="modesDarkLight" />}
        </div>
        <div>
          <img src={Data.MainPageImg} alt="Hello" id="FrontImg" />
        </div>
        <div className="First_second">
          <h2>Hi there! I'm</h2>
          <h1>
            {/* <span id="TextPara2">Shubham</span> Joshi{" "}
            Shubham Joshi */}
            <span className="AutoType" id="TextPara2"></span>
            <span className="AutotypeRemove" id="TextPara2">|</span>
          </h1>
          <h2>
            A <span id="TextPara3">Front-End Web Developer</span> passionate
            about creating interactive application and experiences on the web{" "}
          </h2>
        </div>
        <div className="slideBtn">
          <a href="#AboutMe">
            <img src={arrowDown} alt="Arrow Down" />
          </a>
        </div>
      </div>
    </>
  );
};

export default ContentPage1;