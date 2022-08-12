import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
  useLocation,
} from "react-router-dom";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import MainPage from "./pages/MainPage";
import Contact from "./pages/Contact";
import Porfolio from "./pages/Porfolio";

const App = () => {
  const info = {
    name: "Test Name",
    phone: "832 234 5678",
    email: "vvv123@gmail.com",
  };
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate replace to="/main" />} />
          <Route
            path="/main"
            element={
              <MainPage
                name={info.name}
                phone={info.phone}
                email={info.email}
              />
            }
          />
          <Route
            path="/contact"
            element={
              <Contact name={info.name} phone={info.phone} email={info.email} />
            }
          />
          <Route
            path="/porfolio"
            element={
              <Porfolio
                name={info.name}
                phone={info.phone}
                email={info.email}
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
