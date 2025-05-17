import React, { useState, useEffect } from 'react';
import { CheckCircle } from 'lucide-react';

interface AnimationProps {
  darkMode: boolean;
  withCard?: boolean;
}

const SuccessAnimation: React.FC<AnimationProps> = ({ darkMode, withCard = true }) => {
  const [showCheck, setShowCheck] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCheck(prev => !prev);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`relative w-full aspect-[4/3] border-4 ${darkMode ? 'border-gray-600 bg-gray-700' : 'border-gray-300 bg-gray-100'} rounded-lg flex flex-col items-center justify-center overflow-hidden`}>
      <div className={`w-full h-full flex flex-col items-center`}>
        <div className={`w-3/4 h-1/2 mx-auto mt-4 ${darkMode ? 'bg-black' : 'bg-blue-900'} rounded-md relative flex flex-col items-center justify-center border-2 ${darkMode ? 'border-gray-600' : 'border-gray-400'}`}>
          <div className={`text-center ${darkMode ? 'text-white' : 'text-white'} p-2 text-sm font-bold mb-4`}>
            Transaction Successful
          </div>
          
          <div className={`transition-all duration-500 ${showCheck ? 'scale-110' : 'scale-100'}`}>
            <CheckCircle size={48} className="text-green-500" />
          </div>
          
          {withCard && (
            <div className="text-xs text-white opacity-70 mt-4">
              Please collect your card
            </div>
          )}
        </div>
        
        <div className="relative w-full flex justify-center mt-4">
          <div className={`w-1/3 h-2 ${darkMode ? 'bg-gray-800' : 'bg-gray-600'} relative overflow-hidden`}>
            {withCard && (
              <div className={`w-6 h-2 ${darkMode ? 'bg-[#ffd200]' : 'bg-[#ffd200]'} absolute right-0 animate-pulse`}></div>
            )}
          </div>
        </div>
        
        <div className={`grid grid-cols-3 gap-2 mt-8 ${darkMode ? 'text-white' : 'text-black'}`}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, '*', 0, '#'].map((num, i) => (
            <div key={i} className={`w-8 h-8 ${darkMode ? 'bg-gray-800' : 'bg-gray-300'} rounded-md flex items-center justify-center text-sm font-bold`}>
              {num}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SuccessAnimation;