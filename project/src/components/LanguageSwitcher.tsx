import React, { useState } from 'react';
import translations from '../translation.json'; // Import translations

const LanguageSwitcher = () => {
  const [language, setLanguage] = useState('fr'); // Default language is French

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  return (
    <div>
      <header>
        <h1>{translations[language].title}</h1>
        <h2>{translations[language].subtitle}</h2>
        <p>{translations[language].description}</p>
        <button onClick={() => handleLanguageChange('fr')}>Français</button>
        <button onClick={() => handleLanguageChange('en')}>English</button>
      </header>

      <section>
        <h3>{translations[language].be_pioneer}</h3>
        <h3>{translations[language].discover_vision}</h3>
        <p>{translations[language].vision_text}</p>

        <h3>{translations[language].investment}</h3>
        <p>{translations[language].investment_text}</p>

        <h3>{translations[language].gaming_area}</h3>
        <p>{translations[language].premium_equipment}</p>

        <h3>{translations[language].e_sport_competitions}</h3>
        <p>{translations[language].e_sport_text}</p>

        <h3>{translations[language].growing_community}</h3>
        <p>{translations[language].visitors_text}</p>

        <h3>{translations[language].constant_innovation}</h3>
        <p>{translations[language].accessible_life}</p>

        <h3>{translations[language].investment_potential}</h3>
        <p>{translations[language].investment_text}</p>
      </section>

      <footer>
        <h3>{translations[language].subsidies}</h3>
        <p>{translations[language].regional_subsidies}</p>
        <p>{translations[language].innovation_up}</p>
        <p>{translations[language].tech_innovation_support}</p>
      </footer>
    </div>
  );
};

export default LanguageSwitcher;