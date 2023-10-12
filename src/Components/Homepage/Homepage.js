import React from "react";

import "./Homepage.css";
const Homepage = () => {
  return (
    <>
      <section id="hero">
        <div class="hero-container">
          <div className="hero-logo"></div>
          <h1> Welcome to Skyscape Restaurant</h1>
          <h2>Delight in every bite</h2>
          <div class="actions">
            <a href="/login" class="main-2">
              Login
            </a>
            <b> </b>
            <a href="/register" class="main-1">
              Register
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Homepage;
