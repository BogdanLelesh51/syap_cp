import React from "react";
import { Link } from "react-router-dom";

const HeroSection: React.FC = () => {
  return (
    <section
      className="relative min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] lg:min-h-screen bg-cover bg-center bg-no-repeat transition-colors duration-300"
      style={{
        backgroundImage: `url('/images/фонглавная.avif')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent dark:hidden"
        aria-hidden="true"
      ></div>
      <div
        className="hidden dark:block absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"
        aria-hidden="true"
      ></div>

      <div className="absolute inset-0 flex items-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <h1 className="roboto-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight text-white dark:text-white transition-colors duration-300">
              ПОЛУЧИТЕ ТЕЛО СВОЕЙ МЕЧТЫ, ЗАНИМАЯСЬ В НАШЕМ КЛУБЕ ПО УДОБНОЙ
              ПРОГРАММЕ
            </h1>
            <p className="roboto-regular text-sm sm:text-base md:text-lg lg:text-xl mb-6 max-w-xl text-gray-200 dark:text-white transition-colors duration-300">
              Приглашаем в наш фитнес-клуб, где каждый желающий может привести
              себя в спортивную форму самостоятельно или с помощью наших
              высококвалифицированных тренеров
            </p>
            <Link
              to="/price"
              className="roboto-cyrillic w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 bg-red-800 hover:bg-red-900 dark:bg-red-800 dark:hover:bg-red-900 text-white dark:text-gray-100 font-semibold rounded-lg shadow-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-red-800 focus:ring-opacity-50 text-sm sm:text-base text-center inline-block"
            >
              Начать тренировки
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
