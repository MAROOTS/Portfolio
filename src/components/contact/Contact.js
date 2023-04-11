import React from "react";
import "./contact.css";
import {
  FaArrowRight,
  FaInstagram,
  FaMailBulk,
  FaWhatsapp,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section className="section contact" id="contact">
      <h2 className="section_title">Holla At ME</h2>
      <span className="section_subtitle">Be Able To Reach Me</span>

      <div className="contact_container container grid">
        <div className="contact_content">
          <h3 className="contact_title">Say A Word</h3>

          <div className="contact_info">
            <div className="contact_card">
              <FaMailBulk className="contact_card-icon" />
              <h3 className="contact_card-title">Email</h3>
              <span className="contact_card-data">user@gmail.com</span>

              <a href="mailto:example@gmail.com" className="contact_button">
                Write me
                <FaArrowRight className="contact_button-icon" />
              </a>
            </div>

            <div className="contact_card">
              <FaWhatsapp className="contact_card-icon" />
              <h3 className="contact_card-title">Whatsapp</h3>
              <span className="contact_card-data">+254790940818</span>

              <a
                href="https://api.whatsapp.com/send?phone=0758522834&text=Hi, more information!"
                className="contact_button"
              >
                Write me
                <FaArrowRight className="contact_button-icon" />
              </a>
            </div>

            <div className="contact_card">
              <FaInstagram className="contact_card-icon" />
              <h3 className="contact_card-title">Instagram</h3>
              <span className="contact_card-data">username.ig</span>

              <a
                href="https://instagram.com/maroots"
                className="contact_button"
              >
                Write me
                <FaArrowRight className="contact_button-icon" />
              </a>
            </div>
          </div>
        </div>

        <div className="contact_content">
          <h3 className="contact_title">Ask your Questions</h3>

          <form className="contact_form">
            <div className="contact_form-div">
              <label className="contact_form-tag">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Insert your name"
                className="contact_form-input"
              />
            </div>

            <div className="contact_form-div">
              <label className="contact_form-tag">
                Email
              </label>
              <input
                type="email"
                name="name"
                placeholder="Insert your Mail"
                className="contact_form-input"
              />
            </div>

            <div className="contact_form-div contact_form-area">
              <label htmlFor="" className="contact_form-tag">
                Questions
              </label>
              <textarea
                name="questions"
                cols="30"
                rows="10"
                className="contact_form-input"
                placeholder="Write your questions"
              ></textarea>
            </div>
                <button className="btn btn-primary">submit<FaArrowRight/></button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
