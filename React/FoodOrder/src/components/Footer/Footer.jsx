import React from "react";
import "./Footer.css";
import { assets } from "../../assets/frontend_assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem voluptatibus quidem mollitia consectetur facilis aliquid perspiciatis
            culpa corporis veniam natus dolorum tempore ipsam, quam unde soluta eveniet aspernatur voluptates minus?
          </p>
          <div className="footer-social-icons">
            <img src={assets.twitter_icon} />
            <img src={assets.facebook_icon} />
            <img src={assets.linkedin_icon} />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91 9869694201</li>
            <li>contact@tomato.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2025 &copy; Tomato.com
      </p>
    </div>
  );
};

export default Footer;
