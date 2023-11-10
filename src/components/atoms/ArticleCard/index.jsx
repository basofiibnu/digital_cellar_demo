'use client';

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import ConfirmButton from '@/components/atoms/ConfirmButton';
import { Autoplay, Pagination } from 'swiper/modules';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import {
  fadeInFromLeft,
  fadeInFromRight,
} from '@/components/utils/animation';

import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css';

const ArticleList = [
  {
    image:
      'https://images.unsplash.com/photo-1569604402759-c8e0c98766f9?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Thoughts',
    title:
      'Rising to the biggest challenge of our time: Australia’s duty of care to collectively re-imagine and re-design our nation',
    subtitle:
      'A transdisciplinary, existentially hopeful response to Australia’s draft National Science and Research Priorities',
  },
  {
    image:
      'https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Beyond the Bench',
    title: 'What are the 3 Horizons of Transformative Innovation?',
    subtitle:
      '‘Three Horizons thinking’ is a useful method for making sense of and facilitating transformative innovation.',
  },
  {
    image:
      'https://images.unsplash.com/photo-1501693063149-98378d901d82?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Thoughts',
    title:
      'Why We’re Supporting the Development of a Cultivated Meat Industry In Australia',
    subtitle: '',
  },
  {
    image:
      'https://images.unsplash.com/photo-1493589976221-c2357c31ad77?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'News',
    title:
      'Cortical Labs Raises $15M to Scale Up BiOS, an Organic-Digital Intelligence System',
    subtitle:
      'What if Biology + Technology is the only way to make true AI?',
  },
];
const ArticleCard = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [leftRef, inViewLeftRef] = useInView({
    triggerOnce: true,
  });
  const [rightRef, inViewRightRef] = useInView({
    triggerOnce: true,
  });
  // Function to go to a specific slide
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };
  return (
    <div className="grid grid-cols-8 xl:grid-cols-6 gap-3 w-full max-w-[1800px] mx-auto mt-3">
      <motion.div
        ref={leftRef}
        variants={fadeInFromLeft}
        initial="hidden"
        animate={inViewLeftRef ? 'show' : 'hidden'}
        transition={{ duration: 0.7 }}
        className="hidden md:block md:col-span-5 xl:col-span-4"
      >
        <Carousel
          swipeable={true}
          showThumbs={false}
          showArrows={false}
          infiniteLoop={true}
          showStatus={false}
          showIndicators={false}
          selectedItem={currentSlide}
        >
          {ArticleList.map((data, i) => (
            <div key={i}>
              <img
                className="rounded-3xl max-h-[800px] w-full h-full object-cover"
                src={data.image}
                alt={data.title}
              />
            </div>
          ))}
        </Carousel>
      </motion.div>
      <motion.div
        ref={rightRef}
        variants={fadeInFromRight}
        initial="hidden"
        animate={inViewRightRef ? 'show' : 'hidden'}
        transition={{ duration: 0.7 }}
        className="col-span-8 md:col-span-3 xl:col-span-2 min-h-[600px] md:min-h-0"
      >
        <div className="rounded-[30px] relative md:px-8 md:pt-8 md:pb-6 bg-[#eaf1fc] h-full min-h-[600px] md:min-h-0">
          <Swiper
            modules={[Pagination, Autoplay]}
            className="swiper-ArticleCard min-h-[600px] md:min-h-0"
            pagination={{
              clickable: true,
            }}
            navigation
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={(swiper) => {
              goToSlide(swiper.activeIndex);
            }}
            // autoplay={{
            //   delay: 2500,
            // }}
          >
            {ArticleList.map((data, i) => (
              <SwiperSlide key={i}>
                <div className="block md:hidden ">
                  <img
                    src={data.image}
                    alt=""
                    className="rounded-tl-3xl rounded-tr-3xl mb-5 max-h-[250px] w-full object-cover"
                  />
                </div>
                <div className="px-5 pt-0 pb-6 md:p-0">
                  <div>
                    <div className="border px-3 py-1 w-max border-black rounded-3xl text-sm">
                      {data.category}
                    </div>
                  </div>
                  <div className="text-2xl xl:text-2xl 2xl:text-3xl font-bold mt-5 tracking-tight">
                    {data.title}
                  </div>
                  <div className="text-lg mt-5 tracking-tight">
                    {data.subtitle}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="absolute bottom-6 right-20 text-lg 2xl:text-xl tracking-tight">
            Read More
          </div>
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
      </motion.div>
    </div>
  );
};

export default ArticleCard;
