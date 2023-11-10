'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import ConfirmButton from '@/components/atoms/ConfirmButton';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css';
const Trivia = () => {
  const divRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (divRef.current) {
      const height = divRef.current.offsetHeight;
      setHeight(height);
    }
  }, []);
  return (
    <div
      className="mt-5 rounded-[30px] relative px-5 pt-5 bg-[#32c58b] h-full md:flex-grow min-h-[200px] md:min-h-0"
      id="triviaSection"
      ref={divRef}
    >
      <Swiper
        modules={[Pagination, Autoplay]}
        className="swiper-trivia min-h-[200px]"
        style={{ minHeight: height - 30 }}
        pagination={{
          clickable: true,
        }}
        navigation
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={(swiper) => {
          const activeBullet = document.querySelector(
            '.my-bullet-active'
          );
          if (activeBullet) {
            activeBullet.style.transition = `none`;
            activeBullet.style.transform = `scaleX(${swiper.progress})`;
          }
        }}
        autoplay={{
          delay: 2500,
          on: {
            progress: (progress) => {
              const activeBullet = document.querySelector(
                '.my-bullet-active'
              );
              if (activeBullet) {
                activeBullet.style.transition = `transform 0.3s`;
                activeBullet.style.transform = `scaleX(${progress})`;
              }
            },
          },
        }}
      >
        <SwiperSlide>
          <div className="text-2xl font-semibold">
            A Field Guide to{' '}
            <span className="text-[#d9db4d]">
              Transdisciplinary Innovation.
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-2xl font-semibold">
            <span className="text-[#d9db4d]">Triskelion.</span> A
            monthly newsletter covering biotech news and articles from
            within the Co-Labs
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-2xl font-semibold">
            Why We&apos;re Supporting the Development of a{' '}
            <span className="text-[#d9db4d]">Cultivated Meat</span>{' '}
            Industry in Australia
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-2xl font-semibold">
            Why We Need to Rethink Our{' '}
            <span className="text-[#d9db4d]">Worldview.</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-2xl font-semibold">
            <span className="text-[#d9db4d]">Biomimicry:</span>{' '}
            Learning from Nature&apos;s Genius
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-2xl font-semibold">
            <span className="text-[#d9db4d]">Ecoliteracy:</span> Our
            Key to a Sustainable Future
          </div>
        </SwiperSlide>
      </Swiper>
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

export default Trivia;
