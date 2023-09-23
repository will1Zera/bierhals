import React from 'react'
import './scrollup.css'
import { Link } from 'react-scroll'

const ScrollUp = () => {
    
    window.addEventListener('scroll', function () {
        const scrollUp = document.querySelector('.scrollup');
        if (window.scrollY >= 560) scrollUp.classList.add('show-scroll');
        else scrollUp.classList.remove('show-scroll');
    });

  return (
    <Link to="home" spy={true} smooth={true} duration={500} className="scrollup">
        <i className="uil uil-arrow-up scrollup__icon"></i>
    </Link>
  );
}

export default ScrollUp;