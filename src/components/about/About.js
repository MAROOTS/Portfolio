import React from "react";
import "./about.css";
import Img from "../../assets/img1.jpg";
import Info from "./Info";

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section_title">About Me</h2>
      <span className="section_subtitle">About Myself</span>
      <div className="about_container container grid">
        <img src={Img} alt="" className="about_img" />

        <div className="about_data">
          <Info />

          <p className="about_description">
            Am a fullstack developer, UI/UX designer, and also a photographer, i
            can work under any environment when given the chance, not to forget
            with minimal supervision.
          </p>
          <button className="btn btn-primary">Download Cv</button>
        </div>
      </div>
    </section>
  );
};

export default About;
