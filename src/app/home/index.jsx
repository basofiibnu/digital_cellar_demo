'use client';

import React from 'react';

import './styles.css';
import ScrollButton from '@/components/atoms/ScrollButton';
import Statistics from '@/components/organism/Statistics/Index';
import Labs from '@/components/organism/Labs';
import Trivia from '@/components/organism/Trivia';
import ServicesSection from '@/components/organism/ServicesSection/Index';
import ArticleSection from '@/components/organism/ArticleSection';
import NewsSection from '@/components/organism/NewsSection';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { fadeIn, fadeInFromTop } from '@/components/utils/animation';

const Home = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Change this to false if you want the animation to trigger again whenever it comes in view
  });
  const [ref2, inView2] = useInView({
    triggerOnce: true, // Change this to false if you want the animation to trigger again whenever it comes in view
  });
  const [servicesRef, inViewServices] = useInView({
    triggerOnce: true, // Change this to false if you want the animation to trigger again whenever it comes in view
  });
  const [principlesRef, inViewPrinciples] = useInView({
    triggerOnce: true, // Change this to false if you want the animation to trigger again whenever it comes in view
  });
  return (
    <main className="flex min-h-screen flex-col items-center justify-center 2xl:justify-start">
      <section className="mt-3 flex flex-col md:flex-row items-start gap-3 w-full max-w-full min-h-[30vh] md:min-h-[95vh] 2xl:max-w-[1800px] mx-auto px-4">
        <motion.div
          ref={ref}
          variants={fadeIn}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          transition={{ duration: 0.7 }}
          className="w-full md:w-[65%] lg:w-[73%] xl:w-[78%] 2xl:w-[84%] items-stretch bg-[#bed2f5] h-full min-h-[50vh] md:min-h-[95vh] rounded-3xl relative flex overflow-hidden"
        >
          <video
            autoPlay={true}
            playsInline={true}
            loop={true}
            muted
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source
              src="https://colabs.yourcreative.com.au/wp-content/uploads/2023/07/colabs-hero.mp4"
              type="video/mp4"
            />
          </video>

          <div className="bg-[#f9f8f6] absolute bottom-0 left-0 pt-5 pr-5 rounded-tr-3xl w-[70%] md:w-max max-w-max">
            <p className="hero-title leading-tight tracking-tighter w-[60%] md:w-full">
              Making space for
            </p>
            <p className="hero-title leading-tight tracking-tighter w-[50%] md:w-full xl:w-[90%] 2xl:w-full">
              transformative innovation
            </p>
            <div className="mt-5 hidden md:block">
              <ScrollButton background="white" stroke="black" />
            </div>
          </div>
        </motion.div>
        <motion.div
          ref={ref2}
          variants={fadeIn}
          initial="hidden"
          animate={inView2 ? 'show' : 'hidden'}
          transition={{ duration: 0.7 }}
          className="w-full md:w-[35%] lg:w-[27%] xl:w-[22%] 2xl:w-[16%] flex flex-col h-full min-h-[50vh] md:min-h-[95vh]"
        >
          <Statistics />
          <Labs />
          <div className="md:flex-grow md:flex md:flex-col">
            <Trivia />
          </div>
        </motion.div>
      </section>

      <section className="w-full my-10 md:my-20">
        <div className="mt-3 gap-3 w-full max-w-[1800px] mx-auto px-4  xl:px-20">
          <h2 className="text-left w-full lg:w-[80%] xl:w-[65%] 2xl:w-[50%] text-[34px] lg:text-[40px] xl:text-[50px] leading-tight tracking-tighter">
            We design, build and run collaborative spaces where
            bio-led science, technology and people can thrive
          </h2>
          <div>
            <div className="mt-8 md:mt-16 border px-3 py-1 w-max border-black rounded-3xl text-sm">
              Our Services
            </div>
          </div>
        </div>

        <motion.div
          ref={servicesRef}
          variants={fadeInFromTop}
          initial="hidden"
          animate={inViewServices ? 'show' : 'hidden'}
          transition={{ duration: 0.5 }}
          className="mt-5"
        >
          <ServicesSection />
        </motion.div>
      </section>

      <section className="w-full my-10 md:my-20">
        <motion.div
          ref={principlesRef}
          variants={fadeIn}
          initial="hidden"
          animate={inViewPrinciples ? 'show' : 'hidden'}
          transition={{ duration: 0.7 }}
          className="mt-3 gap-3 w-full max-w-[1800px] mx-auto px-4 xl:px-10 2xl:px-20"
        >
          <div className="relative mx-auto h-[85vh] flex items-center justify-center">
            <div className="principles-container rounded-3xl">
              <video
                src="https://colabs.yourcreative.com.au/wp-content/uploads/2023/07/homepage-cells.mp4"
                autoPlay
                loop
                playsInline
                muted
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative w-full text-center">
              <div className="rounded-xl text-center w-full flex justify-center">
                <p className="text-white font-bold text-xl md:text-3xl bg-[#66662a] w-max py-3 px-4 rounded-xl">
                  Reposition Science
                </p>
              </div>
              <div className="rounded-xl text-center w-full flex justify-center -mt-3">
                <p className="text-white font-bold text-xl md:text-3xl bg-[#66662a] w-max py-3 px-4 rounded-xl">
                  Redefine our Approach
                </p>
              </div>
              <div className="rounded-xl text-center w-full flex justify-center -mt-3">
                <p className="text-white font-bold text-xl md:text-3xl bg-[#66662a] w-max py-3 px-4 rounded-xl">
                  Rethink Enterpreneurship
                </p>
              </div>
              <div className="rounded-xl text-center w-full flex justify-center -mt-3">
                <p className="text-white font-bold text-xl md:text-3xl bg-[#66662a] w-max py-3 px-4 rounded-xl">
                  Regenerate our Planet
                </p>
              </div>
              <div className="relative w-full mt-8 flex justify-center gap-5 items-center">
                <div>
                  <div className="text-white text-base md:text-lg bg-[#66662a] w-max py-1 px-6 rounded-3xl">
                    Our Principles
                  </div>
                </div>
                <div>
                  <div className="bg-[#66662a] w-max py-4 px-4 rounded-[100%]">
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
        </motion.div>
      </section>

      <section className="w-full my-10 md:my-20">
        <div className="mt-3 gap-3 w-full max-w-[1800px] mx-auto px-4 xl:px-10 2xl:px-4">
          <ArticleSection />
        </div>
      </section>

      <section className="w-full mt-10 mb-12 md:mb-32">
        <div className="mt-3 gap-3 w-full max-w-[1300px] 2xl:max-w-[1500px] mx-auto px-4 xl:px-20 2xl:px-0">
          <p className="text-left lg:w-[70%] xl:w-[55%] text-[34px] md:text-[40px] xl:text-[50px] leading-tight tracking-tighter mb-6 md:mb-16">
            Space for big thinking, problem-solvers and bio-innovators
          </p>
          <NewsSection />
        </div>
      </section>
    </main>
  );
};

export default Home;
