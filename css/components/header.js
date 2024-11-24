// Header.js
import React from 'react';
import './header.css'; // Подключение стилей

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <h1 className="header-title">Мой сайт</h1>
        <nav className="header-nav">
          <ul>
            <li><a href="/">Главная</a></li>
            <li><a href="/about">О нас</a></li>
            <li><a href="/contact">Контакты</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;