'use client'

import { Link } from 'react-router-dom';
import { useCursor } from '../CursorContext';

export default function NavBar() {

  const { setCursorVariant } = useCursor();

  return (
    <nav className="absolute top-20 z-20">
      <div className="container mx-auto px-4 py-4 flex justify-center">
        <ul className="flex space-x-8 font-bold text-xs flex-col gap-2">
          <li>
            <Link to="/" className=" "
              onMouseEnter={() => setCursorVariant('text')}
              onMouseLeave={() => setCursorVariant('default')}
            >
              home.
            </Link>
          </li>
          <li>
            <Link to="/about" className=" "
              onMouseEnter={() => setCursorVariant('text')}
              onMouseLeave={() => setCursorVariant('default')}>
              about.
            </Link>
          </li>
          <li>
            <Link to="/contact" className=" "
              onMouseEnter={() => setCursorVariant('text')}
              onMouseLeave={() => setCursorVariant('default')}>
              say hello.
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

