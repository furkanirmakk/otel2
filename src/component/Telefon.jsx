import React, { useState } from 'react';
import { FaPhone } from 'react-icons/fa';

const Phone = () => {
    const [iconColor, setIconColor] = useState('#25D366');

    const handleMouseEnter = () => {
        setIconColor('#128C7E'); // Mouse üzerine gelindiğinde rengi değiştir
    };

    const handleMouseLeave = () => {
        setIconColor('#25D366'); // Mouse ayrıldığında başlangıç rengine geri dön
    };

    const handleArama = () => {
        window.location.href = `tel:${+905070424991}`;
    };

    return (
        <div>
            <FaPhone
                size={40}
                style={{ cursor: 'pointer', color: iconColor }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={handleArama}
            />
        </div>
    );
};

export default Phone;
