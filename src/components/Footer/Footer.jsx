import React from 'react'
import "./Footer.css"
const Footer = () => {
  return (
    <div className="footer__main">
      <div className="footer__column">
        <div className="footer__heading">Products</div>
        <div className="footer__link">Yoga</div>
        <div className="footer__link">Equipments</div>
        <div className="footer__link">Weights</div>
        <div className="footer__link">Clothing</div>
      </div>
      <div className="footer__column">
        <div className="footer__heading">Find us on</div>
        <div className="footer__link">Twitter</div>
        <div className="footer__link">Instagram</div>
        <div className="footer__link">Reddit</div>
        <div className="footer__link">Mail us</div>
      </div>
      <div className="footer__column">
        <div className="footer__heading">Address</div>
        <div className="footer__address__text">1 Hacker Way, Menlo Park,</div>
        <div className="footer__address__text">
          California, United States, 94025
        </div>
        <div className="footer__address__text"></div>
        <div className="footer__address__text"></div>
      </div>
    </div>
  );
}

export default Footer