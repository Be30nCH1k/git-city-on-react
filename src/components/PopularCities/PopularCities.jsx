import React from 'react';
import { Link } from 'react-router-dom';
import './PopularCities.css';

const PopularCities = () => {
  return (
    <section className="populyar">
      <div className="populyar__big-box">
        <div className="populyar__title">У нас есть экскурсии в этих городах</div>
        <div className="populyar__block">
          <div className="populyar__box">
            <Link to="/attractions">
              <img className="populyar__item" src="/assets/img/Novosibirsk.png" alt="Novosibirsk" />
            </Link>
            <div className="populyar__city">Новосибирск</div>
          </div>
          <div className="populyar__box">
            <Link to="/attractions">
              <img className="populyar__item" src="/assets/img/Tomsk.jpg" alt="Tomsk" />
            </Link>
            <div className="populyar__city">Томск</div>
          </div>
          <div className="populyar__box">
            <Link to="/attractions">
              <img className="populyar__item" src="/assets/img/Kemerovo.jpg" alt="Kemerovo" />
            </Link>
            <div className="populyar__city">Кемерово</div>
          </div>
        </div>
        <div className="populyar__meta-item">
          <Link to="/attractions">Другие экскурсии <p>→</p></Link>
        </div>
      </div>
    </section>
  );
};

export default PopularCities;