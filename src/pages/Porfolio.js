import React, { useState } from "react";
import { Link } from "react-router-dom";

const Porfolio = ({ name, phone }) => {
  const [count, setCount] = useState(" useState Val ");

  return (
    <>
      <div className="navigation">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 text-center">
              <div className="logo">
                <a href="index.html">
                  <img src="images/logo.svg" />
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
      <div className="projects">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12 col-md-12 text-center">
              <div className="projects-header">
                <h1>Projects and Portfolio</h1>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-12 text-center">
              <div className="projects-header-quote">
                <h3>Sharing my endeavors and passions...</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4 col-md-4 text-center">
              <div className="luvtalk-project">
                <h3>LUV TALK Website</h3>
                <p>
                  Website, created during my first internship, which utilized
                  HTML, CSS, PHP, Ajax, Javascript/jQuery, and Wordpress.
                </p>
                <div className="row">
                  <div className="col-sm-4 col-md-4 col-sm-offset-4 col-md-offset-4">
                    <div className="project-more-info">
                      <a className="btn btn-default btn-border" href="#">
                        More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4 col-md-4 text-center">
              <div className="personal-website-project">
                <h3>Personal Website</h3>
                <p>
                  Enjoyable side project that was created to experiment with
                  more HTML and CSS, but also provided an outlet to showcase my
                  abilities and interests.
                </p>
                <div className="row">
                  <div className="col-sm-4 col-md-4 col-sm-offset-4 col-md-offset-4">
                    <div className="project-more-info">
                      <a className="btn btn-default btn-border" href="#">
                        More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4 col-md-4 text-center">
              <div className="strike-zone-project">
                <h3>Strike Zone Analysis</h3>
                <p>
                  Data analytics project completed during my time at the
                  Illinois Math and Science Academy which studied the baseball
                  strike zone based on the state of the game.
                </p>
                <div className="row">
                  <div className="col-sm-4 col-md-4 col-sm-offset-4 col-md-offset-4">
                    <div className="project-more-info">
                      <a className="btn btn-default btn-border" href="#">
                        More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-2 col-md-2 col-sm-offset-5 col-md-offset-5">
              <div className="see-more-button">
                <a className="btn btn-default btn-border" href="#">
                  More Projects
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer content */}
      <div className="footer">
        <div className="container-fluid">
          <div className="row">
            <div className="media-links">
              <div className="col-sm-1 col-md-1 col-sm-offset-4 col-md-offset-4">
                <div className="facebook">
                  <a href="#">
                    <img
                      className="img-responsive"
                      src="./images/facebook.svg"
                    />
                  </a>
                </div>
              </div>
              <div className="col-sm-1 col-md-1">
                <div className="linkedin">
                  <a href="#">
                    <img
                      className="img-responsive"
                      src="./images/linkedin.svg"
                    />
                  </a>
                </div>
              </div>
              <div className="col-sm-1 col-md-1">
                <div className="pinterest">
                  <a href="#">
                    <img
                      className="img-responsive"
                      src="./images/pinterest.svg"
                    />
                  </a>
                </div>
              </div>
              <div className="col-sm-1 col-md-1">
                <div className="email-icon">
                  <a href="#">
                    <img className="img-responsive" src="./images/email.svg" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 col-md-6 text-right">
              <div className="personal-contact phone">
                <h4>Phone: XXXXXX</h4>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 text-left">
              <div className="personal-contact email-personal-contact">
                <h4>Email: XXXXX@gmail.com</h4>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4 col-md-4 text-center">
              <div className="company-information">
                <h3>XXXX</h3>
                <h4>Copyright © 2021</h4>
                <h4>NY</h4>
              </div>
            </div>
            <div className="col-sm-2 col-md-2 text-center">
              <div className="home-footer">
                <h4>
                  <a href="#">Home</a>
                </h4>
              </div>
            </div>
            <div className="col-sm-2 col-md-2 text-center">
              <div className="portfolio-footer">
                <h4>
                  <a href="#">Portfolio</a>
                </h4>
                <ul>
                  <li>
                    <a href="#">Project1</a>
                  </li>
                  <li>
                    <a href="#">Project2</a>
                  </li>
                  <li>
                    <a href="#">Project3</a>
                  </li>
                  <li>
                    <a href="#">See All</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-2 col-md-2 text-center">
              <div className="resume-footer">
                <h4>
                  <a href="#">Resume</a>
                </h4>
                <ul>
                  <li>
                    <a href="#">Download</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-2 col-md-2 text-center">
              <div className="contact-footer">
                <h4>
                  <a href="#">Contact</a>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Porfolio;
