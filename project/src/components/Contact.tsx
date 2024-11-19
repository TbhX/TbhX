import React from 'react';
import { Mail, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-24 bg-gradient-to-t from-black to-gray-900">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">
          Contact
        </h2>
        
        <div className="mt-12 space-y-8">
          <div className="flex flex-col items-center justify-center space-y-6">
            <div className="w-32 h-32 rounded-full overflow-hidden">
              <img
                src="https://media.discordapp.net/attachments/1124099984397176942/1296439200920633405/Screenshot_20241016_014231_Instagram.jpg?ex=673d2358&is=673bd1d8&hm=e9f2b27b8c1871b0730b0000589f5e35a39650892d671ebf3e90215142e8a1d9&?auto=format&fit=crop&w=256&h=256"
                alt="Tamsir Bah"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-2">Tamsir Bah</h3>
              <p className="text-gray-400 mb-2">Co-fondateur & CEO</p>
              <p className="text-violet-400 italic">"Soyez pionnier dans l'audiovisuel et le gaming"</p>
            </div>
            
            <div className="space-y-4 w-full max-w-md">
              <a
                href="mailto:1818devo@gmail.com"
                className="flex items-center justify-center gap-3 p-4 bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <Mail className="w-5 h-5 text-violet-500" />
                <span className="text-gray-300">1818devo@gmail.com</span>
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