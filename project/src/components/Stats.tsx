import React, { useState } from 'react';
import { TrendingUp, Users, Building, Target, Info } from 'lucide-react';

const stats = [
  {
    icon: TrendingUp,
    value: "1-2M EUR*",
    label: "CA estimé en 3 ans",
    description: "Modèle économique solide basé sur des revenus diversifiés",
    footnote: "* Basé sur un taux de fréquentation de 30% annuel",
    detailedCalculation: {
      title: "Détail du Calcul du Chiffre d'Affaires",
      breakdown: [
        { label: "PC Gaming", calculation: "40 PCs × Taux horaire" },
        { label: "Sessions Journalières", calculation: "Nombre d'heures par jour" },
        { label: "Fréquence Hebdomadaire", calculation: "7 jours / semaine" },
        { label: "Période", calculation: "Nombre de semaines" },
        { label: "Revenus Additionnels", calculation: "Tournois physiques mensuels" },
        { label: "Ventes Marchandises", calculation: "Produits dérivés et équipements" }
      ],
      formula: "40 PCs × Taux horaire × Heures/jour × 7 jours/semaine × Semaines + Revenus Tournois + Ventes Marchandises"
    }
  },
  {
    icon: Target,
    value: "60%",
    label: "Marge brute visée",
    description: "Optimisation des coûts et services à forte valeur ajoutée"
  },
  {
    icon: Building,
    value: "3M EUR*",
    label: "Potentiel d'investissement",
    description: "Opportunité unique dans un marché en croissance",
    footnote: "* Subventions régionales",
    detailedCalculation: {
      title: "Subventions Régionales",
      breakdown: [
        { label: "Dispositif Innov Up", calculation: "Soutien à l'innovation technologique" },
        { label: "Aide à la création d'entreprise", calculation: "Accompagnement initial" },
        { label: "Subvention développement numérique", calculation: "Transformation digitale" },
        { label: "Aides secteur gaming", calculation: "Soutien spécifique e-sport" }
      ],
      formula: " subventions régionales dédiées à l'innovation et au numérique"
    }
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
  const [selectedStatIndex, setSelectedStatIndex] = useState(null);

  const toggleStatDetails = (index) => {
    setSelectedStatIndex(selectedStatIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-black to-gray-900 relative">
      <div className="max-w-6xl mx-auto px-4">
        {/* Titre principal */}
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">
          Potentiel d'Investissement
        </h2>

        {/* Description */}
        <div className="mb-16">
          <p className="text-xl text-center text-gray-300 max-w-3xl mx-auto">
            Le marché du gaming et de l'e-sport connaît une croissance exceptionnelle, 
            offrant une opportunité unique d'investissement dans un secteur d'avenir.
          </p>
        </div>

        {/* Statistiques principales */}
        <div className="grid md:grid-cols-3 gap-8 mb-16 relative">
          {stats.map((stat, index) => (
            <div key={index} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-100 transition-opacity" />
              <div 
                className="relative p-8 rounded-2xl bg-gray-900 border border-gray-800 hover:border-violet-500 transition-all cursor-pointer"
                onClick={() => stat.detailedCalculation && toggleStatDetails(index)}
              >
                <div className="flex justify-between items-center">
                  <stat.icon className="w-10 h-10 text-violet-500 mb-4" />
                  {stat.detailedCalculation && (
                    <Info 
                      className="w-6 h-6 text-gray-500 hover:text-violet-500" 
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleStatDetails(index);
                      }}
                    />
                  )}
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-lg font-medium text-violet-400 mb-2">{stat.label}</div>
                <p className="text-gray-400">{stat.description}</p>
                {stat.footnote && (
                  <p className="text-xs text-gray-500 mt-2">{stat.footnote}</p>
                )}
              </div>
            </div>
          ))}
          
          {/* Slide modal pour les détails de calcul */}
          {selectedStatIndex !== null && stats[selectedStatIndex].detailedCalculation && (
            <div 
              className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center"
              onClick={() => setSelectedStatIndex(null)}
            >
              <div 
                className="bg-gray-900 rounded-2xl p-8 max-w-2xl w-full relative"
                onClick={(e) => e.stopPropagation()}
              >
                <button 
                  className="absolute top-4 right-4 text-gray-400 hover:text-white"
                  onClick={() => setSelectedStatIndex(null)}
                >
                  ✕
                </button>
                <h3 className="text-2xl font-bold text-violet-500 mb-6">
                  {stats[selectedStatIndex].detailedCalculation.title}
                </h3>
                
                <div className="space-y-4 mb-6">
                  {stats[selectedStatIndex].detailedCalculation.breakdown.map((item, idx) => (
                    <div key={idx} className="flex justify-between border-b border-gray-800 pb-2">
                      <span className="text-gray-300">{item.label}</span>
                      <span className="text-gray-500">{item.calculation}</span>
                    </div>
                  ))}
                </div>
                
                <div className="bg-gray-800 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-violet-400 mb-2">Détail des Subventions</h4>
                  <p className="text-gray-300 italic">
                    {stats[selectedStatIndex].detailedCalculation.formula}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Section des graphiques */}
        <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800">
          <h3 className="text-2xl font-bold text-center mb-8 text-white">
            Le Marché en Chiffres
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {marketStats.map((stat, index) => (
              <div key={index} className="text-center">
                {/* Graphique CSS */}
                <div className="relative w-20 h-20 mx-auto mb-4">
                  <div className="absolute inset-0 rounded-full bg-gray-800">
                    <div
                      className="absolute inset-0 rounded-full border-[6px] border-violet-500"
                      style={{ clipPath: `circle(${parseInt(stat.value)}% at 50% 50%)` }}
                    />
                  </div>
                </div>
                {/* Informations */}
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