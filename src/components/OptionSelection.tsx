import React from 'react';
import { CreditCard, Wallet } from 'lucide-react';
import { WithdrawalOption, Language } from '../types';

interface OptionSelectionProps {
  onOptionSelect: (option: WithdrawalOption) => void;
  language: Language;
}

const OptionSelection: React.FC<OptionSelectionProps> = ({ onOptionSelect, language }) => {
  const title = {
    english: 'How would you like to withdraw cash?',
    sinhala: 'ඔබ මුදල් ආපසු ගැනීමට කැමති ආකාරය?',
    tamil: 'பணத்தை எவ்வாறு எடுக்க விரும்புகிறீர்கள்?'
  };

  const options = {
    card: {
      english: 'Using Card',
      sinhala: 'කාඩ්පත භාවිතයෙන්',
      tamil: 'அட்டையைப் பயன்படுத்துதல்'
    },
    cardless: {
      english: 'Without Card',
      sinhala: 'කාඩ්පත නොමැතිව',
      tamil: 'அட்டை இல்லாமல்'
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 pt-10">
      <h2 className="text-2xl font-bold text-center mb-8">{title[language]}</h2>
      
      <div className="flex flex-col md:flex-row gap-6 w-full max-w-2xl">
        <button
          onClick={() => onOptionSelect('card')}
          className="flex-1 bg-white hover:bg-yellow-50 border-2 border-yellow-500 rounded-lg p-6 flex flex-col items-center gap-4 transition-all duration-300 hover:shadow-lg"
        >
          <div className="w-16 h-16 flex items-center justify-center bg-yellow-500 text-black rounded-full">
            <CreditCard size={32} />
          </div>
          <span className="text-xl font-semibold text-black">{options.card[language]}</span>
        </button>
        
        <button
          onClick={() => onOptionSelect('cardless')}
          className="flex-1 bg-white hover:bg-yellow-50 border-2 border-yellow-500 rounded-lg p-6 flex flex-col items-center gap-4 transition-all duration-300 hover:shadow-lg"
        >
          <div className="w-16 h-16 flex items-center justify-center bg-yellow-500 text-black rounded-full">
            <Wallet size={32} />
          </div>
          <span className="text-xl font-semibold text-black">{options.cardless[language]}</span>
        </button>
      </div>
    </div>
  );
};

export default OptionSelection;