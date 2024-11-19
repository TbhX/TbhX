import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/Stats';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
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