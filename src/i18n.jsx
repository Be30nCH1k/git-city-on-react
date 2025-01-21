import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// переводы для разных языков
const resources = {
    en: {
        translation: {
            home: "Home",
            attractions: "Attractions",
            contact: "Contact",

            popularAttractions: "Popular Attractions",
            dramaTheaterTitle: "Drama Theater in Tomsk",
            dramaTheaterDescription:
                "The Tomsk Regional Drama Theater is one of the oldest in Siberia: the first theater building was built in 1850. The activities of the Tomsk drama are inextricably linked with the life and development of the city - a well-known university and cultural center in the country.",
            galileoParkTitle: "Galileo Park of Wonders in Novosibirsk",
            galileoParkDescription: `"Galileo Park of Wonders" in Novosibirsk is an amazing interactive museum that features unique exhibits and structures, incredible illusions, and a huge mirror maze. The operation of all exhibits is based on the laws of physics, mathematics, explanations of how the world works, and demonstrations of the features of the human body.`,
            kemerovoTheaterTitle:
                "Kemerovo Regional Drama Theater named after A. V. Lunacharsky in Kemerovo",
            kemerovoTheaterDescription:
                "The history of the Kemerovo Regional Drama Theater began on November 1, 1934. At that time, the State Drama Theater 'Cultarmeyets Kuzbassa' opened the first theater season with the play 'The Death of the Squadron' based on the play by Alexander Korneichuk, directed by Alexey Larionov.",
            readMore: "Read more",

            popularCitiesTitle: "We have tours in these cities",
            novosibirsk: "Novosibirsk",
            tomsk: "Tomsk",
            kemerovo: "Kemerovo",
            otherTours: "Other tours",

            searchPlaceholder: "What do you want to find?",

            guaranteesTitle: "Our Guarantees",
            guarantees: [
                {
                    icon: "/assets/img/setting.svg",
                    title: "Personalized Matching",
                    description:
                        "Our unique matching system lets you find just the tour you want for your next holiday.",
                },
                {
                    icon: "/assets/img/plant.svg",
                    title: "Wide Variety of Tours",
                    description:
                        "We offer a wide variety of personally picked tours around the globe.",
                },
                {
                    icon: "/assets/img/star.svg",
                    title: "Highly Qualified Service",
                    description:
                        "Our tour managers are qualified, skilled, and friendly to provide you with the best service.",
                },
                {
                    icon: "/assets/img/headset.svg",
                    title: "24/7 Support",
                    description:
                        "You can always get professional support from our staff 24/7 and ask any question you have.",
                },
                {
                    icon: "/assets/img/koshelek.svg",
                    title: "Handpicked Hotels",
                    description:
                        "Our team offers only the best selection of affordable and luxury hotels to our clients.",
                },
                {
                    icon: "/assets/img/fire.svg",
                    title: "Best Price Guarantee",
                    description:
                        "If you find tours cheaper than ours, we will compensate the difference.",
                },
            ],

            footerContacts: "Our Contacts",
            phoneNumber: "+7 (123) 456 78 90",
            email: "info@email.com",
            address: "Novosibirsk, Pushkina St., Kalatushkina House 1A",
            popularNews: "Popular News",
            news1: "Deputy Mayor Sergunina spoke about the most popular tours at VDNKh",
            news2: "Muscovites and city guests are invited to the new season of 'Open#Mosprom' tours",
            quickLinks: "Quick Links",

            phone1: "+7 (123) 456 78 90",
            phone2: "+7 (098) 765 43 21",

            contactUs: "Contact Us",
            nameLabel: "Name",
            phoneLabel: "Phone Number",
            messageLabel: "Message",
            submitButton: "Send Request",
            requiredField: "*",
            phonePlaceholder: "+123456789",

            cityMapTitle: "City Map",

            sortByName: "Sort by Name",
            sortAsc: "A-Z",
            sortDesc: "Z-A",
            filterByCategory: "Filter by Category",
            noCategory: "All Categories",
            learnMore: "Learn More",
            noReviews: "No reviews yet.",
            yourName: "Your Name",
            yourReview: "Your Review",
            addReview: "Add Review",
            deleteReview: "Delete",
            reviews: "Reviews",

            bestTours: "THE BEST TOURS",
            showEveryCorner:
                "We'll show every corner of the city without going in circles",

            backToList: "Back to list",

            loading: "loading",
        },
    },
    ru: {
        translation: {
            home: "Домой",
            attractions: "Достопримечательности",
            contact: "Контакты",

            popularAttractions: "Популярные достопримечательности городов",
            dramaTheaterTitle: "Театр Драмы в Томске",
            dramaTheaterDescription:
                "Томский областной театр драмы - один из старейших в Сибири...",
            galileoParkTitle: "Парк Чудес Галилео в Новосибирске",
            galileoParkDescription:
                '"Парк чудес Галилео" в Новосибирске - это удивительный интерактивный музей...',
            kemerovoTheaterTitle:
                "Кемеровский областной театр драмы имени А. В. Луначарского в Кемерово",
            kemerovoTheaterDescription:
                "История Кемеровского областного театра драмы началась 1 ноября 1934 года...",
            readMore: "Читать больше",
            popularCitiesTitle: "У нас есть экскурсии в этих городах",
            novosibirsk: "Новосибирск",
            tomsk: "Томск",
            kemerovo: "Кемерово",
            otherTours: "Другие экскурсии",

            searchPlaceholder: "Что вы хотите найти?",

            footerContacts: "Наши Контакты",
            phoneNumber: "+7 (123) 456 78 90",
            email: "info@email.com",
            address: "г. Новосибирск, ул. Пушкина, дом Калатушкина 1А",
            popularNews: "Популярные новости",
            news1: "Заммэра Сергунина рассказала о самых популярных экскурсиях на ВДНХ",
            news2: "Москвичей и гостей города пригласили на новый сезон экскурсий «Открой#Моспром»",
            quickLinks: "Быстрые ссылки",

            phone1: "+7 (123) 456 78 90",
            phone2: "+7 (098) 765 43 21",

            contactUs: "Связаться с нами",
            nameLabel: "Имя",
            phoneLabel: "Номер телефона",
            messageLabel: "Сообщение",
            submitButton: "Послать заявку",
            requiredField: "*",
            phonePlaceholder: "+123456789",

            cityMapTitle: "Карта Города",

            sortByName: "Сортировать по алфавиту",
            sortAsc: "А-Я",
            sortDesc: "Я-А",
            filterByCategory: "Фильтр по категориям",
            noCategory: "Все категории",
            learnMore: "Узнать больше",
            loading: "Загрузка...",
            noReviews: "Отзывов пока нет.",
            yourName: "Ваше имя",
            yourReview: "Ваш отзыв",
            addReview: "Добавить отзыв",
            deleteReview: "Удалить",
            reviews: "Отзывы",

            bestTours: "САМЫЕ ЛУЧШИЕ ЭКСКУРСИИ",
            showEveryCorner: "Покажем каждый уголок города не ходя кругами",

            guaranteesTitle: "Наши Гарантии",
            guarantees: [
                {
                    icon: "/assets/img/setting.svg",
                    title: "Персонализированное соответствие",
                    description:
                        "Наша уникальная система подбора позволяет вам найти именно ту экскурсию, который вам нужен для вашего следующего отдыха.",
                },
                {
                    icon: "/assets/img/plant.svg",
                    title: "Широкий выбор экскурсий",
                    description:
                        "Мы предлагаем широкий выбор индивидуально подобранных экскурсий по всему миру.",
                },
                {
                    icon: "/assets/img/star.svg",
                    title: "Высококвалифицированный сервис",
                    description:
                        "Наши тур-менеджеры квалифицированы, опытны и дружелюбны, чтобы предоставить вам лучший сервис.",
                },
                {
                    icon: "/assets/img/headset.svg",
                    title: "Круглосуточная поддержка",
                    description:
                        "Вы всегда можете получить профессиональную поддержку наших сотрудников 24/7 и задать любой интересующий Вас вопрос.",
                },
                {
                    icon: "/assets/img/koshelek.svg",
                    title: "Отобранные отели",
                    description:
                        "Наша команда предлагает нашим клиентам только лучший выбор доступных и роскошных отелей.",
                },
                {
                    icon: "/assets/img/fire.svg",
                    title: "Гарантия лучшей цены",
                    description:
                        "Если вы найдете экскурсии дешевле наших, мы компенсируем разницу.",
                },
            ],
            backToList: "Вернуться назад",
        },
    },
};

i18n.use(initReactI18next).init({
    resources,
    lng: "ru", // по умолчанию
    fallbackLng: "ru", // если перевод не найден
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
