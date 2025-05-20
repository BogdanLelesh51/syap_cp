import React from "react";
import Header from "../компоненты/Header";
import MotivationSection from "../компоненты/MotivationSection";
import PriceList from "../компоненты/Abonements";
import Footer from "../компоненты/Footer";
import { Link } from "react-router-dom";

const Price: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <Header logoSrc="/images/ui.png" />
      <main className="flex-grow">
        <MotivationSection />
        <PriceList />
      </main>
      <Footer />
    </div>
  );
};

export default Price;
