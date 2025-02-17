import React from 'react'
import { useCursor } from '../CursorContext';
import { ArrowUpRight } from 'lucide-react';
import Transition from '../Transition';
const Contact: React.FC = () => {
    const { setCursorVariant } = useCursor()
  return (
    <div className="flex-grow flex items-center justify-center">
      <div className="flex flex-col max-w-[450px] w-full mx-auto p-6">
        <div className="flex flex-row w-full justify-between items-center text-[44px] md:text-[50px] font-bold mb-8 gap-10">
          <div
            className="tracking-tight"
            onMouseEnter={() => setCursorVariant('text')}
            onMouseLeave={() => setCursorVariant('default')}
          >
            [ Contact ]
          </div>
          <div
            onMouseEnter={() => setCursorVariant('text')}
            onMouseLeave={() => setCursorVariant('default')}
          >
            [!]
          </div>
        </div>

        {[
          { name: 'Mail', href: 'mailto:naval.ashleyjames.redacto@gmail.com' },
          { name: 'Facebook', href: 'https://www.facebook.com/shlynavtiff/' },
          { name: 'Instagram', href: 'https://www.instagram.com/shlynav.tiff/' },
          { name: 'GitHub', href: 'https://github.com/shlynavtiff' },
        ].map((link) => (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            className="flex flex-row w-full justify-between items-center py-3 group transition-colors"
            onMouseEnter={() => setCursorVariant('text')}
            onMouseLeave={() => setCursorVariant('default')}
          >
            <div className="text-[clamp(1.5rem,5vw,3rem)] font-bold">{link.name}</div>
            <div className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
              <ArrowUpRight size={24} />
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

export default Transition(Contact)