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
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate replace to="/main" />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/porfolio" element={<Porfolio />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
