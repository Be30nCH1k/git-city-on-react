import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './AttractionList.css';
import MainSectionAttr from '../MainSectionAttr/MainSectionAttr';

const AttractionList = () => {
    const [attractions, setAttractions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [categories, setCategories] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedAttraction, setSelectedAttraction] = useState(null);
    const [reviews, setReviews] = useState([]);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isFullScreen, setIsFullScreen] = useState(false);
    const [sortOrder, setSortOrder] = useState('asc');
    const [selectedRating, setSelectedRating] = useState(0);

    const mochApi = 'https://6729bdac6d5fa4901b6e27f4.mockapi.io/attractions';
    const itemsPerPage = 10;

    const navigate = useNavigate();
    const mapRef = useRef(null);

    // Функция для обработки поиска
    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
        setCurrentPage(1);
    };

    // Функция для сортировки по имени
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

    // Функция для изменения категории
    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
        setCurrentPage(1);
    };

    // Функция для изменения страницы
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    // Функция для открытия модального окна
    const openModal = (attraction) => {
        setSelectedAttraction(attraction);
        setIsModalOpen(true);
        setCurrentImageIndex(0);
        navigate(`/attractions#id/${attraction.id}`);
    };

    // Функция для закрытия модального окна
    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedAttraction(null);
        navigate('/attractions');
    };

    // Функция для открытия полноэкранного режима
    const openFullScreen = (index) => {
        setCurrentImageIndex(index);
        setIsFullScreen(true);
    };

    // Функция для закрытия полноэкранного режима
    const closeFullScreen = () => {
        setIsFullScreen(false);
    };

    // Функция для удаления отзыва
    const handleDeleteReview = async (reviewId) => {
        try {
            const response = await fetch(`https://6729bdac6d5fa4901b6e27f4.mockapi.io/reviews/${reviewId}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                setReviews(reviews.filter(review => review.id !== reviewId));
            } else {
                alert('Ошибка при удалении отзыва.');
            }
        } catch (error) {
            console.error('Ошибка при удалении отзыва:', error);
        }
    };

    // Функция для добавления отзыва
    const handleAddReview = async (e) => {
        e.preventDefault();
        const author = e.target.reviewAuthor.value;
        const text = e.target.reviewText.value;
        const rating = selectedRating;

        if (!author || !text || !rating) {
            alert('Пожалуйста, заполните все поля и выберите рейтинг.');
            return;
        }

        const newReview = {
            author,
            text,
            rating,
            attractionId: selectedAttraction.id,
        };

        try {
            const response = await fetch('https://6729bdac6d5fa4901b6e27f4.mockapi.io/reviews', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newReview),
            });

            if (response.ok) {
                setReviews([...reviews, newReview]);
                e.target.reset();
                setSelectedRating(0);
            } else {
                alert('Ошибка при добавлении отзыва.');
            }
        } catch (error) {
            console.error('Ошибка при добавлении отзыва:', error);
        }
    };

    // Функция для обработки клика по рейтингу
    const handleRatingClick = (rating) => {
        setSelectedRating(rating);
    };

    // Функция для перехода к предыдущему изображению в полноэкранном режиме
    const handlePrevImageFullScreen = () => {
        if (selectedAttraction && selectedAttraction.images) {
            setCurrentImageIndex((prevIndex) =>
                (prevIndex - 1 + selectedAttraction.images.length) % selectedAttraction.images.length
            );
        }
    };

    // Функция для перехода к следующему изображению в полноэкранном режиме
    const handleNextImageFullScreen = () => {
        if (selectedAttraction && selectedAttraction.images) {
            setCurrentImageIndex((prevIndex) =>
                (prevIndex + 1) % selectedAttraction.images.length
            );
        }
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
                    const formattedData = data.map(item => ({
                        ...item,
                        lat: parseFloat(item.lat),
                        lng: parseFloat(item.lng),
                    }));
                    setAttractions(formattedData);
                    setTotalPages(Math.ceil(100 / itemsPerPage));
                } else {
                    console.error('Ошибка: данные не являются массивом', data);
                    setAttractions([]);
                }
            } catch (error) {
                console.error('Ошибка при загрузке данных:', error);
                setAttractions([]);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [currentPage, searchQuery, selectedCategory]);

    // Загрузка категорий
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch(mochApi);
                const data = await response.json();
                const uniqueCategories = [...new Set(data.map(item => item.category))];
                setCategories(uniqueCategories);
            } catch (error) {
                console.error('Ошибка при загрузке категорий:', error);
            }
        };

        fetchCategories();
    }, []);

    // Загрузка отзывов
    useEffect(() => {
        const fetchReviews = async () => {
            if (selectedAttraction) {
                try {
                    const response = await fetch(`https://6729bdac6d5fa4901b6e27f4.mockapi.io/reviews?attractionId=${selectedAttraction.id}`);
                    const data = await response.json();

                    if (Array.isArray(data)) {
                        setReviews(data);
                    } else {
                        console.error('Ошибка: данные отзывов не являются массивом', data);
                        setReviews([]);
                    }
                } catch (error) {
                    console.error('Ошибка при загрузке отзывов:', error);
                    setReviews([]);
                }
            }
        };

        fetchReviews();
    }, [selectedAttraction]);

    // Обработка изменения якорной ссылки
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

            <h2 className="populyar__title">Популярные достопримечательности городов</h2>
            <div>
                <button id="sortName" className="sortName" onClick={handleSortByName}>
                    Сортировать по алфавиту ({sortOrder === 'asc' ? 'А-Я' : 'Я-А'})
                </button>
                <select id="categoryFilter" onChange={handleCategoryChange} value={selectedCategory}>
                    <option value="">Фильтр по категориям</option>
                    {categories.map((category, index) => (
                        <option key={index} value={category}>{category}</option>
                    ))}
                </select>
            </div>
            {loading ? (
                <div id="loader" className="loader"></div>
            ) : (
                <div id="data-list">
                    {Array.isArray(attractions) && attractions.map((attraction, index) => (
                        <div key={index} className="info__main">
                            <img className="info__img" src={attraction.img} alt={`картинки ${index + 1}`} />
                            <div className="info__box">
                                <div className="info__title">{attraction.name}</div>
                                <button className="info__btn" onClick={() => openModal(attraction)}>
                                    Узнать больше
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
            <div id="pagination">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                    <button key={page} onClick={() => handlePageChange(page)}>{page}</button>
                ))}
            </div>

            {isModalOpen && selectedAttraction && selectedAttraction.images && (
                <div className="social-panel-container visible">
                    <div className="social-panel">
                        <button className="close-btn" onClick={closeModal}>&#x2715;</button>
                        <div className="modal__base">
                            <div>
                                <div className="modal__title">{selectedAttraction.name}</div>
                                <div className="modal__box">
                                    <div className="modal__text">{selectedAttraction.title}</div>
                                </div>
                                <div className="modal__gallery">
                                    {selectedAttraction.images.map((image, index) => (
                                        <img
                                            key={index}
                                            className="modal__gallery-item"
                                            src={image}
                                            alt={`Изображение ${index + 1}`}
                                            onClick={() => openFullScreen(index)}
                                        />
                                    ))}
                                </div>
                                {selectedAttraction.lat && selectedAttraction.lng ? (
                                    <div ref={mapRef} id="map" style={{ width: '100%', height: '300px' }}></div>
                                ) : (
                                    <div>Координаты не найдены.</div>
                                )}
                            </div>
                            <div className="modal__reviews">
                                <h3>Отзывы</h3>
                                <div className="reviews-list">
                                    {Array.isArray(reviews) && reviews.length > 0 ? (
                                        reviews.map((review, index) => (
                                            <div key={index} className="review">
                                                <div className="review__author">{review.author}</div>
                                                <div className="review__text">{review.text}</div>
                                                <div className="review__rating">
                                                    {'★'.repeat(review.rating)}
                                                    {'☆'.repeat(5 - review.rating)}
                                                </div>
                                                <button
                                                    className="review__delete"
                                                    onClick={() => handleDeleteReview(review.id)}
                                                >
                                                    Удалить
                                                </button>
                                            </div>
                                        ))
                                    ) : (
                                        <div className="no-reviews">Отзывов пока нет.</div>
                                    )}
                                </div>
                                <form className="review-form" onSubmit={handleAddReview}>
                                    <input
                                        type="text"
                                        className="review-author"
                                        placeholder="Ваше имя"
                                        name="reviewAuthor"
                                        required
                                    />
                                    <textarea
                                        className="review-text"
                                        placeholder="Ваш отзыв"
                                        name="reviewText"
                                        required
                                    />
                                    <div className="rating">
                                        {[1, 2, 3, 4, 5].map((rating) => (
                                            <span
                                                key={rating}
                                                className={`rating__star ${rating <= selectedRating ? 'selected' : ''}`}
                                                onClick={() => handleRatingClick(rating)}
                                            >
                                                ★
                                            </span>
                                        ))}
                                    </div>
                                    <button type="submit" className="sortName">Добавить отзыв</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {isFullScreen && selectedAttraction && selectedAttraction.images && (
                <div className="fullscreen-gallery">
                    <button className="close-fullscreen" onClick={closeFullScreen}>&#x2715;</button>
                    <img
                        className="fullscreen-image"
                        src={selectedAttraction.images[currentImageIndex]}
                        alt={`Изображение ${currentImageIndex + 1}`}
                    />
                    <button className="gallery-prev-fullscreen" onClick={handlePrevImageFullScreen}>&#10094;</button>
                    <button className="gallery-next-fullscreen" onClick={handleNextImageFullScreen}>&#10095;</button>
                </div>
            )}
        </section>
    );
};

export default AttractionList;