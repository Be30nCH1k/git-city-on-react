import React from "react";
import Header from "../../components/Header/Header";
import ContactInfo from "../../components/ContactInfo/ContactInfo";
import ContactForm from "../../components/ContactForm/ContactForm";
import Footer from "../../components/Footer/Footer";
import CityMap from "../../components/CityMap/CityMap";

const ContactPage = () => {
    return (
        <div>
            <Header />
            <CityMap />
            <ContactInfo />
            <ContactForm />
            <Footer />
        </div>
    );
};

export default ContactPage;
