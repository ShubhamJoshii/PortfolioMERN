import Login from "./Login/Login";
import Logout from "./logout";
import Register from "./Register/Register";
import MainPage from "./MainPage";
import Header from "./header";
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
            <Route path="/logout" element={<Logout />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Router>
      </div>
    );
};

export default App;
