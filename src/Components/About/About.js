import React from "react";
// import axios from "axios";
import { Link } from "react-router-dom";
import "./About.css";
const About = () => {
  return (
    <div>
      <Link className="btn btn-light mx-1" to="/Home" Role="button">
        Back
      </Link>
      <h3 className="about">welcome to Skyspace Restaurant</h3>
      <p className="text">
        Skyscape Restaurant is a Professional food Platform. Here we will
        provide you authentic taste of multiple cuisine. We are dedicated
        towards the services we provide to the customers
      </p>
      <span className="msg">Have a great day!</span>
    </div>
  );
};

export default About;
