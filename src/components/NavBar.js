import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

function Navbar() {
  return (
    <nav>
      <ul className="navbar__list">
        <li className="navbar__item logo">
          <Link to="/" className="navbar__link">Kombucha-configurator</Link>
        </li>
        <li className="navbar__item">
          <Link to="/" className="navbar__link">Главная</Link>
        </li>
        <li className="navbar__item">
          <Link to="/profile" className="navbar__link">Профиль</Link>
        </li>
        <li className="navbar__item with-bg">
          <Link to="/login" className="navbar__link">Вход</Link>
        </li>
        <li className="navbar__item">
          <Link to="/cart" className="navbar__link">Корзина</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
