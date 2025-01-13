import React, { useState } from 'react';
import { useTranslation } from 'react-i18next'; 
import './GuaranteesSlider.css';

const GuaranteesSlider = () => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);

  const guarantees = t('guarantees', { returnObjects: true }); // массив гарантий

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % guarantees.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + guarantees.length) % guarantees.length);
  };

  return (
    <section className="slider">
      <h2>{t('guaranteesTitle')}</h2>
      <div className="wrapper">
        <i id="left" onClick={prevSlide}>
          <img src="/assets/img/left.svg" alt="left" width="50px" height="20px" />
        </i>
        <ul className="carousel">
          {guarantees.map((guarantee, index) => (
            <li className={`card ${index === currentSlide ? 'active' : 'hidden'}`} key={index}>
              <div className="slider__box">
                <img src={guarantee.icon} alt={guarantee.title} width="40px" height="40px" />
                <div className="slider__text-box">
                  <div>{guarantee.title}</div>
                  <p>{guarantee.description}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <i id="right" onClick={nextSlide}>
          <img src="/assets/img/right.svg" alt="right" width="50px" height="20px" />
        </i>
      </div>
    </section>
  );
};

export default GuaranteesSlider;