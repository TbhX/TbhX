import React from 'react';
import { MapPin, ShoppingBag, Building2, Users, Cpu, Wallet } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const icons = {
  "Emplacement Stratégique": MapPin,
  "Strategic Location": MapPin,
  "Bassin de Population Idéal": Users,
  "Ideal Population Base": Users,
  "Hub Technologique": Cpu,
  "Technology Hub": Cpu,
  "Zone Commerciale Active": ShoppingBag,
  "Active Commercial Area": ShoppingBag,
  "Soutien Institutionnel": Building2,
  "Institutional Support": Building2,
  "Potentiel de Croissance": Wallet,
  "Growth Potential": Wallet
};

export default function Location() {
  const { translations } = useLanguage();
  const { location } = translations;

  return (
    <section className="py-24 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">
          {location.title}
        </h2>

        <p className="text-xl text-center text-gray-300 max-w-3xl mx-auto mb-16">
          {location.description}
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {location.advantages.map((advantage, index) => {
            const Icon = icons[advantage.title as keyof typeof icons];
            return (
              <div key={index} className="p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-black hover:from-violet-900/20 hover:to-blue-900/20 transition-all duration-300">
                <Icon className="w-12 h-12 text-violet-500 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{advantage.title}</h3>
                <p className="text-gray-400">{advantage.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}