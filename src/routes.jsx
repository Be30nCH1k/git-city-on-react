import { createBrowserRouter } from "react-router-dom";
// константы для путей
const PATHS = {
    HOME: "/",
    CONTACT: "/contact",
    ATTRACTIONS: "/attractions",
    ATTRACTION_DETAIL: "/attractions/id/:id",
};

// cоздание маршрутов
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
            path: "*", // ловит несуществующие маршруты
            element: <ErrorPage />, // отображает страницу 404
        },
    ],
    {
        basename: process.env.PUBLIC_URL || "", // базовый путь
    },
);

export default function Routes() {
    return <RouterProvider router={router} />;
}
