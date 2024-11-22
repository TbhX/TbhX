import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/Stats';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LanguageSwitcher from './components/LanguageSwitcher'; // Ajoutez l'importation

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Placez le composant LanguageSwitcher où vous souhaitez */}
      <div className="absolute top-4 right-4 z-10">
        <LanguageSwitcher text="Welcome to Le91 Arena, the ultimate gaming experience!" />
      </div>
      
      <Hero />
      <About />
      <Stats />
      <Location />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;