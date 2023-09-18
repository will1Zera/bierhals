import React from 'react';
import "./skills.css";
import Frontend from './Frontend';
import Backend from './Backend';
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

const Skills = () => {
  return (
    <motion.section className="skills section" id="skills" variants={container} initial='hidden' exit='exit' whileInView='show' viewport={{once: false}}>
        <motion.h2 className="section__title" variants={item}>Habilidades</motion.h2>
        <motion.span className="section__subtitle" variants={item}>Minhas habilidades técnicas</motion.span>

        <motion.div className="skills__container container grid" variants={item}>
            <Frontend />
            <Backend />
        </motion.div>
    </motion.section>
  );
}

export default Skills;