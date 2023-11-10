'use client';

import ArticleCard from '@/components/atoms/ArticleCard';
import MaskCard from '@/components/atoms/MaskCard';
import ParallaxCard from '@/components/atoms/ParallaxCard';
import {
  fadeInFromLeft,
  fadeInFromRight,
} from '@/components/utils/animation';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import React from 'react';

const ArticleSection = () => {
  const [leftRef, inViewLeftRef] = useInView({
    triggerOnce: true,
  });
  const [rightRef, inViewRightRef] = useInView({
    triggerOnce: true,
  });
  return (
    <div>
      <div className="flex flex-col md:flex-row items-stretch gap-3">
        <motion.div
          ref={leftRef}
          variants={fadeInFromLeft}
          initial="hidden"
          animate={inViewLeftRef ? 'show' : 'hidden'}
          transition={{ duration: 0.7 }}
          className="w-full flex flex-col"
        >
          <div className="flex-grow">
            <MaskCard
              color="#85586F"
              image="https://images.unsplash.com/photo-1523766775147-152d0d6e2adb?q=80&w=2576&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              title="We believe biology is the future of technology"
            />
          </div>
        </motion.div>
        <motion.div
          ref={rightRef}
          variants={fadeInFromRight}
          initial="hidden"
          animate={inViewRightRef ? 'show' : 'hidden'}
          transition={{ duration: 0.7 }}
          className="w-full flex flex-col gap-3"
        >
          <ParallaxCard
            image="https://images.unsplash.com/photo-1550100136-e092101726f4?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title="Join a thriving ecosystem that supports big ideas"
          />
          <ParallaxCard
            title="We've helped launch ideas in less than a week — let's collaborate"
            color="#829460"
          />
        </motion.div>
      </div>

      <div>
        <ArticleCard />
      </div>
    </div>
  );
};

export default ArticleSection;
