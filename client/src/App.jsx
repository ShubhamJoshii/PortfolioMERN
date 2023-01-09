import MainPage from "./MainPage";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Header from "./Components/Header/header";
import PageNotFound from "./Components/pageNotFound/pageNotFound";
import { useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const App = () => {
    const [show, setShow] = useState(true);
    return (
      <div className="container">
        <Router>
          <Header setShow={setShow} show={show}/>
          <Routes>
            <Route path="/" element={<MainPage />} />
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
