import React from 'react';
import { Link } from 'react-router-dom'; // Импортируем Link
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <ul>
          <li className="footer__title1">Наши Контакты</li>
          <li className="footer__text">
            <img src="/assets/img/phone.png" alt="call" width="30px" height="30px" />
            <p>+7 (123) 456 78 90</p>
          </li>
          <li className="footer__text">
            <img src="/assets/img/pismo.png" alt="email" width="30px" height="30px" />
            <p>info@email.com</p>
          </li>
          <li className="footer__text">
            <img src="/assets/img/cart.png" alt="market" width="30px" height="30px" />
            <p>г.Новосибирск ул,Пушкина<br />дом Калатушкина 1А</p>
          </li>
        </ul>
        <ul className="footer__title2">
          <li className="footer__title"><a href="https://be30nch1k.github.io/snake.github.io/">Популярные новости</a></li>
          <li className="footer__text">
            <a className="footer__nav footer__text1" href="https://iz.ru/1757300/2024-09-11/zammera-sergunina-rasskazala-o-samykh-populiarnykh-ekskursiiakh-na-vdnkh">
              Заммэра Сергунина рассказала о самых популярных экскурсиях на ВДНХ
            </a>
          </li>
          <li className="footer__text">
            <a className="footer__nav footer__text1" href="https://iz.ru/1767613/2024-10-01/moskvichei-i-gostei-goroda-priglasili-na-novyi-sezon-ekskursii-otkroimosprom">
              Москвичей и гостей города пригласили на новый сезон экскурсий «Открой#Моспром»
            </a>
          </li>
        </ul>
        <ul className="footer__title3">
          <li className="footer__title">Быстрые ссылки</li>
          <li><Link className="footer__nav" to="/">Домой</Link></li>
          <li><Link className="footer__nav" to="/attractions">Достопримечательности</Link></li>
          <li><Link className="footer__nav" to="/contact">Контакты</Link></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;