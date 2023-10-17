import React from 'react'
import PetixImage from '../../assets/petix.png'

const Petix = () => {
  return (
    <div className="services__content">
      <img src={PetixImage} alt="Imagem do employ" onClick={() => { window.open('https://github.com/will1Zera/petix', '_blank'); }}/>

      <div className="services__box">
        <div className="services__group">
          <div className="services__data">
            <div>
              <h3 className="services__title">PETIX 🐾</h3>
              <p className="services__name">Petix é um site de petshop com vários produtos, possui as funcionalidades de adicionar produtos no carrinho, remove e finalizar a compra. Ao finalizar a compra, será pedido os dados de entrega e forma de pagamento.</p>
            </div>
          </div>

          <div className="services__data">
            <div>
              <p className="services__technologies"> React | Typescript | Styled-components</p>
            </div>
          </div>

          <div className="services__data">
            <div>
              <a href="https://github.com/will1Zera/petix" target="_blank" rel="noreferrer"><i class='bx bxl-github'></i></a>
              <a href="https://github.com/will1Zera/petix" target="_blank" rel="noreferrer"><i class='bx bx-link-external'></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Petix;