import React from "react";
import "./pageNotFound.css";
import { useNavigate } from "react-router-dom";
import Not404 from "../../Images/404.jpg";
const PageNotFound = () => {
  let navigate = useNavigate();
  return (
    <div className="PageNotFound">
      <h2 id="error404">
        <img src="https://drive.google.com/uc?export=view&id=1gAulgfFBWr6sQt3hpGacXcRaTcRisQtF" alt="404_Error"/>{" "}
        {/* <img src={Not404} alt=""/> */}
      </h2>
      <h1>WE ARE SORRY, PAGE NOT FOUND!</h1>
      <p>
        THE PAGE YOU ARE LOOKING FOR MIGHT HAVE BEEN REMOVED OR HAD ITS NAME
        CHANGE OR IS TEMPORARILY UNAVAILABLE
      </p>
      <button
        id="formBtn"
        onClick={() => {
          navigate("/");
        }}
      >
        BACK TO HOMEPAGE
      </button>
    </div>
  );
};

export default PageNotFound;
