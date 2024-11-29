import React from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { translations } = useLanguage();
  const { hero } = translations;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70 z-10" />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://cdn.coverr.co/videos/coverr-esports-arena-with-players-5398/1080p.mp4"
            type="video/mp4"
          />
          <source
            src="https://cdn.coverr.co/videos/coverr-gaming-setup-with-neon-lights-3633/1080p.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-violet-500 to-purple-500 animate-text-shine mb-6">
          {hero.title}
          <span className="block text-3xl md:text-4xl mt-2">{hero.subtitle}</span>
        </h1>
        
        <p className="text-gray-300 text-xl md:text-2xl mb-4 opacity-0 animate-fade-in">
          {hero.slogan}
        </p>

        <p className="text-xl md:text-2xl italic text-violet-400 mb-8 opacity-0 animate-fade-in" style={{animationDelay: '0.3s'}}>
          {hero.motto}
        </p>
        
        <a href="#about" className="inline-flex items-center gap-2 px-8 py-4 bg-violet-600 hover:bg-violet-700 text-white rounded-full transition-all hover:scale-105 animate-bounce-subtle">
          {hero.cta}
          <ChevronDown className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
}