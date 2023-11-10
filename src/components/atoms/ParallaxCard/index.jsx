import ConfirmButton from '@/components/atoms/ConfirmButton';
import React from 'react';

const ParallaxCard = ({ title = '', color = '', image = '' }) => {
  return (
    <div
      className={`${
        image ? 'bg-fixed bg-center bg-no-repeat bg-cover' : ''
      } rounded-[30px] relative p-5`}
      style={{
        backgroundImage: image ? `url(${image})` : '',
        backgroundColor: color ? color : '',
        minHeight: '250px',
      }}
    >
      <p className="text-xl md:text-3xl font-bold text-white w-4/5 md:w-[60%]">
        {title}
      </p>
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

export default ParallaxCard;
