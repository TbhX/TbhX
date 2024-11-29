import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="fixed top-4 right-4 z-50 px-4 py-2 bg-violet-600 hover:bg-violet-700 rounded-full text-white font-medium transition-all duration-300 hover:scale-105"
    >
      {language === 'fr' ? '🇬🇧 EN' : '🇫🇷 FR'}
    </button>
  );
}