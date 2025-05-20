import React, { useState, useMemo, useCallback } from 'react';

const ContactForm: React.FC = () => {
  const [showThankYou, setShowThankYou] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
    setErrors(prev => ({
      ...prev,
      [id]: ''
    }));
  }, []);

  const validateForm = useMemo(() => {
    return () => {
      let isValid = true;
      const newErrors = {
        name: '',
        email: '',
        message: ''
      };

      if (!formData.name.trim()) {
        newErrors.name = 'Пожалуйста, введите ваше имя';
        isValid = false;
      }

      if (!formData.email.trim()) {
        newErrors.email = 'Пожалуйста, введите email';
        isValid = false;
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Пожалуйста, введите корректный email';
        isValid = false;
      }

      if (!formData.message.trim()) {
        newErrors.message = 'Пожалуйста, введите сообщение';
        isValid = false;
      }

      setErrors(newErrors);
      return isValid;
    };
  }, [formData]);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setShowThankYou(true);
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    }
  }, [validateForm]);

  const handleCloseThankYou = useCallback(() => {
    setShowThankYou(false);
  }, []);

  const contactInfo = useMemo(() => ({
    address: 'г. Минск, ул. Свердлова, 13А',
    phone: '+375 (17) 292-72-12',
    email: 'info@bgtu.by',
    workingHours: 'Пн-Пт: 8:00 - 17:00'
  }), []);

  return (
    <div className="w-full bg-gray-100 dark:bg-gray-900 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="roboto-black text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white">
          Контакты
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-colors duration-300 border border-gray-200 dark:border-gray-700">
            <h2 className="roboto-black text-2xl font-semibold mb-6 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-3">Наши контакты</h2>
            <div className="space-y-6">
              <div>
                <h3 className="roboto-black font-medium text-gray-800 dark:text-white mb-2">Адрес:</h3>
                <p className="roboto-regular text-gray-700 dark:text-gray-200">{contactInfo.address}</p>
              </div>
              <div>
                <h3 className="roboto-black font-medium text-gray-800 dark:text-white mb-2">Телефон:</h3>
                <p className="roboto-regular text-gray-700 dark:text-gray-200">{contactInfo.phone}</p>
              </div>
              <div>
                <h3 className="roboto-black font-medium text-gray-800 dark:text-white mb-2">Email:</h3>
                <p className="roboto-regular text-gray-700 dark:text-gray-200">{contactInfo.email}</p>
              </div>
              <div>
                <h3 className="roboto-black font-medium text-gray-800 dark:text-white mb-2">Время работы:</h3>
                <p className="roboto-regular text-gray-700 dark:text-gray-200">{contactInfo.workingHours}</p>
              </div>
              <div>
                <h3 className="roboto-black font-medium text-gray-800 dark:text-white mb-2">Социальные сети:</h3>
                <div className="flex gap-4 items-center">
                  <a 
                    href="https://instagram.com/bogdiii_18" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-700 dark:text-gray-200 hover:text-red-700 dark:hover:text-red-500 transition-colors duration-300"
                  >
                    <img src="/images/icons8-instagram-48.png" alt="Instagram" className="w-8 h-8" />
                  </a>
                  <a 
                    href="https://t.me/bogdashiron" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-700 dark:text-gray-200 hover:text-red-700 dark:hover:text-red-500 transition-colors duration-300"
                  >
                    <img src="/images/icons8-telegram-app-48.png" alt="Telegram" className="w-8 h-8" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-colors duration-300 border border-gray-200 dark:border-gray-700">
            <h2 className="roboto-black text-2xl font-semibold mb-6 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-3">Как нас найти</h2>
            <div className="flex flex-col items-center justify-center h-[400px] w-full">
              <iframe
                src="https://yandex.by/map-widget/v1/?ll=27.5615%2C53.9025&z=15"
                width="100%"
                height="400"
                frameBorder="0"
                allowFullScreen={true}
                title="Карта Яндекс"
                style={{ borderRadius: '16px', border: 0 }}
              ></iframe>
            </div>
          </div>
        </div>
        <div className="mt-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-colors duration-300 border border-gray-200 dark:border-gray-700">
          <h2 className="roboto-black text-2xl font-semibold mb-6 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-3">Остались вопросы?</h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="roboto-regular block text-md font-medium text-gray-800 dark:text-white mb-2">
                  Ваше имя
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`roboto-regular mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400 ${
                    errors.name ? 'border-red-500' : ''
                  }`}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.name}</p>
                )}
              </div>
              <div>
                <label htmlFor="email" className="roboto-regular block text-md font-medium text-gray-800 dark:text-white mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`roboto-regular mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400 ${
                    errors.email ? 'border-red-500' : ''
                  }`}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email}</p>
                )}
              </div>
            </div>
            <div>
              <label htmlFor="message" className="roboto-regular block text-md font-medium text-gray-800 dark:text-white mb-2">
                Сообщение
              </label>
              <textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className={`roboto-regular mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400 ${
                    errors.message ? 'border-red-500' : ''
                  }`}
              ></textarea>
              {errors.message && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.message}</p>
              )}
            </div>
            <button
              type="submit"
              className="roboto-black w-full md:w-auto px-6 py-3 bg-red-800 hover:bg-red-900 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-red-800 focus:ring-offset-2 transition-colors duration-300 dark:bg-red-800 dark:hover:bg-red-900 dark:focus:ring-red-800 dark:focus:ring-offset-gray-800"
            >
              Отправить
            </button>
          </form>
        </div>
        {showThankYou && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl text-center">
              <h3 className="roboto-black text-2xl font-bold mb-4 text-gray-900 dark:text-white">Спасибо за ваш вопрос!</h3>
              <p className="roboto-regular mb-6 text-gray-700 dark:text-gray-300">Мы свяжемся с вами в ближайшее время.</p>
              <button
                onClick={handleCloseThankYou}
                className="roboto-black px-6 py-2 bg-red-700 hover:bg-red-800 text-white rounded-lg font-semibold shadow transition-colors duration-300"
              >
                Закрыть
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactForm; 