import React, { useState } from 'react';
import '../style.css';
import img1 from '../assets/304/IMG_4603.png';
import img2 from '../assets/304/IMG_4592.png';
import img3 from '../assets/303/IMG_4614.png';

const Oda1Gallery = () => {
    const images = [img1, img2, img3];
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    const handleCloseModal = () => {
        setSelectedImage(null);
    };

    return (
        <div className="gallery1 grid grid-cols-5 mr-10 ml-10 gap-2 max-sm:grid-cols-2 max-sm:mr-11 max-sm:ml-11 max-md:grid-cols-3 max-md:mr-11 
            max-md:ml-11 max-xl:mr-8 max-xl:ml-8">
            {images.map((image, index) => (
                <div key={index}>
                    {selectedImage === image && (
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
                            onClick={handleCloseModal}
                        >
                            <img
                                className='rounded-lg'
                                src={image}
                                alt="Fullscreen"
                                style={{
                                    maxWidth: '70%',
                                    maxHeight: '100%',
                                }}
                            />
                        </div>
                    )}

                    <img
                        className='rounded-lg w-70%'
                        src={image}
                        alt="Thumbnail"
                        style={{ cursor: 'pointer' }}
                        onClick={() => handleImageClick(image)}
                    />
                </div>
            ))}
        </div>
    );
};

export default Oda1Gallery;
