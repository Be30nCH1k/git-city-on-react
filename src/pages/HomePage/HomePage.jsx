import Header from "../../components/Header/Header";
import PopularCities from "../../components/PopularCities/PopularCities";
import PopularAttractions from "../../components/PopularAttractions/PopularAttractions";
import GuaranteesSlider from "../../components/GuaranteesSlider/GuaranteesSlider";
import CityMap from "../../components/CityMap/CityMap";
import Footer from "../../components/Footer/Footer";
import MainHome from "../../components/MainHome/MainHome";

const HomePage = () => {
    return (
        <div className="home-page">
            <Header />
            <MainHome />
            <PopularCities />
            <PopularAttractions />
            <GuaranteesSlider />
            <CityMap />
            <Footer />
        </div>
    );
};

export default HomePage;
