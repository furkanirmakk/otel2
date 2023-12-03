import React from 'react';
import defaultImage from '../assets/oda1.jpg';
import defaultImage4 from '../assets/oda2.jpg';
import defaultImage5 from '../assets/oda3.jpg';
import defaultImage6 from '../assets/oda4.jpg';

import { useState, useEffect } from 'react';

const Slide2 = (props) => {
    const images = [
        defaultImage,
        defaultImage4,
        defaultImage5,
        defaultImage6
      ];
    
      const [currentIndex, setCurrentIndex] = useState(0);
    
      const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
      };
    
      const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
      };
    


      useEffect(() => {
        const intervalId = setInterval(nextSlide, 2000); // Her 3 saniyede bir geçiş yapar
    
        return () => {
          clearInterval(intervalId); // Bileşen kaldırıldığında zamanlayıcıyı temizler
        };
      }, []);

      return (
        <div className="relative w-13  ">
          <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className=" flex justify-center items-center" />
    
          <button onClick={prevSlide} className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-500 text-white rounded-full">Önceki</button>
          <button onClick={nextSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-500 text-white rounded-full">Sonraki</button>
        </div>
      );
    };

export default Slide2;