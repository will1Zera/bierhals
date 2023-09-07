import React from 'react'

const Employ = () => {
  return (
    <div className="services__content">
      <h3 className="services__title">EMPLOY</h3>
      <img src="https://github.com/will1Zera/employ/raw/main/public/employ.gif" alt="Gif do employ" />

      <div className="services__box">
        <div className="services__group">
          <div className="services__data">
            <div>
              <p className="services__name">Site de transferências internacionais que possibilita o usuário criar sua conta, logar e deslogar. Possui um formulário de contato.</p>
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