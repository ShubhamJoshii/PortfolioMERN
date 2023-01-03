import Data from "./AllData";
// import "aos/dist/aos.css"
import newPage from "./Images/NewPage.png";
import github from "./Images/github.png";

const ContentPage2 = () => {
  // console.log(Data.Project.LanguageUse[0])
  return (
    <div className="ContentPage2">
      <h1>Projects</h1>
      <div className="ProjectSumm">
        {Data.Project.map((curr, id) => {
          return (
            <div className="ProjectSummInner" key={id}>
              <div className="ProjectImg">
                <a>
                  <img src={curr.Image} alt="" id="projectImg" />
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
                        <img src={newPage} alt="" width="40px" />
                      </a>
                      <a href={curr.Github}>
                        <img src={github} alt="" width="40px" />
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

export default ContentPage2;
