import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="sticky w-64 mt-20 text-black">
      <nav className="pt-4 pl-6">
        <ul>
          <li className="mb-2">
            <Link to="/" className="block font-semibold transition duration-300 hover:text-blue-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/product" className="block font-semibold transition duration-300 hover:text-blue-300">
              Product
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
