import React from 'react';
import { Ban as Bank } from 'lucide-react';
import LanguageSelector from './LanguageSelector';
import { Language } from '../types';

interface HeaderProps {
  language: Language;
  onLanguageChange: (language: Language) => void;
}

const Header: React.FC<HeaderProps> = ({ language, onLanguageChange }) => {
  return (
    <header className="bg-yellow-500 text-black px-4 py-3 flex justify-between items-center shadow-md">
      <div className="flex items-center space-x-2">
        <Bank size={32} strokeWidth={2.5} />
        <h1 className="text-xl md:text-2xl font-bold">BOC ATM Guide</h1>
      </div>
      <LanguageSelector language={language} onLanguageChange={onLanguageChange} />
    </header>
  );
};

export default Header;