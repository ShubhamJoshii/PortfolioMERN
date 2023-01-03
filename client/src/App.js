import Login from "./Login/Login";
import Logout from "./logout";
import Register from "./Register/Register";
import MainPage from "./MainPage";
import Header from "./header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {

    return (
      <div className="container">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Router>
      </div>
    );
};

export default App;
