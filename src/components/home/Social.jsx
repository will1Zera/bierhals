import React from 'react'
import { motion } from "framer-motion"

let easeing = [0.6, -0.5, 0.01, 0.99];

const Social = () => {
  return (
    <motion.div className="home__social" initial={{opacity: 0, scale: 0}} animate={{opacity: 1, scale: 1}} transition={{duration: 0.8, ease: easeing}}>
        <a href="https://www.linkedin.com/in/williambierhals/" className="home__social-icon" target="_blank" rel="noreferrer"><i class="uil uil-linkedin-alt"></i></a>
        <a href="https://github.com/will1Zera" className="home__social-icon" target="_blank" rel="noreferrer"><i className="uil uil-github-alt"></i></a>
        <a href="https://www.instagram.com/william_bierhals/" className="home__social-icon" target="_blank" rel="noreferrer"><i className="uil uil-instagram"></i></a>
    </motion.div>
  );
}

export default Social;