import Header from "../компоненты/Header";
import Section_action from "../компоненты/Section_action";
import Footer from "../компоненты/Footer";
import { Link } from "react-router-dom";

const Action: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <Header logoSrc="/images/ui.png" />
      <main className="flex-grow">
        <Section_action></Section_action>
      </main>
      <Footer />
    </div>
  );
};

export default Action;
