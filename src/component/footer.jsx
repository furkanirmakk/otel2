import React from 'react';
import WhatsApp from './Whatsapp';
import Phone from './Telefon';
import InstagramButton from './instagram';

const Footer = () => {
    return (
        <footer className="bg-gray-800 w-full text-white p-4">
            <div>
                <div className='container mx-auto grid grid-cols-3 gap-6 flex items-center justify-center p-5 max-sm:grid-cols-1 max-sm:p-0
                       max-md:grid-cols-1 max-md:p-0'>

                    <div>
                        <h1 className='flex items-center justify-center' >ADRES</h1>
                        <div className='w-full h-12 bg-yz mb-2 shadow-lg'></div>
                        <p className='flex text-center'>Fetih, Womco Plaza, Eski Çiftlik Yolu Cd No:7, 34100 Ataşehir/İstanbul</p>
                    </div>
                    <div className='items-center justify-center text-center '>
                        <div><a href="/">Anasayfa</a></div>
                        <div className='w-full h-12 bg-yz shadow-lg'></div>
                        <div><a href="/">İletişim</a></div>
                        <div className='w-full h-12 bg-yz shadow-lg'></div>
                        <div><a href="/">Odalarımız</a></div>
                        <div className='w-full h-12 bg-yz shadow-lg'></div>
                    </div>
                    <div >
                        <h1 className=' flex items-center justify-center'>İLETİŞİM</h1>
                        <div className='w-full h-12 bg-yz shadow-lg mb-4'></div>
                        <div className='flex grid grid-cols-3 pl-5 gap-2 flex items-center justify-center max-sm:grid-cols-3 max-sm:pl-5 
                        max-md:grid-cols-3  max-md:pl-11 max-lg:grid-cols-1'>
                            <WhatsApp />
                            <Phone />
                            <InstagramButton />
                        </div>


                    </div>
                </div>
                <div className="container mx-auto flex items-center justify-center">
                    <p>&copy; 2023 WOMCO</p>
                </div

                ></div>
        </footer>
    );
};

export default Footer;