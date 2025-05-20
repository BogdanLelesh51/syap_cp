import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-red-800 text-white py-6 sm:py-8 dark:bg-gray-800 dark:text-gray-200 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="hidden md:flex justify-between items-start">
          <div className="flex items-center space-x-2">
            <img
              src="./images/ui.png"
              alt="Логотип"
              className="h-8 w-10 object-contain filter dark:brightness-0 dark:invert"
            />
            <span className="font-bold text-base lg:text-lg">FitnessBoom</span>
          </div>

          {/* Ссылки */}
          <div className="flex flex-col space-y-3 lg:space-y-4">
            <div className="flex space-x-4 lg:space-x-6">
              <a
                href="/"
                className="text-sm lg:text-base hover:text-red-200 transition-colors dark:text-gray-300 dark:hover:text-red-300"
              >
                О нас
              </a>
              <a
                href="/404-rules"
                className="text-sm lg:text-base hover:text-red-200 transition-colors dark:text-gray-300 dark:hover:text-red-300"
              >
                Правила
              </a>
              <a
                href="/action"
                className="text-sm lg:text-base hover:text-red-200 transition-colors dark:text-gray-300 dark:hover:text-red-300"
              >
                Акции
              </a>
              <a
                href="/contacts"
                className="text-sm lg:text-base hover:text-red-200 transition-colors dark:text-gray-300 dark:hover:text-red-300"
              >
                Контакты
              </a>
              <a
                href="/profile"
                className="text-sm lg:text-base hover:text-red-200 transition-colors dark:text-gray-300 dark:hover:text-red-300"
              >
                Личный кабинет
              </a>
            </div>
            <div className="flex space-x-4 lg:space-x-6">
              <a
                href="/404-privacy"
                className="text-xs lg:text-sm hover:text-red-200 transition-colors dark:text-gray-400 dark:hover:text-red-300"
              >
                Политика конфиденциальности
              </a>
              <a
                href="/404-rules"
                className="text-xs lg:text-sm hover:text-red-200 transition-colors dark:text-gray-400 dark:hover:text-red-300"
              >
                Правила пользования сайтом
              </a>
              <a
                href="/404-offer"
                className="text-xs lg:text-sm hover:text-red-200 transition-colors dark:text-gray-400 dark:hover:text-red-300"
              >
                Договор-оферта
              </a>
            </div>
          </div>
        </div>

        {/* Мобильная версия */}
        <div className="md:hidden flex flex-col gap-4 sm:gap-6">
          {/* Логотип и название */}
          <div className="flex items-center justify-center space-x-2">
            <img
              src="./images/ui.png"
              alt="Логотип"
              className="h-8 w-10 object-contain filter dark:brightness-0 dark:invert"
            />
            <span className="font-bold text-base sm:text-lg">FitnessBoom</span>
          </div>

          {/* Ссылки на мобильных */}
          <div className="flex flex-col space-y-2 text-center">
            <a
              href="/"
              className="text-sm sm:text-base hover:text-red-200 transition-colors dark:text-gray-300 dark:hover:text-red-300"
            >
              О нас
            </a>
            <a
              href="/price"
              className="text-sm sm:text-base hover:text-red-200 transition-colors dark:text-gray-300 dark:hover:text-red-300"
            >
              Прайс
            </a>
            <a
              href="/action"
              className="text-sm sm:text-base hover:text-red-200 transition-colors dark:text-gray-300 dark:hover:text-red-300"
            >
              Акции
            </a>
            <a
              href="/contacts"
              className="text-sm sm:text-base hover:text-red-200 transition-colors dark:text-gray-300 dark:hover:text-red-300"
            >
              Контакты
            </a>
            <a
              href="/profile"
              className="text-sm sm:text-base hover:text-red-200 transition-colors dark:text-gray-300 dark:hover:text-red-300"
            >
              Личный кабинет
            </a>
            <hr className="my-3 sm:my-4 border-gray-700 dark:border-gray-600" />
            <a
              href="/404-privacy"
              className="text-xs sm:text-sm hover:text-red-200 transition-colors dark:text-gray-400 dark:hover:text-red-300"
            >
              Политика конфиденциальности
            </a>
            <a
              href="/404-rules"
              className="text-xs sm:text-sm hover:text-red-200 transition-colors dark:text-gray-400 dark:hover:text-red-300"
            >
              Правила пользования сайтом
            </a>
            <a
              href="/404-offer"
              className="text-xs sm:text-sm hover:text-red-200 transition-colors dark:text-gray-400 dark:hover:text-red-300"
            >
              Договор-оферта
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
