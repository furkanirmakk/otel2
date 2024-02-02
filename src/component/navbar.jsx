import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Wom from '../assets/wom.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-womco p-4">

      <div className="container mx-auto flex   ">
        <span className="w-1/4 text-white text-xl font-bold ">
          <div className='grid grid-cols-2 max-sm:justify-start max-md:justify-start'>
            <a className='w-8 ml-11 flex justify-end md:flex sm:center-start sm:ml-0 md:ml-0 md:justify-start' href="/"><img src={Wom} alt="WOMCO" /></a>
            <a className='flex justify-start items-center' href="/">WOMCO</a>
          </div>
        </span>
        <div className='w-1/4'></div>
        <div className="w_1/2 hidden flex items-center justify-end md:flex max-sm:justify-end max-md:justify-end space-x-4 sm:mr-0 md:mr-0 md:justify-end md:flex-shrink-0 md:w-1/3">
          <ul style={{ display: 'flex', listStyle: 'none', padding: 0 }}>
            <li><Link className="text-white m-5 max-sm:m-3 max-md:m-3" to='/'>Anasayfa</Link></li>
            <li><Link className="text-white m-5 max-sm:m-3 max-md:m-3" to='/iletisim'>İletişim</Link></li>
            <li><Link className="text-white m-5 max-sm:m-3 max-md:m-3" to='/odalarimiz'>Odalarmız</Link></li>
          </ul>
        </div>

      </div>
      <div>


        <div className="md:hidden ">
          <button
            onClick={toggleNavbar}
            className="text-white  flex items-center justify-end"
          >
            {isOpen ? 'Kapat' : 'Menü'}
          </button>
        </div>


        {isOpen && (
          <div className="md:hidden max-sm:justify-end max-md:justify-end"> {/* Sağa yaslamak için max-md:justify-end sınıfını ekledik */}
            <a href="/" className="block p-2 text-white">Ana Sayfa</a>
            <a href="/odalarimiz" className="block p-2 text-white ">Odalarımız</a>
            <a href="/iletisim" className="block p-2 text-white">İletişim</a>
          </div>
        )}
      </div>
    </nav>
  );
}
