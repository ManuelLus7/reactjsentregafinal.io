import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>Secciones</h3>
        <ul>
          <li>
            <a href="/">Inicio</a>
          </li>
          <li>
            <a href="/productos">Productos</a>
          </li>
          <li>
            <a href="/nosotros">Nosotros</a>
          </li>
          <li>
            <a href="/contacto">Contacto</a>
          </li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Información del Curso</h3>
        <p>Curso: Reactjs</p>
        <p>Alumno: Lus, Manuel</p>
        <p>Comisión: 43265</p>
      </div>

      <div className="footer-section">
        <h3>Redes Sociales</h3>
        <div className="social-icons">
          <a href="#">
            <FaFacebook />
          </a>
          <a href="#">
            <FaTwitter />
          </a>
          <a href="#">
            <FaInstagram />
          </a>
          
        </div>
      </div>
      
      
    </footer>
  );
};

export default Footer;
