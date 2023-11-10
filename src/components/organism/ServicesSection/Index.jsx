'use client';
import React from 'react';
import ServiceCard from '@/components/atoms/ServiceCard';
import { SwiperSlide, Swiper } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const CardList = [
  {
    title: 'Lab Space',
    image:
      'https://plus.unsplash.com/premium_photo-1668612073401-e5915182ae36?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    color: '#363062',
  },
  {
    title: 'Build a Lab',
    image:
      'https://images.unsplash.com/photo-1610085927744-7217728267a6?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    color: '#435585',
  },
  {
    title: 'Innovation Falicitation',
    image:
      'https://images.unsplash.com/photo-1543946207-39bd91e70ca7?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    color: '#363062',
  },
  {
    title: 'Office Space',
    image:
      'https://plus.unsplash.com/premium_photo-1676654936049-fdd1b3b36777?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    color: '#3A4D39',
  },
  {
    title: 'Lab Space',
    image:
      'https://plus.unsplash.com/premium_photo-1668612073401-e5915182ae36?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    color: '#363062',
  },
  {
    title: 'Build a Lab',
    image:
      'https://images.unsplash.com/photo-1610085927744-7217728267a6?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    color: '#435585',
  },
  {
    title: 'Innovation Falicitation',
    image:
      'https://images.unsplash.com/photo-1543946207-39bd91e70ca7?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    color: '#363062',
  },
  {
    title: 'Office Space',
    image:
      'https://plus.unsplash.com/premium_photo-1676654936049-fdd1b3b36777?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    color: '#3A4D39',
  },
];
const ServicesSection = () => {
  return (
    <div className="w-full">
      <div className="flex items-center gap-3">
        <Swiper
          modules={[Pagination, Autoplay]}
          className="swiper-services"
          spaceBetween={10}
          slidesPerView={1}
          centeredSlides={true}
          slidesOffsetBefore={10}
          slidesOffsetAfter={10}
          loop={true}
          autoplay={{ delay: 2500 }}
          breakpoints={{
            640: {
              centeredSlides: false,
              slidesPerView: 1,
              spaceBetween: 50,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 3,
            },
            1440: {
              slidesPerView: 4,
            },
          }}
        >
          {CardList?.map((data, i) => (
            <SwiperSlide key={i}>
              <ServiceCard
                image={data.image}
                color={data.color}
                title={data.title}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ServicesSection;
