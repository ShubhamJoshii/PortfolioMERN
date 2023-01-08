import React, { useState } from "react";
import { useEffect } from "react";
import Data from "../../AllData";
import {FaArrowUp} from "react-icons/fa";
import "./About.css"
const AboutPage = () => {
  // let i = TopicData.Skills;
  const [Count, setCount] = useState(0);
  
  let TopicArr = [
    Data.TopicData.Skills,
    Data.TopicData.Experience,
    Data.TopicData.Education,
  ];
  useEffect(()=>{
    let a = document.getElementsByClassName('OverviewBtn');
    (Count === 0) ? (a[0].id="OverviewBtn") : (a[0].id="");
    (Count === 1) ? (a[1].id="OverviewBtn") : (a[1].id="");
    (Count === 2) ? (a[2].id="OverviewBtn") : (a[2].id="");
  },[Count]);
  
  // console.log(Data.TopicData);
  return (
    <div className="ContentPage3" id="AboutMe">
      <div className="Page3First">
        <img src={Data.Shubham2} alt="ImageMain" />
      </div>
      <div className="Page3Second">
        <div className="Page3Fixed">
          <h1>About Me</h1>
          <p id="AboutPara">
            I'm a Front End Developer from Delhi,India.Currently, I enrolled in
            BCA-hons Course at Vivekananda Institute of Professional Studies of
            Guru Gobind Singh Indraprastha University. I enjoy taking complex
            problems and turning them into simple and beautiful interface
            designs. I also love the logic and structure of coding and always
          </p>
        </div>
        <div className="Page3FixedSec">
          <button
            onClick={() => {
              setCount(0);
            }}
          >
            <div className="OverviewBtn">
              Skills
            </div>
          </button>
          <button
            id="Btn2"
            onClick={() => {
              setCount(1);
              document.getElementsByClassName(
                "lineSkillsColor"
              )[0].style.display = "none";
              
            }}
          >
          <div className="OverviewBtn">
            Experience
            </div>
          </button>
          <button
            onClick={() => {
              setCount(2);
              document.getElementsByClassName("lineSkillsColor")[0].style.display = "none";
            }}
          >
          <div className="OverviewBtn">
            Education
            </div>
          </button>
          <div className="SkillsPage3">
            {TopicArr[Count].map((Curr) => {
              return (
                <>
                  <p id="topic" className="topic">
                    {Curr.Topic}
                  </p>
                  <p className="subtopic">
                    {Curr.SubTopic}

                    <div className="SkillsOnHover" id="SkillsOnHover">
                      <div className="triangle"></div>
                      <div className="SkillsDisplay">
                        <div>
                          <div className="SkillsDisplayTopic">
                            <div>{Curr.HoverTopic1}</div>
                            <div id="HoverSkillsPerc">{Curr.HoverTopic1Perc}</div>
                          </div>
                          <div id="SkillsLine">
                            <div
                              className="SkillsLineInner"
                              style={{ width: Curr.HoverTopic1Perc }}
                            ></div>
                          </div>
                        </div>
                        <div>
                          <div className="SkillsDisplayTopic">
                            <div>{Curr.HoverTopic2}</div>
                            <div id="HoverSkillsPerc">{Curr.HoverTopic2Perc}</div>
                          </div>
                          <div id="SkillsLine">
                            <div
                              className="SkillsLineInner"
                              style={{ width: Curr.HoverTopic2Perc }}
                            ></div>
                          </div>
                        </div>
                        <div>
                          <div className="SkillsDisplayTopic">
                            <div>{Curr.HoverTopic3}</div>
                            <div id="HoverSkillsPerc">{Curr.HoverTopic3Perc}</div>
                          </div>
                          <div id="SkillsLine">
                            <div
                              className="SkillsLineInner"
                              style={{ width: Curr.HoverTopic3Perc }}
                            ></div>
                          </div>
                        </div>
                        <div>
                          <div className="SkillsDisplayTopic">
                            <div>{Curr.HoverTopic4}</div>
                            <div id="HoverSkillsPerc">{Curr.HoverTopic4Perc}</div>
                          </div>
                          <div id="SkillsLine">
                            <div
                              className="SkillsLineInner"
                              style={{ width: Curr.HoverTopic4Perc }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </p>
                </>
              );
            })}
          </div>
      </div>
      </div>
      <a href="#home" id="ToTopBtn">
          <FaArrowUp />
      </a>
    </div>
  );
};

export default AboutPage;