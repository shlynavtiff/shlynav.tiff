'use client'
import React from 'react'
import { useCursor } from '../CursorContext';
import Transition from '../Transition';

const Footer: React.FC = () => {
  const { setCursorVariant } = useCursor();

  return (
    <div className='flex justify-between items-end flex-row py-8 px-10'>
      <div
        className='flex items-end text-[40px] font-extrabold tracking-extra-tighter'
        onMouseEnter={() => setCursorVariant('text')}
        onMouseLeave={() => setCursorVariant('default')}
      >
        <span className='leading-none'>shlynav.tiff</span>
        <span className='text-[11px] md:text-xs tracking-normal font-normal ml-1 self-end mb-1'>
          v1.2.4
        </span>
      </div>

      <a
        href="https://en.wikipedia.org/wiki/Quezon_City#:~:text=Quezon%20City%20is%20known%20for,the%20%22City%20of%20Stars%22."
        target="_blank"
        className="text-[11px] md:text-xs flex items-end"
        onMouseEnter={() => setCursorVariant("text")}
        onMouseLeave={() => setCursorVariant("default")}
      >
        <span className="md:inline hidden">The City of Stars, PHL</span>
        <span className="md:hidden inline">TCOS, PHL</span>
      </a>
    </div>
  )
}

export default Transition(Footer);
