import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const activeStyle = {
    fontWeight: "bold",
    color: "orange",
  };
  return (
    <div className="headerLink"> <br />
      <nav className="nav">
        <NavLink className="text" activeStyle={activeStyle} to="/home">
          Home
        </NavLink>
        <NavLink className="text" activeStyle={activeStyle} to="/friends">
          Faculty
        </NavLink>
        <NavLink className="text" activeStyle={activeStyle} to="/about">
          About
        </NavLink>
        <NavLink className="text" activeStyle={activeStyle} to="/culture">
          Contact Us
        </NavLink>{" "}
        <div className="icon">
          <i class="fab fa-app-store"></i>
        </div>
        <div className="text">
        <h4>LearningCare</h4>
        </div>
      </nav>
    </div>
  );
};

export default Header;
