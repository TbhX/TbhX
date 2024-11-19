import React from 'react';

export default function Footer() {
  return (
    <footer className="py-6 bg-black border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <p className="text-center text-gray-500 text-sm">
          Site réalisé à des fins exclusivement promotionnelles et commerciales • Le91 - Arena © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}