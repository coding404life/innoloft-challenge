import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from './Sidebar';
import { useDispatch } from 'react-redux';
import { getProduct } from '../store/reducers/productSlice';
import { useEffect } from 'react';
import { getConfiguration } from '../store/reducers/configurationSlice';

const appId = import.meta.env.VITE_APP_ID ?? 1;

export default function Layout() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct({ productId: '6781' }));
    dispatch(getConfiguration(appId));
  }, [dispatch]);

  return (
    <>
      <Header />

      <div className="container grid mx-auto lg:grid-cols-12">
        <div className="lg:col-span-3">
          <Sidebar />
        </div>

        <main className="mt-20 lg:col-span-9 grow">
          <Outlet />
        </main>
      </div>
    </>
  );
}
