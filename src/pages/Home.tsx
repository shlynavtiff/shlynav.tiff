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
    <div className="flex flex-col items-center justify-center overflow-x-hidden">

      <div
      >
        <div className="tracking-extraTighter text-[65px] sm:text-[70px] md:text-[80px] font-extrabold flex flex-row items-center justify-center min-h-screen px-4 sm:px-6 tracking-extra-tighter"
        >
          <a href="https://www.instagram.com/shlynav.tiff/"
            target='_blank'
            onMouseEnter={() => setCursorVariant("text")}
            onMouseLeave={() => setCursorVariant("default")}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            className='duration-300'>shlynav.tiff</a>

        </div>

      </div>

      <div className="absolute bottom-6 sm:bottom-10 left-4 sm:left-8 md:bottom-20 md:left-16 text-sm sm:text-sm font-semibold">
        <p>where did it go wrong?</p>
      </div>

      <section className="flex flex-col w-full h-screen relative overflow-hidden">
        <div className="flex flex-col absolute top-60 left-5 sm:left-20 md:left-40 font-extrabold text-6xl leading-[.80]">
          <p>useful.</p>
          <p>functional.</p>
          <p>harmonious.</p>
          <p>seamless.</p>
        </div>

        <div className="absolute top-[450px] right-0 sm:right-20 md:right-40 w-full sm:w-[450px] px-4 sm:px-0 leading-[1]">
          <p className=''>
            As a software developer, I strongly value integrity, collaboration, and continuous learning. I believe in writing clean,
            maintainable code that prioritizes long-term quality over short-term gains. Working effectively with teammates across
            disciplines is essential, and I strive to communicate clearly and respectfully. I&#39;m committed to ongoing learning, whether
            that means exploring new technologies, improving existing skills, or staying current with industry trends. I take ownership
            of my work, embrace constructive feedback, and aim to build solutions that are not only efficient and secure, but also empathetic
            to the needs of end users. Above all, I&#39;m passionate about solving problems in ways that are thoughtful, scalable, and impactful.
          </p>
        </div>
      </section>

      <section className="flex flex-col w-full ">

        <div className="w-full flex nmb-2 ml-2 items-center justify-start ">
          <h1 className="text-3xl md:text-4xl font-bold text-start">
            ¬ Notable Works
          </h1>
        </div>

        <div className="flex flex-col items-center  w-full p-1 gap-1">
          <HoverCard
            imageSrcSmall="/verbalg.png"
            title='verba.'
            year='2024'
            link='https://1211.space/'
            desc='A minimal, fun photobooth web app that lets users capture photos, apply custom layouts, and decorate with drag-and-drop stickers.'
            className="lg:w-[1200px] min-h-[420px] "
          />

          <HoverCard
            imageSrcSmall="/erer.png"
            title='1211.'
            year='2025'
            link='https://1211.space/'
            desc='A minimal, fun photobooth web app that lets users capture photos, apply custom layouts, and decorate with drag-and-drop stickers.'
            className="lg:w-[1200px] min-h-[420px] "
            reverseLayout={true}
          />
        </div>

        <div className="w-full flex justify-center mt-4">
          <button
            className="text-[#252525] border border-[#252525] rounded-md px-3 sm:px-6 md:px-8 py-2 md:py-3 text-sm md:text-md hover:bg-[#fff8c1] duration-300 transition-colors"
            onMouseEnter={() => setCursorVariant('text')}
            onMouseLeave={() => setCursorVariant('default')}
          >
            Collected Works ++
          </button>
        </div>
      </section>



      <section className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6">
        <div className="max-w-[1070px] text-4xl md:text-[54px] tracking-tighter font-extrabold leading-[.75] md:leading-[.8] text-center">
          <h2>
            travel lightly, obsolescence is catching up.
          </h2>
        </div>
      </section>
    </div>
  )
}

export default Transition(Home)