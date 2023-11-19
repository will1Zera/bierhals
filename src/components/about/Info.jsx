import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
            <i class='bx bx-book-open about__icon'></i>
            <h3 className="about__title">Experiência</h3>
            <span className="about__subtitle">2 anos de estudo</span>
        </div>

        <div className="about__box">
            <i class='bx bx-trending-up about__icon'></i>
            <h3 className="about__title">Completos</h3>
            <span className="about__subtitle">+30 projetos</span>
        </div>

        <div className="about__box">
            <i class='bx bx-user about__icon'></i>
            <h3 className="about__title">Habilidades</h3>
            <span className="about__subtitle">Full Stack</span>
        </div>
    </div>
  );
}

export default Info;