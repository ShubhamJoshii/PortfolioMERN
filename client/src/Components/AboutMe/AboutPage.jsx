import React, { useState } from "react";
import { useEffect } from "react";
import Data from "../../AllData";
import "./About.css";
const AboutPage = ({AboutMe}) => {
  // let i = TopicData.Skills;
  const [Count, setCount] = useState(0);

  let TopicArr = [
    Data.TopicData.Skills,
    Data.TopicData.Experience,
    Data.TopicData.Education,
  ];
  useEffect(() => {
    let a = document.getElementsByClassName("OverviewBtn");
    Count === 0 ? (a[0].id = "OverviewBtn") : (a[0].id = "");
    Count === 1 ? (a[1].id = "OverviewBtn") : (a[1].id = "");
    Count === 2 ? (a[2].id = "OverviewBtn") : (a[2].id = "");
    // console.log(TopicArr[0][0].HoverTopic);
  }, [Count]);

  // console.log(Data.TopicData);
  return (
    <div className="ContentPage3" ref={AboutMe} id="AboutMe">
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
            <div className="OverviewBtn">Skills</div>
          </button>
          <button
            id="Btn2"
            onClick={() => {
              setCount(1);
            }}
          >
            <div className="OverviewBtn">Experience</div>
          </button>
          <button
            onClick={() => {
              setCount(2);
            }}
          >
            <div className="OverviewBtn">Education</div>
          </button>
          <div className="SkillsPage3">
            {TopicArr[Count].map((Curr, id) => {
              return (
                <div key={id}>
                  <p id="topic" className="topic">
                    {Curr.Topic}
                  </p>
                  <p className="subtopic">
                    {Curr.SubTopic}

                    <div className="SkillsOnHover" id="SkillsOnHover">
                      <div className="triangle"></div>
                      <div className="SkillsDisplay">
                        {Curr.HoverTopic.map((currSkill, ids) => {
                          return (
                            <div key={ids}>
                              <div className="SkillsDisplayTopic">
                                <div>{currSkill.Head}</div>
                                <div id="HoverSkillsPerc">{currSkill.Perc}</div>
                              </div>
                              <div id="SkillsLine">
                                <div
                                  className="SkillsLineInner"
                                  style={{ width: currSkill.Perc }}
                                ></div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
