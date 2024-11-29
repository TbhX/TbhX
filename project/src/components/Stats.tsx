import React from 'react';
import { TrendingUp, Users, Building, Target } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import RevenueDetails from './RevenueDetails';
import { StatCard } from './ui/StatCard';
import { MarketStat } from './ui/MarketStat';

const icons = {
  "1-2M EUR": TrendingUp,
  "60%": Target,
  "3M EUR": Building
};

export default function Stats() {
  const { translations } = useLanguage();
  const { stats } = translations;

  return (
    <section className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">
          {stats.title}
        </h2>

        <div className="mb-16">
          <p className="text-xl text-center text-gray-300 max-w-3xl mx-auto">
            {stats.description}
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.stats.map((stat, index) => {
            const Icon = icons[stat.value as keyof typeof icons];
            return (
              <StatCard
                key={index}
                icon={Icon}
                value={stat.value}
                label={stat.label}
                description={stat.description}
              />
            );
          })}
        </div>

        <RevenueDetails />

        <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800 mt-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-white">
            {stats.marketTitle}
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {stats.marketStats.map((stat, index) => (
              <MarketStat
                key={index}
                value={stat.value}
                label={stat.label}
                detail={stat.detail}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}