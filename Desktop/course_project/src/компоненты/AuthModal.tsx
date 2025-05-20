import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface User {
  name: string;
  email: string;
  phone: string;
  password: string;
}

const getUsers = (): User[] => {
  const users = localStorage.getItem('users');
  return users ? JSON.parse(users) : [];
};

const saveUser = (user: User) => {
  const users = getUsers();
  users.push(user);
  localStorage.setItem('users', JSON.stringify(users));
};

const findUser = (email: string, phone: string) => {
  const users = getUsers();
  return users.find(u => u.email === email || u.phone === phone);
};

const AuthModal: React.FC<{ onAuth: (user: User | null) => void }> = ({ onAuth }) => {
  const navigate = useNavigate();
  const [mode, setMode] = useState<'register' | 'login'>('register');
  const [form, setForm] = useState({ name: '', email: '', phone: '', password: '' });
  const [error, setError] = useState('');

  const handleClose = () => {
    onAuth(null);
    navigate('/');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone || !form.password) {
      setError('Заполните все поля!');
      return;
    }
    if (findUser(form.email, form.phone)) {
      setError('Пользователь с таким email или телефоном уже существует!');
      return;
    }
    saveUser(form);
    setMode('login');
    setForm({ ...form, password: '' });
    setError('Регистрация успешна! Теперь войдите.');
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const users = getUsers();
    const user = users.find(
      u => (u.email === form.email || u.phone === form.phone) && u.password === form.password
    );
    if (!user) {
      setError('Неверные данные!');
      return;
    }
    setError('');
    onAuth(user);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 relative mx-2">
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors duration-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-900 dark:text-white">
          {mode === 'register' ? 'Регистрация' : 'Вход'}
        </h2>
        <form onSubmit={mode === 'register' ? handleRegister : handleLogin} className="flex flex-col gap-4">
          {mode === 'register' && (
            <input
              type="text"
              name="name"
              placeholder="Ваше имя"
              className="rounded-lg px-4 py-3 bg-gray-100 dark:bg-gray-700 text-lg text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-800"
              value={form.name}
              onChange={handleChange}
            />
          )}
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="rounded-lg px-4 py-3 bg-gray-100 dark:bg-gray-700 text-lg text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-800"
            value={form.email}
            onChange={handleChange}
          />
          <input
            type="text"
            name="phone"
            placeholder="Номер телефона"
            className="rounded-lg px-4 py-3 bg-gray-100 dark:bg-gray-700 text-lg text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-800"
            value={form.phone}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Пароль"
            className="rounded-lg px-4 py-3 bg-gray-100 dark:bg-gray-700 text-lg text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-800"
            value={form.password}
            onChange={handleChange}
          />
          {error && <div className={`text-center text-sm ${error.includes('успешна') ? 'text-green-600' : 'text-red-800'}`}>{error}</div>}
          <button
            type="submit"
            className="w-full py-3 bg-red-800 hover:bg-red-900 text-white font-bold rounded-lg text-lg shadow transition-colors duration-300"
          >
            {mode === 'register' ? 'Зарегистрироваться' : 'Войти'}
          </button>
        </form>
        <div className="mt-4 text-center">
          {mode === 'register' ? (
            <span className="text-gray-600 dark:text-gray-300 text-sm">
              Уже есть аккаунт?{' '}
              <button
                className="underline text-red-800 dark:text-red-400 hover:text-red-900 dark:hover:text-red-300 font-semibold"
                onClick={() => { setMode('login'); setError(''); }}
              >
                Войти
              </button>
            </span>
          ) : (
            <span className="text-gray-600 dark:text-gray-300 text-sm">
              Нет аккаунта?{' '}
              <button
                className="underline text-red-800 dark:text-red-400 hover:text-red-900 dark:hover:text-red-300 font-semibold"
                onClick={() => { setMode('register'); setError(''); }}
              >
                Зарегистрироваться
              </button>
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthModal; 