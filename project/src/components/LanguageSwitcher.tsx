import React, { useState } from "react";
import axios from "axios";

interface LanguageSwitcherProps {
  text: string; // Le texte à traduire
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ text }) => {
  const [translatedText, setTranslatedText] = useState<string>(text);
  const [currentLanguage, setCurrentLanguage] = useState<string>("en");

  const translateText = async (targetLang: string) => {
    try {
      const apiKey = "VOTRE_GOOGLE_TRANSLATE_API_KEY"; // Remplacez par votre clé d'API
      const response = await axios.post(
        `https://translation.googleapis.com/language/translate/v2`,
        null,
        {
          params: {
            q: text,
            target: targetLang,
            key: apiKey,
          },
        }
      );
      setTranslatedText(response.data.data.translations[0].translatedText);
      setCurrentLanguage(targetLang);
    } catch (error) {
      console.error("Erreur lors de la traduction :", error);
    }
  };

  return (
    <div>
      <div style={{ marginBottom: "10px" }}>
        <button onClick={() => translateText("en")} disabled={currentLanguage === "en"}>
          🇬🇧 English
        </button>
        <button onClick={() => translateText("fr")} disabled={currentLanguage === "fr"}>
          🇫🇷 Français
        </button>
        <button onClick={() => translateText("es")} disabled={currentLanguage === "es"}>
          🇪🇸 Español
        </button>
      </div>
      <div style={{ padding: "20px", border: "1px solid #ccc", borderRadius: "5px" }}>
        {translatedText}
      </div>
    </div>
  );
};

export default LanguageSwitcher;