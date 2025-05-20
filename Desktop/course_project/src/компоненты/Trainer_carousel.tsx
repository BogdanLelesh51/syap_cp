import React, { useState, useEffect, useMemo, useCallback } from "react";
import { useSwipeable } from "react-swipeable";
import TrainerCard from "../компоненты/Trainer"; 
import { trainers } from "../data/trainer";

const TrainerCarousel: React.FC = () => {
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const updateItemsPerPage = useCallback(() => {
    const width = window.innerWidth;
    if (width < 640) setItemsPerPage(1);
    else if (width < 1024) setItemsPerPage(2);
    else setItemsPerPage(3);
  }, []);

  useEffect(() => {
    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, [updateItemsPerPage]);

  const goToNext = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);

    if (currentIndex >= trainers.length - itemsPerPage) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex((prev) => prev + 1);
    }
  }, [currentIndex, itemsPerPage, isTransitioning]);

  const goToPrev = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);

    if (currentIndex === 0) {
      setCurrentIndex(trainers.length - itemsPerPage);
    } else {
      setCurrentIndex((prev) => prev - 1);
    }
  }, [currentIndex, itemsPerPage, isTransitioning]);

  const handleTransitionEnd = useCallback(() => {
    setIsTransitioning(false);
  }, []);

  const handlers = useSwipeable({
    onSwipedLeft: goToNext,
    onSwipedRight: goToPrev,
    trackMouse: true
  });

  const carouselStyle = useMemo(() => ({
    transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
  }), [currentIndex, itemsPerPage]);

  const itemStyle = useMemo(() => ({
    width: `${100 / itemsPerPage}%`
  }), [itemsPerPage]);

  const visibleTrainers = useMemo(() => {
    return trainers.slice(currentIndex, currentIndex + itemsPerPage);
  }, [currentIndex, itemsPerPage]);

  return (
    <section className="bg-gray-100 py-8 sm:py-12 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <h2 className="roboto-black text-xl sm:text-2xl font-bold text-center text-gray-800 mb-6 sm:mb-8 dark:text-gray-100">
          Наши тренеры
        </h2>
        <div 
          className="overflow-hidden relative" 
          style={{ height: "auto", minHeight: "400px" }}
          {...handlers}
        >
          <div
            className={`flex transition-transform duration-500 ease-in-out ${
              isTransitioning ? "" : "transition-none"
            }`}
            style={carouselStyle}
            onTransitionEnd={handleTransitionEnd}
          >
            {trainers.map((trainer) => (
              <div
                key={trainer.id}
                className="shrink-0 px-2"
                style={itemStyle}
              >
                <TrainerCard trainer={trainer} />
              </div>
            ))}
          </div>
        </div>
        <div className="absolute top-1/2 left-0 -translate-y-1/2 z-10">
          <button
            onClick={goToPrev}
            className="p-2 bg-white rounded-full shadow hover:bg-gray-100 transition-colors dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white"
            aria-label="Предыдущий тренер"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 sm:h-6 sm:w-6 text-red-600 dark:text-red-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
        </div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 z-10">
          <button
            onClick={goToNext}
            className="p-2 bg-white rounded-full shadow hover:bg-gray-100 transition-colors dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white"
            aria-label="Следующий тренер"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 sm:h-6 sm:w-6 text-red-600 dark:text-red-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TrainerCarousel;
