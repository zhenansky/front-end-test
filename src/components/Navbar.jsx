import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full bg-[#090617] h-auto md:h-32 text-white shadow-md">
      <div className="container w-full h-full mx-auto py-4 px-4 md:pb-5 flex flex-col md:flex-row items-center justify-between">
        <div className="w-full flex flex-row items-center justify-between md:justify-normal">
          <div className="text-xl font-semibold mr-0 md:mr-24">
            <Link to="/">
              <img src={Logo} alt="pluit sakti" className="h-12 md:h-auto" />
            </Link>
          </div>

          {/* Hamburger Button */}
          <button
            className="md:hidden flex items-center"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:flex-row md:gap-28 items-center">
            <ul className="flex space-x-6">
              <li>
                <Link
                  to="/sedang-tayang"
                  className="hover:text-gray-300 transition duration-200"
                >
                  Sedang Tayang
                </Link>
              </li>
              <li>
                <Link
                  to="/terpopuler"
                  className="hover:text-gray-300 transition duration-200"
                >
                  Terpopuler
                </Link>
              </li>
              <li>
                <Link
                  to="/mendatang"
                  className="hover:text-gray-300 transition duration-200"
                >
                  Mendatang
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Mobile Navigation - Slides down when menu is open */}
        <div
          className={`${
            isMenuOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
          } md:hidden w-full overflow-hidden transition-all duration-300 ease-in-out`}
        >
          <ul className="flex flex-col space-y-4 pt-4 pb-2">
            <li>
              <Link
                to="/sedang-tayang"
                className="hover:text-gray-300 transition duration-200 block"
                onClick={() => setIsMenuOpen(false)}
              >
                Sedang Tayang
              </Link>
            </li>
            <li>
              <Link
                to="/terpopuler"
                className="hover:text-gray-300 transition duration-200 block"
                onClick={() => setIsMenuOpen(false)}
              >
                Terpopuler
              </Link>
            </li>
            <li>
              <Link
                to="/mendatang"
                className="hover:text-gray-300 transition duration-200 block"
                onClick={() => setIsMenuOpen(false)}
              >
                Mendatang
              </Link>
            </li>
          </ul>
        </div>

        {/* Search Bar */}
        <div className="search mt-4 md:mt-0 w-full md:w-auto">
          <Link to="/cari-film">
            <form className="max-w-md mx-auto">
              <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div className="relative w-full lg:w-72">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="w-full p-4 ps-10 text-sm text-slate-500 border-b-2 border-slate-500 bg-transparent outline-0 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Cari Film...."
                  required
                />
              </div>
            </form>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
