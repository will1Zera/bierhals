import React from 'react'
import "./services.css";
import Employ from './Employ';
import Flushe from './Flushe';
import Fotox from './Fotox';
import MovieStar from './MovieStar';
import StudentCRUD from './StudentCRUD';
import TestesAPI from './TestesAPI';

const Services = () => {
  return (
    <section className="services section" id="services">
        <h2 className="section__title">Projetos</h2>
        <span className="section__subtitle">Alguns dos meus projetos</span>
        <div className="services__container container grid">
            <Employ />
            <Flushe />
            <Fotox />
            <MovieStar />
            <StudentCRUD />
            <TestesAPI />
        </div>
    </section>
  );
}

export default Services;