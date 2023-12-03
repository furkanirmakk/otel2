import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Wom from '../assets/wom.png'


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-womco p-4">
      <div className="container mx-auto flex items-center justify-end max-sm:justify-start max-md:justify-start ">
        <span className="w-1/4 text-white text-xl font-bold  ">
          <span className='grid grid-cols-2'>
            <a className='w-8 ml-11 flex justify-end 'href="/"><img  src={Wom} alt="WOMCO" /></a>
            <a className='flex justify-start items-center' href="/" >WOMCO</a>
          </span>

        </span>
        <div className='w-1/4'></div>
        <div className="w_1/2  hidden md:flex max-sm:justify-end max-md:justify-end space-x-4 mr-40">
          <ul style={{ display: 'flex', listStyle: 'none', padding: 0 }}>
            <li><Link className="text-white m-3 " to='/'>Anasayfa</Link></li>
            <li><Link className="text-white m-3 " to='/iletisim'>İletişim</Link></li>
            <li><Link className="text-white m-3 " to='/odalarimiz'>Odalarmız</Link></li>
          </ul>
        </div>

        <div className="md:hidden ">
          <button
            onClick={toggleNavbar}
            className="text-white "
          >
            {isOpen ? 'Kapat' : 'Menü'}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden ">
          <a href="/" className="block p-2 text-white">Ana Sayfa</a>
          <a href="/odalarimiz" className="block p-2 text-white ">Odalarımız</a>
          <a href="/iletisim" className="block p-2 text-white">İletişim</a>
        </div>
      )}
    </nav>
  );
}


