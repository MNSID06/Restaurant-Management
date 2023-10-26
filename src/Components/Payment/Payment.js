import React from "react";
import { Link } from "react-router-dom";
import Image from "./../Images/home.jpg";
import "./Payment.css";
const Payment = () => {
  return (
    <div className="payment">
      <div>
        <h3 className="message">
          <b>Happy Ordering</b>
        </h3>
        <h3 className="message2">
          <b>Enjoy your Order!</b>
        </h3>
      </div>
      <Link
        className="btn btn-primary mx-auto"
        style={{ position: "fixed", left: "650px", top: "750px" }}
      >
        Return to Home
      </Link>
      <div>
        <img src={Image} alt="img" className="image" />
      </div>
    </div>
  );
};

export default Payment;
