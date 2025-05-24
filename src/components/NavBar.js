import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';
import { useCart } from '../hooks/useCatalog';

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const showMobile = () => setMobileOpen(true);

  const hideMobile = () => setMobileOpen(false);

  const { cart } = useCart();

  return (
    <nav>
      <ul className="mobile" style={{ display: mobileOpen ? 'flex' : 'none' }}>
        <div className='logo-x'>
          <li className="navbar__item logo">
            <Link to="/" className="navbar__link" onClick={hideMobile}>Kombucha-configurator</Link>
          </li>
          <li className='x-mark'>
            <button onClick={hideMobile} className="navbar__link" style={{ background: 'none', border: 'none', padding: 0 }}>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff">
                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
              </svg>
            </button>
          </li>
        </div>
        <li>
          <Link to="/" className="navbar__link" onClick={hideMobile}>Главная</Link>
        </li>
        <li>
          <Link to="/profile" className="navbar__link" onClick={hideMobile}>Профиль</Link>
        </li>
        <li>
          <Link to="/login" className="navbar__link" onClick={hideMobile}>Вход</Link>
        </li>
        <li>
          <Link to="/cart" className="navbar__link" onClick={hideMobile}>Корзина</Link>
        </li>
      </ul>

      <ul className="navbar__list">
        <li className="navbar__item logo">
          <Link to="/" className="navbar__link">Kombucha-configurator</Link>
        </li>
        <li className="navbar__item hideOnMobile">
          <Link to="/" className="navbar__link">Главная</Link>
        </li>
        <li className="navbar__item hideOnMobile">
          <Link to="/profile" className="navbar__link">Профиль</Link>
        </li>
        <li className="navbar__item hideOnMobile with-bg">
          <Link to="/login" className="navbar__link">Вход</Link>
        </li>
        <li className="navbar__item hideOnMobile">
          <Link to="/cart" className="navbar__link">Корзина</Link>
          <div className='counter'>{cart.length}</div>
        </li>
        <li className="menu-button">
          <button onClick={showMobile} style={{ background: 'none', border: 'none', padding: 0 }}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff">
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
            </svg>
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
