import React from 'react'

const Flushe = () => {
  return (
    <div className="services__content">
      <h3 className="services__title">FLUSHE</h3>
      <img src="https://github.com/will1Zera/Flushe/raw/master/assets/animation.gif" alt="Gif do flushe" />

      <div className="services__box">
        <div className="services__group">
          <div className="services__data">
            <div>
              <p className="services__name">Flushe é uma plataforma que permite o usuário se cadastrar e logar com seu email e senha. Com ele, também é possível o usuário efetuar o login com a sua conta do google ou facebook.</p>
            </div>
          </div>

          <div className="services__data">
            <div>
              <p className="services__technologies">Javascript | Firebase</p>
            </div>
          </div>

          <div className="services__data">
            <div>
              <a href="https://github.com/will1Zera/Flushe" target="_blank" rel="noreferrer"><i class='bx bxl-github'></i></a>
              <a href="https://flushee.web.app/" target="_blank" rel="noreferrer"><i class='bx bx-link-external'></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Flushe;