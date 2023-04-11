import React from "react";
import { useState } from "react";
import { FaBriefcase, FaCalendar, FaGraduationCap } from "react-icons/fa";
import "./qualify.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="qualification section">
      <h2 className="section_title">Qualifications</h2>
      <span className="section_subtitle">My Engineering Qualifications</span>

      <div className="qualification_container container">
        <div className="qualification_tabs">
          <div
            className={
              toggleState === 1
                ? "qualification_button qualification_active button--flex"
                : "qualification_button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <FaGraduationCap className="qualification_icon" />
            Education
          </div>
          <div
            className={
              toggleState === 2
                ? "qualification_button qualification_active button--flex"
                : "qualification_button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <FaBriefcase className="qualification_icon" />
            Experience
          </div>
        </div>
        <div className="qualification_sections">
          <div
            className={
              toggleState === 1
                ? "qualification_content qualification_content-active"
                : "qualification_content"
            }
          >
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Computer Science</h3>
                <span className="qualification_subtitle">
                  Presbyterian University Of East Africa.
                </span>
                <div className="qualification_calendar">
                  <FaCalendar /> 2020- Present
                </div>
              </div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>

            <div className="qualification_data">
              <div></div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>

              <div>
                <h3 className="qualification_title">Web Developer</h3>
                <span className="qualification_subtitle">
                  Presbyterian University Of East Africa.
                </span>
                <div className="qualification_calendar">
                  <FaCalendar /> 2020- Present
                </div>
              </div>
            </div>

            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Computer Science</h3>
                <span className="qualification_subtitle">
                  Presbyterian University Of East Africa.
                </span>
                <div className="qualification_calendar">
                  <FaCalendar /> 2020- Present
                </div>
              </div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>

            <div className="qualification_data">
              <div></div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>

              <div>
                <h3 className="qualification_title">Web Developer</h3>
                <span className="qualification_subtitle">
                  Presbyterian University Of East Africa.
                </span>
                <div className="qualification_calendar">
                  <FaCalendar /> 2020- Present
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification_content qualification_content-active"
                : "qualification_content"
            }
          >
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Computer Science</h3>
                <span className="qualification_subtitle">
                  Presbyterian University Of East Africa.
                </span>
                <div className="qualification_calendar">
                  <FaCalendar /> 2020- Present
                </div>
              </div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>

            <div className="qualification_data">
              <div></div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>

              <div>
                <h3 className="qualification_title">Web Developer</h3>
                <span className="qualification_subtitle">
                  Presbyterian University Of East Africa.
                </span>
                <div className="qualification_calendar">
                  <FaCalendar /> 2020- Present
                </div>
              </div>
            </div>

            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Computer Science</h3>
                <span className="qualification_subtitle">
                  Presbyterian University Of East Africa.
                </span>
                <div className="qualification_calendar">
                  <FaCalendar /> 2020- Present
                </div>
              </div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
