import { useTranslation } from "react-i18next";
import "./MainSectionAttr.css";
import PropTypes from "prop-types";

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

MainSection.propTypes = {
    searchQuery: PropTypes.string.isRequired,
    handleSearch: PropTypes.func.isRequired,
};

export default MainSection;
