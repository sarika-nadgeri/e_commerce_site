import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'; // Import Swiper components
import 'swiper/css'; // Swiper core styles
import 'swiper/css/pagination'; // Pagination styles
import 'swiper/css/navigation'; // Navigation styles

import { Autoplay, Pagination, Navigation } from 'swiper/modules'; // Import required modules

const diwali_lamp = '/assets/diwali_lamp.avif';
const hand_icon = '/assets/hand_icon.png';
const arrow_icon = '/assets/arrow.png';
const hero_image = '/assets/hero_img.jpg'; // Original hero image
const carouselImages = [
  '/assets/carousel1.webp',
  '/assets/carousel2.webp',
  '/assets/carousel3.webp',
  '/assets/carousel4.webp',
]; // Carousel images

export const Hero = () => {
  return (
    <div className='w-full bg-gradient-to-b from-pink-100 to-transparent flex flex-col sm:flex-row  flex-wrap mt-1'>
      <div className='w-full flex flex-col md:flex-row flex-wrap justify-between items-center px-4 py-8 gap-8 lg:gap-0'>
        {/* Left Section - New Collection Text */}
        <div className='flex-1 flex flex-col justify-center gap-5 px-4 text-center lg:text-left'>
          <h2 className='text-xl lg:text-2xl font-semibold text-gray-900'>NEW ARRIVALS ONLY</h2>
          <div className=''>
            <div className='flex flex-col lg:flex-row items-center gap-3 lg:gap-5'>
              <p className='text-2xl lg:text-4xl font-bold text-gray-900'>New</p>
              <img alt='' src={hand_icon} className='w-14 lg:w-20' />
              <p className='text-2xl lg:text-4xl font-bold text-gray-900'>Collections</p>
            </div>
            <p className='text-2xl lg:text-4xl font-bold text-gray-900'>For Everyone</p>
          </div>
          <div className='flex items-center justify-center lg:justify-center gap-3 bg-blue-700 text-white w-52 lg:w-72 h-10 lg:h-12 rounded-full mt-4 cursor-pointer'>
            <div className='text-lg lg:text-xl font-medium'>Latest Collection</div>
            <img alt='' src={arrow_icon} className='w-4 lg:w-6' />
          </div>
        </div>

        {/* Center Section - Diwali Offer */}
        <div className='flex-1 flex justify-center items-center px-4'>
          <div className='relative flex items-center justify-center bg-yellow-500 text-white p-4 rounded-full diwali-offer'>
            <img alt='Diwali Lamp' src={diwali_lamp} className='w-10 h-10 mr-4 animate-bounce' />
            <p className='md:text-xl lg:text-2xl font-bold animate-flash sm:text-md'>
              Diwali Special Offer: Upto 50% OFF!
            </p>
            <img alt='Diwali Lamp' src={diwali_lamp} className='w-10 h-10 ml-4 animate-bounce' />
          </div>
        </div>

        {/* Right Section - Hero Image */}
        <div className='flex-1 flex items-center justify-center px-4'>
          <img alt='' src={hero_image} className='w-[250px] lg:w-[400px]' />
        </div>
      </div>

      {/* Carousel Section */}
      <div className="w-full overflow-hidden mt-2">
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }} // Autoplay
          pagination={{ clickable: true }}
          navigation={true}
          loop={true} // Enable loop to ensure continuous scrolling without reversing
          modules={[Autoplay, Pagination, Navigation]} // Add modules here
          className="w-full"
        >
          {carouselImages.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image}
                alt={`Carousel Slide ${index + 1}`}
                className="w-full h-auto object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Hero;
