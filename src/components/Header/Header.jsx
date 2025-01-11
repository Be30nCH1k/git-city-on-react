import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';


const Header = () => {
  return (
    <header className="header">
      <nav className="header__nav">
        <Link to="/">
          <img src="/assets/img/logo.webp" alt="logo" className="header__img" />
        </Link>
        <ul className="header__list">
          <li><Link className="main__btn" to="/">Домой</Link></li>
          <li><Link className="main__btn" to="/attractions">Достопримечательности</Link></li>
          <li><Link className="main__btn" to="/contact">Контакты</Link></li>
        </ul>
      </nav>
      <div class="menu">
          <input type="checkbox" id="burger-checkbox" class="burger-checkbox" />
          <label for="burger-checkbox" class="burger"></label>
          <ul class="menu-list">
              <li><Link class="menu-item" to="/">Домой</Link></li>
              <li><Link class="menu-item" to="/attractions">Достопримечательности</Link></li>
              <li><Link class="menu-item" to="/contact">Контакты</Link></li>
          </ul>
      </div>
    </header>
  );
};

export default Header;