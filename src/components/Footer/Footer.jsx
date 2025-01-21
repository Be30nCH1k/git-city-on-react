import { useTranslation } from "react-i18next";
import "./Footer.css";

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="footer">
            <div>
                <ul>
                    <li className="footer__title1">{t("footerContacts")}</li>
                    <li className="footer__text">
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/img/phone.png`}
                            alt="call"
                            width="30px"
                            height="30px"
                        />
                        <p>{t("phoneNumber")}</p>
                    </li>
                    <li className="footer__text">
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/img/pismo.png`}
                            alt="email"
                            width="30px"
                            height="30px"
                        />
                        <p>{t("email")}</p>
                    </li>
                    <li className="footer__text">
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/img/cart.png`}
                            alt="market"
                            width="30px"
                            height="30px"
                        />
                        <p>{t("address")}</p>
                    </li>
                </ul>

                <ul className="footer__title2">
                    <li className="footer__title">
                        <a href="https://be30nch1k.github.io/snake.github.io/">
                            {t("popularNews")}
                        </a>
                    </li>
                    <li className="footer__text">
                        <a
                            className="footer__nav footer__text1"
                            href="https://iz.ru/1757300/2024-09-11/zammera-sergunina-rasskazala-o-samykh-populiarnykh-ekskursiiakh-na-vdnkh"
                        >
                            {t("news1")}
                        </a>
                    </li>
                    <li className="footer__text">
                        <a
                            className="footer__nav footer__text1"
                            href="https://iz.ru/1767613/2024-10-01/moskvichei-i-gostei-goroda-priglasili-na-novyi-sezon-ekskursii-otkroimosprom"
                        >
                            {t("news2")}
                        </a>
                    </li>
                </ul>

                <ul className="footer__title3">
                    <li className="footer__title">{t("quickLinks")}</li>
                    <li>
                        <Link className="footer__nav" to="/">
                            {t("home")}
                        </Link>
                    </li>
                    <li>
                        <Link className="footer__nav" to="/attractions">
                            {t("attractions")}
                        </Link>
                    </li>
                    <li>
                        <Link className="footer__nav" to="/contact">
                            {t("contact")}
                        </Link>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
