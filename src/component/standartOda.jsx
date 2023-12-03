import React from 'react';
import { useState, } from 'react';
import Navbar from './navbar';
import resim1 from '../assets/oda1.jpg'
import '../App.css'
import Slide from './Slayt';
import Bed from '../assets/bed.png'
import Room from '../assets/room.png'
import Size from '../assets/size.png'
import Diamond from '../assets/diamond.png'
import Footer from './footer';


function StandartOda(props) {

    const [isFullScreen, setFullScreen] = useState(false);

    const handleImageClick = () => {
        setFullScreen(!isFullScreen);
    };
    return (
        <div>
            <Navbar />

            <div className='justify-center items-center'>
                <h1 className='flex justify-center items-center text-3xl font-bold text-womco mt-11 mb-0 pb-0'>Standart Oda</h1>
                <div className='flex justify-center items-center w-14 ml-14 h-12 bg-yz shadow-lg'></div>
            </div>


            <div className=' grid grid-cols-2 gap-4 flex justify-center items-center   m-10 mb-11 mt-11 max-sm:grid-cols-1 max-sm:m-3 max-md:grid-cols-1
             max-md:m-2 max-lg:m-1 '>

                {/*
                <div className='transform scale-125 transition-transform duration-500 shadow-lg rounded-full flex justify-center items-center'>
                    <img className='w-full   h-auto rounded-md' src={resim1} alt="" />

                </div>*/}

                <div >
                    {isFullScreen && (
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
                            onClick={handleImageClick}
                        >
                            <img className='rounded-lg'
                                src={resim1}
                                alt="Fullscreen"
                                style={{
                                    maxWidth: '100%',
                                    maxHeight: '100%',

                                }}
                            />
                        </div>
                    )}

                    <img className='rounded-lg  max-xl:w-100%'
                        src={resim1}
                        alt="Thumbnail"
                        style={{ cursor: 'pointer' }}
                        onClick={handleImageClick}
                    />
                </div>
                <div className=' grid  max-sm:grid-cols-1 max-sm:pr-11 max-sm:pl-9 max-md:grid-cols-2 max-md:pr-8 min-xl:grid-cols-4 gap-4'>

                    <div className='grid grid-cols-2 gap-2 '>
                        <div className='flex flex-col justify-center items-end max-sm:items-center'>
                            <img className='w-9  pb-5 max-sm:pb-3 max-sm:w-9' src={Room} alt="" />
                        </div>

                        <div className='max-sm:w-6' >
                            <h1 className=' pr-3 pt-2 font-bold  text-center text-yz md'>ODA TİPİ: STÜDYO </h1><div className='w-full h-12 bg-yz shadow-lg'></div>
                        </div>
                    </div>

                    <div className='grid grid-cols-2 gap-2 '>
                        <div className='flex flex-col justify-center items-end max-sm:items-center'>
                            <img className='w-9 pb-5 max-sm:pb-3 max-sm:w-9 ' src={Diamond} alt="" />
                        </div>
                        <div className='max-sm:w-6'>
                            <h1 className='pr-3 pt-2 font-bold text-center text-yz'>KUSURSUZ TEMİZLİK </h1><div className='w-full h-12 bg-yz shadow-lg'></div>
                        </div>
                    </div>

                    <div className='grid grid-cols-2 gap-2'>
                        <div className='flex flex-col justify-center items-end max-sm:items-center '>
                            <img className='w-9  pb-5 max-sm:pb-3 max-sm:w-9' src={Bed} alt="" />
                        </div>

                        <div className='max-sm:w-6'>
                            <h1 className=' pr-3  pt-2 font-bold  text-center text-yz md'>YATAK: 1 ÇİFT KİŞİLİK</h1> <div className='w-full h-12 bg-yz shadow-lg'></div>
                        </div>
                    </div>



                    <div className='grid grid-cols-2 gap-2'>
                        <div className='flex flex-col justify-center items-end max-sm:items-center'>
                            <img className='w-9  pb-5 max-sm:pb-3 max-sm:w-9' src={Size} alt="" />
                        </div>

                        <div className='item-center max-sm:w-6'>
                            <h1 className=' pr-3 pt-2 font-bold  text-center text-yz md'>BÜYÜKLÜK: 42 M2 </h1><div className='w-full h-12 bg-yz shadow-lg'></div>
                        </div>
                    </div>

                </div>




                {/* 
                <div className='w-[30rem] ml-[7rem] mt-[2rem] px-4 flex flex-col justify-center items-center relative bg-gray-100 rounded-lg 
                shadow-lg  max-sm:grid-cols-1 max-sm:w-[25rem]  max-sm:mt-11 max-md:grid-cols-1 max-md:m-0 max-lg:m-1 ' >
                    <div className='w-full flex justify-center item-start bg-womco p-4 rounded-lg z-9 drop-shadow-lg mt-[-4rem]'>
                        <div className='w-full flex justify-between items-start'>
                            <h1 className='text-white font-bold text-2xl'>ÖZELLİKLER</h1>
                        </div>
                    </div>
                    <div className=' w-full scroll-py-4 py-4  background-container2'>
                        <div className='w-full h-full min-h-[8rem] overflow-y-auto '>
                            <div className="bg-gray-200 p-2 my-1 flex justify-between rounded-lg">
                                <p className='w-full whitespace-nowrap overflow-x-hidden text-ellipsis'>ODA TİPİ: STÜDYO</p>

                            </div>
                            <div className="bg-gray-200 p-2 my-1 flex justify-between rounded-lg">
                                <p className='w-full whitespace-nowrap overflow-x-hidden text-ellipsis'>KONUM: KOŞE ODA</p>

                            </div>
                            <div className="bg-gray-200 p-2 my-1 flex justify-between rounded-lg">
                                <p className='w-full whitespace-nowrap overflow-x-hidden text-ellipsis'>BÜYÜKLÜK: 38 M2</p>

                            </div>
                            <div className="bg-gray-200 p-2 my-1 flex justify-between rounded-lg">
                                <p className='w-full whitespace-nowrap overflow-x-hidden text-ellipsis'>YATAK: 1 ÇİFT KİŞİLİK</p>

                            </div>
                            <div className="bg-gray-200 p-2 my-1 flex justify-between rounded-lg">
                                <p className='w-full whitespace-nowrap overflow-x-hidden text-ellipsis'>ÇEKYAT: 1 ÇİFT KİŞİLİK</p>

                            </div>

                        </div>

                    </div>
                </div>
                */}

            </div>

            <div className='w-full h-12 bg-yz  mb-5 shadow-lg'></div>

            <div className='flex justify-center items-center font-bold  text-yz '>
                <h1>KONFOR</h1>
            </div>




            <div className='grid grid-cols-5 mr-10 ml-10 gap-2 max-sm:grid-cols-2 max-sm:mr-11 max-sm:ml-11 max-md:grid-cols-3 max-md:mr-11 
            max-md:ml-11 max-xl:mr-8 max-xl:ml-8'>
                <div className='item-center'>
                    <h1 className=' pr-3 pt-2  text-center text-yz md'>24 SAAT SICAK SU </h1>
                </div>

                <div className='item-center'>
                    <h1 className=' pr-3 pt-2  text-center text-yz md'>82" LED TELEVİZYON </h1>
                </div>


                <div className='item-center'>
                    <h1 className=' pr-3 pt-2  text-center text-yz md'>MİNİ BUZDOLABI </h1>
                </div>


                <div className='item-center'>
                    <h1 className=' pr-3 pt-2  text-center text-yz md'>ÇELİK KAPI </h1>
                </div>


                <div className='item-center'>
                    <h1 className=' pr-3 pt-2  text-center text-yz md'>ÇİFT KİŞİLİK YATAK </h1>
                </div>

            </div>
            <div className='grid grid-cols-5 mr-10 ml-10 mb-5 gap-2 max-sm:grid-cols-2 max-sm:mr-11 max-sm:ml-11 max-md:grid-cols-3 max-md:mr-11 
            max-md:ml-11 max-xl:mr-8 max-xl:ml-8'>
                <div className='item-center'>
                    <h1 className=' pr-3 pt-2  text-center text-yz md'>KABLOSUZ INTERNET </h1>
                </div>

                <div className='item-center'>
                    <h1 className=' pr-3 pt-2  text-center text-yz md'>KETTLE </h1>
                </div>


                <div className='item-center'>
                    <h1 className=' pr-3 pt-2  text-center text-yz md'>SAÇ KURUTMA MAKİNESİ </h1>
                </div>


                <div className='item-center'>
                    <h1 className=' pr-3 pt-2  text-center text-yz md'> UYDU SİSTEMİ </h1>
                </div>


                <div className='item-center'>
                    <h1 className=' pr-3 pt-2  text-center text-yz md'>24 SAAT DESTEK </h1>
                </div>

            </div>

            <div className='w-full h-12 bg-yz mb-11 max-sm:mb-8 shadow-lg'></div>

            <div className='mb-8 max-sm:mb-4 '>
                <Slide />
            </div>

            <div className='w-full h-12 bg-yz mt-8 max-sm:mt-4 shadow-lg'></div>

            <div className='font-sans p-3 pl-8 mb-5 max-sm:pl-4 text-center text-yz2 text-black'>

                <h3 className='m-1'>COVID-19: HİJYEN VE TEMİZLİK</h3>
                <p>Bu otel Güvenli Turizm Sertifikasyon Programı (Türkiye) ve Safe Travels (WTTC - Küresel) sterilizasyon kurallarına uyduğunu
                    belirtmektedir.</p>
                <p className='m-1'>Bu otel, gelişmiş temizlik ve misafir güvenliği önlemlerinin uygulamada olduğunu belirtmektedir.</p>
                <p >Odalar ve diğer kapalı alanlardaki camlar günlük rutin temizlik esnasında açık ve temizlik sonrası en az 1 saat
                    havalandırılıyor.</p>
                <p className='m-1'>Oda temizliğini yapan kat görevlisi her oda temizliğinde yeni bir tek kullanımlık eldiven ile temizlik yapmaktadır.</p>
                <p>Genel temizlik su ve deterjanla yapılmaktadır. Özellikle eller ile sık dokunulan yüzeyler, kapı kolları, bataryalar,
                    tırabzanlar, sık dokunulan düğmeler, telefon ahizesi, televizyon ve klima kumandası, ortak kullanım alanlarındaki tuvalet
                    ve lavabo temizliğine özen gösterilmektedir. Bu alanların temizliği için su ve deterjan ile temizlik yapıldıktan sonra uygun
                    dozda çamaşır suyu veya klor tablet kullanılmaktadır.</p>
                <p className='m-1'> Bardak ve tabak gibi ortak kullanılan eşyalar her kullanım sonrasında su ve deterjanla yıkanmakta ve kullanımına kadar
                    temiz bir ortamda saklanmaktadır.</p>
                <p>Çarşaf ve havlu gibi tekstil ürünleri 60-90 derecede deterjan ve çamaşır suyu ile çamaşır makinesinde yıkanmaktadır.</p>

            </div>

            <div className='w-full h-12 bg-yz mb-11 shadow-lg'></div>

            <Footer />
        </div>

    );
}
export default StandartOda