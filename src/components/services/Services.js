import React, { useState } from "react";
import "./services.css";
import {
  FaArrowRight,
  FaCheckCircle,
  FaEdit,
  FaSafari,
  FaTimes,
} from "react-icons/fa";

const Services = () => {
  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  }
  return (
    <section className="services section" id="services">
      <h2 className="section_title">Services</h2>
      <span className="section_subtitle">Services I Offer</span>
      <div className="services_container container grid">
        <div className="services_content">
          <div>
            <FaSafari className="services_icon" />
            <h3 className="services_title">
              Ui/Ux <br /> Designer
            </h3>
          </div>

          <span className="services_button" onClick={() => toggleTab(1)}>
            View More
            <FaArrowRight className="services_button-icon" />
          </span>

          <div
            className={
              toggleState === 1
                ? "services_modal active-modal"
                : "services_modal"
            }
          >
            <div className="services_modal-content">
              <FaTimes
                className="services_modal-close"
                onClick={() => toggleTab(0)}
              />

              <h3 className="services_modal-title">Product Designer</h3>
              <p className="services_modal-description">
                Service with more than 2 years of learning. Providing quality
                work to clients and companies.
              </p>

              <ul className="services_modal-services grid">
                <li className="services_modal-service">
                  <FaCheckCircle className="services_modal-icon" />
                  <p className="services_modal-info">Web Page development.</p>
                </li>

                <li className="services_modal-service">
                  <FaCheckCircle className="services_modal-icon" />
                  <p className="services_modal-info">
                    I develop the user interface.
                  </p>
                </li>

                <li className="services_modal-service">
                  <FaCheckCircle className="services_modal-icon" />
                  <p className="services_modal-info">
                    I take nice photographs.
                  </p>
                </li>

                <li className="services_modal-service">
                  <FaCheckCircle className="services_modal-icon" />
                  <p className="services_modal-info">
                    Solve all mathematical problems.
                  </p>
                </li>

                <li className="services_modal-service">
                  <FaCheckCircle className="services_modal-icon" />
                  <p className="services_modal-info">
                    I position your company brand.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services_content">
          <div>
            <FaSafari className="services_icon" />
            <h3 className="services_title">
              Ui/Ux <br /> Designer
            </h3>
          </div>

          <span className="services_button" onClick={() => toggleTab(2)}>
            View More
            <FaArrowRight className="services_button-icon" />
          </span>

          <div
            className={
              toggleState === 2
                ? "services_modal active-modal"
                : "services_modal"
            }
          >
            <div className="services_modal-content">
              <FaTimes
                className="services_modal-close"
                onClick={() => toggleTab(0)}
              />

              <h3 className="services_modal-title">Product Designer</h3>
              <p className="services_modal-description">
                Service with more than 2 years of learning. Providing quality
                work to clients and companies.
              </p>

              <ul className="services_modal-services grid">
                <li className="services_modal-service">
                  <FaCheckCircle className="services_modal-icon" />
                  <p className="services_modal-info">Web Page development.</p>
                </li>

                <li className="services_modal-service">
                  <FaCheckCircle className="services_modal-icon" />
                  <p className="services_modal-info">
                    I develop the user interface.
                  </p>
                </li>

                <li className="services_modal-service">
                  <FaCheckCircle className="services_modal-icon" />
                  <p className="services_modal-info">
                    I take nice photographs.
                  </p>
                </li>

                <li className="services_modal-service">
                  <FaCheckCircle className="services_modal-icon" />
                  <p className="services_modal-info">
                    Solve all mathematical problems.
                  </p>
                </li>

                <li className="services_modal-service">
                  <FaCheckCircle className="services_modal-icon" />
                  <p className="services_modal-info">
                    I position your company brand.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services_content">
          <div>
            <FaEdit />
            <h3 className="services_title">
              Visual <br /> Designer
            </h3>
          </div>

          <span className="services_button" onClick={() => toggleTab(3)}>
            View More
            <FaArrowRight className="services_button-icon" />
          </span>

          <div
            className={
              toggleState === 3
                ? "services_modal active-modal"
                : "services_modal"
            }
          >
            <div className="services_modal-content">
              <FaTimes
                className="services_modal-close"
                onClick={() => toggleTab(0)}
              />

              <h3 className="services_modal-title">Visual Designer</h3>
              <p className="services_modal-description">
                Service with more than 2 years of learning. Providing quality
                work to clients and companies.
              </p>

              <ul className="services_modal-services grid">
                <li className="services_modal-service">
                  <FaCheckCircle className="services_modal-icon" />
                  <p className="services_modal-info">Web Page development.</p>
                </li>

                <li className="services_modal-service">
                  <FaCheckCircle className="services_modal-icon" />
                  <p className="services_modal-info">
                    I develop the user interface.
                  </p>
                </li>

                <li className="services_modal-service">
                  <FaCheckCircle className="services_modal-icon" />
                  <p className="services_modal-info">
                    I take nice photographs.
                  </p>
                </li>

                <li className="services_modal-service">
                  <FaCheckCircle className="services_modal-icon" />
                  <p className="services_modal-info">
                    Solve all mathematical problems.
                  </p>
                </li>

                <li className="services_modal-service">
                  <FaCheckCircle className="services_modal-icon" />
                  <p className="services_modal-info">
                    I position your company brand.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
