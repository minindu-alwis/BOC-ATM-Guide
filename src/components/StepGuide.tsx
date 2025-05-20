import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, ArrowRight, RefreshCw, Home } from 'lucide-react';
import { WithdrawalOption, Language, Step } from '../types';
import { steps } from '../data';
import StepCard from './StepCard';
import ProgressBar from './ProgressBar';

interface StepGuideProps {
  option: WithdrawalOption;
  language: Language;
  onReset: () => void;
}

const StepGuide: React.FC<StepGuideProps> = ({ option, language, onReset }) => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);
  const stepsData = steps[option];
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);

  const titleLabels = {
    card: {
      english: 'Cash Withdrawal with Card',
      sinhala: 'කාඩ්පත සමඟ මුදල් ආපසු ගැනීම',
      tamil: 'அட்டை மூலம் பணம் எடுத்தல்'
    },
    cardless: {
      english: 'Cash Withdrawal without Card',
      sinhala: 'කාඩ්පත නොමැතිව මුදල් ආපසු ගැනීම',
      tamil: 'அட்டை இல்லாமல் பணம் எடுத்தல்'
    }
  };

  const controlLabels = {
    previous: {
      english: 'Previous',
      sinhala: 'පෙර',
      tamil: 'முந்தைய'
    },
    next: {
      english: 'Next',
      sinhala: 'ඊළඟ',
      tamil: 'அடுத்து'
    },
    autoplay: {
      start: {
        english: 'Start Autoplay',
        sinhala: 'ස්වයංක්‍රීය ධාවනය ආරම්භ කරන්න',
        tamil: 'தானியங்கி ஆரம்பிக்கவும்'
      },
      stop: {
        english: 'Stop Autoplay',
        sinhala: 'ස්වයංක්‍රීය ධාවනය නවත්වන්න',
        tamil: 'தானியங்கி நிறுத்தவும்'
      }
    },
    restart: {
      english: 'Restart Guide',
      sinhala: 'මාර්ගෝපදේශය නැවත ආරම්භ කරන්න',
      tamil: 'வழிகாட்டியை மீண்டும் தொடங்கவும்'
    },
    home: {
      english: 'Back to Home',
      sinhala: 'මුල් පිටුවට ආපසු',
      tamil: 'முகப்புக்கு திரும்பு'
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleNext = () => {
    if (currentStep < stepsData.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  const resetGuide = () => {
    setCurrentStep(0);
    setIsAutoPlaying(true);
  };

  useEffect(() => {
    // Reset to first step when option changes
    setCurrentStep(0);
    setIsAutoPlaying(true);
  }, [option]);

  useEffect(() => {
    // Clear any existing timers
    if (autoPlayTimerRef.current) {
      clearTimeout(autoPlayTimerRef.current);
      autoPlayTimerRef.current = null;
    }

    // Set up autoplay timer if enabled
    if (isAutoPlaying && currentStep < stepsData.length - 1) {
      autoPlayTimerRef.current = setTimeout(() => {
        setCurrentStep(currentStep + 1);
      }, 5000);
    }

    // Cleanup timer on unmount
    return () => {
      if (autoPlayTimerRef.current) {
        clearTimeout(autoPlayTimerRef.current);
      }
    };
  }, [currentStep, isAutoPlaying, stepsData.length]);

  return (
    <div className="flex flex-col items-center p-4 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-6">{titleLabels[option][language]}</h2>
      
      <ProgressBar
        currentStep={currentStep}
        totalSteps={stepsData.length}
      />

      <div className="mt-6 w-full">
        <StepCard 
          step={stepsData[currentStep]} 
          language={language}
        />
      </div>

      <div className="flex justify-between items-center w-full mt-8">
        <button
          onClick={handlePrevious}
          disabled={currentStep === 0}
          className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
            currentStep === 0
              ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
              : 'bg-black text-white hover:bg-gray-800'
          }`}
        >
          <ArrowLeft size={16} />
          <span>{controlLabels.previous[language]}</span>
        </button>

        <div className="flex gap-3">
          <button
            onClick={resetGuide}
            className="flex items-center gap-1 px-3 py-2 rounded-md bg-gray-200 hover:bg-gray-300 text-gray-800 transition-colors"
          >
            <RefreshCw size={16} />
            <span className="hidden sm:inline">{controlLabels.restart[language]}</span>
          </button>
          
          <button
            onClick={onReset}
            className="flex items-center gap-1 px-3 py-2 rounded-md bg-gray-200 hover:bg-gray-300 text-gray-800 transition-colors"
          >
            <Home size={16} />
            <span className="hidden sm:inline">{controlLabels.home[language]}</span>
          </button>
          
          <button
            onClick={toggleAutoPlay}
            className={`flex items-center gap-1 px-3 py-2 rounded-md transition-colors ${
              isAutoPlaying
                ? 'bg-yellow-500 text-black hover:bg-yellow-600'
                : 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200'
            }`}
          >
            <RefreshCw size={16} className={isAutoPlaying ? 'animate-spin' : ''} />
            <span className="hidden sm:inline">
              {isAutoPlaying
                ? controlLabels.autoplay.stop[language]
                : controlLabels.autoplay.start[language]}
            </span>
          </button>
        </div>

        <button
          onClick={handleNext}
          disabled={currentStep === stepsData.length - 1}
          className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
            currentStep === stepsData.length - 1
              ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
              : 'bg-black text-white hover:bg-gray-800'
          }`}
        >
          <span>{controlLabels.next[language]}</span>
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default StepGuide;