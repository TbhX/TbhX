import React, { useState, createContext, useContext } from 'react';
import { Button } from '@/components/ui/button';
import { Translate } from 'lucide-react';

// Créer un contexte de traduction
const TranslationContext = createContext({
  isTranslated: false,
  toggleTranslation: () => {}
});

// Hook personnalisé pour utiliser le contexte de traduction
export const useTranslation = () => useContext(TranslationContext);

// Service de traduction (simulé - à remplacer par une vraie API)
const translateText = async (text, targetLang = 'en') => {
  try {
    // Simuler un appel API de traduction
    const response = await fetch(`https://translation-api.example.com/translate?text=${encodeURIComponent(text)}&target=${targetLang}`);
    const data = await response.json();
    return data.translatedText || text;
  } catch (error) {
    console.error('Translation error:', error);
    return text;
  }
};

// HOC de traduction
export const withTranslation = (WrappedComponent) => {
  return function TranslatedComponent(props) {
    const { isTranslated } = useTranslation();
    const [translations, setTranslations] = useState({});

    // Fonction pour traduire dynamiquement le contenu
    const translateContent = async (content) => {
      if (typeof content === 'string') {
        if (!translations[content]) {
          const translatedText = await translateText(content);
          setTranslations(prev => ({...prev, [content]: translatedText}));
        }
        return isTranslated ? translations[content] || content : content;
      }
      return content;
    };

    // Fonction récursive pour traduire tous les props et enfants
    const translateRecursively = async (children) => {
      if (typeof children === 'string') {
        return await translateContent(children);
      }
      
      if (React.isValidElement(children)) {
        const translatedChildren = await Promise.all(
          React.Children.map(children.props.children, translateRecursively)
        );
        
        return React.cloneElement(children, {
          ...children.props,
          children: translatedChildren
        });
      }
      
      return children;
    };

    // Wrapper asynchrone pour gérer la traduction
    const TranslationWrapper = async () => {
      const translatedProps = {};
      for (const [key, value] of Object.entries(props)) {
        if (typeof value === 'string') {
          translatedProps[key] = await translateContent(value);
        } else if (Array.isArray(value)) {
          translatedProps[key] = await Promise.all(
            value.map(async (item) => {
              if (typeof item === 'object' && item) {
                const translatedItem = {...item};
                for (const [k, v] of Object.entries(item)) {
                  if (typeof v === 'string') {
                    translatedItem[k] = await translateContent(v);
                  }
                }
                return translatedItem;
              }
              return item;
            })
          );
        } else {
          translatedProps[key] = value;
        }
      }

      return <WrappedComponent {...translatedProps} />;
    };

    return <TranslationWrapper />;
  };
};

// Fournisseur de contexte de traduction
export const TranslationProvider = ({ children }) => {
  const [isTranslated, setIsTranslated] = useState(false);

  const toggleTranslation = () => {
    setIsTranslated(!isTranslated);
  };

  return (
    <TranslationContext.Provider value={{ isTranslated, toggleTranslation }}>
      {children}
      <Button 
        variant="outline" 
        onClick={toggleTranslation}
        className="fixed bottom-4 right-4 z-50"
      >
        <Translate className="mr-2" />
        {isTranslated ? 'Retour au texte original' : 'Traduire en anglais'}
      </Button>
    </TranslationContext.Provider>
  );
};