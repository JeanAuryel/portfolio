/**
 * @copyright 2025 jeanauryel.dev
 * @license Apache-2.0
 */

import { useLanguage, type Language } from '../contexts/LanguageContext';

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage);
  };

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => handleLanguageChange('en')}
        className={`p-2 rounded transition-all hover:opacity-80 ${
          language === 'en'
            ? 'ring-2 ring-amber-600'
            : 'opacity-60 hover:opacity-100'
        }`}
      >
        <img 
          src="/images/uk-flag.svg" 
          alt="English" 
          className="w-6 h-6"
        />
      </button>
      <span className="text-zinc-600">|</span>
      <button
        onClick={() => handleLanguageChange('fr')}
        className={`p-2 rounded transition-all hover:opacity-80 ${
          language === 'fr'
            ? 'ring-2 ring-amber-600'
            : 'opacity-60 hover:opacity-100'
        }`}
      >
        <img 
          src="/images/fr-flag.svg" 
          alt="Français" 
          className="w-6 h-6"
        />
      </button>
    </div>
  );
};

export default LanguageSelector;