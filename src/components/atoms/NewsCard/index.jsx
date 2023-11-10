import ConfirmButton from '@/components/atoms/ConfirmButton';
import React from 'react';

const NewsCard = ({
  color = '#FFF',
  image,
  title,
  subtitle,
  category,
}) => {
  return (
    <div>
      <div className="rounded-[30px] relative p-5 w-full h-full min-h-[320px] md:min-h-[220px] lg:min-h-[330px] 2xl:min-h-[440px] 2xl:min-w-[440px] transition-all duration-300 ease-in-out hover:-mt-1 overflow-hidden">
        <div
          className="absolute top-5 left-5 px-3 py-1 w-max  rounded-3xl text-sm z-10"
          style={{
            background: color,
          }}
        >
          {category}
        </div>
        <img
          src={image}
          alt=""
          className="absolute top-0 left-0 w-full h-full z-1 rounded-[30px] hover:scale-105 transition-all duration-300 ease-in-out"
        />

        <div
          className="absolute bottom-0 -right-2 bg-[#f9f8f6] p-3"
          style={{ borderRadius: '50% 0 0 0' }}
        >
          <ConfirmButton />
        </div>
        <div className="absolute bottom-0 right-[62px] w-6 h-6 rotate-180">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
          >
            <path
              d="m100,0H0v100C0,44.77,44.77,0,100,0Z"
              fill="#FFF"
            ></path>
          </svg>
        </div>
        <div className="absolute bottom-[70px] -right-[2px] w-6 h-6 -rotate-180">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
          >
            <path
              d="m100,0H0v100C0,44.77,44.77,0,100,0Z"
              fill="#FFF"
            ></path>
          </svg>
        </div>
      </div>
      <div className="font-semibold tracking-tight leading-tight mt-3 text-[20px] md:text-[25px] xl:text-[30px]">
        {title}
      </div>
      <div className="mt-3 tracking-tight leading-tight text-base md:text-lg xl:text-xl">
        {subtitle}
      </div>
    </div>
  );
};

export default NewsCard;
