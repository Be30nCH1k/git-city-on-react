import React from 'react';
import './MainSectionAttr.css';

const MainSection = ({ searchQuery, handleSearch }) => {
    return (
        <section className="main__section-attr">
            <div className="header__title-attr">
                <h1>Достопримечательности</h1>
            </div>
            <form className="header__search">
                <input
                    className="header__search-poisk"
                    id="searchInput"
                    type="search"
                    name="text"
                    placeholder="Что вы хотите найти?"
                    value={searchQuery}
                    onChange={handleSearch}
                />
            </form>
        </section>
    );
};

export default MainSection;