import React from 'react'
import { FaArrowUp } from 'react-icons/fa'
import './scroll.css'

const Scroll = () => {

    window.addEventListener("scroll", () => {
        const scrollUp = document.querySelector(".scrollup");
        if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
        else scrollUp.classList.remove("show-scroll");
    })
  return (
      <a href="#home" className='scrollup'>
          <FaArrowUp className='scrollup_icon'/>
    </a>
  )
}

export default Scroll