import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './AttractionList.css';
import MainSectionAttr from '../MainSectionAttr/MainSectionAttr';
import { useTranslation } from 'react-i18next';

const AttractionList = () => {
  const { t } = useTranslation(); 
  const [selectedAttraction, setSelectedAttraction] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [attractions, setAttractions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [categories, setCategories] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc');
  const mochApi = 'https://6729bdac6d5fa4901b6e27f4.mockapi.io/attractions';
  const itemsPerPage = 10;

  const navigate = useNavigate();

  // Функция поиска
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  // Функция сортировки по имени
  const handleSortByName = () => {
    const sortedAttractions = [...attractions].sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });
    setAttractions(sortedAttractions);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  // Функция категории
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setCurrentPage(1);
  };

  // Функция перелистывание страницы
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Загрузка данных
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const url = new URL(mochApi);
        url.searchParams.append('page', currentPage);
        url.searchParams.append('limit', itemsPerPage);

        if (searchQuery) {
          url.searchParams.append('name', searchQuery);
        }

        if (selectedCategory) {
          url.searchParams.append('category', selectedCategory);
        }

        const response = await fetch(url);
        const data = await response.json();

        if (Array.isArray(data)) {
          const formattedData = data.map((item) => ({
            ...item,
            lat: parseFloat(item.lat),
            lng: parseFloat(item.lng),
          }));
          setAttractions(formattedData);
          setTotalPages(Math.ceil(100 / itemsPerPage));
        }
      } catch {
        console.error(t('dataLoadError'));
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [currentPage, searchQuery, selectedCategory, t]);

  // Загрузка категорий
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(mochApi);
        const data = await response.json();
        const uniqueCategories = [...new Set(data.map((item) => item.category))];
        setCategories(uniqueCategories);
      } catch {
        console.error(t('categoriesLoadError'));
      }
    };

    fetchCategories();
  }, [t]);

  // Функция хеширования
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      const match = hash.match(/id\/(\d+)/);
      if (match) {
        const id = match[1];
        const attraction = attractions.find((a) => a.id === id);
        if (attraction) {
          setSelectedAttraction(attraction);
          setIsModalOpen(true);
        }
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [attractions]);

  return (
    <section className="info" id="infoSection">
      <MainSectionAttr searchQuery={searchQuery} handleSearch={handleSearch} />

      <h2 className="populyar__title">{t('popularAttractions')}</h2>
      <div>
        <button id="sortName" className="sortName" onClick={handleSortByName}>
          {t('sortByName')} ({sortOrder === 'asc' ? t('sortAsc') : t('sortDesc')})
        </button>
        <select id="categoryFilter" onChange={handleCategoryChange} value={selectedCategory}>
          <option value="">{t('filterByCategory')}</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      {loading ? (
        <div id="loader" className="loader"></div>
        ) : (
        <div id="data-list">
          {Array.isArray(attractions) &&
            attractions.map((attraction, index) => (
              <div key={index} className="info__main">
                <img className="info__img" src={attraction.img} alt={`картинки ${index + 1}`} />
                <div className="info__box">
                  <div className="info__title">{attraction.name}</div>
                  <button className="info__btn" onClick={() => navigate(`/attractions/id/${attraction.id}`)}>
                    {t('learnMore')}
                  </button>
                </div>
              </div>
            ))}
        </div>
      )}
      <div id="pagination">
        {Array.from({ length: totalPages }, (q, e) => e + 1).map((page) => (
          <button key={page} onClick={() => handlePageChange(page)}>
            {page}
          </button>
        ))}
      </div>

    
    </section>
  );
};

export default AttractionList;