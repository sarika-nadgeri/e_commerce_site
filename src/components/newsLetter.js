import React from 'react';

export const NewsLetter = () => {
  return (
    <div
      className='w-3/4 flex flex-col items-center justify-center mx-auto p-10 mb-10 mt-5 gap-8 bg-cover bg-center bg-no-repeat'
      style={{ backgroundImage: "url('/assets/newsletterBg.jpg')" }} // Add the background image here
    >
      <h1 className='text-[#fff] text-2xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-semibold text-center'>
        Get Exclusive Offer On Your Email
      </h1>

      <p className='text-[#fff] text-lg text-center'>
        Subscribe to our newsletter and stay updated
      </p>

      <div className='flex flex-row items-center justify-between bg-white w-full h-10 sm:h-10 rounded-full border border-[#e3e3e3] p-1'>
        <input
          type='email'
          placeholder='Enter Your EmailID'
          className='w-full sm:w-auto flex-grow ml-4 sm:ml-8 border-none outline-none text-[#616161] font-serif text-sm sm:text-base'
        />
        <button className='w-[180px] sm:w-[100px] h-8 sm:h-8 mt-0 sm:mt-0 rounded-full bg-black text-white text-sm sm:text-base cursor-pointer'>
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
