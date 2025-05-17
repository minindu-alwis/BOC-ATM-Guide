import React from 'react';
import { Language } from '../types';

interface LanguageSelectorProps {
  language: Language;
  onLanguageChange: (language: Language) => void;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ language, onLanguageChange }) => {
  const languageLabels = {
    english: 'English',
    sinhala: 'සිංහල',
    tamil: 'தமிழ்',
  };

  return (
    <div className="flex items-center">
      <label htmlFor="language-select" className="sr-only">
        Select Language
      </label>
      <select
        id="language-select"
        value={language}
        onChange={(e) => onLanguageChange(e.target.value as Language)}
        className="bg-white border border-gray-300 text-black rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-yellow-600"
      >
        <option value="english">{languageLabels.english}</option>
        <option value="sinhala">{languageLabels.sinhala}</option>
        <option value="tamil">{languageLabels.tamil}</option>
      </select>
    </div>
  );
};

export default LanguageSelector;