import React from 'react';
import { useState, } from 'react';
import Navbar from './navbar';
import img1 from '../assets/düzenlemeler/IMG_4603.png';
import '../App.css'
import Slide from './Slayt';
import Bed from '../assets/bed.png'
import Room from '../assets/room.png'
import Size from '../assets/size.png'
import Diamond from '../assets/diamond.png'
import Footer from './footer';
import Oda1Gallery from './Oda1Gallery';


function StandartOda(props) {

    const [isFullScreen, setFullScreen] = useState(false);

    const handleImageClick = () => {
        setFullScreen(!isFullScreen);
    };
    return (
        <div className='bg-bg1'>
            <Navbar />

            <div className='justify-center items-center'>
                <h1 className='flex justify-center items-center text-3xl font-bold text-womco pt-8 mb-0 pb-0'>Standart Oda</h1>
                <div className='w-full h-12 bg-yz shadow-lg'></div>
            </div>



            <div className=' grid grid-cols-2 gap-4 flex justify-center items-center  ml-10 mr-10 pb-11 mt-8 max-sm:grid-cols-1 max-sm:m-3 max-md:grid-cols-1
                    max-md:m-2 max-lg:m-1 '>



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
                                src={img1}
                                alt="Fullscreen"
                                style={{
                                    maxWidth: '70%',
                                    maxHeight: '100%',

                                }}
                            />
                        </div>
                    )}

                    <img className='rounded-lg  w-70%'
                        src={img1}
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


            </div>



            <div className='font-sans p-3 pl-8 mb-5 max-sm:pl-4  text-center text-yz2 text-black'>

                <h3 className='m-1 font-bold'>Odalarda Konfor ve Zarafet:</h3>
                <p>
                    Womco Butik Otel, konuklarına konfor ve zarafetin mükemmel bir kombinasyonunu sunan özenle tasarlanmış odalarıyla bilinir.
                    Her oda, modern tasarım anlayışıyla donatılmış olup, misafirlerimizin rahatı ve huzuru düşünülerek özel olarak düzenlenmiştir.
                    Yumuşak renk paleti, özel tasarlanmış mobilyalar ve lüks tekstil ürünleri, odalarımızın sıcak ve davetkar bir atmosfere sahip
                    olmasını sağlar.
                </p>
                <h3 className='m-1 mt-5 font-bold'>Modern İmkanlar:</h3>
                <p>
                    Odalarda, konuklarımızın ihtiyaçlarını karşılamak için en son teknoloji ürünleri kullanılmıştır. Hızlı Wi-Fi, düz ekran TV,
                    klima ve güvenlik kasası gibi modern olanaklar, konforunuz için düşünülmüş detaylardandır. Ayrıca, özel banyolarımızda lüks
                    banyo malzemeleri ve geniş duş alanları bulunmaktadır.
                </p>

                <p>
                    Womco Butik Otel'de temizlik ve konfor, misafirlerimize unutulmaz bir konaklama deneyimi sunmak için bir araya gelir. Kendinizi evinizde gibi hissetmek için sıcak bir karşılama ve özenli hizmetle dolu bir konaklama için bizi tercih edin.
                </p>
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

            <div>
                <Oda1Gallery />
            </div>

            {/* 
            <div className='mb-8 max-sm:mb-4 '>
                <Slide />
            </div> */}

            <div className='w-full h-12 bg-yz mt-8 max-sm:mt-4 shadow-lg'></div>

            <div className='font-sans p-3 pl-8 mb-5 max-sm:pl-4 text-center text-yz2 text-black'>


                <h3 className='m-1 font-bold'>Temizlik Standartlarımız:</h3>
                <p>
                    Womco Butik Otel, hijyen ve temizlik konusunda en yüksek standartları benimser. Her oda, titizlikle temizlenir ve
                    dezenfekte edilir.Deneyimli temizlik personelimiz, misafirlerimizin sağlığına büyük önem verir ve odaların her
                    detayına özen gösterir. Özellikle bu günlerde hijyen konusundaki duyarlılığımızı en üst düzeye çıkarmış bulunmaktayız.
                </p>
                <h3 className='m-1 font-bold'>Oda Servisi:</h3>
                <p>
                    Misafirlerimizin konforu bizim önceliğimizdir. Odalarda bulunan özel servis hizmetimiz sayesinde, günün her saatinde
                    ihtiyaçlarınızı karşılayabilirsiniz. Menümüzdeki lezzetleri odanızda keyifle tadabilir ve özel bir konaklama
                    deneyiminin tadını çıkarabilirsiniz.
                </p>
                <p>
                    Womco Butik Otel'de temizlik ve konfor, misafirlerimize unutulmaz bir konaklama deneyimi sunmak için bir araya gelir. Kendinizi evinizde gibi hissetmek için sıcak bir karşılama ve özenli hizmetle dolu bir konaklama için bizi tercih edin.
                </p>
            </div>

            <div className='w-full h-12 bg-yz mb-11 shadow-lg'></div>

            <Footer />
        </div>

    );
}
export default StandartOda