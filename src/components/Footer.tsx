'use client'
import React from 'react'
import { useCursor } from '../CursorContext';
import Transition from '../Transition';

const Footer: React.FC = () => {
  const { setCursorVariant } = useCursor();

  return (
    <div className='flex justify-between items-end flex-row py-8 px-10'>
      {/* Left Side: Logo + Version */}
      <div 
        className='text-5xl font-bold tracking-extra-tighter flex flex-row items-baseline'
        onMouseEnter={() => setCursorVariant('text')}
        onMouseLeave={() => setCursorVariant('default')}
      >
        shlynav.tiff
        <span className='text-[11px] md:text-xs tracking-normal font-normal ml-1'>v1.1.0</span>
      </div>

      {/* Right Side: City Name */}
      <a
        href="https://en.wikipedia.org/wiki/Quezon_City#:~:text=Quezon%20City%20is%20known%20for,the%20%22City%20of%20Stars%22."
        target="_blank"
        className="text-[11px] md:text-xs flex items-baseline"
        onMouseEnter={() => setCursorVariant("text")}
        onMouseLeave={() => setCursorVariant("default")}
      >
        <span className="md:inline hidden">The City of Stars, PHL</span>
        <span className="md:hidden margin">TCOF, PHL</span>
      </a>
    </div>
  )
}

export default Transition(Footer);
