import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import "./AttractionList.css";
import MainSectionAttr from "../MainSectionAttr/MainSectionAttr";
import { useTranslation } from "react-i18next";

const AttractionList = () => {
    const { t } = useTranslation();
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [sortOrder, setSortOrder] = useState("asc");
    const mochApi = "https://6729bdac6d5fa4901b6e27f4.mockapi.io/attractions";
    const itemsPerPage = 10;

    const navigate = useNavigate();

    const fetchDataWithCache = async (url) => {
        const cacheKey = `cache_${url}`;
        const cachedData = localStorage.getItem(cacheKey);

        // проверка есть ли данные в кеше и не истекло ли время кеширования
        if (cachedData) {
            const { data, timestamp } = JSON.parse(cachedData);
            const now = new Date().getTime();
            const cacheDuration = 60 * 1000; // 1 минута

            if (now - timestamp < cacheDuration) {
                return data;
            }
        }

        // если данных нет в кеше или кеш истек запрос к серверу
        const response = await fetch(url);
        const data = await response.json();

        localStorage.setItem(
            cacheKey,
            JSON.stringify({ data, timestamp: new Date().getTime() }),
        );

        return data;
    };

    // функция поиска
    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
        setCurrentPage(1);
    };

    // функция сортировки по имени
    const handleSortByName = () => {
        setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    };

    // функция категории
    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
        setCurrentPage(1);
    };

    // загрузка данных с использованием useQuery
    const {
        data: attractions,
        isLoading,
        isError,
    } = useQuery({
        queryKey: ["attractions", currentPage, searchQuery, selectedCategory],
        queryFn: async () => {
            const url = new URL(mochApi);
            url.searchParams.append("page", currentPage);
            url.searchParams.append("limit", itemsPerPage);

            if (searchQuery) {
                url.searchParams.append("name", searchQuery);
            }

            if (selectedCategory) {
                url.searchParams.append("category", selectedCategory);
            }

            const response = await fetch(url);
            const data = await response.json();

            return data.map((item) => ({
                ...item,
                lat: parseFloat(item.lat),
                lng: parseFloat(item.lng),
            }));
        },
    });

    // загрузка категорий useQuery
    const { data: categories } = useQuery({
        queryKey: ["categories"],
        queryFn: async () => {
            const data = await fetchDataWithCache(mochApi);
            return [...new Set(data.map((item) => item.category))];
        },
    });

    // сортировка данных
    const sortedAttractions = React.useMemo(() => {
        if (!attractions) return [];
        return [...attractions].sort((a, b) => {
            if (sortOrder === "asc") {
                return a.name.localeCompare(b.name);
            } else {
                return b.name.localeCompare(a.name);
            }
        });
    }, [attractions, sortOrder]);

    return (
        <section className="info" id="infoSection">
            <MainSectionAttr
                searchQuery={searchQuery}
                handleSearch={handleSearch}
            />

            <h2 className="populyar__title">{t("popularAttractions")}</h2>
            <div>
                <button
                    id="sortName"
                    className="sortName"
                    onClick={handleSortByName}
                >
                    {t("sortByName")} (
                    {sortOrder === "asc" ? t("sortAsc") : t("sortDesc")})
                </button>
                <select
                    id="categoryFilter"
                    onChange={handleCategoryChange}
                    value={selectedCategory}
                >
                    <option value="">{t("filterByCategory")}</option>
                    {categories?.map((category, index) => (
                        <option key={index} value={category}>
                            {category}
                        </option>
                    ))}
                </select>
            </div>
            {isLoading ? (
                <div id="loader" className="loader">
                    <div className="spinner"></div>{" "}
                </div>
            ) : isError ? (
                <div className="ErrorLoad">Проблема загрузки</div>
            ) : (
                <div id="data-list">
                    {sortedAttractions.map((attraction, index) => (
                        <div key={index} className="info__main">
                            <img
                                className="info__img"
                                src={attraction.img}
                                alt={`картинки ${index + 1}`}
                            />
                            <div className="info__box">
                                <div className="info__title">
                                    {attraction.name}
                                </div>
                                <button
                                    className="info__btn"
                                    onClick={() =>
                                        navigate(
                                            `/attractions/id/${attraction.id}`,
                                        )
                                    }
                                >
                                    {t("learnMore")}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
            <div id="pagination">
                {Array.from(
                    { length: Math.ceil(100 / itemsPerPage) },
                    (q, e) => e + 1,
                ).map((page) => (
                    <button key={page} onClick={() => setCurrentPage(page)}>
                        {page}
                    </button>
                ))}
            </div>
        </section>
    );
};

export default AttractionList;
