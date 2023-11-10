'use client';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { fadeIn } from '@/components/utils/animation';
import ScrollButton from '@/components/atoms/ScrollButton';
import React from 'react';

const HeroSection = () => {
  const [heroRef, inViewHeroRef] = useInView({
    triggerOnce: true,
  });
  return (
    <motion.div
      ref={heroRef}
      variants={fadeIn}
      initial="hidden"
      animate={inViewHeroRef ? 'show' : 'hidden'}
      transition={{ duration: 0.7 }}
      className="w-full items-stretch bg-[#bed2f5] h-full min-h-[40vh] xl:min-h-[95vh] rounded-3xl relative flex overflow-hidden"
    >
      <div className="bg-[#f9f8f6] absolute bottom-0 left-0 pt-5 pr-5 rounded-tr-3xl w-[70%] xl:w-max max-w-max">
        <p className="text-[35px] xl:w-full xl:hero-title leading-tight tracking-tighter">
          Co-Labs gives people a place
        </p>
        <p className="text-[35px] xl:w-full xl:hero-title leading-tight tracking-tighter">
          to experiment and create
        </p>
        <div className="mt-5">
          <ScrollButton background="white" stroke="black" />
        </div>
      </div>
    </motion.div>
  );
};

export default HeroSection;
