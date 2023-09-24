import React from 'react'
import EmployImage from '../../assets/employ.png'

const Employ = () => {
  return (
    <div className="services__content">
      <img src={EmployImage} alt="Imagem do employ" onClick={() => { window.open('https://employy.netlify.app/', '_blank'); }}/>

      <div className="services__box">
        <div className="services__group">
          <div className="services__data">
            <div>
              <h3 className="services__title">EMPLOY 📋</h3>
              <p className="services__name">Employ é um site de transferências internacionais que possibilita o usuário criar sua conta, logar e deslogar. Possui um modal com formulário de contato configurado pelo EmailJS.</p>
            </div>
          </div>

          <div className="services__data">
            <div>
              <p className="services__technologies">React | Framer-motion | Styled-components</p>
            </div>
          </div>

          <div className="services__data">
            <div>
              <a href="https://github.com/will1Zera/employ" target="_blank" rel="noreferrer"><i class='bx bxl-github'></i></a>
              <a href="https://employy.netlify.app/" target="_blank" rel="noreferrer"><i class='bx bx-link-external'></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Employ;