import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Globe } from 'lucide-react';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-2">
      <Globe className="h-4 w-4 text-white" />
      <div className="flex bg-white/10 rounded-md overflow-hidden">
        <button
          onClick={() => setLanguage('en')}
          className={`px-2 py-1 text-xs font-medium transition-colors ${
            language === 'en'
              ? 'bg-white text-black'
              : 'text-white hover:bg-white/20'
          }`}
        >
          EN
        </button>
        <button
          onClick={() => setLanguage('pt')}
          className={`px-2 py-1 text-xs font-medium transition-colors ${
            language === 'pt'
              ? 'bg-white text-black'
              : 'text-white hover:bg-white/20'
          }`}
        >
          PT
        </button>
      </div>
    </div>
  );
};

export default LanguageSwitcher;