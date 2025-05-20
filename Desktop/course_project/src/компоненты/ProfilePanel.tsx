import React, { useState, useRef, useMemo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import RenewalModal from './RenewalModal';

const defaultUser = {
  name: 'Лелеш Богдан Валерьевич',
  email: 'bogdan@example.com',
  phone: '+375293271829',
  regDate: '12.03.2023',
  photo: `${process.env.PUBLIC_URL}/images/фотодляличногокабинета.JPG`
};

const ProfilePanel: React.FC = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedSubscription, setSelectedSubscription] = useState<{ name: string, index: number } | null>(null);
  const [showRenewalModal, setShowRenewalModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  
  const initialUser = useMemo(() => {
    const saved = localStorage.getItem('currentUser');
    const parsedUser = saved ? JSON.parse(saved) : defaultUser;
    if (!parsedUser.photo) {
      parsedUser.photo = defaultUser.photo;
    }
    return parsedUser;
  }, []);

  const [user, setUser] = useState(initialUser);
  const [editData, setEditData] = useState({ name: user.name, email: user.email });

  const subscriptions = useMemo(() => [{
    name: 'БЕЗЛИМИТ НА 3 МЕСЯЦА (ДНЕВНОЙ)',
    status: 'Активна',
    until: 'до 12.06.2024',
  }, {
    name: 'САМООБОРОНА 1 МЕСЯЦ',
    status: 'Активна',
    until: 'до 12.05.2024',
  }], []);

  const handleLogout = useCallback(() => {
    localStorage.removeItem('currentUser');
    navigate('/');
  }, [navigate]);

  const handleClose = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  const handlePhotoClick = useCallback(() => {
    fileInputRef.current?.click();
  }, []);

  const handlePhotoChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert('Размер файла не должен превышать 5MB');
        return;
      }
      if (!file.type.startsWith('image/')) {
        alert('Пожалуйста, выберите изображение');
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        const img = new Image();
        img.onload = () => {
          const newUser = { ...user, photo: reader.result };
          setUser(newUser);
          localStorage.setItem('currentUser', JSON.stringify(newUser));
        };
        img.onerror = () => {
          alert('Ошибка при загрузке изображения. Пожалуйста, выберите другой файл.');
        };
        img.src = reader.result as string;
      };
      reader.onerror = () => {
        alert('Ошибка при чтении файла');
      };
      reader.readAsDataURL(file);
    }
  }, [user]);

  const handleRenewClick = useCallback((subscription: { name: string }, index: number) => {
    setSelectedSubscription({ name: subscription.name, index });
    setShowRenewalModal(true);
  }, []);

  const handleRenewal = useCallback((days: number) => {
    console.log(`Renewing subscription ${selectedSubscription?.name} for ${days} days`);
    setShowRenewalModal(false);
    setSelectedSubscription(null);
  }, [selectedSubscription]);

  const handleEditOpen = useCallback(() => {
    setEditData({ name: user.name, email: user.email });
    setShowEditModal(true);
  }, [user]);

  const handleEditChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setEditData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }, []);

  const handleEditSave = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    
    // Обновляем текущего пользователя
    setUser((prev: typeof defaultUser) => {
      const newUser = { ...prev, name: editData.name, email: editData.email };
      localStorage.setItem('currentUser', JSON.stringify(newUser));
      return newUser;
    });

    // Обновляем email в списке пользователей
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const updatedUsers = users.map((u: any) => {
      if (u.email === user.email) {
        return { ...u, email: editData.email };
      }
      return u;
    });
    localStorage.setItem('users', JSON.stringify(updatedUsers));

    setShowEditModal(false);
  }, [editData, user.email]);

  const userPhoto = useMemo(() => {
    return user.photo && user.photo.startsWith('data:') ? user.photo : defaultUser.photo;
  }, [user.photo]);

  return (
    <section className="w-full min-h-screen bg-gray-100 dark:bg-gray-900 py-8 px-2 sm:px-0 flex flex-col items-center">
      <div className="max-w-2xl w-full bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 sm:p-10 mb-8 flex flex-col gap-8 relative">
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors duration-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="flex flex-col sm:flex-row sm:items-center gap-6">
          <div className="flex-shrink-0 flex justify-center">
            <div className="relative group">
              <img
                src={userPhoto}
                alt="Аватар пользователя"
                className="w-24 h-24 rounded-full border-4 border-red-700 dark:border-red-500 shadow-md object-cover bg-gray-200 dark:bg-gray-700 cursor-pointer transition-transform duration-300 group-hover:scale-105 no-dark-mode"
                onClick={handlePhotoClick}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = defaultUser.photo;
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-sm font-medium">Изменить фото</span>
              </div>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handlePhotoChange}
                accept="image/jpeg,image/png,image/gif,image/webp"
                className="hidden"
              />
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-2">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">{user.name}</h1>
            <div className="flex flex-col gap-1 text-gray-700 dark:text-gray-200 text-base">
              <div><span className="font-semibold">Email:</span> {user.email}</div>
              <div><span className="font-semibold">Телефон:</span> {user.phone}</div>
            </div>
          </div>
          <div className="flex flex-col gap-2 min-w-[140px] mt-4 sm:mt-0">
            <button onClick={handleLogout} className="w-full py-2 px-4 bg-red-700 hover:bg-red-800 text-white font-semibold rounded-lg shadow transition-colors duration-300">
              Выйти
            </button>
            <button onClick={handleEditOpen} className="w-full py-2 px-4 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-semibold rounded-lg shadow transition-colors duration-300">
              Редактировать
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-4xl w-full">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 ml-2">Подписки</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {subscriptions.map((sub, idx) => (
            <div key={idx} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 flex flex-col items-center gap-2 border border-gray-200 dark:border-gray-700">
              <div className="text-base sm:text-lg text-gray-900 dark:text-white mb-2 text-center font-semibold">
                {sub.name}
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className={`px-2 py-1 rounded-full text-xs font-bold ${sub.status === 'Активна' ? 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-200' : 'bg-gray-200 text-gray-600 dark:bg-gray-700 dark:text-gray-400'}`}>{sub.status}</span>
                <span className="text-xs text-gray-500 dark:text-gray-400">{sub.until}</span>
              </div>
              <button 
                onClick={() => handleRenewClick(sub, idx)}
                className="w-full max-w-xs py-2 px-6 bg-red-700 hover:bg-red-800 text-white font-bold rounded-lg shadow transition-colors duration-300"
              >
                Продлить
              </button>
            </div>
          ))}
        </div>
      </div>

      <RenewalModal
        isOpen={showRenewalModal}
        onClose={() => setShowRenewalModal(false)}
        subscriptionName={selectedSubscription?.name || ''}
        onRenew={handleRenewal}
      />
      {showEditModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <form onSubmit={handleEditSave} className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl w-full max-w-md flex flex-col gap-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 text-center">Редактировать профиль</h2>
            <div className="flex flex-col gap-4">
              <label className="text-gray-700 dark:text-gray-200 font-semibold text-left">ФИО
                <input
                  type="text"
                  name="name"
                  value={editData.name}
                  onChange={handleEditChange}
                  className="mt-1 w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-red-500 outline-none transition-colors duration-300"
                  required
                />
              </label>
              <label className="text-gray-700 dark:text-gray-200 font-semibold text-left">Email
                <input
                  type="email"
                  name="email"
                  value={editData.email}
                  onChange={handleEditChange}
                  className="mt-1 w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-red-500 outline-none transition-colors duration-300"
                  required
                />
              </label>
            </div>
            <div className="flex gap-4 mt-2">
              <button type="submit" className="flex-1 py-2 px-4 bg-red-700 hover:bg-red-800 text-white font-semibold rounded-lg shadow transition-colors duration-300">Сохранить</button>
              <button type="button" onClick={() => setShowEditModal(false)} className="flex-1 py-2 px-4 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-semibold rounded-lg shadow transition-colors duration-300">Отмена</button>
            </div>
          </form>
        </div>
      )}
    </section>
  );
};

export default ProfilePanel; 