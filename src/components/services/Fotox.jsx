import React from 'react'

const Fotox = () => {
  return (
    <div className="services__content">
      <h3 className="services__title">FOTOX</h3>
      <img src="https://github.com/will1Zera/Fotox/raw/main/images/fotox.gif" alt="Gif do fotox" />

      <div className="services__box">
        <div className="services__group">
          <div className="services__data">
            <div>
              <p className="services__name">Fotox disponibiliza uma variedade de imagens gratuitas, com a possibilidade de fazer sua pesquisa utilizando o reconhecimento de voz. Foi consumido duas APIs.</p>
            </div>
          </div>

          <div className="services__data">
            <div>
              <p className="services__technologies">HTML | CSS | Javascript</p>
            </div>
          </div>

          <div className="services__data">
            <div>
              <a href="https://github.com/will1Zera/Fotox" target="_blank" rel="noreferrer"><i class='bx bxl-github'></i></a>
              <a href="https://fotoxx.web.app/" target="_blank" rel="noreferrer"><i class='bx bx-link-external'></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fotox;