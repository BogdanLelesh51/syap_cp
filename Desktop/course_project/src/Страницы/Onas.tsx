import React from "react";
import Header from "../компоненты/Header";
import HeroSection from "../компоненты/Section";
import AboutSection from "../компоненты/About_section";
import TrainerCarousel from "../компоненты/Trainer_carousel";
import Footer from "../компоненты/Footer";
import "../App.css";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
  return (
    <>
      <Header logoSrc="/images/ui.png" />
      <main>
        <HeroSection />
        <AboutSection />
        <TrainerCarousel />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
