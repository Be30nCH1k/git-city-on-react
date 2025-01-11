import React, { useState } from 'react';
import './GuaranteesSlider.css';

const GuaranteesSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const guarantees = [
    {
      icon: '/assets/img/setting.svg',
      title: 'Персонализированное соответствие',
      description: 'Наша уникальная система подбора позволяет вам найти именно ту экскурсию, который вам нужен для вашего следующего отдыха.',
    },
    {
      icon: '/assets/img/plant.svg',
      title: 'Широкий выбор экскурсий',
      description: 'Мы предлагаем широкий выбор индивидуально подобранных экскурсий по всему миру.',
    },
    {
      icon: '/assets/img/star.svg',
      title: 'Высококвалифицированный сервис',
      description: 'Наши тур-менеджеры квалифицированы, опытны и дружелюбны, чтобы предоставить вам лучший сервис.',
    },
    {
      icon: '/assets/img/headset.svg',
      title: 'Круглосуточная поддержка',
      description: 'Вы всегда можете получить профессиональную поддержку наших сотрудников 24/7 и задать любой интересующий Вас вопрос.',
    },
    {
      icon: '/assets/img/koshelek.svg',
      title: 'Отобранные отели',
      description: 'Наша команда предлагает нашим клиентам только лучший выбор доступных и роскошных отелей.',
    },
    {
      icon: '/assets/img/fire.svg',
      title: 'Гарантия лучшей цены',
      description: 'Если вы найдете экскурсии дешевле наших, мы компенсируем разницу.',
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % guarantees.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + guarantees.length) % guarantees.length);
  };

  return (
    <section className="slider">
      <h2>Наши Гарантии</h2>
      <div className="wrapper">
        <i id="left" onClick={prevSlide}>
          <img src="/assets/img/left.svg" alt="left" width="50px" height="20px" />
        </i>
        <ul className="carousel">
          {guarantees.map((guarantee, index) => (
            <li className={`card ${index === currentSlide ? 'active' : 'hidden'}`}
              key={index}>
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