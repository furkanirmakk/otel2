import React from 'react';
import { FaInstagram } from 'react-icons/fa';


const InstagramButton = () => {
  const handleInstagramClick = () => {
    // Instagram sayfasının URL'ini buraya ekleyin
    const instagramPageURL = 'https://www.instagram.com/womcobutikotel';
    window.open(instagramPageURL, '_blank');
  };

  return (
    <div>
      {/* Instagram ikonunu ekleyin */}
      <FaInstagram size={40} 
      onClick={handleInstagramClick} 
      style={{ cursor: 'pointer', color: '#25D366'}} />
    </div>
  );
};

export default InstagramButton;
