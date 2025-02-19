'use client'

import React, { useState, useEffect } from 'react'
import { useCursor } from '../CursorContext';
import Transition from '../Transition';

const Home: React.FC = () => {
  const { setCursorVariant } = useCursor();

  const [isHovered, setIsHovered] = useState(false)
  const [isTouchDevice, setIsTouchDevice] = useState(false)

  useEffect(() => {
    setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0)
  }, [])

  const handleTouchStart = () => {
    if (isTouchDevice) {
      setIsHovered(true)
      setCursorVariant("text")
    }
  }

  const handleTouchEnd = () => {
    if (isTouchDevice) {
      setIsHovered(false)
      setCursorVariant("default")
    }
  }

  const handleMouseEnter = () => {
    if (!isTouchDevice) {
      setIsHovered(true)
      setCursorVariant("text")
    }
  }

  const handleMouseLeave = () => {
    if (!isTouchDevice) {
      setIsHovered(false)
      setCursorVariant("default")
    }
  }

  return (
    <div className="flex flex-col justify-center mx-auto">

      {/* Hero Section */}
      <div className="tracking-extraTighter text-5xl sm:text-6xl md:text-7xl font-bold flex flex-row items-center justify-center min-h-screen px-4 sm:px-6 tracking-extra-tighter">
        shlynav.tiff
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 sm:bottom-10 left-4 sm:left-8 md:bottom-20 md:left-16 text-sm sm:text-sm font-semibold">
        <p>scroll down</p>
        <p>more</p>
      </div>

      {/* Notable Works Section */}
      <section className="py-4 sm:py-6 md:py-12 px-4 sm:px-6 md:px-8 flex flex-col items-center gap-4 max-w-[1360px] justify-center ">
        {/* Title */}
        <div className="w-full">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-start">¬ Notable Works</h1>
        </div>

        {/* First Row */}
        <div className="flex flex-col xl:flex-row justify-between w-full gap-4">

          <div
            className={`bg-[#252525] text-[#D8A7B1] w-full xl:w-[430px] md:w-auto min-h-[580px] rounded-lg flex flex-col justify-end p-4 relative overflow-hidden group ${isHovered ? "touch-hover" : ""}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Background Image */}
            <img
              src="/verba.png" // Replace with your image path
              alt="Project Image"
              className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 scale-85 md:scale-100 ${isHovered ? "opacity-100" : "opacity-20"}`}/>

            {/* Bottom Section: Text + Button */}
            <div className="flex flex-row text-sm justify-between w-full items-center relative z-10">
              <span>verba. (2024)</span>

              <a href="https://verbaaaaaa.vercel.app/" target="_blank" rel="noopener noreferrer" className="relative z-20" onMouseEnter={() => setCursorVariant('text')}
                onMouseLeave={() => setCursorVariant('default')}>
                <button className="border border-[#D8A7B1] px-4 py-2 text-sm rounded-md transition duration-300 hover:bg-[#fff8c1] hover:text-[#252525] focus:bg-[#fff8c1] focus:text-[#252525]">
                  visit work.
                </button>
              </a>
            </div>
          </div>


          <div className="bg-[#252525] text-[#D8A7B1] w-full xl:w-[930px] md:w-auto min-h-[580px] rounded-lg flex items-end p-4"
            onMouseEnter={() => setCursorVariant('text')}
            onMouseLeave={() => setCursorVariant('default')}>
            <span className="text-sm">null. (null)</span>
          </div>
        </div>

        {/* Second Row */}
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

        {/* Third Row */}
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

        {/* Button */}
        <div className="w-full flex justify-center mt-4">
          <button className="text-[#252525] border border-[#252525] rounded-md px-3 sm:px-6 md:px-8 py-2 md:py-3 text-sm md:text-md hover:bg-[#fff8c1]/50 transition-colors"
            onMouseEnter={() => setCursorVariant('text')}
            onMouseLeave={() => setCursorVariant('default')}>
            Collected Works ++
          </button>
        </div>
      </section>

      {/* Quote Section */}
      <section className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6">
        <div className="max-w-[1070px] text-2xl sm:text-4xl md:text-[54px] tracking-tighter font-bold leading-[.75] md:leading-[.8] text-center">
          <h2>
            Be willing to fail as genuinely as you desire to succeed. The flames of passion don’t consume but purify.
            The reward for pursuing passion isn’t what you’re able to take away, but what you’re able to leave behind.
            Show some passion.
          </h2>
        </div>
      </section>
    </div>
  )
}

export default Transition(Home)