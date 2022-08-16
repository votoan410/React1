import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavComponent from "./NavComponent";

const Contact = ({ name, phone, email }) => {
  const [count, setCount] = useState(" useState Val ");

  return (
    <>
      {/* Navigation Bar */}
      {/* <div className="navigation">
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
      </div> */}
      <NavComponent />
      <div className="contact">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12 col-md-12 text-center">
              <div className="contact-header">
                <h1>Contact</h1>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-12 text-center">
              <div className="contact-header-quote">
                <h4>{name}</h4>
                <h4>-{phone}</h4>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 col-md-6">
              <div className="contact-instructions">
                <h2>Reaching out to me</h2>
                <p>
                  Don't be afraid to contact me! I'm happy to answer any
                  questions, provide more information, or just have a nice
                  conversation! Fill out the form below to being reaching out to
                  me. If you prefer another email client other than your
                  default, which will appear after clicking the button and have
                  all of the information you just entered, you can email me at
                  {email}.
                </p>
                <br />
                <br />
                <br />
                <h2>Contact Information</h2>
                <p>{name}</p>
                <p>{phone}</p>
                <p>{email}</p>
              </div>
            </div>
            <div className="col-sm-6 col-md-6">
              <div className="contact-form-body">
                <form>
                  <div className="row">
                    <div className="col-sm-6 col-md-6">
                      <div className="firstname">
                        <h4>Full Name *</h4>
                        <input type="text" placeholder="First Name" />
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-6">
                      <div className="lastname">
                        <h4>Full Name *</h4>
                        <input type="text" placeholder="Last Name" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12 col-md-12">
                      <div className="email">
                        <h4>Email *</h4>
                        <input type="text" placeholder="Email" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12 col-md-12">
                      <div className="message">
                        <h4>Message *</h4>
                        <textarea placeholder="Message" defaultValue={""} />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-4 col-md-4 col-sm-offset-4 col-md-offset-4">
                      <div className="submit-contact">
                        <a className="btn btn-default btn-border" href="#">
                          Submit
                        </a>
                      </div>
                    </div>
                  </div>
                </form>
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
                <h4>Phone: {phone}</h4>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 text-left">
              <div className="personal-contact email-personal-contact">
                <h4>Email: {email}</h4>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4 col-md-4 text-center">
              <div className="company-information">
                <h3>{name}</h3>
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

export default Contact;
