import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './error/Error-page';
import Layout from './components/Layout';
import Home from './pages/Home';
import Product from './pages/Product';
import EditProduct from './pages/EditProduct';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/product',
        element: <Product />
      },
      {
        path: '/product/edit',
        element: <EditProduct />
      }
    ]
  }
]);

export default function App() {
  return <RouterProvider router={router} />;
}
