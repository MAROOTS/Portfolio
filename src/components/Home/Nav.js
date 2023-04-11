import React, { useState } from "react";
import "./nav.css";
import {
  FaHome,
  FaUser,
  FaBriefcase,
  FaStar,
  FaPhone,
  FaTimes,
  FaAppStoreIos,
} from "react-icons/fa";

const Nav = () => {
  const [Toggle, showMenu] = useState(false);
  return (
    <header className="header">
      <nav className="nav container">
        <h3 className="nav_logo">Maroots</h3>

        <div className={Toggle ? "nav_menu show-menu" : "nav_menu"}>
          <ul className="nav_list grid">
            <li className="nav_item">
              <a href="#home" className="nav_link active-link">
                <FaHome className="nav_icon" />
                Home
              </a>
            </li>

            <li className="nav_item">
              <a href="#about" className="nav_link">
                <FaUser className="nav_icon" />
                About
              </a>
            </li>

            <li className="nav_item">
              <a href="#skills" className="nav_link">
                <FaUser className="nav_icon" />
                Skills
              </a>
            </li>

            <li className="nav_item">
              <a href="#services" className="nav_link">
                <FaBriefcase className="nav_icon" />
                Services
              </a>
            </li>

            <li className="nav_item">
              <a href="#portfolio" className="nav_link">
                <FaStar className="nav_icon" />
                Portfolio
              </a>
            </li>

            <li className="nav_item">
              <a href="#contact" className="nav_link">
                <FaPhone className="nav_icon" />
                Contact
              </a>
            </li>
          </ul>

          <FaTimes className="nav_close" onClick={() => showMenu(!Toggle)} />
        </div>
        <div className="nav_toggle" onClick={() => showMenu(!Toggle)}>
          <FaAppStoreIos />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
