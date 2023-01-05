import Data from "../../AllData";
import { FaExternalLinkAlt,FaGithub } from "react-icons/fa";
import "./Project.css"
const Projects = () => {
  return (
    <div className="ContentPage2">
      <h1>Projects</h1>
      <div className="ProjectSumm">
        {Data.Project.map((curr, id) => {
          return (
            <div className="ProjectSummInner" key={id}>
              <div className="ProjectImg">
                <a>
                  <img src={curr.Image} alt="Projects" id="projectImg" />
                  <div className="onhover">
                    <h2>{curr.text}</h2>
                    <p>{curr.para}</p>
                    <p>{curr.LanguageUse}</p>
                    <div id="onhoverLinks">
                      <a
                        href={curr.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {/* <img src={newPage} alt="" width="40px" /> */}
                        <FaExternalLinkAlt id="externalLink" />
                      </a>
                      <a href={curr.Github}>
                        <FaGithub  id="externalLink"/>
                      </a>
                    </div>
                  </div>
                </a>
              </div>
              <h2>{curr.text}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
