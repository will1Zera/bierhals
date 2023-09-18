import React, { useState } from 'react';
import "./header.css";
import { motion } from "framer-motion"

let easeing = [0.6, -0.5, 0.01, 0.99];

const header = {
    initial:{
        y: -60,
        opacity: 0,
        transition:{duration: 0.05, ease: easeing}
    },
    animate:{
        y: 0,
        opacity: 1,
        transition:{duration: 0.5, ease: easeing}
    }
};

const Header = () => {

    window.addEventListener('scroll', function () {
        const header = document.querySelector('.header');
        if (window.scrollY >= 80) header.classList.add('scroll-header');
        else header.classList.remove('scroll-header');
    });

    const[Toggle, showMenu] = useState(false);
    const[activeNav, setActiveNav] = useState("#home");

  return (
    <motion.header className="header" initial="initial" animate='animate'>
        <nav className="nav container">
            <motion.a href="index.html" className="nav__logo" variants={header}>Bierhals</motion.a>

            <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                <motion.ul className="nav__list grid" variants={header}>
                    <li className="nav__item">
                        <a href="#home" onClick={() => setActiveNav('#home')} className={activeNav === "#home" ? "nav__link active-link" : "nav__link"}>
                            <i className="uil uil-estate nav__icon"></i> Início
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === "#about" ? "nav__link active-link" : "nav__link"}>
                            <i className="uil uil-user nav__icon"></i> Sobre
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#skills" onClick={() => setActiveNav('#skills')} className={activeNav === "#skills" ? "nav__link active-link" : "nav__link"}>
                            <i className="uil uil-file-alt nav__icon"></i> Habilidades
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === "#services" ? "nav__link active-link" : "nav__link"}>
                            <i className="uil uil-briefcase-alt nav__icon"></i> Projetos
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === "#portfolio" ? "nav__link active-link" : "nav__link"}>
                            <i className="uil uil-scenery nav__icon"></i> Portfólio
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === "#contact" ? "nav__link active-link" : "nav__link"}>
                            <i className="uil uil-message nav__icon"></i> Contato
                        </a>
                    </li>
                </motion.ul>

                <i class="uil uil-times nav__close" onClick={() => showMenu(!Toggle)}></i>
            </div>

            <motion.div className="nav__toggle" onClick={() => showMenu(!Toggle)} initial="initial" animate='animate' variants={header}>
                <i class="uil uil-apps"></i>
            </motion.div>
        </nav>
    </motion.header>
  );
}

export default Header;