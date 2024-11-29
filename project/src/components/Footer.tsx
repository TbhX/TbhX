import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { translations } = useLanguage();
  const { footer } = translations;

  return (
    <footer className="py-6 bg-black border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <p className="text-center text-gray-500 text-sm">
          {footer.copyright} {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}