import { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./AttractionsDetail.css";

const AttractionDetail = () => {
    const { id } = useParams();
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [attraction, setAttraction] = useState(null);
    const [loading, setLoading] = useState(true);
    const [reviews, setReviews] = useState([]);
    const [selectedRating, setSelectedRating] = useState(0);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isFullScreen, setIsFullScreen] = useState(false);
    const mapRef = useRef(null);
    const mapInstance = useRef(null); // хранения карты

    // функция рендера карты
    const initMap = (lat, lng) => {
        if (window.ymaps && mapRef.current && !mapInstance.current) {
            const map = new window.ymaps.Map(mapRef.current, {
                center: [lat, lng],
                zoom: 14,
            });

            const placemark = new window.ymaps.Placemark([lat, lng], {
                hintContent: attraction.name,
                balloonContent: attraction.title,
            });

            map.geoObjects.add(placemark);
            mapInstance.current = map;
        }
    };

    // Инициализация карты
    useEffect(() => {
        if (attraction && attraction.lat && attraction.lng) {
            if (!window.ymaps) {
                console.error("Карты не загружены");
                return;
            }

            window.ymaps.ready(() => {
                initMap(attraction.lat, attraction.lng);
            });
        }

        // размонтировании компонента
        return () => {
            if (mapInstance.current) {
                mapInstance.current.destroy();
                mapInstance.current = null;
            }
        };
    });

    // загрузка данных о достопримечательности
    useEffect(() => {
        const fetchAttraction = async () => {
            try {
                const response = await fetch(
                    `https://6729bdac6d5fa4901b6e27f4.mockapi.io/attractions/${id}`,
                );
                const data = await response.json();
                setAttraction(data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchAttraction();
    }, [id, t]);

    // загрузка отзывов
    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await fetch(
                    `https://6729bdac6d5fa4901b6e27f4.mockapi.io/reviews?attractionId=${id}`,
                );
                if (!response.ok) throw new Error("Ошибка загрузки отзывов");
                const data = await response.json();
                setReviews(data);
            } catch (error) {
                console.error(t("reviewsLoadError"), error);
            }
        };

        fetchReviews();
    }, [id, t]);

    const handleAddReview = async (e) => {
        e.preventDefault();
        const author = e.target.reviewAuthor.value;
        const text = e.target.reviewText.value;
        const rating = selectedRating;

        if (!author || !text || !rating) {
            alert(t("fillAllFields"));
            return;
        }

        const newReview = {
            author,
            text,
            rating,
            attractionId: id,
        };

        try {
            const response = await fetch(
                "https://6729bdac6d5fa4901b6e27f4.mockapi.io/reviews",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(newReview),
                },
            );

            if (!response.ok) throw new Error("Ошибка добавления отзыва");
            setReviews([...reviews, newReview]);
            e.target.reset();
            setSelectedRating(0);
        } catch (error) {
            alert(t("addReviewError"), error);
        }
    };

    const handleDeleteReview = async (reviewId) => {
        try {
            const response = await fetch(
                `https://6729bdac6d5fa4901b6e27f4.mockapi.io/reviews/${reviewId}`,
                {
                    method: "DELETE",
                },
            );

            if (!response.ok) throw new Error("Ошибка удаления отзыва");
            setReviews(reviews.filter((review) => review.id !== reviewId));
        } catch (error) {
            alert(t("deleteReviewError"), error);
        }
    };

    const handlePrevImageFullScreen = () => {
        if (attraction && attraction.images) {
            setCurrentImageIndex(
                (prevIndex) =>
                    (prevIndex - 1 + attraction.images.length) %
                    attraction.images.length,
            );
        }
    };

    const handleNextImageFullScreen = () => {
        if (attraction && attraction.images) {
            setCurrentImageIndex(
                (prevIndex) => (prevIndex + 1) % attraction.images.length,
            );
        }
    };

    if (loading) {
        return <div>{t("loading")}</div>;
    }

    if (!attraction) {
        return <div>{t("attractionNotFound")}</div>;
    }

    return (
        <div className="attraction-detail">
            <button
                className="back-btn"
                onClick={() => navigate("/attractions")}
            >
                {t("backToList")}
            </button>
            <h1>{attraction.name}</h1>
            <img src={attraction.image} alt={attraction.name} />
            <p>{attraction.title}</p>

            <div className="modal__gallery">
                {attraction.images.map((image, index) => (
                    <img
                        key={index}
                        className="modal__gallery-item"
                        src={image}
                        alt={`Изображение ${index + 1}`}
                        onClick={() => {
                            setCurrentImageIndex(index);
                            setIsFullScreen(true);
                        }}
                    />
                ))}
            </div>

            {attraction.lat && attraction.lng && (
                <div
                    id="map"
                    ref={mapRef}
                    style={{
                        width: "100%",
                        height: "400px",
                        marginTop: "20px",
                    }}
                ></div>
            )}

            <div className="modal__reviews">
                <h3>{t("reviews")}</h3>
                <div className="reviews-list">
                    {reviews.length > 0 ? (
                        reviews.map((review, index) => (
                            <div key={index} className="review">
                                <div className="review__author">
                                    {review.author}
                                </div>
                                <div className="review__text">
                                    {review.text}
                                </div>
                                <div className="review__rating">
                                    {"★".repeat(review.rating)}
                                    {"☆".repeat(5 - review.rating)}
                                </div>
                                <button
                                    className="review__delete"
                                    onClick={() =>
                                        handleDeleteReview(review.id)
                                    }
                                >
                                    {t("deleteReview")}
                                </button>
                            </div>
                        ))
                    ) : (
                        <div className="no-reviews">{t("noReviews")}</div>
                    )}
                </div>
                <form className="review-form" onSubmit={handleAddReview}>
                    <input
                        type="text"
                        className="review-author"
                        placeholder={t("yourName")}
                        name="reviewAuthor"
                        required
                    />
                    <textarea
                        className="review-text"
                        placeholder={t("yourReview")}
                        name="reviewText"
                        required
                    />
                    <div className="rating">
                        {[1, 2, 3, 4, 5].map((rating) => (
                            <span
                                key={rating}
                                className={`rating__star ${rating <= selectedRating ? "selected" : ""}`}
                                onClick={() => setSelectedRating(rating)}
                            >
                                ★
                            </span>
                        ))}
                    </div>
                    <button type="submit" className="sortName">
                        {t("addReview")}
                    </button>
                </form>
            </div>

            {isFullScreen && (
                <div className="fullscreen-gallery">
                    <button
                        className="close-fullscreen"
                        onClick={() => setIsFullScreen(false)}
                    >
                        ✖
                    </button>
                    <img
                        className="fullscreen-image"
                        src={attraction.images[currentImageIndex]}
                        alt={`Изображение ${currentImageIndex + 1}`}
                    />
                    <button
                        className="gallery-prev-fullscreen"
                        onClick={handlePrevImageFullScreen}
                    >
                        ←
                    </button>
                    <button
                        className="gallery-next-fullscreen"
                        onClick={handleNextImageFullScreen}
                    >
                        →
                    </button>
                </div>
            )}
        </div>
    );
};

export default AttractionDetail;
