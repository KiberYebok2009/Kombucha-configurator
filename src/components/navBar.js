import React from 'react';
import '../styles/navbar.css'; // Подключаем CSS для стилизации

// Компонент навигационной панели
function Navbar() {
  return (
    <nav>
        <ul className="navbar__list">
            <li className="navbar__item logo">
                <a href="#" className="navbar__link">Kombucha-configurator</a>
            </li>
            <li className="navbar__item">
                <a href="#" className="navbar__link">Home</a>
            </li>
            {/* <li className="navbar__item">
                <a href="#" className="navbar__link">About</a>
            </li>
            <li className="navbar__item">
                <a href="#" className="navbar__link">Contact</a>
            </li> */}
            <li className="navbar__item">
                <a href="#" className="navbar__link">Profile</a>
            </li>
            <li className="navbar__item with-bg">
                <a href="#" className="navbar__link">Sign-in</a>
            </li>
            <li className="navbar__item">
                <a href="#" className="navbar__link">Cart</a>
            </li>
        </ul>
    </nav>
  );
}

export default Navbar;
