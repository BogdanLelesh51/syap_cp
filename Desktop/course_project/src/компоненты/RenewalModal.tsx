import React, { useState } from 'react';

interface RenewalModalProps {
  isOpen: boolean;
  onClose: () => void;
  subscriptionName: string;
  onRenew: (days: number) => void;
}

const RenewalModal: React.FC<RenewalModalProps> = ({ isOpen, onClose, subscriptionName, onRenew }) => {
  const [days, setDays] = useState(30);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onRenew(days);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 w-full max-w-md">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Продление подписки</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">{subscriptionName}</p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="days" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Количество дней
            </label>
            <input
              type="number"
              id="days"
              min="1"
              value={days}
              onChange={(e) => setDays(Number(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 dark:bg-gray-700 dark:text-white"
            />
          </div>
          
          <div className="flex gap-3">
            <button
              type="submit"
              className="flex-1 py-2 px-4 bg-red-700 hover:bg-red-800 text-white font-semibold rounded-lg shadow transition-colors duration-300"
            >
              Продлить
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-2 px-4 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-semibold rounded-lg shadow transition-colors duration-300"
            >
              Отмена
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RenewalModal; 