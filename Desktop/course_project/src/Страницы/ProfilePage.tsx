import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../компоненты/Header';
import Footer from '../компоненты/Footer';
import ProfilePanel from '../компоненты/ProfilePanel';
import AuthModal from '../компоненты/AuthModal';

const ProfilePage: React.FC = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);
  const [showAuth, setShowAuth] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem('currentUser');
    if (saved) {
      const userData = JSON.parse(saved);
      setUser(userData);
      setShowAuth(false);
    } else {
      setShowAuth(true);
    }
  }, []);

  const handleAuth = (userData: any) => {
    if (userData) {
      setUser(userData);
      localStorage.setItem('currentUser', JSON.stringify(userData));
      setShowAuth(false);
    } else {
      navigate('/');
    }
  };
  if (!user && showAuth) {
    return (
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
        <AuthModal onAuth={handleAuth} />
      </div>
    );
  }
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <Header logoSrc="/images/ui.png" />
      <main className="flex-grow">
        <ProfilePanel />
      </main>
      <Footer />
    </div>
  );
};

export default ProfilePage; 