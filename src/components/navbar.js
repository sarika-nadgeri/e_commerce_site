import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUser, FaBox } from 'react-icons/fa'; // Import specific icons
import { HiOutlineShoppingCart } from 'react-icons/hi'; // Shopping cart icon

const logo = '/assets/logo.png';

const Navbar = () => {
  const [menu, setMenu] = useState('shop');

  return (
    <div>
      <nav className='bg-[purple] shadow-custom'>
        {/* Logo and Navigation Menu */}
        <div className='flex justify-between items-center px-4 py-3'>
          {/* Logo on the left */}
          <div>
            <img src={logo} alt='Shopper Logo' className='w-auto h-auto' />
            <p className='text-white text-sm font-bold'>Online Shop</p>
          </div>
          {/* Navigation Menu in the center */}
          <div className='flex items-center space-x-8'>
            <ul className='flex space-x-8 text-white sm:text-lg text-md'>
              {/* Home Menu Item */}
              <li
                onClick={() => setMenu('shop')}
                className={`cursor-pointer text-center ${menu === 'shop' ? 'border-b-2 border-indigo-500' : ''}`}
              >
                <FaHome className='w-4 h-4 sm:w-5 sm:h-5 mb-1 mx-auto' /> {/* Home icon */}
                <Link to='/' className='hover:text-indigo-500 transition-colors'>
                  Home
                </Link>
              </li>
              <li
                onClick={() => setMenu('Products')}
                className={`cursor-pointer text-center ${menu === 'Products' ? 'border-b-2 border-indigo-500' : ''}`}
              >
                <FaBox className='w-4 h-4 sm:w-5 sm:h-5 mb-1 mx-auto' /> {/* Products icon */}
                <Link to='/products' className='hover:text-indigo-500 transition-colors'>
                  Products
                </Link>
                
              </li>
            </ul>
          </div>

          {/* Account and Cart on the right */}
          <div className='flex items-center ml-8'>
            <Link to='/' className='text-white text-center'>
              <FaUser className='w-4 h-4 sm:w-5 sm:h-5 mb-1 mx-auto' /> {/* User account icon */}
              <button className='bg-white text-black px-4 py-1 sm:px-6 sm:py-2 rounded-full text-sm sm:text-md hover:text-black hover:bg-gray-200 transition-colors'>
                Account
              </button>
            </Link>

            <Link to='/' className='relative ml-6 text-white'>
              <HiOutlineShoppingCart className='w-8 h-auto sm:w-10 sm:h-auto' /> {/* Shopping cart icon */}
              {/* Cart count badge */}
              <div className='absolute top-0 right-0 bg-red-600 text-white text-xs font-bold w-4 h-4 rounded-full flex items-center justify-center'>0</div>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
