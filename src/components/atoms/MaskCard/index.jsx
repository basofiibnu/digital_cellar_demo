'use client';

import React from 'react';
import ConfirmButton from '@/components/atoms/ConfirmButton';

import './styles.css';
const MaskCard = ({ image, color, title }) => {
  return (
    <div
      className={`rounded-[30px] relative cursor-pointer mask-card-container flex items-center h-full`}
      style={{ background: color }}
    >
      <p className="absolute top-5 left-5 text-xl md:text-3xl font-bold text-white w-3/4 md:w-1/2 z-10">
        {title}
      </p>
      <div className="relative">
        <div className="mask-image-container">
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
    </div>
  );
};

export default MaskCard;
