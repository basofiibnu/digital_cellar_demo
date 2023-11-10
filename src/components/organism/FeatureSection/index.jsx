'use client';

import React from 'react';
import WhySection from '../WhySection';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { fadeInFromLeft } from '@/components/utils/animation';

const FeatureSection = () => {
  const [featureRef, inViewFeatureRef] = useInView({
    triggerOnce: true,
  });
  return (
    <div className="mt-3 gap-3 w-full max-w-[1700px] mx-auto px-4 xl:px-10 2xl:px-4">
      <motion.p
        ref={featureRef}
        variants={fadeInFromLeft}
        initial="hidden"
        animate={inViewFeatureRef ? 'show' : 'hidden'}
        transition={{ duration: 0.7 }}
        className="text-left w-full xl:w-[65%] text-[24px] md:text-[30px] lg:text-[35px] xl:text-[40px] 2xl:text-[50px] leading-tight tracking-tighter mb-16 font-semibold"
      >
        By facilitating systems innovation we believe we can generate
        social, economic and environmental outcomes that will benefit
        the health and well-being of people and the planet.
      </motion.p>
      <WhySection />
    </div>
  );
};

export default FeatureSection;
