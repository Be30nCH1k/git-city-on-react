import React from 'react';
import './PopularAttractions.css';

const PopularAttractions = () => {
  return (
    <section className="info">
      <h2 className="populyar__title">Популярные достопримечательности городов</h2>
      <div className="info__main">
        <div className="info__box-img">
          <img className="info__img" src="/assets/img/teatr.png" alt="Театр Драммы в Томске" />
        </div>
        <div className="info__box">
          <div className="info__title">Театр Драммы в Томске</div>
          <p className="info__text">
            Томский областной театр драмы - один из старейших в Сибири: первое театральное здание было построено в 1850 году. Деятельность томской драмы неразрывно связана с жизнью и развитием города - известного в стране вузовского и культурного центра.
          </p>
          <button className="info__btn">
            <a href="/sight/attraction.html">Читать больше</a>
          </button>
        </div>
      </div>
      <div className="info__main">
        <div className="info__box-img">
          <img className="info__img" src="/assets/img/galileo.jpg" alt="Парк Чудес Галилео в Новосибирске" />
        </div>
        <div className="info__box">
          <div className="info__title">Парк Чудес Галилео в Новосибирске</div>
          <p className="info__text">
            "Парк чудес Галилео" в Новосибирске - это удивительный интерактивный музей, в котором представлены уникальные экспонаты и конструкции, невероятные иллюзии и огромный зеркальный лабиринт. Работа всех экспонатов основана на законах физики, математики, объяснении как устроен окружающий мир и демонстрации особенностей человеческого организма.
          </p>
          <button className="info__btn">
            <a href="/sight/attraction.html">Читать больше</a>
          </button>
        </div>
      </div>
      <div className="info__main">
        <div className="info__box-img">
          <img className="info__img" src="/assets/img/teatr2.jpg" alt="Кемеровский областной театр драмы" />
        </div>
        <div className="info__box">
          <div className="info__title">Кемеровский областной театр драмы имени А. В. Луначарского в Кемерово</div>
          <p className="info__text">
            История Кемеровского областного театра драмы началась 1 ноября 1934 года. Тогда ещё Государственный театр драмы «Культармеец Кузбасса» открыл первый театральный сезон спектаклем «Гибель эскадры» по пьесе Александра Корнейчука в постановке Алексея Ларионова.
          </p>
          <button className="info__btn">
            <a href="/sight/attraction.html">Читать больше</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default PopularAttractions;