import React from "react";

interface Promotion {
  title: string;
  description: string;
  imageSrc: string;
}

const promotions: Promotion[] = [
  {
    title: "«Приведи друга»",
    description:
      "Приводи друзей и получай вместе с другом 300 бонусных рублей на покупку абонемента. Тренируйся с друзьями и экономь! Предложение действует на все услуги клуба, кроме персональных занятий.",
    imageSrc: "/images/акцияпрведидруга.avif",
  },
  {
    title: "«Студенческая скидка»",
    description:
      "Специальная цена для студентов и школьников - 1500 рублей в месяц за безлимитное посещение! Предъяви студенческий билет или паспорт и получи доступ к фитнесу со скидкой!",
    imageSrc: "/images/акциястуденты.avif",
  },
  {
    title: "«Скидка в честь дня рождения»",
    description:
      "За 3 дня до дня рождения, в саму дату и 3 дня после праздника, мы дарим тебе скидку 500р. на любой абонемент. Сделай выгодное вложение в свою фигуру!",
    imageSrc: "/images/акцияденьрождения.avif",
  },
  {
    title: "«Семейный абонемент»",
    description:
      "Приобретая абонемент для всей семьи, вы получаете скидку 20% на каждый абонемент! Тренируйтесь всей семьей и экономьте вместе. Действует при покупке от 2-х абонементов.",
    imageSrc: "/images/семьяспорт.avif",
  },
  {
    title: "«Утренняя зарядка»",
    description:
      "Посещайте клуб с 7:00 до 12:00 и получайте скидку 30% на абонемент! Идеально для тех, кто любит начинать день с тренировки. Действует на все типы абонементов.",
    imageSrc: "/images/времяакции.jpg",
  },
  {
    title: "«Групповые занятия»",
    description:
      "При покупке абонемента на групповые занятия на 3 месяца и более, получайте 2 недели бесплатно! Выбирайте из более чем 20 различных направлений.",
    imageSrc: "/images/групповаятренировка.avif",
  },
];

const PromotionsSection: React.FC = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Акции и специальные предложения
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {promotions.map((promotion, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:transform hover:scale-[1.02] flex flex-col h-full"
            >

              <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] overflow-hidden">
                <img
                  src={promotion.imageSrc}
                  alt={promotion.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="p-4 sm:p-6 flex-grow flex flex-col">
                <h3 className="roboto-black text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {promotion.title}
                </h3>
                <p className="roboto-regular text-gray-600 dark:text-gray-300 leading-relaxed">
                  {promotion.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromotionsSection;
