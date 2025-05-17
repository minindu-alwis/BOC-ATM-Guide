import React, { useState, useEffect } from 'react';
import { CreditCard, Wallet } from 'lucide-react';

const OptionSelection = ({ onOptionSelect, language = 'english' }) => {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    setVisible(true);
  }, []);
  
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
  
  // Generate animated dots for the background
  const generateAnimatedDots = () => {
    const dots = [];
    for (let i = 0; i < 30; i++) {
      const size = Math.floor(Math.random() * 8) + 4; // Random size between 4-12px
      const animationDuration = Math.floor(Math.random() * 20) + 15; // Random duration between 15-35s
      const initialTop = Math.floor(Math.random() * 100); // Random initial position
      const initialLeft = Math.floor(Math.random() * 100);
      const delay = Math.floor(Math.random() * 5);
      const opacity = (Math.random() * 0.15) + 0.05; // Random opacity between 0.05-0.2
      
      dots.push(
        <div 
          key={i}
          className="absolute rounded-full bg-yellow-400"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            top: `${initialTop}%`,
            left: `${initialLeft}%`,
            opacity: opacity,
            animation: `float ${animationDuration}s infinite ease-in-out ${delay}s`,
          }}
        />
      );
    }
    return dots;
  };
  
  return (
    <div className="flex flex-col items-center justify-center p-4 pt-10 min-h-screen bg-white relative overflow-hidden">
      {/* Animated background elements */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(100px, 50px) rotate(90deg); }
          50% { transform: translate(50px, 100px) rotate(180deg); }
          75% { transform: translate(-50px, 50px) rotate(270deg); }
          100% { transform: translate(0, 0) rotate(360deg); }
        }
      `}</style>
      
      {/* Background animated dots */}
      {generateAnimatedDots()}
      
      <div className={`transform transition-all duration-700 relative z-10 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
        <div className="mb-2 flex items-center justify-center">
        
            <img src="boc-logo.png" alt="BOC Logo" className="w-20 h-15" />
        </div>
        
        <h1 className="text-3xl font-bold text-center text-yellow-600 mb-2">
          BOC ATM USAGE GUIDE
        </h1>
        <div className="w-32 h-1 bg-yellow-500 mx-auto mb-8 rounded-full"></div>
      </div>
      
      <h2 className={`text-2xl font-bold text-center mb-8 transition-all duration-500 text-gray-800 relative z-10 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {title[language]}
      </h2>
      
      <div className="flex flex-col md:flex-row gap-6 w-full max-w-2xl relative z-10">
        <button
          onClick={() => onOptionSelect('card')}
          className={`flex-1 bg-white hover:bg-yellow-50 border-2 border-yellow-500 rounded-lg p-6 flex flex-col items-center gap-4 transition-all duration-500 hover:shadow-lg transform hover:-translate-y-1 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
        >
          <div className="w-16 h-16 flex items-center justify-center bg-yellow-500 text-black rounded-full transition-all duration-300 hover:scale-110">
            <CreditCard size={32} />
          </div>
          <span className="text-xl font-semibold text-black">{options.card[language]}</span>
        </button>
        
        <button
          onClick={() => onOptionSelect('cardless')}
          className={`flex-1 bg-white hover:bg-yellow-50 border-2 border-yellow-500 rounded-lg p-6 flex flex-col items-center gap-4 transition-all duration-500 hover:shadow-lg transform hover:-translate-y-1 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
        >
          <div className="w-16 h-16 flex items-center justify-center bg-yellow-500 text-black rounded-full transition-all duration-300 hover:scale-110">
            <Wallet size={32} />
          </div>
          <span className="text-xl font-semibold text-black">{options.cardless[language]}</span>
        </button>
      </div>
      
      <div className={`mt-10 text-gray-600 text-center text-sm transition-all duration-700 delay-300 relative z-10 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        Select your preferred withdrawal method
      </div>
    </div>
  );
};

export default OptionSelection;