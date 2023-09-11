import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Bierhals</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className='footer__link'>Sobre</a>
                </li>

                <li>
                    <a href="#portfolio" className='footer__link'>Projetos</a>
                </li>
            </ul>

            <div className="footer__social">
                <a href="https://www.linkedin.com/in/williambierhals/" className="footer__social-link" target="_blank" rel="noreferrer"><i class="uil uil-linkedin-alt"></i></a>
                <a href="https://github.com/will1Zera" className="footer__social-link" target="_blank" rel="noreferrer"><i className="uil uil-github-alt"></i></a>
                <a href="https://www.instagram.com/william_bierhals/" className="footer__social-link" target="_blank" rel="noreferrer"><i className="uil uil-instagram"></i></a>
            </div>

            <span className="footer__copy">&#169; William Bierhals. Todos os direitos reservados.</span>
        </div>
    </footer>
  );
}

export default Footer;