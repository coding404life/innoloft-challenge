import { Link } from 'react-router-dom';
import Avatar from './Avatar';

const Sidebar = () => {
  return (
    <aside className="hidden text-black w-60 mt-28 lg:block">
      <nav>
        <Avatar />

        <ul className="mt-5 ml-2">
          <li className="mb-2">
            <Link to="/" className="block transition duration-300 hover:text-blue-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/product" className="block transition duration-300 hover:text-blue-300">
              Product
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
