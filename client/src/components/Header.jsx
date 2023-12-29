import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="bg-orange-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-2xl flex flex-wrap">
            <span className="text-orange-500">Real</span>
            <span className="text-orange-700">Estate</span>
          </h1>
        </Link>
        <form className="bg-orange-100 p-3 rounded-lg flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <FaSearch className="text-orange-700" />
        </form>
        <ul className="flex gap-4">
          <Link to="/">
            <li className="hidden sm:inline sm:text-xl  hover:text-orange-500 text-orange-700 hover:underline">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="hidden sm:inline sm:text-xl hover:text-orange-500 text-orange-700 hover:underline">
              About
            </li>
          </Link>
          <Link to="sign-in">
            <li className="sm:text-xl  hover:text-orange-500 text-orange-700 hover:underline">
              Sign In
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
};
export default Header;
