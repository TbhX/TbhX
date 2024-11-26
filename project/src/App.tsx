import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/Stats';
import Location from './components/Location';

const App = () => {
  return (
    <div>
      <Hero />
      <About />
      <Stats />
      <Location />
    </div>
  );
};

export default App;