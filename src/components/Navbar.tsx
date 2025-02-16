'use client'

import { Link } from 'react-router-dom';
import { useCursor } from '../CursorContext';

export default function NavBar() {

    const { setCursorVariant } = useCursor();

    return (
      <nav className="absolute top-0 left-0 right-0 z-20">
        <div className="container mx-auto px-4 py-4 flex justify-center">
          <ul className="flex space-x-8 font-bold text-xs">
                <li>
                <Link to="/" className=" "
                onMouseEnter={() => setCursorVariant('text')}
                onMouseLeave={() => setCursorVariant('default')}
                >
                    Home
                </Link>
                </li>
                <li>
                <Link to="/about" className=" "
                onMouseEnter={() => setCursorVariant('text')}
                onMouseLeave={() => setCursorVariant('default')}>
                    About
                </Link>
                </li>
                <li>
                <Link to="/contact" className=" "
                onMouseEnter={() => setCursorVariant('text')}
                onMouseLeave={() => setCursorVariant('default')}>
                    Contact
                </Link>
                </li>
          </ul>
        </div>
      </nav>
    )
  }
  
  