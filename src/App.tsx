import React, { useState } from 'react';
import Header from './components/Header';
import OptionSelection from './components/OptionSelection';
import StepGuide from './components/StepGuide';
import { WithdrawalOption, Language } from './types';

function App() {
  const [language, setLanguage] = useState<Language>('english');
  const [selectedOption, setSelectedOption] = useState<WithdrawalOption | null>(null);

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage);
  };

  const handleOptionSelect = (option: WithdrawalOption) => {
    setSelectedOption(option);
  };

  const handleReset = () => {
    setSelectedOption(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header language={language} onLanguageChange={handleLanguageChange} />
      
      <main className="flex-1 container mx-auto py-6">
        {selectedOption === null ? (
          <OptionSelection onOptionSelect={handleOptionSelect} language={language} />
        ) : (
          <StepGuide option={selectedOption} language={language} onReset={handleReset} />
        )}
      </main>
      
      <footer className="bg-black text-white py-4 text-center">
        <p>© {new Date().getFullYear()} Bank of Ceylon. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;