import React from "react";
import { useTranslation } from "react-i18next";
import Header from "../../components/Header/Header";
import PopularCities from "../../components/PopularCities/PopularCities";
import PopularAttractions from "../../components/PopularAttractions/PopularAttractions";
import GuaranteesSlider from "../../components/GuaranteesSlider/GuaranteesSlider";
import CityMap from "../../components/CityMap/CityMap";
import Footer from "../../components/Footer/Footer";

const HomePage = () => {
    const { t } = useTranslation();

    return (
        <div className="home-page">
            <Header />
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
            <PopularCities />
            <PopularAttractions />
            <GuaranteesSlider />
            <CityMap />
            <Footer />
        </div>
    );
};

export default HomePage;
