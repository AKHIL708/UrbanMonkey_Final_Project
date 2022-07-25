import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="FooterSection">
      <div className="one">
        <div className="FooterHeading">
          <h3>ABOUT</h3>
        </div>
        <div className="text">
          <p>Contact Us</p>
          <p>About us</p>
          <p>What Are We</p>
          <p>Career</p>
          <p>Urbanmonkey Stories</p>
          <p>Wholesale</p>
          <p>Corporate</p>
        </div>
      </div>

      {/* second section  */}
      <div className="one">
        <div className="FooterHeading">
          <h3>HELP</h3>
        </div>
        <div className="text">
          <p>Payments</p>
          <p>Shipping</p>
          <p>Cancellation </p>
          <p>Returns</p>
          <p>Information</p>
          <p>FAQ</p>
          <p>Report</p>
        </div>
      </div>
      <div className="mysection">
        <div className="accounts">
          <h1> My Accounts </h1>
        </div>
        <div className="socialAccounts">
          <a href="https://www.instagram.com/akhil.b_u/">
            {" "}
            <FaInstagram className="iconOne" />
          </a>
          <a href="https://www.linkedin.com/feed/">
            {" "}
            <FaLinkedin className="iconTwo" />
          </a>
          <a href="https://github.com/">
            {" "}
            <FaGithub className="iconThree" />
          </a>
        </div>
      </div>
    </div>
  );
}
