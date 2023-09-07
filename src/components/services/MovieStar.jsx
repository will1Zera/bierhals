import React from 'react'

const MovieStar = () => {
  return (
    <div className="services__content">
      <h3 className="services__title">MOVIESTAR</h3>
      <img src="https://github.com/will1Zera/moviestar/raw/main/img/moviestar.gif?raw=true" alt="Gif do moviestar" />

      <div className="services__box">
        <div className="services__group">
          <div className="services__data">
            <div>
              <p className="services__name">Sistema de avaliações de filmes, com a possibilidade de criar sua conta, adicionar seus filmes e avaliar os filmes dos outros usuários.</p>
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