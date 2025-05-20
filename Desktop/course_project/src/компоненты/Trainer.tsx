import React from "react";

type Trainer = {
  id: number;
  name: string;
  image: string;
  description: string;
  specialty: string[];
  experience: number;
};

const TrainerCard: React.FC<{ trainer: Trainer }> = ({ trainer }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-3 sm:p-4 flex flex-col items-center transition-colors duration-300 hover:scale-105">
      <div className="relative h-48 sm:h-56 md:h-60 w-full overflow-hidden rounded-xl mb-3 sm:mb-4">
        <img
          src={trainer.image}
          alt={trainer.name}
          className="w-full h-full object-cover dark:invert-0"
        />
      </div>
      <h3 className="font-bold text-base sm:text-lg mb-2 text-center line-clamp-1 text-gray-800 dark:text-gray-100">
        {trainer.name}
      </h3>
      <p className="text-xs sm:text-sm text-gray-700 leading-relaxed text-center line-clamp-3 dark:text-gray-300">
        {trainer.description}
      </p>
      <div className="flex flex-wrap justify-center gap-1 mt-2 sm:mt-3">
        {trainer.specialty.map((s, idx) => (
          <span
            key={idx}
            className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full dark:bg-red-900 dark:text-red-300"
          >
            {s}
          </span>
        ))}
      </div>
      <p className="text-xs text-gray-500 mt-2 sm:mt-3 text-center dark:text-gray-400">
        Опыт: {trainer.experience} лет
      </p>
    </div>
  );
};

export default TrainerCard;
