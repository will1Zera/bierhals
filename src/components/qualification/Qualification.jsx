import React, { useState } from 'react'
import './qualification.css'

const Qualification = () => {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) =>{
        setToggleState(index);
    };

  return (
    <section className="qualification section" id="portfolio">
        <h2 className="section__title">Portfólio</h2>
        <span className="section__subtitle">Um pouco sobre as minhas experiências</span>
        
        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className={
                    toggleState === 1 
                    ? "qualification__button qualification__active button--flex" 
                    : "qualification__button button--flex"}
                    onClick={() => toggleTab(1)}
                    >
                    <i className="uil uil-graduation-cap qualification__icon"> Educação</i>
                </div>
                <div className={
                    toggleState === 2 
                    ? "qualification__button qualification__active button--flex" 
                    : "qualification__button button--flex"}
                    onClick={() => toggleTab(2)}
                    >
                    <i className="uil uil-briefcase-alt qualification__icon"> Trabalho</i>
                </div>
            </div>

            <div className="qualification__sections">
                <div className={
                    toggleState === 1 
                    ? "qualification__content qualification__content-active"
                    : "qualification__content"
                }>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Anál. e Desenv. de Sistemas</h3>
                            <span className="qualification__subtitle">UCPel</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"> 2023 - Presente</i>
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
                        <div>
                            <h3 className="qualification__title">Estágiario QA e Automação de Testes</h3>
                            <span className="qualification__subtitle">CompassUOL</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"> 05/2023 - 08/2023</i>
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
                            <h3 className="qualification__title">Extensionista Desenvolvedor Full Stack</h3>
                            <span className="qualification__subtitle">UCPel</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"> 06/2023 - Presente</i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Qualification;