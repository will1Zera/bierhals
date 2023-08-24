import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
            <i class='bx bx-award about__icon'></i>
            <h3 className="about__title">Experiência</h3>
            <span className="about__subtitle">2 anos de estudo</span>
        </div>

        <div className="about__box">
            <i class='bx bx-briefcase-alt about__icon'></i>
            <h3 className="about__title">Completos</h3>
            <span className="about__subtitle">+15 projetos</span>
        </div>

        <div className="about__box">
            <i class='bx bx-support about__icon'></i>
            <h3 className="about__title">Disponível</h3>
            <span className="about__subtitle">Online 24/7</span>
        </div>
    </div>
  );
}

export default Info;