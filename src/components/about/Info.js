import React from 'react'
import { FaAward, FaBriefcase, FaHeadphones } from 'react-icons/fa'

const Info = () => {
  return (
      <div className="about_info grid">
          <div className="about_box">
              <FaAward className='about_icon'/>
              <h3 className="about_title">Experience</h3>
              <span className="about_subtitle">2 years Coding</span>
          </div>  
          <div className="about_box">
              <FaBriefcase className='about_icon'/>
              <h3 className="about_title">Completed</h3>
              <span className="about_subtitle">10 + Projects</span>
          </div> 
          <div className="about_box">
              <FaHeadphones className='about_icon'/>
              <h3 className="about_title">Support</h3>
              <span className="about_subtitle">Anytime</span>
        </div>  
    </div>
  )
}

export default Info 