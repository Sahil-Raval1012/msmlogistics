import React, { useState, useEffect } from 'react';

import image1 from '../assets/image1.jpeg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpeg';
import image4 from '../assets/image4.jpg';

const images = [image1, image2, image3, image4];

const LandingPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically switch slides every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Carousel */}
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="w-full h-screen flex-shrink-0"
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></div>
        ))}
      </div>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-colors ${
              index === currentIndex ? 'bg-white' : 'bg-gray-500 hover:bg-gray-300'
            }`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
