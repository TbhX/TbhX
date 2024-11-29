import React from 'react';
import { Mail, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Contact() {
  const { translations } = useLanguage();
  const { contact } = translations;

  return (
    <section className="py-24 bg-gradient-to-t from-black to-gray-900">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">
          {contact.title}
        </h2>
        
        <div className="mt-12 space-y-8">
          <div className="flex flex-col items-center justify-center space-y-6">
            <div className="w-32 h-32 rounded-full overflow-hidden">
              <img
                src=https://unsplash.com/fr/photos/homme-portant-sony-playstation-vr-MxVkWPiJALs?auto=format&fit=crop&w=256&h=256"
                alt={contact.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-2">{contact.name}</h3>
              <p className="text-gray-400 mb-2">{contact.role}</p>
              <p className="text-violet-400 italic">{contact.quote}</p>
            </div>
            
            <div className="space-y-4 w-full max-w-md">
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center justify-center gap-3 p-4 bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <Mail className="w-5 h-5 text-violet-500" />
                <span className="text-gray-300">{contact.email}</span>
              </a>
              
              <div className="flex items-center justify-center gap-3 p-4 bg-gray-900 rounded-lg">
                <MapPin className="w-5 h-5 text-violet-500" />
                <span className="text-gray-300">Les Ulis, Paris-Saclay</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}