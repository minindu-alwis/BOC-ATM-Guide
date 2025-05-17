import React from 'react';

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep, totalSteps }) => {
  // Calculate the percentage complete
  const percentComplete = ((currentStep + 1) / totalSteps) * 100;
  
  return (
    <div className="w-full">
      <div className="flex justify-between text-xs text-gray-600 mb-1">
        <span>Step {currentStep + 1} of {totalSteps}</span>
        <span>{Math.round(percentComplete)}% complete</span>
      </div>
      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className="h-full bg-yellow-500 transition-all duration-500 ease-in-out"
          style={{ width: `${percentComplete}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;