import "./MainHome.css";
import { useTranslation } from "react-i18next";

const MainHome = () => {
    const { t } = useTranslation();

    return (
        <section className="main__section">
            <div id="main__slider">
                <img
                    className="main__img"
                    src={`${process.env.PUBLIC_URL}/assets/backroundImg/main_backgroud-darken.jpg`}
                    alt=""
                />
                <img
                    className="main__img"
                    src={`${process.env.PUBLIC_URL}/assets/backroundImg/86-photoaidcom-darken.jpg`}
                    alt=""
                />
                <img
                    className="main__img"
                    src={`${process.env.PUBLIC_URL}/assets/backroundImg/orig-photoaidcom-darken.jpg`}
                    alt=""
                />
            </div>
            <div className="header__title">
                <h1>{t("bestTours")}</h1>
                <div>{t("showEveryCorner")}</div>
            </div>
        </section>
    );
};
export default MainHome;
