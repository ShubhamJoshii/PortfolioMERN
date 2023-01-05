import Data from "./AllData";
import { useState } from "react";
const Footer = () => {
  // let TimeAndDate = new Date();
  // let dates = TimeAndDate.toLocaleTimeString();

  // const [timing, setTiming] = useState(dates);
  // setInterval(() => {
  //   dates = new Date().toLocaleTimeString();
  //   setTiming(dates);
  // }, 1000);
  return (
    <>
      <footer>
        <div className="footer_First LogoColorChange">sj</div>
        <div id="LineOuter">
          <div className="lines"></div>
        </div>
        <div className="footer_Second LogoColorChange">Shubham</div>
        <div id="LineOuter">
          <div className="lines"></div>
        </div>
        <div className="footer_Third">
        {/* LogoColorChange */}
          {Data.SocialLogo.map((curr, id) => {
            return (
              <a href={curr.link} key={id} target="_blank" rel="noopener noreferrer" id="SocialImg">
                <img src={curr.logo} alt="SocialImg" width="40px" />
              </a>
            );
          })}
        </div>
      </footer>
      <div className="DateFooter">
          <p>TERMS & CONDITIONS PRIVACY POLICY</p>
          <p id="lastUpdate">Last Update 05 January 2023</p>
          <p>Copyright 2022 ©️ Shubham Joshi.{/* {timing} | */}</p>
      </div>
    </>
  );
};
export default Footer;
