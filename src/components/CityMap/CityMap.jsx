import { useTranslation } from "react-i18next";
import "./MapOnHome.css";
import "./MapOnContact.css";

const CityMap = () => {
    const { t } = useTranslation();

    return (
        <section className="MapOnHome MapOnContact">
            <h2 className="populyar__title">{t("cityMapTitle")}</h2>
            <div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d146572.12996800884!2d82.6376118173874!3d54.96977535273135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x42dfe5e190cc4d97%3A0x9b3a0673e1d3e985!2z0J3QvtCy0L7RgdC40LHQuNGA0YHQuiwg0J3QvtCy0L7RgdC40LHQuNGA0YHQutCw0Y8g0L7QsdC7Lg!5e0!3m2!1sru!2sru!4v1728895093193!5m2!1sru!2sru"
                    width="1500"
                    height="900"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </section>
    );
};

export default CityMap;
