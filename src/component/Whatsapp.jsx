import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsApp = () => {
    const [iconColor, setIconColor] = useState('#25D366');

    const handleMouseEnter = () => {
        setIconColor('#128C7E'); // Mouse üzerine gelindiğinde rengi değiştir
    };

    const handleMouseLeave = () => {
        setIconColor('#25D366'); // Mouse ayrıldığında başlangıç rengine geri dön
    };

    const handleWhatsAppPress = () => {
        const whatsappURL = `https://wa.me/${+905070424991}`;
        window.open(whatsappURL, '_blank');
    };

    return (
        <div>
            <FaWhatsapp
                size={40}
                style={{ cursor: 'pointer', color: iconColor }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={handleWhatsAppPress}
            />
        </div>
    );
};

export default WhatsApp;
