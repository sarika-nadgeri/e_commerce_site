import React from 'react';

const footer_logo = '/assets/logo.png';
const instagram_icon = '/assets/instagram_icon.png';
const pinterest_icon = '/assets/pintester_icon.png';
const whatsapp_icon = '/assets/whatsapp_icon.png';

export const Footer = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-6 bg-[#0c0b3b] pt-5'>
      {/* Footer Logo */}
      <div className=''>
        <img alt='Shopper Logo' src={footer_logo} className="w-auto h-auto"/>
        <p className='text-white text-sm font-bold'>Online Shop</p>
      </div>

      {/* Footer Links */}
      <ul className='flex items-center flex-wrap list-none gap-10 text-white sm:text-lg text-md px-4'>
        <li className='cursor-pointer hover:text-gray-500 transition-colors'>Company</li>
        <li className='cursor-pointer hover:text-gray-500 transition-colors'>Products</li>
        <li className='cursor-pointer hover:text-gray-500 transition-colors'>Offices</li>
        <li className='cursor-pointer hover:text-gray-500 transition-colors'>About</li>
        <li className='cursor-pointer hover:text-gray-500 transition-colors'>Contact</li>
      </ul>

      {/* Social Icons */}
      <div className='flex gap-5'>
        <div className='sm:p-3 p-2 bg-gray-100 border border-gray-200 rounded cursor-pointer'>
          <img alt='Instagram' src={instagram_icon} className="sm:w-5 w-4 h-auto"/>
        </div>
        <div className='sm:p-3 p-2 bg-gray-100 border border-gray-200 rounded cursor-pointer'>
          <img alt='Pinterest' src={pinterest_icon} className="sm:w-5 w-4 h-auto"/>
        </div>
        <div className='sm:p-3 p-2 bg-gray-100 border border-gray-200 rounded cursor-pointer'>
          <img alt='WhatsApp' src={whatsapp_icon} className="sm:w-5 w-4 h-auto"/>
        </div>
      </div>

      {/* Copyright Section */}
      <div className='flex flex-col items-center gap-6 w-full mb-8 text-white sm:text-lg text-md'>
        <hr className='w-4/5 border-none h-1 bg-gray-400 rounded'/>
        <p>Copyright © 2024 - All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
