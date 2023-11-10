'use client';
import React, { useEffect, useState } from 'react';
import './styles.css';
import { motion } from 'framer-motion';
import {
  ChildCard,
  ContainerCard,
} from '@/components/atoms/ListCard';
import { useInView } from 'react-intersection-observer';
import { fadeInFromTop } from '@/components/utils/animation';

export function getScrollPosition(elementId) {
  const element = document.getElementById(elementId);
  if (!element) {
    return null;
  }
  const rect = element.getBoundingClientRect();
  const scrollTop =
    window.pageYOffset || document.documentElement.scrollTop;
  return rect.top + scrollTop;
}

const scrollToPosition = (position) => {
  window.scrollTo({
    top: position,
    behavior: 'smooth', // if you want a smooth scrolling
  });
};

const StackingCard = () => {
  const [scrollPosition, setScrollPosition] = useState(null);
  const [windowScrollPosition, setWindowScrollPosition] = useState(0);
  const [isActiveCard, setIsActiveCard] = useState();
  const [stackingRef, inViewStackingRef] = useInView({
    triggerOnce: true,
  });
  useEffect(() => {
    const position1 = getScrollPosition('card1');
    const position2 = getScrollPosition('card2');
    const position3 = getScrollPosition('card3');
    const position4 = getScrollPosition('card4');

    setScrollPosition([position1, position2, position3, position4]);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setWindowScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.div
      ref={stackingRef}
      variants={fadeInFromTop}
      initial="hidden"
      animate={inViewStackingRef ? 'show' : 'hidden'}
      transition={{ duration: 0.7 }}
      className="w-full"
    >
      <div className="thumbnail-section h-[330px]">
        <div className="flex items-center justify-center gap-3 w-full">
          <div
            onClick={() => {
              if (scrollPosition && scrollPosition.length > 0) {
                scrollToPosition(scrollPosition[0] - 50);
                setIsActiveCard(1);
              }
            }}
            className={`mt-16 border border-[#bed2f5] px-5 py-3 w-max rounded-3xl text-center text-xs md:text-sm xl:text-xl cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#bed2f5] hover:font-semibold ${
              isActiveCard === 1 && 'bg-[#bed2f5] font-semibold'
            }`}
          >
            Lab Space
          </div>
          <div
            onClick={() => {
              if (scrollPosition && scrollPosition.length > 0) {
                scrollToPosition(scrollPosition[1] - 60);
                setIsActiveCard(2);
              }
            }}
            className={`mt-16 border border-[#dcb688] px-5 py-3 w-max rounded-3xl text-center text-xs md:text-sm xl:text-xl cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#dcb688] hover:font-semibold ${
              isActiveCard === 2 && 'bg-[#dcb688] font-semibold'
            }`}
          >
            Build a Lab
          </div>
          <div
            onClick={() => {
              if (scrollPosition && scrollPosition.length > 0) {
                scrollToPosition(scrollPosition[2] - 70);
                setIsActiveCard(3);
              }
            }}
            className={`mt-16 border border-[#d9db4d] px-5 py-3 w-max rounded-3xl text-center text-xs md:text-sm xl:text-xl cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#d9db4d] hover:font-semibold ${
              isActiveCard === 3 && 'bg-[#d9db4d] font-semibold'
            }`}
          >
            Innovation Falicitation
          </div>
          <div
            onClick={() => {
              if (scrollPosition && scrollPosition.length > 0) {
                scrollToPosition(scrollPosition[3] - 70);
                setIsActiveCard(4);
              }
            }}
            className={`mt-16 border border-[#bfb9e3] px-5 py-3 w-max rounded-3xl text-center text-xs md:text-sm xl:text-xl cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#bfb9e3] hover:font-semibold ${
              isActiveCard === 4 && 'bg-[#bfb9e3] font-semibold'
            }`}
          >
            Office Space
          </div>
        </div>
      </div>

      <div className="-mt-40">
        <ul id="cards">
          <ContainerCard
            id="card1"
            triggerId={'card2'}
            scale={0.85}
            y={-60}
          >
            <ChildCard
              image="https://images.unsplash.com/photo-1566228015668-4c45dbc4e2f5?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              title="Access fully equiped wet and dry lab spaces, essential equipment and amenities."
              subtitle="Designed to foster innovation and collaboration."
              color="#0046c7"
            />
          </ContainerCard>
          <ContainerCard
            id="card2"
            triggerId={'card3'}
            scale={0.9}
            y={-40}
          >
            <ChildCard
              image="https://images.unsplash.com/photo-1568394824200-457c8c3cb6dc?q=80&w=2778&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              title="Building and designing labs that are tailored and fit-for-purpose Australia wide."
              subtitle="Take your project from zero to one."
              color="#b1653b"
            />
          </ContainerCard>
          <ContainerCard
            id="card3"
            triggerId={'card4'}
            scale={0.95}
            y={-20}
          >
            <ChildCard
              image="https://images.unsplash.com/photo-1504309092620-4d0ec726efa4?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              title="Offering expertise across various stages of the startup lifecycle."
              subtitle="Refine your idea, access marketing support, and join a collaborative community."
              color="#b1653b"
            />
          </ContainerCard>
          <ContainerCard
            id="card4"
            triggerId={'cardContent'}
            scale={1}
            y={-10}
          >
            <ChildCard
              image="https://images.unsplash.com/photo-1517504734587-2890819debab?q=80&w=1639&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              title="Impact-oriented co-working spaces."
              subtitle="Work towards a future where social and environmental flourishing can co-exist."
              color="#b1653b"
            />
          </ContainerCard>
        </ul>
      </div>
    </motion.div>
  );
};

export default StackingCard;
