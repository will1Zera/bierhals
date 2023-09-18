import React from 'react'
import './footer.css'
import { motion } from "framer-motion"

let easeing = [0.6, -0.5, 0.01, 0.99];

const item = {
  hidden:{opacity:0, y:-30},
  show:{
      opacity: 1,
      y: 0,
      transition:{duration: 0.8, ease: easeing}
  }
};

const container = {
  show:{
      transition:{
          staggerChildren: 0.2
      }
  }
};

const Footer = () => {
  return (
    <motion.footer className="footer" variants={container} initial='hidden' exit='exit' whileInView='show' viewport={{once: false}}>
        <motion.div className="footer__container container" variants={item}>
            <h1 className="footer__title">Bierhals</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className='footer__link'>Sobre</a>
                </li>

                <li>
                    <a href="#portfolio" className='footer__link'>Projetos</a>
                </li>
            </ul>

            <div className="footer__social">
                <a href="https://www.linkedin.com/in/williambierhals/" className="footer__social-link" target="_blank" rel="noreferrer"><i class="uil uil-linkedin-alt"></i></a>
                <a href="https://github.com/will1Zera" className="footer__social-link" target="_blank" rel="noreferrer"><i className="uil uil-github-alt"></i></a>
                <a href="https://www.instagram.com/william_bierhals/" className="footer__social-link" target="_blank" rel="noreferrer"><i className="uil uil-instagram"></i></a>
            </div>

            <span className="footer__copy">&#169; William Bierhals. Todos os direitos reservados.</span>
        </motion.div>
    </motion.footer>
  );
}

export default Footer;