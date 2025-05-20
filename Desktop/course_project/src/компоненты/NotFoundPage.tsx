import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center">
        <div className="mb-8">
          <img
            src="/images/ui.png"
            alt="Logo"
            className="h-24 mx-auto"
          />
        </div>
        <h1 className="text-9xl font-bold text-red-700 dark:text-red-500 mb-4">
          404
        </h1>
        
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Страница не найдена
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
          Извините, но страница, которую вы ищете, не существует или была перемещена.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => navigate(-1)}
            className="px-6 py-3 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-semibold rounded-lg shadow transition-colors duration-300"
          >
            Вернуться назад
          </button>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-red-700 hover:bg-red-800 text-white font-semibold rounded-lg shadow transition-colors duration-300"
          >
            На главную
          </button>
        </div>
        <div className="mt-12 relative">
          <div className="absolute -left-4 -top-4 w-8 h-8 border-4 border-red-700 dark:border-red-500 rounded-full"></div>
          <div className="absolute -right-4 -bottom-4 w-8 h-8 border-4 border-red-700 dark:border-red-500 rounded-full"></div>
          <div className="w-24 h-24 border-4 border-red-700 dark:border-red-500 rounded-full mx-auto opacity-50"></div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage; 