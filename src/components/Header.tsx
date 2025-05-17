import React, { useState, useEffect } from 'react';
import { CircleDollarSign, Coins, TrendingUp } from 'lucide-react';
import LanguageSelector from './LanguageSelector';
import { Language } from '../types';

interface HeaderProps {
  language: Language;
  onLanguageChange: (language: Language) => void;
}

const Header: React.FC<HeaderProps> = ({ language, onLanguageChange }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [showCoins, setShowCoins] = useState(false);
  
  // Trigger logo animation every few seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 1500);
    }, 6000);
    
    return () => clearInterval(interval);
  }, []);
  
  // Toggle coin animation
  useEffect(() => {
    const coinInterval = setInterval(() => {
      setShowCoins(true);
      setTimeout(() => setShowCoins(false), 2000);
    }, 8000);
    
    return () => clearInterval(coinInterval);
  }, []);

  return (
    <header className="relative overflow-hidden bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-400 text-black px-4 py-3 flex justify-between items-center shadow-lg">
      {/* Animated money symbols in background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div 
            key={i}
            className={`absolute text-yellow-200 opacity-20 transition-all duration-3000 ease-in-out ${
              showCoins ? 'translate-y-full opacity-0' : 'translate-y-0'
            }`} 
            style={{
              left: `${15 + i * 20}%`,
              top: showCoins ? '100%' : `${70 - Math.random() * 40}%`,
              fontSize: `${1 + Math.random() * 1.5}rem`,
              transitionDelay: `${i * 100}ms`,
              transform: `rotate(${Math.random() * 20 - 10}deg)`
            }}
          >
            {i % 2 === 0 ? '₹' : '$'}
          </div>
        ))}
      </div>

      <div className="flex items-center space-x-3 z-10">
        <div className={`flex items-center transition-all duration-1000 ${isAnimating ? 'scale-110' : ''}`}>
          <div className="relative mr-2">
            <CircleDollarSign 
              className={`w-8 h-8 text-blue-800 transition-all duration-500 ${
                isAnimating ? 'rotate-180 scale-110' : ''
              }`} 
            />
            {isAnimating && (
              <TrendingUp className="absolute -top-2 -right-2 w-4 h-4 text-green-600 animate-pulse" />
            )}
          </div>
          
          <div className="relative">
            <h1 className="text-2xl md:text-3xl font-bold tracking-wider text-blue-900">
              <span className={`inline-block transition-all duration-300 ${
                isAnimating ? 'translate-y-1 text-blue-800' : ''
              }`}>B</span>
              <span className={`inline-block transition-all duration-300 delay-100 ${
                isAnimating ? '-translate-y-1 text-blue-800' : ''
              }`}>O</span>
              <span className={`inline-block transition-all duration-300 delay-200 ${
                isAnimating ? 'translate-y-1 text-blue-800' : ''
              }`}>C</span>
            </h1>
            <div className={`absolute -bottom-1 left-0 h-0.5 bg-blue-800 transition-all duration-700 ${
              isAnimating ? 'w-full' : 'w-0'
            }`}></div>
          </div>
        </div>
        
        <div className="hidden md:flex items-center">
          <span className="text-sm font-medium text-blue-900 opacity-90 mr-1">Bank of Ceylon</span>
          <Coins 
            className={`w-4 h-4 text-yellow-700 transition-transform duration-700 ${
              showCoins ? 'rotate-12 scale-125' : ''
            }`} 
          />
        </div>
      </div>
      
      <div className="flex items-center z-10">
        {/* Animated coin that appears when hovering near language selector */}
        <div className={`mr-2 transition-opacity duration-300 ${
          showCoins ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="relative w-6 h-6 bg-yellow-300 rounded-full border-2 border-yellow-500 shadow-md animate-bounce">
            <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-yellow-700">$</div>
          </div>
        </div>
        
        <LanguageSelector language={language} onLanguageChange={onLanguageChange} />
      </div>
    </header>
  );
};

export default Header;