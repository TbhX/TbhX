import React from 'react';
import { TrendingUp, Users, Building, Target } from 'lucide-react';

const stats = [
  {
    icon: TrendingUp,
    value: "1-2M EUR",
    label: "CA estimé en 3 ans",
    description: "Modèle économique solide basé sur des revenus diversifiés"
  },
  {
    icon: Target,
    value: "60%",
    label: "Marge brute visée",
    description: "Optimisation des coûts et services à forte valeur ajoutée"
  },
  {
    icon: Building,
    value: "3M EUR",
    label: "Potentiel d'investissement",
    description: "Opportunité unique dans un marché en croissance"
  }
];

const marketStats = [
  {
    label: "Marché du Gaming",
    value: "5.3 Mds EUR",
    detail: "en France (2023)"
  },
  {
    label: "Croissance Annuelle",
    value: "+15%",
    detail: "secteur e-sport"
  },
  {
    label: "Gamers en France",
    value: "37M",
    detail: "public cible large"
  }
];

export default function Stats() {
  return (
    <section className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">
          Potentiel d'Investissement
        </h2>

        <div className="mb-16">
          <p className="text-xl text-center text-gray-300 max-w-3xl mx-auto">
            Le marché du gaming et de l'e-sport connaît une croissance exceptionnelle, 
            offrant une opportunité unique d'investissement dans un secteur d'avenir.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-100 transition-opacity" />
              <div className="relative p-8 rounded-2xl bg-gray-900 border border-gray-800 hover:border-violet-500 transition-all">
                <stat.icon className="w-10 h-10 text-violet-500 mb-4" />
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-lg font-medium text-violet-400 mb-2">{stat.label}</div>
                <p className="text-gray-400">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800">
          <h3 className="text-2xl font-bold text-center mb-8 text-white">
            Le Marché en Chiffres
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {marketStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-violet-500 mb-2">{stat.value}</div>
                <div className="text-lg font-medium text-white mb-1">{stat.label}</div>
                <p className="text-gray-400 text-sm">{stat.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}