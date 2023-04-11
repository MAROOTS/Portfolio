import React from 'react'
import './skills.css';
import { FaCheckCircle } from "react-icons/fa";
const Backend = () => {
  return (
    <div className="skills_content">
      <h3 className="skills_title">Backend Developer</h3>

      <div className="skills_box">
        <div className="skills_group">
          <div className="skills_data">
            <FaCheckCircle />

            <div>
              <h3 className="skills_name">Nodejs</h3>
              <span className="skills_level">Advanced</span>
            </div>
          </div>
          <div className="skills_data">
            <FaCheckCircle />

            <div>
              <h3 className="skills_name">MongoDb</h3>
              <span className="skills_level">Advanced</span>
            </div>
          </div>
          <div className="skills_data">
            <FaCheckCircle />

            <div>
              <h3 className="skills_name">Mysql</h3>
              <span className="skills_level">Advanced</span>
            </div>
          </div>

          <div className="skills_data">
            <FaCheckCircle />

            <div>
              <h3 className="skills_name">Java</h3>
              <span className="skills_level">Intermediate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Backend