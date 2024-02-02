import React from 'react';
import '../style.css';
import img1 from '../assets/304/IMG_4603.png'
import img2 from '../assets/304/IMG_4592.png'
import img3 from '../assets/303/IMG_4614.png'
import img4 from '../assets/401/IMG_4543.png'
import img5 from '../assets/403/IMG_4571.png'

const Gallery = () => {
    return (
        <div className="gallery">
            <div style={{ '--i': `url(${img1})` }}></div>
            <div style={{ '--i': `url(${img2})` }}></div>
            <div style={{ '--i': `url(${img3})` }}></div>
            <div style={{ '--i': `url(${img4})` }}></div>
            <div style={{ '--i': `url(${img5})` }}></div>
            
        </div>
    );
};

export default Gallery;