import MainPage from "./MainPage";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Header from "./Components/Header/header";
import PageNotFound from "./Components/pageNotFound/pageNotFound";
import { useState,useRef } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const App = () => {
    const [show, setShow] = useState(true);
    const AboutMe = useRef(null)
    const Home = useRef(null)
    return (
      <div className="container">
        <Router>
          <Header setShow={setShow} show={show} AboutMe={AboutMe} Home={Home}/>
          <Routes>
            <Route path="/" element={<MainPage AboutMe={AboutMe} Home={Home}/>} />
            <Route path="/login" element={<Login setShow={setShow}/>} />
            <Route path="/register" element={<Register />} />
            <Route  path='*' element={<PageNotFound />}/>
            {/* <Route path="/asfd" element={<PageNotFound />}/> */}
          </Routes>
        </Router>
      </div>
    );
};

export default App;
