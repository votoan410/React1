import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavComponent = ({ name }) => {
  const [count, setCount] = useState(" useState Val ");

  return (
    <div className="navigation">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 text-center">
            <div className="logo">
              <a>
                <Link to="/">
                  {" "}
                  <img src="images/logo.svg" />
                </Link>
              </a>
            </div>
          </div>
          <div className="col-xs-11 col-sm-11 col-md-11 col-lg-11 text-right">
            <div className="primary-nav">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/porfolio">Porfolio</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavComponent;
