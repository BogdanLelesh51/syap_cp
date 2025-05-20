import React from 'react';
import Header from '../компоненты/Header';
import Footer from '../компоненты/Footer';
import ContactForm from '../компоненты/ContactForm';

const ContactsPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header logoSrc="/images/ui.png" />
      <main className="flex-grow">
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default ContactsPage;


