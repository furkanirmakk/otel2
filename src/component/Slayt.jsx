import React, { useState, useEffect } from 'react';
import image1 from '../assets/301/IMG_4576.png';
import image2 from '../assets/301/IMG_4581.png';
import image3 from '../assets/301/IMG_4582.png';
import image4 from '../assets/301/IMG_4587.png';
import image5 from '../assets/302/IMG_4640.png';
import image6 from '../assets/302/IMG_4639.png';
import Right from '../assets/right.png';
import Left from '../assets/left.png';


const Slide = () => {
  const images = [image1, image2, image3, image4, image5, image6];
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
  };


  useEffect(() => {
    const intervalId = setInterval(handleNextSlide, 2000); // Her 3 saniyede bir geçiş yapar

    return () => {
      clearInterval(intervalId); // Bileşen kaldırıldığında zamanlayıcıyı temizler
    };
  }, []);


  const [isFullScreen, setFullScreen] = useState(false);

  const handleImageClick = () => {
      setFullScreen(!isFullScreen);
  };
  return (
    <div className='flex justify-center items-center' style={{ position: 'relative', maxWidth: '900px', margin: 'auto' }}>
       {isFullScreen && (
                        <div
                            style={{
                                position: 'fixed',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                background: 'rgba(0, 0, 0, 0.8)',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                zIndex: 10,
                            }}
                            onClick={handleImageClick}
                        >
                            <img className='rounded-lg'
                                src={images[currentSlide]}
                                alt="Fullscreen"
                                style={{
                                    maxWidth: '100%',
                                    maxHeight: '100%',

                                }}
                            />
                        </div>
                    )}


      <img className='rounded-lg mb-10 '
        src={images[currentSlide]}
        alt={`Slide ${currentSlide + 1}`}
        style={{ width: '60%', height: 'auto',  }}
        onClick={handleImageClick}
      />
     

      <div style={{ position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)' }}>
        <button onClick={handlePrevSlide}><img className='w-8  pb-5 max-sm:pb-3 max-sm:w-9 opacity-70' src={Left} alt="" /></button>
      </div>

      <div style={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%) ' }}>
        <button onClick={handleNextSlide}><img className='w-8  pb-5 max-sm:pb-3 max-sm:w-9 opacity-70' src={Right} alt="" /></button>
      </div>
    </div>
  );
};

export default Slide;
