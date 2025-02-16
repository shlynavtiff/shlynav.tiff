import React from 'react'
import { useCursor } from '../CursorContext';
import Transition from '../Transition';

const Home: React.FC = () => {
     const { setCursorVariant } = useCursor();
  return (
    <div className="flex flex-col justify-center mx-auto">

      {/* Hero Section */}
      <div className="tracking-extraTighter text-5xl sm:text-6xl md:text-7xl font-bold flex flex-row items-center justify-center min-h-screen px-4 sm:px-6 tracking-extra-tighter">
        shlynav.tiff
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 sm:bottom-10 left-4 sm:left-8 md:bottom-20 md:left-16 text-xs sm:text-sm font-semibold">
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
          <div className="bg-[#928DAB] text-[#1F1C2C] w-full xl:w-[430px] md:w-auto min-h-[580px] rounded-lg flex items-end p-4"
            onMouseEnter={() => setCursorVariant('text')}
            onMouseLeave={() => setCursorVariant('default')}>
            <span className="text-xs">null. (null)</span>
          </div>
          <div className="bg-[#928DAB] text-[#1F1C2C] w-full xl:w-[930px] md:w-auto min-h-[580px] rounded-lg flex items-end p-4"
            onMouseEnter={() => setCursorVariant('text')}
            onMouseLeave={() => setCursorVariant('default')}>
            <span className="text-xs">null. (null)</span>
          </div>
        </div>

        {/* Second Row */}
        <div className="flex flex-col xl:flex-row justify-between w-full gap-4">
          <div className="bg-[#928DAB] text-[#1F1C2C] w-full xl:w-[930px] md:w-auto min-h-[580px] rounded-lg flex items-end p-4"
            onMouseEnter={() => setCursorVariant('text')}
            onMouseLeave={() => setCursorVariant('default')}>
            <span className="text-xs">null. (null)</span>
          </div>
          <div className="bg-[#928DAB] text-[#1F1C2C] w-full xl:w-[430px] md:w-auto min-h-[580px] rounded-lg flex items-end p-4"
            onMouseEnter={() => setCursorVariant('text')}
            onMouseLeave={() => setCursorVariant('default')}>
            <span className="text-xs">null. (null)</span>
          </div>
        </div>

        {/* Third Row */}
        <div className="flex flex-col xl:flex-row justify-between w-full gap-4">
          <div className="bg-[#928DAB] text-[#1F1C2C] w-full xl:w-[680px] md:w-auto min-h-[580px] rounded-lg flex items-end p-4"
            onMouseEnter={() => setCursorVariant('text')}
            onMouseLeave={() => setCursorVariant('default')}>
            <span className="text-xs">null. (null)</span>
          </div>
          <div className="bg-[#928DAB] text-[#1F1C2C] w-full xl:w-[680px] md:w-auto min-h-[580px] rounded-lg flex items-end p-4"
            onMouseEnter={() => setCursorVariant('text')}
            onMouseLeave={() => setCursorVariant('default')}>
            <span className="text-xs">null. (null)</span>
          </div>
        </div>

        {/* Button */}
        <div className="w-full flex justify-center mt-4">
          <button className="text-[#9f9fb7] border border-[#9f9fb7]/30 rounded-md px-3 sm:px-6 md:px-8 py-2 md:py-3 text-sm md:text-md hover:bg-[#9f9fb7]/10 transition-colors"
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