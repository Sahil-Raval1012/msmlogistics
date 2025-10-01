import React, { useEffect, useState } from 'react';

const LuxuryPreloader = ({ businessName = "PREMIUM CARS" }) => {
  const [isLoading, setIsLoading] = useState(true);
  const words = businessName.split(' ');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`fixed inset-0 flex items-center justify-center z-50 bg-[#0f0f0f] transition-opacity duration-500 ease-out ${isLoading ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
      <div className="flex flex-col items-center justify-center">
        {/* Gold accent line above text */}
        <div 
          className="w-24 h-px mb-8"
          style={{
            background: 'linear-gradient(90deg, rgba(184,134,11,0) 0%, rgba(212,175,55,1) 50%, rgba(184,134,11,0) 100%)',
            animation: 'fadeIn 0.8s ease-out forwards, expand 1.2s ease-out forwards',
            opacity: 0,
            transform: 'scaleX(0.3)'
          }}
        />

        {/* Business Name with luxury styling */}
        <div className="text-center mb-8">
          {words.map((word, wordIndex) => (
            <div key={wordIndex} className="mb-1">
              {word.split('').map((letter, index) => (
                <span 
                  key={`${wordIndex}-${index}`}
                  className="inline-block text-6xl md:text-8xl lg:text-9xl font-bold tracking-wider"
                  style={{
                    color: '#ffffff',
                    textShadow: '0 0 10px rgba(212,175,55,0.3)',
                    animation: `luxuryFadeIn 0.8s ease-out forwards`,
                    animationDelay: `${(wordIndex * 0.1) + (index * 0.05)}s`,
                    opacity: 0,
                  }}
                >
                  {letter}
                </span>
              ))}
            </div>
          ))}
        </div>

        {/* Decorative divider */}
        <div className="relative flex items-center justify-center w-full mb-6">
          <div 
            className="w-16 h-px mx-4"
            style={{
              background: 'linear-gradient(90deg, rgba(212,175,55,0) 0%, rgba(212,175,55,1) 100%)',
              animation: 'expandRight 1s ease-out 0.9s forwards',
              opacity: 0,
              transformOrigin: 'right'
            }}
          />
          <div 
            className="w-4 h-4 rounded-full border-2 border-transparent"
            style={{
              background: 'radial-gradient(circle, rgba(212,175,55,1) 0%, rgba(212,175,55,0.5) 70%, rgba(212,175,55,0) 100%)',
              animation: 'pulseGlow 2s infinite ease-out, fadeIn 0.5s ease-out 1s forwards',
              opacity: 0
            }}
          />
          <div 
            className="w-16 h-px mx-4"
            style={{
              background: 'linear-gradient(90deg, rgba(212,175,55,1) 0%, rgba(212,175,55,0) 100%)',
              animation: 'expandLeft 1s ease-out 0.9s forwards',
              opacity: 0,
              transformOrigin: 'left'
            }}
          />
        </div>

        {/* Elegant tagline */}
        <div 
          className="text-[#d4af37] text-lg md:text-xl tracking-[0.3em] font-light mt-2"
          style={{
            animation: 'fadeIn 1s ease-out 1.2s forwards',
            opacity: 0,
            letterSpacing: '0.3em'
          }}
        >
          We recieve, We pack, We sell
        </div>
      </div>
      
      <style jsx>{`
        @keyframes luxuryFadeIn {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes expandRight {
          0% {
            transform: scaleX(0);
            opacity: 0;
          }
          100% {
            transform: scaleX(1);
            opacity: 1;
          }
        }
        
        @keyframes expandLeft {
          0% {
            transform: scaleX(0);
            opacity: 0;
          }
          100% {
            transform: scaleX(1);
            opacity: 1;
          }
        }
        
        @keyframes expand {
          0% {
            transform: scaleX(0.3);
          }
          100% {
            transform: scaleX(1);
          }
        }
        
        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        
        @keyframes pulseGlow {
          0% {
            box-shadow: 0 0 10px 2px rgba(212, 175, 55, 0.5);
          }
          50% {
            box-shadow: 0 0 20px 5px rgba(212, 175, 55, 0.7);
          }
          100% {
            box-shadow: 0 0 10px 2px rgba(212, 175, 55, 0.5);
          }
        }
      `}</style>
    </div>
  );
};

export default LuxuryPreloader;