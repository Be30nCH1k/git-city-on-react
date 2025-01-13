import React, { useState } from 'react';
import { useTranslation } from 'react-i18next'; 
import './ContactForm.css';

const ContactForm = () => {
  const { t } = useTranslation(); 
  const [isFormVisible, setFormVisible] = useState(false); // состояние для видимости формы
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('name', name);
    localStorage.setItem('phone', phone);
    localStorage.setItem('text', text);
    setFormVisible(false); // закрыть форму после отправки
  };

  return (
    <section className="container">
      <button className="floating-btn" onClick={() => setFormVisible(!isFormVisible)}>
        {t('contactUs')}
      </button>
      <div className={`social-panel-container ${isFormVisible ? 'visible' : ''}`}>
        <div className="social-panel">
          <button className="close-btn" onClick={() => setFormVisible(false)}>
            &#x2715;
          </button>
          <form className="call__back" id="Form" onSubmit={handleSubmit}>
            <div className="form__call">
              <div>
                <label>
                  {t('nameLabel')} 
                  <span>{t('requiredField')}</span>
                </label>
                <input 
                type="text" 
                name="username" 
                id="name" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                required />
              </div>
              <div>
                <label>
                  {t('phoneLabel')} 
                  <span>{t('requiredField')}</span> 
                </label>
                <input 
                type="number" 
                name="quantity" 
                id="phone" 
                value={phone} 
                onChange={(e) => setPhone(e.target.value)} 
                placeholder={t('phonePlaceholder')}  />
              </div>
              <div>
                <label>{t('messageLabel')}</label> 
                <input
                type="text" 
                id="text" 
                name="question" 
                value={text} 
                onChange={(e) => setText(e.target.value)} />
              </div>
              <input className="send__mail" type="submit" value={t('submitButton')} /> 
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;