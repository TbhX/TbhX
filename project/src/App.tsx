import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/Stats';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LanguageToggle from './components/LanguageToggle';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-black text-white">
        <LanguageToggle />
        <Hero />
        <About />
        <Stats />
        <Location />
        <Contact />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;