import React from 'react'
import MoviestarImage from '../../assets/moviestar.png'

const MovieStar = () => {
  return (
    <div className="services__content">
      <img src={MoviestarImage} alt="Imagem do moviestar" onClick={() => { window.open('https://github.com/will1Zera/moviestar', '_blank'); }}/>

      <div className="services__box">
        <div className="services__group">
          <div className="services__data">
            <div>
              <h3 className="services__title">MOVIESTAR ⭐</h3>
              <p className="services__name">MovieStar é um sistema de avaliações de filmes, com a possibilidade de criar sua conta, editar seu perfil, adicionar seus filmes e avaliar os filmes dos outros usuários.</p>
            </div>
          </div>

          <div className="services__data">
            <div>
              <p className="services__technologies">PHP | MySQL | Bootstrap</p>
            </div>
          </div>

          <div className="services__data">
            <div>
              <a href="https://github.com/will1Zera/moviestar" target="_blank" rel="noreferrer"><i class='bx bxl-github'></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieStar;