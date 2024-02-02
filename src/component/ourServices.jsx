import React from 'react';
import { useState } from 'react';
import Diamond from '../assets/diamond.png';
import Interface from '../assets/interface.png';
import Key from '../assets/key-chain.png';
import Clock from '../assets/clock.png';
import Sign from '../assets/street-sign.png';
import Washing from '../assets/washing-machine.png';
import Wifi from '../assets/wifi.png';
import Location from '../assets/location.png';
import Home from '../assets/home.png';
import img1 from '../assets/304/IMG_4603.png';
import img2 from '../assets/304/IMG_4592.png';
import img3 from '../assets/303/IMG_4614.png';
import OdalarGallery from './OdalarGallery'


import defaultImage from '../assets/ic_homeSlider.jpg';

import { Link } from 'react-router-dom';


function OurServices() {
    const [isHovered1, setIsHovered1] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);
    const [isHovered3, setIsHovered3] = useState(false);


    const handleMouseEnter1 = () => {
        setIsHovered1(true);
    };

    const handleMouseLeave1 = () => {
        setIsHovered1(false);
    };

    const handleMouseEnter2 = () => {
        setIsHovered2(true);
    };

    const handleMouseLeave2 = () => {
        setIsHovered2(false);
    };

    const handleMouseEnter3 = () => {
        setIsHovered3(true);
    };

    const handleMouseLeave3 = () => {
        setIsHovered3(false);
    };




    const textStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        color: 'white',
        padding: '10px',
        borderRadius: '5px',
    };


    return (
        <body>

            <div className='w-full h-12 bg-yz shadow-lg mt-5'></div>

            <div className=' flex mr-10 ml-10 mb-3 mt-5 max-sm:mr-0 max-sm:ml-0  max-md:mr-0 max-md:ml-0 max-lg:mr-2 max-lg:ml-4  '>

                <div className='grid grid-cols-3  max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-3 min-xl:grid-cols-4 gap-4  '>
                    <div>

                        <div className=' flex justify-center items-center'>
                            <h1 className='mb-8 font-bold text-yz text-3xl ml-0 pl-0 max-sm:mb-8 '>WOMCO</h1>
                            <p className='font-sans p-3'></p>
                        </div>
                        <p className='font-sans p-3 pl-8 max-sm:pl-4 text-left text-yz2 text-black'>Odalarımızda standartları ve kaliteyi en üst
                            seviyeye taşıyoruz. Dairelerimizde konforunuzu artıracak her detay düşünüldü. Güler yüzlü personelimiz daha iyi
                            bir konaklama deneyimi yaşamanız için 7 gün 24 saat hizmetinizde.</p>
                    </div>

                    <div >
                        <div className='grid grid-cols-2 gap-2'>
                            <div className='flex justify-center items-center '>
                                <img className='w-8  pb-5 max-sm:pb-3 max-sm:w-9' src={Location} alt="" />
                            </div>

                            <div>
                                <h1 className=' pr-3  font-bold  text-left text-yz md'>MERKEZi KONUM </h1>
                            </div>
                        </div>
                        <p className='font-sans p-3 pt-0  pl-8 max-sm:pl-4 text-left text-yz2 text-black'>Otelimiz İstanbul Anadolu Yakası Ataşehir'in Merkezinde bulunmaktadır.</p>


                        <div className='grid grid-cols-2 gap-2'>
                            <div className='flex justify-center items-center'>
                                <img className='w-8 pb-5 max-sm:pb-3 max-sm:w-9' src={Home} alt="" />
                            </div>
                            <div>
                                <h1 className='pr-3  font-bold text-left text-yz text-black'>OTEL KONFORU </h1>
                            </div>
                        </div>
                        <p className='font-sans p-3 pt-0 pl-8 max-sm:pl-4 text-left text-yz2 text-black'>Tüm çarşaflar, havlular, yorgan ve yastık kılıfları her giriş ve çıkışta sizin
                            için yenisi ile değiştirilir.</p>

                    </div>

                    <div >

                        <div className='grid grid-cols-2 gap-2 '>
                            <div className='flex justify-center items-center'>
                                <img className='w-8 pb-5 max-sm:pb-3 max-sm:w-9 ' src={Diamond} alt="" />
                            </div>
                            <div>
                                <h1 className='pr-3 font-bold text-left text-yz'>KUSURSUZ TEMİZLİK </h1>
                            </div>
                        </div>
                        <p className='font-sans p-3 pt-0 pl-8 max-sm:pl-4 text-left text-yz2 text-black'>Giriş ve çıkışlarınızda odalarımız uzman ekibimiz tarafından titizlikle temizlenir.</p>

                        <div className='grid grid-cols-2 gap-2'>
                            <div className='flex justify-center items-center'>
                                <img className='w-8 pb-5 max-sm:pb-3 max-sm:w-9' src={Clock} alt="" />
                            </div>
                            <div>
                                <h1 className='pr-3  font-bold text-left text-yz text-black'>24 SAAT HİZMET </h1>
                            </div>
                        </div>
                        <p className='font-sans p-3 pt-0 pl-8 max-sm:pl-4 text-left text-yz2 text-black'>Telefon ve internet sitesi üzerinden 7/24 resepsiyona ulaşım sağlayabilirsiniz.</p>

                    </div>


                </div>
            </div>


            <div className='w-full h-12 bg-yz shadow-lg'></div>

            <div className="gallery">
                <div className={`relative ${isHovered1 ? 'transform scale-125 transition-transform duration-500 shadow-lg rounded-full ' : ''}`}
                    style={{ '--i': `url(${img1})` }}>
                    <div style={textStyle}>
                        <Link to='/standartOda'>Satandart Oda</Link>
                    </div>
                </div>
                <div className={`relative ${isHovered2 ? 'transform scale-125 transition-transform duration-500 shadow-lg rounded-full' : ''}`}
                    style={{ '--i': `url(${img2})` }}>
                    <div style={textStyle}>
                        <Link to='/SuitOda'>Deluxe Suit Oda</Link>
                    </div>
                </div>
                <div className={`relative ${isHovered2 ? 'transform scale-125 transition-transform duration-500 shadow-lg rounded-full' : ''}`} 
                    style={{ '--i': `url(${img3})` }}>
                    <div style={textStyle}>
                        Çatı Katı
                    </div>
                    </div>
            </div>

            <div>
                <OdalarGallery />
            </div>
           

            <div className='w-full h-12 bg-yz'></div>




            <div className=' flex mr-10 ml-10 mb-3 mt-15 max-sm:mr-0 max-sm:ml-0  max-md:mr-0 max-md:ml-0 max-lg:mr-2 max-lg:ml-4  '>
                <div className='grid grid-cols-4  max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-3 min-xl:grid-cols-4 gap-4  '>
                    <div>

                        <div className=' flex justify-center items-center'>
                            <h1 className='mb-7 font-bold text-yz text-3xl ml-0 pl-0 max-sm:mb-8 '>HİZMETLERİMİZ</h1>
                            <p className='font-sans p-3'></p>
                        </div>
                    </div>

                    <div >
                        <div className='grid grid-cols-2 gap-2'>
                            <div className='flex justify-center items-center'>
                                <img className='w-8  pb-5 max-sm:pb-3 max-sm:w-9' src={Diamond} alt="" />
                            </div>

                            <div>
                                <h1 className=' pr-3 font-bold  text-left text-yz md'>TEMİZLİK </h1>
                                <h3 className='pr-3 text-left text-yz2'>TEMİZ HİJYENİK DAİRELER</h3>
                            </div>
                        </div>
                        <p className='font-sans p-3 pl-8 max-sm:pl-4 text-left text-yz2 '>Dairelerimiz tüm giriş ve çıkışlarda uzman ekibimiz tarafından
                            titizlikle temizlenmektedir.</p>
                    </div>

                    <div>
                        <div className='grid grid-cols-2 gap-2'>
                            <div className='flex justify-center items-center'>
                                <img className='w-8 pb-5 max-sm:pb-3 max-sm:w-9' src={Interface} alt="" />
                            </div>
                            <div>
                                <h1 className='pr-3  font-bold text-left text-yz'>GÜVENLİK </h1>
                                <h3 className='pr-3  text-left text-yz2'>İÇİNİZ RAHAT OLSUN</h3>
                            </div>
                        </div>
                        <p className='font-sans p-3 pl-8 max-sm:pl-4 text-left text-yz2'>Tesisin giriş ve çıkışları holleri kapalı devre kamera sistemleri
                            ile dakika dakika izlenmektedir. ekibimiz gerekli olduğu durumlarda kısa zamanda odalarımıza ulaşılabilmektedir.</p>
                    </div>

                    <div>
                        <div className='grid grid-cols-2 gap-2'>
                            <div className='flex justify-center items-center'>
                                <img className='w-8 pb-5 max-sm:pb-3 max-sm:w-9' src={Key} alt="" />
                            </div>
                            <div>
                                <h1 className='pr-3 font-bold text-left text-yz'>ANAHTAR TESLİMİ    </h1>
                                <h3 className='pr-3 text-left text-yz2'>  ODA KART TANIMLAMA</h3>
                            </div>
                        </div>
                        <p className='font-sans p-3 pl-8 max-sm:pl-4 text-left text-yz2'>Haftanın 7 günü, günün 24 saati girişiniz kaçta olursa olsun
                            anahtarlarınızı sizi bekletmeden resepsiyon görevlisi odanıza ait giriş kartı tanımlaması yapmakta ve size teslim
                            etmektedir.</p>
                    </div>
                </div>
            </div>


            <div className=' flex mr-10 ml-10 mb-3 mt-5 max-sm:mr-0 max-sm:ml-0 max-sm:mt-2 max-md:mr-0 max-md:ml-0 max-md:mt-4 max-lg:mr-2 max-lg:ml-4 max-lg:mt-4 max-xl:pt-0 '>
                <div className='grid grid-cols-4  max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-3 min-xl:grid-cols-4 gap-4  '>
                    <div >
                        <div className='grid grid-cols-2 gap-2'>
                            <div className='flex justify-center items-center'>
                                <img className='w-8  pb-5 max-sm:pb-3 max-sm:w-9' src={Clock} alt="" />
                            </div>

                            <div>
                                <h1 className=' pr-3 font-bold  text-left text-yz md'>KESİNTİSİZ DESTEK </h1>
                                <h3 className='pr-3 text-left text-yz2'>7 GÜN 24 SAAT</h3>
                            </div>
                        </div>
                        <p className='font-sans p-3 pl-8 max-sm:pl-4 text-left text-yz2 '>7/24 personellerimiz size her konuda anında destek vermek için hazır
                            bulunmaktadır. Gerek telefon ile gerek online live chat ile konaklamanızla veya odalarımızla ilgili her türlü probleme en hızlı şekilde
                            müdahale ediyoruz.</p>
                    </div>

                    <div >
                        <div className='grid grid-cols-2 gap-2'>
                            <div className='flex justify-center items-center'>
                                <img className='w-8  pb-5 max-sm:pb-3 max-sm:w-9' src={Washing} alt="" />
                            </div>

                            <div>
                                <h1 className=' pr-3 font-bold  text-left text-yz md'>ÇAMAŞIR YIKAMA </h1>
                                <h3 className='pr-3 text-left text-yz2'>ÜCRETSİZ</h3>
                            </div>
                        </div>
                        <p className='font-sans p-3 pl-8 max-sm:pl-4 text-left text-yz2 '>Katlarımızda bulunan çaşamır ve kurutma makinelerimizi istediğiniz zaman
                            kullanabilir ve herhangi bir ek üçret ödemezsiniz.</p>
                    </div>

                    <div>
                        <div className='grid grid-cols-2 gap-2'>
                            <div className='flex justify-center items-center'>
                                <img className='w-8 pb-5 max-sm:pb-3 max-sm:w-9' src={Wifi} alt="" />
                            </div>
                            <div>
                                <h1 className='pr-3  font-bold text-left text-yz'>HIZLI FİBER İNTERNET </h1>
                                <h3 className='pr-3  text-left text-yz2'>ODALARIMIZIN HER KÖŞESİNDE</h3>
                            </div>
                        </div>
                        <p className='font-sans p-3 pl-8 max-sm:pl-4 text-left text-yz2'>Odalarımızda 100MBit kablosuz internet hizmetinize sunulmuştur. Odanın her
                            noktasında rahatça tüm aygıtlarınızla kesintisiz internet kullanabilirsiniz.</p>
                    </div>

                    <div>
                        <div className='grid grid-cols-2 gap-2'>
                            <div className='flex justify-center items-center'>
                                <img className='w-8 pb-5 max-sm:pb-3 max-sm:w-9' src={Sign} alt="" />
                            </div>
                            <div>
                                <h1 className='pr-3 font-bold text-left text-yz'>OTOPARK   </h1>
                                <h3 className='pr-3 text-left text-yz2'> </h3>
                            </div>
                        </div>
                        <p className='font-sans p-3 pl-8 max-sm:pl-4 text-left text-yz2'>Tesisin yakınında ücretli ücretsiz otopark mevcuttur.</p>
                    </div>
                </div>
            </div>
        </body>
    );
}
export default OurServices;