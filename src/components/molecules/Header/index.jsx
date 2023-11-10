'use client';
import React, { useState } from 'react';

import './styles.css';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { fadeInFromTop } from '@/components/utils/animation';

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [menuRef, inViewMenuRef] = useInView({
    triggerOnce: true,
  });
  return (
    <header className="relative">
      <div className="fixed z-[99] w-full max-w-[100vw] ">
        <div
          className={`flex justify-between items-center w-full xl:py-6 xl:px-4 max-w-[1800px] mx-auto header-container bg-[#f9f8f6] xl:bg-transparent`}
        >
          <div className="flex items-center justify-between gap-4">
            <Link href="/">
              <div className="relative">
                <div className="absolute h-6 bg-[#f9f8f6] w-full -top-5 hidden xl:block">
                  <div className="text-xs px-6 mt-4">
                    Naarm/Melbourne
                  </div>
                </div>
                <h1 className="text-3xl xl:text-5xl font-bold text-black bg-[#f9f8f6] px-6 py-3 rounded-br-3xl">
                  CoLabs
                </h1>
                <div className="absolute -top-4 -right-6 h-7 w-7">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 100 100"
                  >
                    <path
                      d="m100,0H0v100C0,44.77,44.77,0,100,0Z"
                      fill="#f9f8f6"
                    ></path>
                  </svg>
                </div>
                <div className="absolute -bottom-7 left-[10px] xl:left-0 h-7 w-7">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 100 100"
                  >
                    <path
                      d="m100,0H0v100C0,44.77,44.77,0,100,0Z"
                      fill="#f9f8f6"
                    ></path>
                  </svg>
                </div>
              </div>
            </Link>
            <nav className="gap-7 items-center bg-[#f9f8f6] py-4 px-8 rounded-[40px] nav-container hidden xl:flex">
              <div className="hover:text-[#005241] cursor-pointer">
                <Link href="/services">Services</Link>
              </div>
              <div className="hover:text-[#005241] cursor-pointer">
                About
              </div>
              <div className="hover:text-[#005241]">
                Our Principles
              </div>
              <div className="hover:text-[#005241] cursor-pointer">
                Community
              </div>
              <div className="hover:text-[#005241] cursor-pointer">
                Contact
              </div>
              <div className="hover:text-[#005241] cursor-pointer">
                Facebook
              </div>
              <div className="hover:text-[#005241] cursor-pointer">
                Twitter
              </div>
            </nav>
          </div>
          <div className="xl:hidden flex items-center justify-start gap-5 pr-8">
            {!isOpenMenu ? (
              <div
                className="bg-[#d9db4d] px-4 py-2 rounded-3xl font-semibold cursor-pointer"
                onClick={() => setIsOpenMenu(true)}
              >
                Menu
              </div>
            ) : (
              <div
                className="border-2 border-black px-4 py-1 rounded-3xl font-semibold cursor-pointer"
                onClick={() => setIsOpenMenu(false)}
              >
                Close
              </div>
            )}

            <div className="border-2 border-black rounded-3xl px-3 py-1">
              <div className="flex items-center justify-center gap-3">
                <div className="w-6 h-6 cursor-pointer">
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Instagram</title>
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"></path>
                  </svg>
                </div>
                <div className="w-6 h-6 cursor-pointer">
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Facebook</title>
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="items-center search-container pl-5 pr-2 py-2 gap-3 hidden xl:flex">
            <div>
              <input
                type="text"
                placeholder="Search here..."
                className="bg-transparent outline-none"
              />
            </div>
            <div className="rounded-full w-10 h-10 bg-[#f9f8f6] search-icon-container flex justify-center items-center">
              <svg
                width="43"
                height="42"
                viewBox="0 0 43 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="25.4375"
                  cy="16.5657"
                  r="14.5657"
                  stroke="black"
                  strokeWidth="4"
                ></circle>
                <path
                  d="M14.1482 27.852L1.99999 40.0002"
                  stroke="black"
                  strokeWidth="4"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <motion.div
        className={`fixed top-[70px] bg-[#d9db4d] z-[99] w-full p-5 rounded-br-3xl rounded-bl-3xl ${
          isOpenMenu ? 'block' : 'hidden'
        }`}
        ref={menuRef}
        variants={fadeInFromTop}
        initial="hidden"
        animate={inViewMenuRef && isOpenMenu ? 'show' : 'hidden'}
        exit="exit"
        transition={{ duration: 0.7 }}
      >
        <div className="flex flex-col justify-center items-center gap-3">
          <div>
            <p className="text-xs font-semibold">Welcome to CoLabs</p>
          </div>
          <div className="w-full">
            <div className="items-center search-container pl-5 pr-2 py-2 gap-3 flex">
              <div className="flex-grow">
                <input
                  type="text"
                  placeholder="Search here..."
                  className="bg-transparent outline-none"
                />
              </div>
              <div className="rounded-full w-10 h-10 bg-[#f9f8f6] search-icon-container flex justify-center items-center">
                <svg
                  width="43"
                  height="42"
                  viewBox="0 0 43 42"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="25.4375"
                    cy="16.5657"
                    r="14.5657"
                    stroke="black"
                    strokeWidth="4"
                  ></circle>
                  <path
                    d="M14.1482 27.852L1.99999 40.0002"
                    stroke="black"
                    strokeWidth="4"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-3 w-full my-5">
            <div
              className="border-b border-opacity-50 w-full border-black"
              onClick={() => setIsOpenMenu(false)}
            >
              <Link href="/">
                <p className="text-3xl mb-3 cursor-pointer">Home</p>
              </Link>
            </div>
            <div
              className="border-b border-opacity-50 w-full border-black"
              onClick={() => setIsOpenMenu(false)}
            >
              <Link href="/services">
                <p className="text-3xl mb-3 cursor-pointer">
                  Services
                </p>
              </Link>
            </div>
            <div className="border-b border-opacity-50 w-full border-black">
              <p className="text-3xl mb-3">About</p>
            </div>
            <div className="border-b border-opacity-50 w-full border-black">
              <p className="text-3xl mb-3">Our Principles</p>
            </div>
            <div className="border-b border-opacity-50 w-full border-black">
              <p className="text-3xl mb-3">Community</p>
            </div>
            <div className="border-b border-opacity-50 w-full border-black">
              <p className="text-3xl mb-3">Contact</p>
            </div>
          </div>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
