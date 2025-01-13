import React from 'react';
import { useTranslation } from 'react-i18next'; 
import './ContactInfo.css';

const ContactInfo = () => {
  const { t } = useTranslation();

  return (
    <section className="about">
      <div className="about__main">
        <div>
          <img src="./assets/img/smartphone.png" alt="phone" width="100px" height="100px" />
          <div>
            <p>{t('phone1')}</p>
            <p>{t('phone2')}</p>
          </div>
        </div>
      </div>

      <div className="about__main">
        <div>
          <img src="./assets/img/home.png" alt="address" width="100px" height="100px" />
          <div>
            <p>{t('address')}</p>
          </div>
        </div>
      </div>

      <div className="about__main">
        <div>
          <img src="./assets/img/message.png" alt="email" width="100px" height="100px" />
          <div className="about__hr"></div>
          <div>
            <p>{t('email')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;