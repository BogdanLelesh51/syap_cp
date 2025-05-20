import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Страницы/Onas"; // Главная страница (например, Onas + другие секции)
import PricePage from "./Страницы/Price"; // Страница с прайсом
import Action from "./Страницы/PageAction"; // Страница действия
import ContactsPage from "./Страницы/ContactsPage"; // Страница контактов
import ProfilePage from "./Страницы/ProfilePage"; // Страница личного кабинета
import NotFoundPage from "./компоненты/NotFoundPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/price" element={<PricePage />} />
          <Route path="/action" element={<Action />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
