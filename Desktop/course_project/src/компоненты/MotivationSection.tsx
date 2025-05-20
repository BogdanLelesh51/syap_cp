import React from "react";

const MotivationSection: React.FC = () => {
  return (
    <section className="bg-white dark:bg-gray-900 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="roboto-black text-3xl font-bold text-gray-900 dark:text-white mb-4">
              ВПЕРЕД К ЦЕЛИ! <br />
              КАЖДЫЙ ШАГ — ЭТО ШАГ К <br />
              УСПЕХУ
            </h2>
            <p className="roboto-regular text-base text-gray-700 dark:text-gray-300 mb-6">
              Спорт — это не только про победы, но и про то, как ты поднимаешься
              каждый раз, когда падаешь. Главное — не останавливаться.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src="/images/section_motivation.png"
              alt="Мотивация к тренировкам"
              className="w-full max-w-md rounded-lg object-cover h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default MotivationSection;
