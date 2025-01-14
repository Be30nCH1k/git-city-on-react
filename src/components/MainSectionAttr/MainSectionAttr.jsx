import React from "react";
import { useTranslation } from "react-i18next";
import "./MainSectionAttr.css";

const MainSection = ({ searchQuery, handleSearch }) => {
    const { t } = useTranslation();

    return (
        <section className="main__section-attr">
            <div className="header__title-attr">
                <h1>{t("attractions")}</h1>
            </div>
            <form className="header__search">
                <input
                    className="header__search-poisk"
                    id="searchInput"
                    type="search"
                    name="text"
                    placeholder={t("searchPlaceholder")}
                    value={searchQuery}
                    onChange={handleSearch}
                />
            </form>
        </section>
    );
};

export default MainSection;
