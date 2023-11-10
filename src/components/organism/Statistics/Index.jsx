'use client';

import React, { useRef, useState } from 'react';
import CountUp from 'react-countup';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css';

const StatisticsList = [
  {
    start: 0,
    end: 26,
    caption: 'Ideas Supported',
  },
  {
    start: 0,
    end: 5,
    caption: 'Impact Scholarships Awarded',
  },
  {
    start: 0,
    end: 65,
    caption: 'Of plants here double as lab assistants',
    amount: '%',
  },
  {
    start: 0,
    end: 80,
    caption: 'Chance of running into a punny scientist',
    amount: '%',
  },
  {
    start: 0,
    end: 2000,
    caption: 'Of science equipment diverted from landfill',
    amount: 'kgs',
  },
];
const Statistics = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="w-full h-full rounded-3xl md:rounded-[100%] bg-[#dcb688] flex items-center justify-center relative">
      <Swiper
        // install Swiper modules
        modules={[Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSlideChange={(swiper) => {
          setIndex(swiper.activeIndex);
        }}
        className="swiper-statistics"
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
      >
        {StatisticsList.map((data, i) => (
          <SwiperSlide key={i}>
            <div className="flex flex-col items-center justify-center">
              <div
                className={`font-bold ${
                  i == StatisticsList.length - 1
                    ? 'text-[40px] 2xl:text-[50px]'
                    : 'counter-font'
                } leading-tight`}
              >
                <CountUp start={data.start} end={data.end}>
                  {({ countUpRef, start }) => {
                    if (index === i) {
                      start();
                    }
                    return (
                      <div>
                        <span ref={countUpRef} />
                        {data.amount ?? ''}
                      </div>
                    );
                  }}
                </CountUp>
              </div>
              <div className="text-lg text-center w-2/3 mx-auto leading-tight">
                <p>{data.caption}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Statistics;
