import React from "react";
import Header from "../../components/Header/Header";
import AttractionList from "../../components/Attraction/AttractionList";
import Footer from "../../components/Footer/Footer";

const AttractionPage = () => {
    return (
        <div>
            <Header />
            <AttractionList />
            <Footer />
        </div>
    );
};

export default AttractionPage;
