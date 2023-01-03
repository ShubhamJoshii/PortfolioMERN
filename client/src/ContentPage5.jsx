import Data from "./AllData";
// import Gmail from "./Images/GmailLogo.png";
// import Phone from "./Images/ContactPhone.png";
import Phone from "./Images/phone.png";
import Gmail from "./Images/Gmail.png";
import { useState,useEffect } from "react";

const ContentPage5 = () => {
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setContactData({ ...contactData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, message } = contactData;
    // console.log(name,email,message)
    const res = await fetch("/contactMessage",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({name, email, message})
    })
    const Data = await res.json();
    alert(Data.message)
    setContactData({message:" "})
  };

  const loadCookies = async ()=>{
    try {
      const res = await fetch("/contact",{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify()
      });
      const data = await res.json();
      setContactData({...contactData,name:data.name,email:data.email})
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(()=>{
    loadCookies()
  },[])

  return (
    <div className="ContentPage5" id="">
      <div className="Contact1">
        <h1>Contact Me</h1>
        <div className="Contact1Inner">
          <img
            src={Gmail}
            alt="GmailLogo"
            className="LogoColorChange"
            width="25px"
          />
          <h3>shubhamjoshii676@gmail.com</h3>
        </div>
        <div className="Contact1Inner">
          <img
            src={Phone}
            alt="PhoneLogo"
            className="LogoColorChange"
            width="25px"
          />
          <h3>880024****</h3>
        </div>
        <div className="ContactSocialLogo">
          {/* LogoColorChange */}
          {Data.SocialLogo.map((curr, id) => {
            return (
              <a
                href={curr.link}
                key={id}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={curr.logo} alt="Social Logo" width="40px" />
              </a>
            );
          })}
        </div>
        <button>
          <a href={Data.resume} id="CVdownload" rel="noopener noreferrer">
            Download CV
          </a>
        </button>
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
          <button type="submit" onClick={handleSubmit}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContentPage5;
