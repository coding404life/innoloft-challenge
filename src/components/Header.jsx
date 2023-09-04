import { Link } from 'react-router-dom';
import LogoSVG from '../assets/logo.svg';

const Header = () => {
  return (
    <header className="bg-blue-900 p-4 fixed w-full">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-white text-2xl font-semibold">
          <img src={LogoSVG} alt="Logo" className="h-8 w-auto" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
