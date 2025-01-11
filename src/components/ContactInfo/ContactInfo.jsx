import React from 'react';
import './ContactInfo.css';

const ContactInfo = () => {
    return (
        <section className="about">
            <div className="about__main">
                <div>
                    <img src="./assets/img/smartphone.png" alt="" width="100px" height="100px" />
                    <div>
                        <p>+7 (123) 456 78 90</p>
                        <p>+7 (098) 765 43 21</p>
                    </div>
                </div>
            </div>
            <div className="about__main">
                <div>
                    <img src="./assets/img/home.png" alt="" width="100px" height="100px" />
                    <div>
                        <p>Новосибирск, Красный пр-т., 39</p>
                    </div>
                </div>
            </div>
            <div className="about__main">
                <div>
                    <img src="./assets/img/message.png" alt="" width="100px" height="100px" />
                    <div className="about__hr"></div>
                    <div>
                        <p>info@email.com</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactInfo;