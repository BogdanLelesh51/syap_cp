import React, { useState } from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "../смена темы/Theme";

interface HeaderProps {
  logoSrc: string;
}

const Header: React.FC<HeaderProps> = ({ logoSrc }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-red-800 text-white shadow-md dark:bg-gray-800 dark:text-gray-100 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Логотип */}
          <div className="flex items-center">
            <img
              src={logoSrc}
              alt="Логотип"
              className="h-8 w-10 object-contain filter dark:brightness-0 dark:invert"
            />
            <span className="text-xl md:text-2xl font-bold ml-2">
              FitnessBoom
            </span>
          </div>

          {/* Мобильная кнопка меню */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-red-200 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
          <nav className="hidden md:flex space-x-8 items-center">
            <Link
              to="/"
              className="hover:text-red-200 transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              О нас
            </Link>
            <Link
              to="/Price"
              className="hover:text-red-200 transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              Прайс
            </Link>
            <Link
              to="/action" // Изменено на правильный маршрут для акций
              className="hover:text-red-200 transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              Акции
            </Link>
            <Link
              to="/contacts" // Предположим, что у вас есть страница контактов
              className="hover:text-red-200 transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              Контакты
            </Link>
            <Link
              to="/profile" // Предположим, что у вас есть страница личного кабинета
              className="hover:text-red-200 transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              Личный кабинет
            </Link>
          </nav>

          {/* Кнопка смены темы (десктоп) */}
          <div className="hidden md:flex items-center">
            <ThemeToggle />
          </div>
        </div>

        {/* Мобильное меню */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:hidden bg-red-900 dark:bg-gray-700`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-red-800 hover:text-red-200 transition-colors duration-300 dark:hover:bg-gray-600"
              onClick={() => setIsOpen(false)}
            >
              О нас
            </Link>
            <Link
              to="/Price"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-red-800 hover:text-red-200 transition-colors duration-300 dark:hover:bg-gray-600"
              onClick={() => setIsOpen(false)}
            >
              Прайс
            </Link>
            <Link
              to="/action"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-red-800 hover:text-red-200 transition-colors duration-300 dark:hover:bg-gray-600"
              onClick={() => setIsOpen(false)}
            >
              Акции
            </Link>
            <Link
              to="/contacts"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-red-800 hover:text-red-200 transition-colors duration-300 dark:hover:bg-gray-600"
              onClick={() => setIsOpen(false)}
            >
              Контакты
            </Link>
            <Link
              to="/profile"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-red-800 hover:text-red-200 transition-colors duration-300 dark:hover:bg-gray-600"
              onClick={() => setIsOpen(false)}
            >
              Личный кабинет
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
