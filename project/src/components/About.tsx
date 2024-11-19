import React from 'react';
import { Monitor, Headphones, Users, Trophy, Rocket, Clock } from 'lucide-react';

const features = [
  {
    icon: Monitor,
    title: "40 PC Gaming & VR",
    description: "Équipements haut de gamme et expériences VR immersives pour une clientèle exigeante"
  },
  {
    icon: Trophy,
    title: "Compétitions E-Sport",
    description: "Organisation de tournois régionaux et nationaux, créant une communauté active"
  },
  {
    icon: Users,
    title: "Communauté Grandissante",
    description: "5000+ visiteurs mensuels attendus dès la première année"
  }
];

const vision = [
  {
    icon: Rocket,
    title: "Innovation Constante",
    description: "Renouvellement régulier des équipements et des expériences proposées"
  },
  {
    icon: Clock,
    title: "Accessibilité 24/7",
    description: "Un lieu de vie adapté aux rythmes des gamers et créateurs de contenu"
  },
  {
    icon: Headphones,
    title: "Studio Podcast & Stream",
    description: "Espace professionnel pour créateurs de contenu et influenceurs"
  }
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">
          Une Vision Innovante
        </h2>
        
        <div className="mb-16 max-w-3xl mx-auto">
          <p className="text-xl text-gray-300 text-center mb-6">
            Le91 - Arena sera le premier complexe gaming nouvelle génération aux Ulis, 
            au cœur de Paris-Saclay. Un projet ambitieux qui répond aux besoins croissants 
            d'une industrie en pleine expansion.
          </p>
          
          <p className="text-xl text-gray-300 text-center">
            Notre vision : créer un écosystème unique où gamers, créateurs de contenu et 
            passionnés de technologie se rencontrent, collaborent et innovent ensemble.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="group p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-violet-500 transition-all duration-300">
              <feature.icon className="w-12 h-12 text-violet-500 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>

        <h3 className="text-3xl font-bold text-center mb-8 text-white">
          Un Investissement dans le Futur
        </h3>

        <div className="grid md:grid-cols-3 gap-8">
          {vision.map((item, index) => (
            <div key={index} className="group p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-violet-500 transition-all duration-300">
              <item.icon className="w-12 h-12 text-violet-500 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}