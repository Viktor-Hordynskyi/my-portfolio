import React from 'react';
import instagram from '../../img/icons/instagram.svg'
import facebook from '../../img/icons/facebook.svg'
import gitlab from '../../img/icons/gitlab.svg'
import arrow from '../../img/icons/arrow-double-up.svg'
import './footer.scss'

const Footer = ({ scrollToTop }) => {
  return (
    <footer className="footer home">
      <div className="container">
        <div className="footer__soc">
          <div id="back-to-top" className="wow jackInTheBox" data-wow-delay=".2s" onClick={scrollToTop}>
            <img src={arrow} alt="arrow"/>
          </div>

          <a href="https://www.facebook.com/hordynskyi.viktor" target="_blank" rel="noopener noreferrer" className="wow zoomIn" data-wow-delay=".2s">
            <img src={facebook} alt="facebook"/>
          </a>

          <a href="https://www.instagram.com/v.hordynskyi/" target="_blank" rel="noopener noreferrer" className="wow zoomIn" data-wow-delay=".4s">
            <img src={instagram} alt="instagram"/>
          </a>

          <a href="https://gitlab.com/users/Morpi/projects" target="_blank" rel="noopener noreferrer" className="wow zoomIn" data-wow-delay=".2s">
            <img src={gitlab} alt="gitlab"/>
          </a>
        </div>

        <h5>Viktor Hordynskyi <span>2018 - {new Date().getFullYear()}</span></h5>
      </div>
    </footer>
  )
}

export default Footer