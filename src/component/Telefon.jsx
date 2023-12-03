// TelefonButonu.js

import React from 'react';
import { FaPhone } from 'react-icons/fa';

const Phone = () => {
  const handleArama = () => {
    window.location.href = `tel:${+905070424991}`;
  };

  return (
    <div>
   
        <FaPhone 
        size={40}
        style={{ cursor: 'pointer', color: '#25D366' }}
        icon={FaPhone} 
        onClick={handleArama}/>
      
    </div>
  );
};

export default Phone;
