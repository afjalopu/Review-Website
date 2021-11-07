import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    // Footer Section the Website 
    <div className="footer">
        <br />
      <a href="Home">Home</a>
      <a href="Friends">Faculty</a>
      <a href="About">About</a>
      <a href="Contact Us">Contact Us</a>

      <div className="socialmedia">
        <i class="fab fa-facebook"></i>
        <i class="fab fa-facebook-messenger"></i>
        <i class="fab fa-google-plus-g"></i>
        <i class="fab fa-whatsapp"></i>
      </div>
      <h5>&copy; All Rights Reserved by LearningCare</h5>
    </div>
  );
};

export default Footer;
