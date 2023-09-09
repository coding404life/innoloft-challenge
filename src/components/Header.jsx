import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './icons/Logo';
import { useSelector } from 'react-redux';
import SideDrawer from '../components/SideDrawer';

const logoFillColor = '#fff';

const Header = () => {
  const { configurationData } = useSelector((state) => state.configuration);
  const [isSideDrawerOpen, setIsSideDrawerOpen] = useState(false);

  const toggleSideDrawer = () => {
    setIsSideDrawerOpen(!isSideDrawerOpen);
  };

  return (
    <header className={`fixed z-50 w-full p-4 ${!configurationData && 'bg-blue-900'}`} style={{ background: configurationData?.mainColor }}>
      <div className="container flex items-center justify-between mx-auto">
        <Link to="/" className="text-2xl font-semibold text-white">
          <Logo className="w-auto h-8" logofill={logoFillColor} switchfill={logoFillColor} />
        </Link>

        <button className="flex flex-col p-2 text-white bg-blue-500 rounded-md top-4 left-4 lg:hidden" onClick={toggleSideDrawer}>
          <div className="w-6 h-1 mb-1 bg-white"></div>
          <div className="w-6 h-1 mb-1 bg-white"></div>
          <div className="w-6 h-1 bg-white"></div>
        </button>
        <SideDrawer isSideDrawerOpen={isSideDrawerOpen} setIsSideDrawerOpen={setIsSideDrawerOpen} />
      </div>
    </header>
  );
};

export default Header;
