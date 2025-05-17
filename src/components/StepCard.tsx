import React from 'react';
import { Language, Step } from '../types';
import { getStepIcon } from '../utils/iconHelper';
import AccountTypeAnimation from './animations/AccountTypeAnimation';
import CollectCashAnimation from './animations/CollectCashAnimation';
import EnterAccountAnimation from './animations/EnterAccountAnimation';
import EnterAmountAnimation from './animations/EnterAmountAnimation';
import EnterOTPAnimation from './animations/EnterOTPAnimation';
import EnterPinAnimation from './animations/EnterPinAnimation';
import InsertCardAnimation from './animations/InsertCardAnimation';
import ReceiptOptionAnimation from './animations/ReceiptOptionAnimation';
import SelectLanguageAnimation from './animations/SelectLanguageAnimation';
import SuccessAnimation from './animations/SuccessAnimation';
import WithdrawByAccountAnimation from './animations/WithdrawByAccountAnimation';

interface StepCardProps {
  step: Step;
  language: Language;
}

const StepCard: React.FC<StepCardProps> = ({ step, language }) => {
  const getStepAnimation = (image: string) => {
    const animations: Record<string, React.ReactNode> = {
      'insert-card': <InsertCardAnimation darkMode={false} />,
      'select-language': <SelectLanguageAnimation darkMode={false} />,
      'receipt-option': <ReceiptOptionAnimation darkMode={false} />,
      'enter-pin': <EnterPinAnimation darkMode={false} />,
      'cash-withdraw': <WithdrawByAccountAnimation darkMode={false} />,
      'account-type': <AccountTypeAnimation darkMode={false} />,
      'enter-amount': <EnterAmountAnimation darkMode={false} />,
      'get-money': <CollectCashAnimation darkMode={false} />,
      'success-card': <SuccessAnimation darkMode={false} withCard={true} />,
      'withdraw-by-account': <WithdrawByAccountAnimation darkMode={false} />,
      'enter-account': <EnterAccountAnimation darkMode={false} />,
      'enter-otp': <EnterOTPAnimation darkMode={false} />,
      'success-cardless': <SuccessAnimation darkMode={false} withCard={false} />
    };

    return animations[image] || null;
  };

  const animation = getStepAnimation(step.image);

  return (
    <div className="w-full bg-white rounded-lg shadow-md overflow-hidden transition-all duration-500 animate-fade-in">
      <div className="bg-yellow-500 py-3 px-4">
        <h3 className="text-xl font-bold text-black">
          {step.title[language]}
        </h3>
      </div>
      
      <div className="p-6">
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="flex-shrink-0 w-48 h-48 bg-gray-100 rounded-lg flex items-center justify-center">
            {animation || getStepIcon(step.image, 96)}
          </div>
          
          <p className="text-lg flex-1">
            {step.description[language]}
          </p>
        </div>
      </div>
    </div>
  );
};

export default StepCard;