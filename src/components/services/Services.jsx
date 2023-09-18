import React from 'react'
import "./services.css";
import Employ from './Employ';
import Flushe from './Flushe';
import Fotox from './Fotox';
import MovieStar from './MovieStar';
import StudentCRUD from './StudentCRUD';
import TestesAPI from './TestesAPI';
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

const Services = () => {
  return (
    <motion.section className="services section" id="services" variants={container} initial='hidden' exit='exit' whileInView='show' viewport={{once: false}}>
        <motion.h2 className="section__title" variants={item}>Projetos</motion.h2>
        <motion.span className="section__subtitle" variants={item}>Alguns dos meus projetos</motion.span>
        <motion.div className="services__container container grid" variants={item}>
            <Employ />
            <Flushe />
            <Fotox />
            <MovieStar />
            <StudentCRUD />
            <TestesAPI />
        </motion.div>
    </motion.section>
  );
}

export default Services;