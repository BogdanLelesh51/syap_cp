import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface PriceItem {
  title: string;
  description?: string;
  price: string;
}

interface Category {
  name: string;
  items: PriceItem[];
}

const categories: Category[] = [
  {
    name: "Тренажерный зал",
    items: [
      { title: "Разовое посещение", description: "", price: "250 рублей" },
      {
        title: "Безлимитная карта на 1 месяц (дневная)",
        description: "",
        price: "1 200 рублей",
      },
      {
        title: "Безлимитная карта на 1 месяц (весь день)",
        description: "",
        price: "1 700 рублей",
      },
      {
        title: "Безлимитная карта на 3 месяца",
        description: "",
        price: "4 200 рублей",
      },
      {
        title: "Безлимитная карта на 6 месяцев",
        description: "",
        price: "7 800 рублей",
      },
      {
        title: "Безлимитная карта на 12 месяцев",
        description: "",
        price: "14 400 рублей",
      },
    ],
  },
  {
    name: "Групповые занятия",
    items: [
      {
        title: "Самооборона (1 месяц)",
        description: "",
        price: "4 200 рублей",
      },
      {
        title: "Фитнес на 1 месяц (дневная)",
        description: "",
        price: "3 800 рублей",
      },
      {
        title: "Фитнес на 1 месяц (весь день)",
        description: "",
        price: "5 100 рублей",
      },
      {
        title: "Йога (3 месяца)",
        description: "",
        price: "9 000 рублей",
      },
      {
        title: "Безлимит (6 месяцев)",
        description: "",
        price: "12 000 рублей",
      },
      {
        title: "Безлимит 12 месяцев",
        description: "",
        price: "20 000 рублей",
      },
    ],
  },
  {
    name: "Персональные тренировки",
    items: [
      { title: "Разовое посещение", price: "400 рублей" },
      { title: "Безлимит на 1 месяц (дневной)", price: "3 800 рублей" },
      { title: "Безлимит на 1 месяц (весь день)", price: "5 100 рублей" },
      { title: "Безлимит на 3 месяца (дневной)", price: "9 000 рублей" },
      { title: "Безлимит на 3 месяца (весь день)", price: "10 000 рублей" },
      { title: "Безлимит 12 месяцев", price: "17 000 рублей" },
    ],
  },
];

const PriceList: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const navigate = useNavigate();

  const handlePurchase = () => {
    navigate("/404");
  };

  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
          Прайс-лист
        </h2>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(index)}
              className={
                (selectedCategory === index
                  ? "bg-red-800 text-white"
                  : "bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-white") +
                " px-4 py-2 rounded-lg transition-colors duration-300"
              }
            >
              {category.name}
            </button>
          ))}
        </div>
        <div className="mt-8 bg-gray-200 dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <table className="w-full divide-y divide-gray-300 dark:divide-gray-700">
            <tbody>
              {categories[selectedCategory].items.map((item, idx) => (
                <tr
                  key={idx}
                  className="border-b border-gray-300 dark:border-gray-700"
                >
                  <td className="py-2">
                    <input type="checkbox" className="mr-2" />
                    {item.title}
                  </td>
                  <td className="text-right">{item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button
            onClick={handlePurchase}
            className="block w-full mt-4 bg-red-800 hover:bg-red-900 dark:bg-red-800 dark:hover:bg-red-900 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
            disabled={selectedCategory === -1}
          >
            Приобрести
          </button>
        </div>
      </div>
    </section>
  );
};

export default PriceList;
