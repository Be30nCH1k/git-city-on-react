import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import ContactPage from './pages/ContactPage/ContactPage';
import AttractionPage from './pages/AttractionsPage/AttractionsPage';
import AttractionDetail from './components/AttractionsDetail/AttractionsDetail';
import ErrorPage from './pages/ErrorPage/ErrorPage'; // Компонент для отображения ошибок

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <HomePage />,
      errorElement: <ErrorPage />, // Обработка ошибок для этого маршрута
    },
    {
      path: '/contact',
      element: <ContactPage />,
      errorElement: <ErrorPage />, // Обработка ошибок для этого маршрута
    },
    {
      path: '/attractions',
      element: <AttractionPage />,
      errorElement: <ErrorPage />, // Обработка ошибок для этого маршрута
    },
    {
      path: '/attractions/id/:id',
      element: <AttractionDetail />,
      errorElement: <ErrorPage />, // Обработка ошибок для этого маршрута
    },
    {
      path: '*', // Ловит все несуществующие маршруты
      element: <ErrorPage />, // Отображает кастомную страницу 404
    },
  ],
  {
    basename: process.env.PUBLIC_URL || '',
  }
);

export default function Routes() {
  return <RouterProvider router={router} />;
}