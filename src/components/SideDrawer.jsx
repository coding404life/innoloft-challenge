/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

function SideDrawer({ isSideDrawerOpen, setIsSideDrawerOpen }) {
  const toggleSideDrawer = () => {
    setIsSideDrawerOpen(!isSideDrawerOpen);
  };

  return (
    <div
      className={`fixed top-0 z-50 right-0 h-full w-64 bg-blue-900 text-white transform ${
        isSideDrawerOpen ? 'translate-x-0' : 'translate-x-full'
      } transition-transform duration-300 ease-in-out`}
    >
      <div className="p-4">
        <button className="float-right mt-2 mr-2 text-white" onClick={toggleSideDrawer}>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="mt-10">
          <ul className="flex flex-col text-center ">
            <li className="mb-2">
              <Link to="/" className="block transition duration-300 hover:text-blue-300" onClick={toggleSideDrawer}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/product" className="block transition duration-300 hover:text-blue-300" onClick={toggleSideDrawer}>
                Product
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SideDrawer;
