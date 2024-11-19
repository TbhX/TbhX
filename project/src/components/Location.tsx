import React from 'react';
import { MapPin, ShoppingBag, Building2, Users, Cpu, Wallet } from 'lucide-react';

const advantages = [
  {
    icon: MapPin,
    title: "Emplacement Stratégique",
    description: "Au cœur de Paris-Saclay, pôle d'innovation majeur regroupant plus de 15% de la recherche française"
  },
  {
    icon: Users,
    title: "Bassin de Population Idéal",
    description: "65 000 étudiants et 15 000 chercheurs à proximité immédiate"
  },
  {
    icon: Cpu,
    title: "Hub Technologique",
    description: "Écosystème dynamique d'entreprises tech et startups innovantes"
  },
  {
    icon: ShoppingBag,
    title: "Zone Commerciale Active",
    description: "Forte affluence garantie grâce aux centres commerciaux environnants"
  },
  {
    icon: Building2,
    title: "Soutien Institutionnel",
    description: "Fort appui des collectivités territoriales et acteurs locaux"
  },
  {
    icon: Wallet,
    title: "Potentiel de Croissance",
    description: "Zone en plein développement avec de nombreux projets d'expansion"
  }
];

export default function Location() {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">
          Un Emplacement Stratégique
        </h2>

        <p className="text-xl text-center text-gray-300 max-w-3xl mx-auto mb-16">
          Les Ulis, au cœur de Paris-Saclay, représente une opportunité unique pour 
          établir un complexe gaming innovant dans un écosystème technologique en pleine expansion.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div key={index} className="p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-black hover:from-violet-900/20 hover:to-blue-900/20 transition-all duration-300">
              <advantage.icon className="w-12 h-12 text-violet-500 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{advantage.title}</h3>
              <p className="text-gray-400">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}