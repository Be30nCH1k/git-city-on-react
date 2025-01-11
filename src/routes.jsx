import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import ContactPage from './pages/ContactPage/ContactPage';
import AttractionPage from './pages/AttractionsPage/AttractionsPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/contact',
    element: <ContactPage />,
  },
  {
    path: '/attractions',
    element: <AttractionPage />,
  },
  
]);

export default function Routes() {
  return <RouterProvider router={router} />;
}