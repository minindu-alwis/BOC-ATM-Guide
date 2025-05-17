import React, { useState, useEffect } from 'react';
import { CircleDollarSign } from 'lucide-react'; // Using CircleDollarSign for banking theme
import LanguageSelector from './LanguageSelector';
import { Language } from '../types';

interface HeaderProps {
  language: Language;
  onLanguageChange: (language: Language) => void;
}

const Header: React.FC<HeaderProps> = ({ language, onLanguageChange }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  
  // Trigger animation every few seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 1500);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="bg-gradient-to-r from-yellow-500 to-yellow-400 text-black px-4 py-3 flex justify-between items-center shadow-lg">
      <div className="flex items-center space-x-3">
        <div className={`flex items-center transition-all duration-1000 ${isAnimating ? 'scale-110' : ''}`}>
          <CircleDollarSign className={`w-8 h-8 mr-2 text-blue-800 transition-all duration-500 ${isAnimating ? 'rotate-180' : ''}`} />
          <div className="relative">
            <h1 className="text-2xl md:text-3xl font-bold tracking-wider">
              <span className={`inline-block transition-all duration-300 ${isAnimating ? 'translate-y-1 text-black-800' : ''}`}>B</span>
              <span className={`inline-block transition-all duration-300 delay-100 ${isAnimating ? '-translate-y-1 text-black-800' : ''}`}>O</span>
              <span className={`inline-block transition-all duration-300 delay-200 ${isAnimating ? 'translate-y-1 text-black-800' : ''}`}>C</span>
            </h1>
            <div className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-800 transition-all duration-700 ${isAnimating ? 'w-full' : ''}`}></div>
          </div>
        </div>
        <span className="hidden md:inline-block text-sm font-medium opacity-90">Bank of Commerce</span>
      </div>
      <LanguageSelector language={language} onLanguageChange={onLanguageChange} />
    </header>
  );
};

export default Header;