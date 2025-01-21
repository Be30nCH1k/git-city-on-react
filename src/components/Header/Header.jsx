import { Link } from "react-router-dom";
import "./Header.css";
import { useTranslation } from "react-i18next";

const Header = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language); // Изменение языка
    };

    return (
        <header className="header">
            <nav className="header__nav">
                <Link to="/">
                    <img
                        src={`${process.env.PUBLIC_URL}/assets/img/logo.webp`}
                        alt="logo"
                        className="header__img"
                    />
                </Link>
                <ul className="header__list">
                    <li>
                        <Link className="main__btn" to="/">
                            {t("home")}
                        </Link>
                    </li>
                    <li>
                        <Link className="main__btn" to="/attractions">
                            {t("attractions")}
                        </Link>
                    </li>
                    <li>
                        <Link className="main__btn" to="/contact">
                            {t("contact")}
                        </Link>
                    </li>
                </ul>
                <div className="flag">
                    <button onClick={() => changeLanguage("en")}>
                        <img
                            src="https://flagcdn.com/us.svg"
                            alt="English"
                            width="50"
                        />
                    </button>
                    <button onClick={() => changeLanguage("ru")}>
                        <img
                            src="https://flagcdn.com/ru.svg"
                            alt="Русский"
                            width="50"
                        />
                    </button>
                </div>
            </nav>
            <div className="menu">
                <input
                    type="checkbox"
                    id="burger-checkbox"
                    className="burger-checkbox"
                />
                <label htmlFor="burger-checkbox" className="burger"></label>
                <ul className="menu-list">
                    <li>
                        <Link className="menu-item" to="/">
                            {t("home")}
                        </Link>
                    </li>
                    <li>
                        <Link className="menu-item" to="/attractions">
                            {t("attractions")}
                        </Link>
                    </li>
                    <li>
                        <Link className="menu-item" to="/contact">
                            {t("contact")}
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
