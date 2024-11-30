import React from 'react';
import { Monitor, Headphones, Users, Trophy, Rocket, Clock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const icons = {
  "40 PC Gaming - Consoles -Espace VR et JDR": Monitor,
  "40 Gaming PCs - Consoles - JDR & VR Space": Monitor,
  "Compétitions E-Sport": Trophy,
  "E-Sport Competitions": Trophy,
  "Communauté Grandissante": Users,
  "Growing Community": Users,
  "Innovation Constante": Rocket,
  "Constant Innovation": Rocket,
  "Accessibilité 24/7": Clock,
  "24/7 Accessibility": Clock,
  "Studio Podcast & Stream": Headphones,
  "Podcast & Stream Studio": Headphones
};

export default function About() {
  const { translations } = useLanguage();
  const { about } = translations;

  return (
    <section id="about" className="py-24 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">
          {about.title}
        </h2>
        
        <div className="mb-16 max-w-3xl mx-auto">
          <p className="text-xl text-gray-300 text-center mb-6">
            {about.description1}
          </p>
          
          <p className="text-xl text-gray-300 text-center">
            {about.description2}
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {about.features.map((feature, index) => {
            const Icon = icons[feature.title as keyof typeof icons];
            return (
              <div key={index} className="group p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-violet-500 transition-all duration-300">
                <Icon className="w-12 h-12 text-violet-500 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <h3 className="text-3xl font-bold text-center mb-8 text-white">
          {about.investmentTitle}
        </h3>

        <div className="grid md:grid-cols-3 gap-8">
          {about.vision.map((item, index) => {
            const Icon = icons[item.title as keyof typeof icons];
            return (
              <div key={index} className="group p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-violet-500 transition-all duration-300">
                <Icon className="w-12 h-12 text-violet-500 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}