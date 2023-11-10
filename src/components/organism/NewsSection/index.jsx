import NewsCard from '@/components/atoms/NewsCard';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { fadeInFromTop } from '@/components/utils/animation';
const NewsList = [
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
      'https://images.unsplash.com/photo-1493589976221-c2357c31ad77?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'News',
    title:
      'Cortical Labs Raises $15M to Scale Up BiOS, an Organic-Digital Intelligence System',
    subtitle:
      'What if Biology + Technology is the only way to make true AI?',
  },
];
const NewsSection = () => {
  const [leftRef, inViewLeftRef] = useInView({
    triggerOnce: true,
  });
  const [rightRef, inViewRightRef] = useInView({
    triggerOnce: true,
  });
  return (
    <div className="flex flex-col xl:flex-row items-start gap-7 md:gap-3">
      <motion.div
        ref={leftRef}
        variants={fadeInFromTop}
        initial="hidden"
        animate={inViewLeftRef ? 'show' : 'hidden'}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="w-full xl:w-[13%]"
      >
        <div className="border px-3 py-1 w-max border-black rounded-3xl text-sm">
          Community
        </div>
      </motion.div>
      <motion.div
        ref={rightRef}
        variants={fadeInFromTop}
        initial="hidden"
        animate={inViewRightRef ? 'show' : 'hidden'}
        transition={{ duration: 0.7 }}
        className="w-full xl:w-[87%] flex flex-col md:flex-row items-start gap-7 md:gap-3"
      >
        {NewsList.map((data, i) => (
          <div className="w-full" key={i}>
            <NewsCard
              title={data.title}
              subtitle={data.subtitle}
              image={data.image}
              category={data.category}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default NewsSection;
