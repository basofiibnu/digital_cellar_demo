import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import './styles.css';
const ChildCard = ({ title, subtitle, image, color }) => {
  return (
    <div className="px-10 py-12 flex gap-6 xl:gap-16 items-stretch justify-start max-h-[616px] flex-col xl:flex-row">
      <div
        className="rounded-3xl min-h-[250px] xl:min-h-max w-full xl:w-1/3 flex-grow"
        style={{
          backgroundImage: `url(${image})`,
        }}
      />
      <div className="w-full xl:w-2/3">
        <div className="text-xl md:text-[25px] lg:text-[30px] xl:text-[47px] font-semibold tracking-tight leading-tight w-full lg:w-[75%]">
          {title}
        </div>
        <div
          className="text-xl md:text-[25px] lg:text-[30px] xl:text-[47px] font-semibold tracking-tight leading-tight w-full lg:w-[75%] mt-4 lg:mt-8"
          style={{ color: color }}
        >
          {subtitle}
        </div>
        <div className="relative w-full mt-8 flex justify-end xl:justify-start gap-5 items-center">
          <div>
            <div className="text-black text-base lg:text-xl w-max">
              Learn More
            </div>
          </div>
          <div>
            <div className="bg-black w-max py-4 px-4 rounded-[100%]">
              <svg
                width="31"
                height="28"
                viewBox="0 0 31 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.857198 13.7372L27.9141 13.7372"
                  stroke="white"
                  strokeWidth="3"
                ></path>
                <path
                  d="M15.4561 1.39417L27.9142 13.8522L15.4561 26.3104"
                  stroke="white"
                  strokeWidth="3"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ContainerCard = ({ id, children, triggerId, scale, y }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      const triggerElement = document.getElementById(triggerId);
      if (triggerElement) {
        const observer = new IntersectionObserver(([entry]) => {
          setIsVisible(entry.isIntersecting);
        });
        observer.observe(triggerElement);
        return () => observer.unobserve(triggerElement);
      }
    }
  }, [inView, triggerId]);

  const variants = {
    hidden: { scale: 1, y: 0 },
    show: {
      scale: scale,
      y: y,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <motion.li
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isVisible ? 'show' : 'hidden'}
      className="card"
      id={id}
    >
      <div className="card-body max-h-[616px]">{children}</div>
    </motion.li>
  );
};

export { ContainerCard, ChildCard };
