'use client';

import WhyCard from '@/components/atoms/WhyCard';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { fadeInFromTop } from '@/components/utils/animation';

const NewsList = [
  {
    title: 'Access enabling infrastructure',
    subtitle:
      'Co-Labs membership offers state-of-the-art facilities, equipment, and services to foster innovation in the biotechnology sector',
  },
  {
    title: 'A collaborative eco system',
    subtitle:
      'Join a thriving community of like-minded researchers, entrepreneurs, and professionals, encouraging collaboration and driving advancements in your field.',
  },
  {
    title: 'Educational opportunities',
    subtitle:
      'Benefit from transformative educational programmes focused on STEM, critical and living systems thinking, and eco-literacy.',
  },
  {
    title: 'Support a circular business model',
    subtitle:
      'By becoming a member, you’re actively contributing to reducing the environmental impact of innovation via our unique lab-as-a-service business model.',
  },
  {
    title: 'Accelerate innovation',
    subtitle:
      'Tap into Co-Labs’ resources, expertise, and networks to catalyse your research and development efforts, bringing your ideas to life.',
  },
  {
    title: 'Foster connections',
    subtitle:
      'Engage with industry partners, government agencies, and academic institutions through Co-Labs’ extensive network, amplifying your impact and opening doors for collaboration.',
  },
  {
    title: 'Tailored support',
    subtitle:
      'Receive personalised guidance and assistance to help you navigate the complexities of the biotechnology landscape and accelerate your success.',
  },
  {
    title: 'Champion a sustainable future',
    subtitle:
      'Join a movement dedicated to creating systemic change and driving win-win-win solutions for individuals, communities, and ecosystems.',
  },
];
const WhySection = () => {
  const [leftRef, inViewLeftRef] = useInView({
    triggerOnce: true,
  });
  const [rightRef, inViewRightRef] = useInView({
    triggerOnce: true,
  });
  return (
    <div className="flex items-start gap-3 flex-col xl:flex-row">
      <motion.div
        ref={leftRef}
        variants={fadeInFromTop}
        initial="hidden"
        animate={inViewLeftRef ? 'show' : 'hidden'}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="w-full xl:w-[13%]"
      >
        <div className="border px-3 py-1 w-max border-black rounded-3xl text-sm">
          Why CoLabs
        </div>
      </motion.div>
      <motion.div
        ref={rightRef}
        variants={fadeInFromTop}
        initial="hidden"
        animate={inViewRightRef ? 'show' : 'hidden'}
        transition={{ duration: 0.7 }}
        className="w-full xl:w-[87%] flex items-stretch flex-wrap"
      >
        {NewsList.map((data, i) => (
          <div className="w-full md:w-1/3" key={i}>
            <WhyCard title={data.title} subtitle={data.subtitle} />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default WhySection;
