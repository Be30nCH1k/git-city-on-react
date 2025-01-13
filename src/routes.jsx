import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import ContactPage from './pages/ContactPage/ContactPage';
import AttractionPage from './pages/AttractionsPage/AttractionsPage';
import AttractionDetail from './components/AttractionsDetail/AttractionsDetail';

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
  {
    path: '/attractions/id/:id',
    element: <AttractionDetail />,
  }
  
]);

export default function Routes() {
  return <RouterProvider router={router} />;
}