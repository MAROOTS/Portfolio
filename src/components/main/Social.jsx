import React from 'react'
import { FaDribbble, FaGithubAlt, FaInstagram } from 'react-icons/fa'

const Social = () => {
  return (
      <div className='home_social'>
          <a href="" className="home_social-icon" target='_blank'>
              <FaInstagram/>
          </a>
          <a href="" className="home_social-icon" target='_blank'>
              <FaDribbble/>
          </a>
          <a href="" className="home_social-icon" target='_blank'>
              <FaGithubAlt/>
          </a>
    </div>
  )
}

export default Social