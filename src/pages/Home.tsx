'use client'

import React, { useEffect, useState } from 'react'
import { useCursor } from '../CursorContext';
import Transition from '../Transition';
import HoverCard from '../components/HoverCard';

const Home: React.FC = () => {
  const { setCursorVariant } = useCursor();
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

  const handleMouseEnter = () => {
    if (!isTouchDevice) {
      setIsHovered(true);
      if (isHovered) {
        console.log("sdasdad");
      }
      setCursorVariant("text");
    }
  };

  const handleMouseLeave = () => {
    if (!isTouchDevice) {
      setIsHovered(false);
      setCursorVariant("default");
    }
  };

  const handleTouchStart = () => {
    if (isTouchDevice) {
      setIsHovered(true);
      setCursorVariant("text");
    }
  };

  const handleTouchEnd = () => {
    if (isTouchDevice) {
      setIsHovered(false);
      setCursorVariant("default");
    }
  };

  return (
    <div className="flex flex-col justify-center mx-auto">

      <div
      >
        <div className="tracking-extraTighter text-[60px] sm:text-[70px] md:text-[80px] font-extrabold flex flex-row items-center justify-center min-h-screen px-4 sm:px-6 tracking-extra-tighter"
        >
          <a href="https://www.instagram.com/shlynav.tiff/"
            target='_blank'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            className='duration-300'>shlynav.tiff</a>

        </div>

      </div>

      <div className="absolute bottom-6 sm:bottom-10 left-4 sm:left-8 md:bottom-20 md:left-16 text-sm sm:text-sm font-semibold">
        <p>scroll down</p>
        <p>more</p>
      </div>

      <section className="py-4 sm:py-6 md:py-12 px-4 sm:px-6 md:px-8 flex flex-col items-center gap-4 max-w-[1360px] justify-center ">

        <div className="w-full">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-start">¬ Notable Works</h1>
        </div>


        <div className="flex flex-col xl:flex-row justify-between w-full gap-4">

          <HoverCard
            imageSrcLarge='/verbalg.png'
            imageSrcMedium='/verbamd.png'
            imageSrcSmall="/verbasm.png"
            title="verba. (2024)"
            link="https://verbaaaaaa.vercel.app/"
            className="w-full xl:w-[430px] md:w-auto md:h-[580px] min-h-[700px]"
          />

          <HoverCard
            imageSrcSmall="/1211.png"
            title="1211. (2025)"
            link="https://www.1211.space/"
            className="w-full xl:w-[930px] md:w-auto md:h-[580px] min-h-[700px]"
          />
        </div>

        <div className="flex flex-col xl:flex-row justify-between w-full gap-4">
          <div className="bg-[#252525] text-[#D8A7B1] w-full xl:w-[930px] md:w-auto min-h-[580px] rounded-lg flex items-end p-4"
            onMouseEnter={() => setCursorVariant('text')}
            onMouseLeave={() => setCursorVariant('default')}>
            <span className="text-sm">null. (null)</span>
          </div>
          <div className="bg-[#252525] text-[#D8A7B1] w-full xl:w-[430px] md:w-auto min-h-[580px] rounded-lg flex items-end p-4"
            onMouseEnter={() => setCursorVariant('text')}
            onMouseLeave={() => setCursorVariant('default')}>
            <span className="text-sm">null. (null)</span>
          </div>
        </div>


        <div className="flex flex-col xl:flex-row justify-between w-full gap-4">
          <div className="bg-[#252525] text-[#D8A7B1] w-full xl:w-[680px] md:w-auto min-h-[580px] rounded-lg flex items-end p-4"
            onMouseEnter={() => setCursorVariant('text')}
            onMouseLeave={() => setCursorVariant('default')}>
            <span className="text-sm">null. (null)</span>
          </div>
          <div className="bg-[#252525] text-[#D8A7B1] w-full xl:w-[680px] md:w-auto min-h-[580px] rounded-lg flex items-end p-4"
            onMouseEnter={() => setCursorVariant('text')}
            onMouseLeave={() => setCursorVariant('default')}>
            <span className="text-sm">null. (null)</span>
          </div>
        </div>


        <div className="w-full flex justify-center mt-4">
          <button className="text-[#252525] border border-[#252525] rounded-md px-3 sm:px-6 md:px-8 py-2 md:py-3 text-sm md:text-md hover:bg-[#fff8c1]/50 transition-colors"
            onMouseEnter={() => setCursorVariant('text')}
            onMouseLeave={() => setCursorVariant('default')}>
            Collected Works ++
          </button>
        </div>
      </section>


      <section className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6">
        <div className="max-w-[1070px] text-2xl sm:text-4xl md:text-[54px] tracking-tighter font-bold leading-[.75] md:leading-[.8] text-center">
          <h2>
            Be willing to fail as genuinely as you desire to succeed. The flames of passion don’t consume but purify.
            The reward for pursuing passion isn’t what you’re able to take away, but what you’re able to leave behind.
            Show some <strong>passion</strong>.
          </h2>
        </div>
      </section>
    </div>
  )
}

export default Transition(Home)