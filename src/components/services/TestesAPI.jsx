import React from 'react'

const TestesAPI = () => {
  return (
    <div className="services__content">
      <h3 className="services__title">AUTOMAÇÃO DE TESTES DA API SICREDI</h3>
      <img src="https://gitlab.com/willambierhals/compass/-/raw/pb_sprint6/img/mapa-mental-sicredi.png" alt="Imagem do teste" />

      <div className="services__box">
        <div className="services__group">
          <div className="services__data">
            <div>
              <p className="services__name">No projeto realizei toda a cobertura de testes da API, tanto manuais, no Postamn, quanto automatizados, no RestAssured. Foi desenvolvido um Plano de Testes e um Mapa Mental.<br /><br />Além disso, foi utilizado o Jira para administrar e abrir issues refetente a bugs e melhorias da API.</p>
            </div>
          </div>

          <div className="services__data">
            <div>
              <p className="services__technologies">Postamn | RestAssured | Pipeline</p>
            </div>
          </div>

          <div className="services__data">
            <div>
              <a href="https://gitlab.com/willambierhals/desafio-final-do-programa-de-bolsa-compassuol" target="_blank" rel="noreferrer"><i class='bx bxl-github'></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestesAPI;