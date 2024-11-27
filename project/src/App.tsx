import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/Stats';
import Location from './components/Location';
import Contact from './components/Contact';  // Import du composant Contact
import Footer from './components/Footer';  // Import du composant Footer
import LanguageSwitcher from './components/LanguageSwitcher'; // Import du composant LanguageSwitcher

const App = () => {
  return (
    <div>
      <LanguageSwitcher /> {/* Add the LanguageSwitcher at the top */}
      <Hero />
      <About />
      <Stats />
      <Location />
      <Contact />  {/* Utilisation du composant Contact */}
      <Footer />   {/* Utilisation du composant Footer */}
    </div>
  );
};

export default App;