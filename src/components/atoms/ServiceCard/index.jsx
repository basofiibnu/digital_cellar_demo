'use client';

import React from 'react';
import ConfirmButton from '@/components/atoms/ConfirmButton';

import './styles.css';
const ServiceCard = ({ image, color, title }) => {
  return (
    <div
      className={`mt-5 rounded-[30px] relative px-5 pt-5 h-full min-h-[340px] md:min-h-[200px] 2xl:min-h-[340px] hover:mt-0 transition-all duration-300 ease-in-out cursor-pointer service-card-container`}
      style={{ background: color }}
    >
      <p className="absolute top-5 left-5 text-3xl font-bold text-white w-2/3 2xl:w-1/2 z-10">
        {title}
      </p>
      <div className="relative mt-10">
        <div className="image-container">
          <img
            src={image}
            alt="Description"
            className="masked-image"
          />
        </div>
      </div>
      <div
        className="absolute bottom-0 -right-2 bg-[#f9f8f6] p-3"
        style={{ borderRadius: '50% 0 0 0' }}
      >
        <ConfirmButton />
      </div>
      <div className="absolute bottom-0 right-[62px] w-6 h-6 rotate-180">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <path
            d="m100,0H0v100C0,44.77,44.77,0,100,0Z"
            fill="#FFF"
          ></path>
        </svg>
      </div>
      <div className="absolute bottom-[70px] -right-[2px] w-6 h-6 -rotate-180">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <path
            d="m100,0H0v100C0,44.77,44.77,0,100,0Z"
            fill="#FFF"
          ></path>
        </svg>
      </div>

      <p className="absolute bottom-[15px] right-[20px] text-lg 2xl:text-xl text-white text-right mr-16">
        Learn More
      </p>
    </div>
  );
};

export default ServiceCard;
