import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo centrado */}
      <div className="logo-container">
        <Link to="/" className="logo">
          <h1>Wotton.arg</h1>
        </Link>
      </div>

      {/* Menú de navegación debajo */}
      <ul className="menu">
        <li>
          <Link className="menu-link" to="/">
            Inicio
          </Link>
        </li>
        <li>
          <Link className="menu-link" to="/productos">
            Productos
          </Link>
        </li>
        <li>
          <Link className="menu-link" to="/productos/zapatos">
            Zapatos
          </Link>
        </li>
        <li>
          <Link className="menu-link" to="/productos/pantalones">
            Pantalones
          </Link>
        </li>
        <li>
          <Link className="menu-link" to="/productos/remeras">
            Remeras
          </Link>
        </li>
        <li>
          <Link className="menu-link" to="/productos/buzos">
            Buzos
          </Link>
        </li>
        <li>
          <Link className="menu-link" to="/nosotros">
            Nosotros
          </Link>
        </li>
        <li>
          <Link className="menu-link" to="/contacto">
            Contacto
          </Link>
        </li>
        {/* Widget del carrito */}
        <li>
          <CartWidget />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
