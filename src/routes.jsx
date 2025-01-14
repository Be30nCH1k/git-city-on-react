import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ContactPage from "./pages/ContactPage/ContactPage";
import AttractionPage from "./pages/AttractionsPage/AttractionsPage";
import AttractionDetail from "./components/AttractionsDetail/AttractionsDetail";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

// Константы для путей
const PATHS = {
    HOME: "/",
    CONTACT: "/contact",
    ATTRACTIONS: "/attractions",
    ATTRACTION_DETAIL: "/attractions/id/:id",
};

// Создание маршрутов
const router = createBrowserRouter(
    [
        {
            path: PATHS.HOME,
            element: <HomePage />,
        },
        {
            path: PATHS.CONTACT,
            element: <ContactPage />,
        },
        {
            path: PATHS.ATTRACTIONS,
            element: <AttractionPage />,
        },
        {
            path: PATHS.ATTRACTION_DETAIL,
            element: <AttractionDetail />,
        },
        {
            path: "*", // Ловит все несуществующие маршруты
            element: <ErrorPage />, // Отображает кастомную страницу 404
        },
    ],
    {
        basename: process.env.PUBLIC_URL || "", // Указываем базовый путь
    },
);

// Компонент Routes
export default function Routes() {
    return <RouterProvider router={router} />;
}
