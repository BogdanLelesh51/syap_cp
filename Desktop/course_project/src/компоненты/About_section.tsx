import React from "react";

const AboutSection: React.FC = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-8 sm:py-12 md:py-16 text-gray-800 dark:text-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
          <div className="max-w-lg">
            <h2 className="roboto-black text-3xl font-bold text-gray-900 dark:text-white mb-6">
              О НАС
            </h2>
            <p className="roboto-regular text-gray-600 dark:text-gray-300 mb-8">
              Мы — команда профессионалов, которая помогает людям достигать их
              спортивных целей. Наш фитнес-клуб предлагает современное оборудование,
              опытных тренеров и индивидуальный подход к каждому клиенту.
            </p>
            <p className="roboto-regular text-sm sm:text-base mb-4 md:mb-6 leading-relaxed dark:text-gray-300">
              Наш фитнес-клуб оснащен самым современным оборудованием, три зала
              групповых занятий, бассейн, просторные раздевалки и душевые
              комнаты, зал игровых видов спорта, сайкл-студия и многое другое.
              FitnessBoom City поможет привести себя в отличную спортивную
              форму. Чтобы познакомиться с фитнес-клубом, первый раз вы можете
              прийти на тренировку в наш зал абсолютно бесплатно.
            </p>
            <p className="roboto-regular text-sm sm:text-base mb-4 md:mb-6 leading-relaxed dark:text-gray-300">
              У нас работают только опытные тренеры и инструкторы, которые
              всегда подскажут и помогут вам. Вы сможете и накачать мышцы, и
              научиться танцевать, и ходить на фитнес. А также с помощью нашего
              фитнес-бара вы сможете восполнить силы после тренировки, выпив
              порцию протеинового коктейля.
            </p>
            <a
              href="/404-rules"
              className="roboto-cyrillic inline-block text-sm sm:text-base text-red-600 dark:text-white hover:text-red-700 dark:hover:text-gray-300 underline font-medium transition-colors duration-300"
            >
              Ознакомьтесь с правилами посещения клуба
            </a>
          </div>
          <div className="flex justify-center">
            <img
              src="/images/zal-1.png"
              alt="Фото зала"
              className="w-full max-w-md rounded-xl shadow-lg dark:shadow-none object-cover h-auto no-dark-mode"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
