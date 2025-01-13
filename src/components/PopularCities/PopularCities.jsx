import React from 'react';
import { Link } from 'react-router-dom';
import './PopularCities.css';
import { useTranslation } from 'react-i18next';

const PopularCities = () => {
  const { t } = useTranslation();

  return (
    <section className="populyar">
      <div className="populyar__big-box">
        <div className="populyar__title">{t('popularCitiesTitle')}</div>
        <div className="populyar__block">
          <div className="populyar__box">
            <Link to="/attractions">
              <img className="populyar__item" src="/assets/img/Novosibirsk.png" alt={t('novosibirsk')} />
            </Link>
            <div className="populyar__city">{t('novosibirsk')}</div>
          </div>
          <div className="populyar__box">
            <Link to="/attractions">
              <img className="populyar__item" src="/assets/img/Tomsk.jpg" alt={t('tomsk')} />
            </Link>
            <div className="populyar__city">{t('tomsk')}</div>
          </div>
          <div className="populyar__box">
            <Link to="/attractions">
              <img className="populyar__item" src="/assets/img/Kemerovo.jpg" alt={t('kemerovo')} />
            </Link>
            <div className="populyar__city">{t('kemerovo')}</div>
          </div>
        </div>
        <div className="populyar__meta-item">
          <Link to="/attractions">{t('otherTours')} <p>→</p></Link>
        </div>
      </div>
    </section>
  );
};

export default PopularCities;