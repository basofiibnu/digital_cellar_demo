import React from 'react';

import './styles.css';
import ConfirmButton from '@/components/atoms/ConfirmButton';
import {
  IconFacebook,
  IconInstagram,
  IconLinkedin,
  IconTwitter,
} from './constant';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import {
  fadeInFromLeft,
  fadeInFromRight,
  fadeInFromBottom,
} from '@/components/utils/animation';
const Footer = () => {
  const [leftRef, inViewLeftRef] = useInView({
    triggerOnce: true,
  });
  const [rightRef, inViewRightRef] = useInView({
    triggerOnce: true,
  });
  const [bottomRef, inViewBottomRef] = useInView({
    triggerOnce: true,
  });
  return (
    <footer
      className={`py-6 px-4 max-w-[1800px] mx-auto bg-transparent`}
    >
      <div className="flex flex-col md:flex-row items-stretch w-full gap-3 2xl:gap-5 h-full">
        <motion.div
          ref={leftRef}
          variants={fadeInFromLeft}
          initial="hidden"
          animate={inViewLeftRef ? 'show' : 'hidden'}
          transition={{ duration: 0.7 }}
          className="w-full md:w-2/5 bg-fixed bg-center bg-no-repeat bg-cover  rounded-[30px] relative p-5"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1609109238958-eb5130c99873?q=80&w=2051&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            minHeight: '250px',
          }}
        >
          {/* <img
            src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?w=2000&t=st=1699421119~exp=1699421719~hmac=ea9d975d6c697fc5e4293657822f5fbb5acb853165b054e821c5e18c5e1a642d"
            alt=""
            className="rounded-3xl h-full w-full"
          /> */}
        </motion.div>
        <motion.div
          ref={rightRef}
          variants={fadeInFromRight}
          initial="hidden"
          animate={inViewRightRef ? 'show' : 'hidden'}
          transition={{ duration: 0.7 }}
          className="w-full md:w-3/5 rounded-3xl bg-blue-700 h-full p-8 text-white"
        >
          <div>
            <h3 className="footer-title !leading-normal xl:leading-none font-semibold tracking-tight text-base lg:text-lg">
              An ecosystem to be part of.
            </h3>
            <h3 className="footer-title !leading-normal xl:leading-none font-semibold tracking-tight text-base lg:text-lg">
              Stay in the loop
            </h3>
          </div>
          <div className="mt-12 w-full">
            <div className="w-full">
              <input
                type="text"
                placeholder="Your Email Address"
                className="w-full rounded-3xl p-5"
              />
              <div className="text-right mt-3 flex items-center gap-5 justify-end">
                <p className="text-base md:text-xl">Subscribe</p>
                <ConfirmButton />
              </div>
              <div className="mt-20">
                <p className="w-full xl:w-1/2 text-lg">
                  Subscribe for updates, news, events, and community
                  resources
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        ref={bottomRef}
        variants={fadeInFromBottom}
        initial="hidden"
        animate={inViewBottomRef ? 'show' : 'hidden'}
        transition={{ duration: 0.7 }}
        className="bg-[#2a2c2d] rounded-3xl px-5 md:px-8 py-5 md:py-10 mt-2 text-white"
      >
        <div className="flex flex-col md:flex-row items-start gap-5">
          <div className="w-full">
            <p className="text-base md:text-xl md:w-3/4 footer-description">
              Co-Labs Melbourne respectfully acknowledges the
              Traditional Custodians of the land on which we operate
              our business – the Boon Wurrung and Wurundjeri peoples
              of the Kulin Nation.
            </p>
          </div>
          <div className="w-full xl:w-2/3 2xl:w-1/2 flex items-start gap-3">
            <div>
              <div className="mb-4">
                <p>CoLabs Coworking 1/306 Albert St, Brunswick</p>
                <p className="hover:underline cursor-pointer">
                  (03) 9111 2399
                </p>
              </div>
              <div>
                <p>
                  20/306 Albert St, <br />
                  Brunswick
                </p>
                <p className="hover:underline cursor-pointer">
                  (03) 9111 2399
                </p>
              </div>
              <div className="mt-7">
                <p className="opacity-60 transition-all hover:opacity-100 ease-in-out cursor-pointer duration-300 hover:underline mb-[2px]">
                  Services
                </p>
                <p className="opacity-60 transition-all hover:opacity-100 ease-in-out cursor-pointer duration-300 hover:underline mb-[2px]">
                  Privacy Policy
                </p>
                <p className="opacity-60 transition-all hover:opacity-100 ease-in-out cursor-pointer duration-300 hover:underline mb-[2px]">
                  Our Principles
                </p>
                <p className="opacity-60 transition-all hover:opacity-100 ease-in-out cursor-pointer duration-300 hover:underline mb-[2px]">
                  Terms and Conditions
                </p>
                <p className="opacity-60 transition-all hover:opacity-100 ease-in-out cursor-pointer duration-300 hover:underline">
                  About
                </p>
              </div>
            </div>
            <div>
              <div className="mb-4">
                <p>17/306 Albert St, Brunswick </p>
                <p className="hover:underline cursor-pointer">
                  (03) 9111 2399
                </p>
              </div>
              <div>
                <p>2 Acacia Place, Notting Hill</p>
                <p className="hover:underline cursor-pointer">
                  (03) 9111 2399
                </p>
              </div>
              <div className="mt-7">
                <p className="opacity-60 transition-all hover:opacity-100 ease-in-out cursor-pointer duration-300 hover:underline mb-[2px]">
                  Community
                </p>
                <p className="opacity-60 transition-all hover:opacity-100 ease-in-out cursor-pointer duration-300 hover:underline">
                  Contact
                </p>
                <p className="opacity-60 mt-[3.3rem]">
                  &copy; 2023 CoLabs
                </p>
              </div>
            </div>
          </div>
          <div className="hidden xl:w-1/3 2xl:w-1/2" />
        </div>

        <div className="flex flex-col-reverse md:flex-row items-start mt-12 md:mt-24">
          <div className="w-full"></div>
          <div className="w-full flex flex-col-reverse md:flex-row justify-start md:justify-between items-start md:items-center gap-5">
            <div className="text-5xl font-bold">CoLabs</div>
            <div className="flex items-center gap-3 xl:gap-5">
              <div className="w-6 h-6 footer-icon">
                <IconInstagram />
              </div>
              <div className="w-6 h-6 footer-icon">
                <IconFacebook />
              </div>
              <div className="w-6 h-6 footer-icon">
                <IconLinkedin />
              </div>
              <div className="w-6 h-6 footer-icon">
                <IconTwitter />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
