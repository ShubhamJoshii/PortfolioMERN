import Data from "../../AllData";
// import Gmail from "../Images/GmailLogo.png";
// import Phone from "../Images/ContactPhone.png";
// import Phone from "../Images/phone.png";
import resume from "../../Images/Resume_ShubhamJoshi.pdf";
import { useState, useEffect } from "react";
// import {Data} from "../../AllData"
import "./Contact.css";
const Contact = () => {
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const contactNumber = Data.contactNumber.substring(0, 6) + "****";
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setContactData({ ...contactData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, message } = contactData;
    // console.log(name,email,message)
    try {
      const res = await fetch("/contactMessage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });
      const Data = await res.json();
      alert(Data.message);
      setContactData({ message: " " });
    } catch (err) {
      alert("Plz Login for Sending Message");
    }
  };

  const loadCookies = async () => {
    try {
      const res = await fetch("/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(),
      });
      const data = await res.json();
      setContactData({ ...contactData, name: data.name, email: data.email });
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    loadCookies();
  }, []);

  return (
    <div className="ContentPage5" id="">
      <div className="Contact1">
        <h1>Contact Me</h1>
        <div className="Contact1Inner">
          <img
            // src={Gmail}
            src="https://drive.google.com/uc?export=view&id=1fimdDrg9F-rfl1-0vE7WmTp2FQUe8WbK"
            alt="Gmail"
            className="LogoColorChange1"
            width="25px"
          />
          <h3>{Data.EmailID}</h3>
        </div>
        <div className="Contact1Inner">
          <img
            // src={Phone}
            src="https://drive.google.com/uc?export=view&id=1TzNyCn-y2mrd6OjAYpF2YWkIBKWeYpWq"
            alt="Contact"
            className="LogoColorChange1"
            width="25px"
          />
          <h3>{contactNumber}</h3>
        </div>
        <div className="ContactSocialLogo">
          {/* LogoColorChange1 */}
          {Data.SocialLogo.map((curr, id) => {
            return (
              <a
                href={curr.link}
                key={id}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={curr.logo} alt="SocialMedia" width="40px" />
              </a>
            );
          })}
        </div>
        <div id="Resume">
          <button id="ResumeInner1">
            <a
              href={Data.resume}
              id="CVdownload"
              target="_blank"
              rel="noopener noreferrer"
            >
              View CV
            </a>
          </button>
          <button id="ResumeInner2">
            <a
              href={resume}
              id="CVdownload"
              target="_blank"
              rel="noopener noreferrer"
              download={resume}
            >
              Download CV
            </a>
          </button>
        </div>
      </div>
      <div className="Contact2">
        <form action="" method="POST">
          <input
            type="text"
            placeholder="Your Name"
            name="name"
            value={contactData.name}
            onChange={handleInput}
          />
          <br />
          <input
            type="text"
            placeholder="Your Email"
            name="email"
            value={contactData.email}
            onChange={handleInput}
          />
          <br />
          <textarea
            name="message"
            id="MessageUser"
            cols="30"
            value={contactData.message}
            rows="10"
            placeholder="Your Message"
            onChange={handleInput}
          ></textarea>
          <br />
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
