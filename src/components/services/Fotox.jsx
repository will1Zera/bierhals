import React from 'react'
import FotoxImage from '../../assets/fotox.png'

const Fotox = () => {
  return (
    <div className="services__content">
      <div className="services__box">
        <div className="services__group">
          <div className="services__data">
            <div>
              <h3 className="services__title">FOTOX 📷</h3>
              <p className="services__name">Fotox disponibiliza uma variedade de imagens gratuitas através de uma api, com a possibilidade de fazer sua pesquisa utilizando o reconhecimento de voz de outra api. Possui um menu de navegação por sessões.</p>
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

      <img className="services__image" src={FotoxImage} alt="Imagem do fotox" onClick={() => { window.open('https://fotoxx.web.app/', '_blank'); }}/>
    </div>
  );
}

export default Fotox;