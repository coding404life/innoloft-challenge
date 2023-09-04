import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from './Sidebar';

export default function Layout() {
  return (
    <>
      <Header />

      <div className="flex ">
        <div className="">
          <Sidebar />
        </div>

        <main className="relative top-20 grow ">
          <Outlet />
        </main>
      </div>
    </>
  );
}
