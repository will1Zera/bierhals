import React, { useState } from 'react'
import './qualification.css'
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

const Qualification = () => {

    const [toggleState, setToggleState] = useState(2);

    const toggleTab = (index) =>{
        setToggleState(index);
    };

  return (
    <motion.section className="qualification section" id="portfolio" variants={container} initial='hidden' exit='exit' whileInView='show' viewport={{once: false}}>
        <motion.h2 className="section__title" variants={item}>Portfólio</motion.h2>
        <motion.span className="section__subtitle" variants={item}>Um pouco sobre as minhas experiências</motion.span>
        
        <div className="qualification__container container">
            <motion.div className="qualification__tabs" variants={item}>
                <div className={
                    toggleState === 2 
                    ? "qualification__button qualification__active button--flex" 
                    : "qualification__button button--flex"}
                    onClick={() => toggleTab(2)}
                    >
                    <i className="uil uil-briefcase-alt qualification__icon"> Trabalho</i>
                </div>
                <div className={
                    toggleState === 1 
                    ? "qualification__button qualification__active button--flex" 
                    : "qualification__button button--flex"}
                    onClick={() => toggleTab(1)}
                    >
                    <i className="uil uil-graduation-cap qualification__icon"> Educação</i>
                </div>
            </motion.div>

            <motion.div className="qualification__sections" variants={item}>
                <div className={
                    toggleState === 1 
                    ? "qualification__content qualification__content-active"
                    : "qualification__content"
                }>
                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">Análise e Desenvolvimento de Sistemas</h3>
                            <span className="qualification__subtitle">UCPel</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"> 02/2023 - Presente</i>
                            </div>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Typescript do básico ao avançado</h3>
                            <span className="qualification__subtitle">Udemy</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"> 10/2023</i>
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">PHP do Zero a Maestria</h3>
                            <span className="qualification__subtitle">Udemy</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"> 09/2023</i>
                            </div>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Testes automatizados com Cypress</h3>
                            <span className="qualification__subtitle">Udemy</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"> 09/2023</i>
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">Certificado em ReactJs</h3>
                            <span className="qualification__subtitle">ProgramadorBr</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"> 10/2022</i>
                            </div>
                        </div>

                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Certificado em Firebase, JQuery e Bootstrap</h3>
                            <span className="qualification__subtitle">ProgramadorBr</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"> 05/2022</i>
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">Certificado em HTML, CSS e Javascript</h3>
                            <span className="qualification__subtitle">ProgramadorBr</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"> 04/2022</i>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={
                    toggleState === 2 
                    ? "qualification__content qualification__content-active"
                    : "qualification__content"
                }>
                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">Desenvolvedor Full Stack</h3>
                            <span className="qualification__subtitle">Sou responsável por desenvolver e dar manutenção nos sistemas web da YellowGo para a Osirnet utilizando HTML, CSS, Javascript, Laravel e MySQL</span>
                            <span className="qualification__subtitle">Júnior - YellowGo</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"> 11/2023 - Presente</i>
                            </div>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Quality Assurance</h3>
                            <span className="qualification__subtitle">Era responsável por realizar testes manuais e automatizados de APIs, utilizando Gitlab, Jira, Postman, RestAssured com TestNG e Pipelines.</span>
                            <span className="qualification__subtitle">Estágio - Compass UOL</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"> 05/2023 - 08/2023</i>
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                </div>
            </motion.div>
        </div>
    </motion.section>
  );
}

export default Qualification;