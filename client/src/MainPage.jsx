import FrontPage from "./Components/FrontPage/FrontPage"
import Projects from "./Components/Projects/Projects"
import AboutPage from "./Components/AboutMe/AboutPage"
import Certificates from "./Components/Certificates/Certificates"
import Contact from "./Components/ContactUs/Contact"
import Footer from "./Components/Footer/Footer"
// import Header from "./Components/Header/header"
import React from 'react'

function MainPage({AboutMe,Home}) {
  return (
    <>
        <FrontPage Home={Home}/>
        <AboutPage AboutMe={AboutMe}/>
        <Projects />
        <Certificates />
        <Contact />
        <Footer />
    </>
  )
}

export default MainPage