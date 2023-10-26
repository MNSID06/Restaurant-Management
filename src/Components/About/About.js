import React from "react";
import Image from "./../Images/image-5.webp";
// import Images from "./../Images/image-4.jpeg";

// import axios from "axios";
import { Link } from "react-router-dom";
import "./About.css";
const About = () => {
  return (
    <div className="aboutus">
      <Link className="btn btn-light mx-1" to="/Home" Role="button">
        Back
      </Link>
      <h3 className="about">Welcome to Skyspace Restaurant</h3>
      <p className="text">
        <div className="content"></div>
        Skyscape Restaurant is a Professional food Platform. Here we will
        provide you authentic taste of multiple cuisine. We are dedicated
        towards the services we provide to the customers
      </p>
      {/* <div className="hero-logo">
        <img src={Image} alt="SKYSCAPE is busy" />
      </div> */}
      <p className="greetings">
        Thanks For Visiting Our Site
        <br />
        <span className="msg">Have a great day!</span>
      </p>
    </div>
  );
};

export default About;
