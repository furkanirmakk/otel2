import React, { useState } from 'react';
import { FaInstagram } from 'react-icons/fa';

const InstagramButton = () => {
    const [iconColor, setIconColor] = useState('#25D366');

    const handleMouseEnter = () => {
        setIconColor('#128C7E'); // Mouse üzerine gelindiğinde rengi değiştir
    };

    const handleMouseLeave = () => {
        setIconColor('#25D366'); // Mouse ayrıldığında başlangıç rengine geri dön
    };

    const handleInstagramClick = () => {
        const instagramPageURL = 'https://www.instagram.com/womcobutikotel';
        window.open(instagramPageURL, '_blank');
    };

    return (
        <div>
            <FaInstagram
                size={40}
                style={{ cursor: 'pointer', color: iconColor }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={handleInstagramClick}
            />
        </div>
    );
};

export default InstagramButton;
