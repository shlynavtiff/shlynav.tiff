'use client'

import { Link } from 'react-router-dom';
import { useCursor } from '../CursorContext';
import LocalTime from './LocalTime';

export default function NavBar() {

  const { setCursorVariant } = useCursor();

  return (
    <nav className="absolute top-20 z-20">
      <div className="container mx-auto px-4 py-4 flex justify-center">
        <ul className="flex space-x-8 font-bold text-sm flex-col gap-1">
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
          <LocalTime />
        </ul>

      </div>
    </nav>
  )
}

