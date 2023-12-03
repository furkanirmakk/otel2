import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsApp = () => {
    const handleWhatsAppPress = () => {
       
        const whatsappURL = `https://wa.me/${+905070424991}`;
        window.open(whatsappURL, '_blank');
    };
    return (
        <div >
            <FaWhatsapp
                size={40}
                style={{ cursor: 'pointer', color: '#25D366' }}
                onClick={handleWhatsAppPress}
            />
        </div>
    );
};

export default WhatsApp;
