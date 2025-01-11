import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
    const [isFormVisible, setFormVisible] = useState(false); // Состояние для видимости формы
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('name', name);
        localStorage.setItem('phone', phone);
        localStorage.setItem('text', text);
        console.log('Имя:', name);
        console.log('Номер телефона:', phone);
        console.log('Текст:', text);
        setFormVisible(false); // Закрыть форму после отправки
    };

    return (
        <section className="container">
            <button className="floating-btn" onClick={() => setFormVisible(!isFormVisible)}>
                Связаться с нами
            </button>
            <div className={`social-panel-container ${isFormVisible ? 'visible' : ''}`}>
                <div className="social-panel">
                    <button className="close-btn" onClick={() => setFormVisible(false)}>
                        &#x2715;
                    </button>
                    <form className="obratnuj__zvonok" id="Form" onSubmit={handleSubmit}>
                        <div className="form__zvonok">
                            <div>
                                <label>Имя<span>*</span></label>
                                <input
                                    type="text"
                                    name="username"
                                    id="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <label>Номер телефона<span>*</span></label>
                                <input
                                    type="number"
                                    name="quantity"
                                    id="phone"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    placeholder="+123456789"
                                />
                            </div>
                            <div>
                                <label>Сообщение</label>
                                <input
                                    type="text"
                                    id="text"
                                    name="question"
                                    value={text}
                                    onChange={(e) => setText(e.target.value)}
                                />
                            </div>
                            <input className="send__mail" type="submit" value="Послать заявку" />
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;