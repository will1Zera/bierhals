import React from 'react'
import "./home.css";
import Social from './Social';
import Data from './Data';
import ScrollDown from './ScrollDown';
import { motion } from "framer-motion"

let easeing = [0.6, -0.5, 0.01, 0.99];

const Home = () => {
  return (
    <section className="home section" id="home">
        <div className="home__container container grid">
            <div className="home__content grid">
                <Social />

                <motion.div className="home__img" initial={{opacity: 0, scale: 0}} animate={{opacity: 1, scale: 1}} transition={{duration: 1, ease: easeing}}>

                </motion.div>

                <Data />
            </div>

            <ScrollDown />
        </div>
    </section>
  );
}

export default Home;