import React from 'react';
import './PopularAttractions.css';
import { useTranslation } from 'react-i18next';

const PopularAttractions = () => {
  const { t } = useTranslation();

  return (
    <section className="info">
      <h2 className="populyar__title">{t('popularAttractions')}</h2>
      <div className="info__main">
        <div className="info__box-img">
          <img className="info__img" src="/assets/img/teatr.png" alt={t('dramaTheaterTitle')} />
        </div>
        <div className="info__box">
          <div className="info__title">{t('dramaTheaterTitle')}</div>
          <p className="info__text">{t('dramaTheaterDescription')}</p>
          <button className="info__btn">
            <a href="/sight/attraction.html">{t('readMore')}</a>
          </button>
        </div>
      </div>
      <div className="info__main">
        <div className="info__box-img">
          <img className="info__img" src="/assets/img/galileo.jpg" alt={t('galileoParkTitle')} />
        </div>
        <div className="info__box">
          <div className="info__title">{t('galileoParkTitle')}</div>
          <p className="info__text">{t('galileoParkDescription')}</p>
          <button className="info__btn">
            <a href="/sight/attraction.html">{t('readMore')}</a>
          </button>
        </div>
      </div>
      <div className="info__main">
        <div className="info__box-img">
          <img className="info__img" src="/assets/img/teatr2.jpg" alt={t('kemerovoTheaterTitle')} />
        </div>
        <div className="info__box">
          <div className="info__title">{t('kemerovoTheaterTitle')}</div>
          <p className="info__text">{t('kemerovoTheaterDescription')}</p>
          <button className="info__btn">
            <a href="/sight/attraction.html">{t('readMore')}</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default PopularAttractions;