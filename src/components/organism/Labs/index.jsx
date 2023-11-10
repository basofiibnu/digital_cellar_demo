import ConfirmButton from '@/components/atoms/ConfirmButton';
import React from 'react';

const Labs = () => {
  return (
    <div
      className="bg-fixed bg-center bg-no-repeat bg-cover mt-5 rounded-[30px] relative p-5"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/free-photo/snowy-mountain-peak-starry-galaxy-majesty-generative-ai_188544-9650.jpg?w=2000&t=st=1699445001~exp=1699445601~hmac=01c4fd5afac6e7810f2136b8024085b412507f4ef6995af2f29dc9dcb3da9376')",
        minHeight: '250px',
      }}
    >
      <p className="text-2xl font-bold text-white">Join The Lab</p>
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

export default Labs;
