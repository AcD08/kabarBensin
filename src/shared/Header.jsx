import React from 'react';
import { FaGasPump } from 'react-icons/fa';

const Header = () => {
  return (
    <nav className="p-5 bg-slate-800 border-gray-200 w-full md:w-full lg:w-full 2xl:w-full rounded sm:w-full 5xl:w-full">
      <div className="container flex flex-wrap justify-center">
        <span className="text-xl font-semibold whitespace-nowrap text-white">
          KabarBens
          <FaGasPump size={10} className="inline-block" />n
        </span>
        <button
          data-collapse-toggle="navbar-solid-bg"
          type="button"
          className="inline-flex justify-center items-center ml-3 text-gray-400 rounded-lg md:hidden hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:text-gray-400 dark:hover:text-white dark:focus:ring-gray-500"
          aria-controls="navbar-solid-bg"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div
          className="hidden w-full md:block md:w-auto ml-10"
          id="navbar-solid-bg"
        >
          <ul className="flex flex-col mt-4 bg-gray-50 rounded-lg md:flex-row md:space-x-3 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent">
            <li>
              <a
                href="/"
                className="block py-2 pr-4 pl-3 text-white bg-blue-600 rounded md:bg-transparent md:text-blue-700 md:p-1 dark:bg-blue-600 font-bold uppercase "
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/"
                className="block py-2 pr-4 pl-3 text-gray-400 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-1 font-bold uppercase "
              >
                Kalkulator Harga
              </a>
            </li>
            <li>
              <a
                href="/"
                className="block py-2 pr-4 pl-3 text-gray-400 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-1 font-bold   "
              >
                FAQ
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
