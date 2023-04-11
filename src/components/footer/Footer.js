import React from "react";
import {
  FaGithubAlt,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import "./footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_container container">
        <h1 className="footer_title">Maroots</h1>

        <ul className="footer_list">
          <li>
            <a href="#about" className="footer_link">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="footer_link">
              Projects
            </a>
          </li>
          <li>
            <a href="#testimonials" className="footer_link">
              Testimonials page
            </a>
          </li>
        </ul>

        <div className="footer_social">
          <FaInstagram className="footer_social-icon" />
          <FaGithubAlt className="footer_social-icon" />
          <FaLinkedin className="footer_social-icon" />
          <FaTwitter className="footer_social-icon" />
        </div>
        <span className="footer_copy">Maroots @2022. All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
