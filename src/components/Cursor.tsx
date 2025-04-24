'use client';

import React, { useEffect, useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { useCursor } from '../CursorContext';

const Cursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { cursorVariant } = useCursor();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const variants: Variants = {
    default: {
      x: mousePosition.x - 12,
      y: mousePosition.y - 12,
      height: 20,
      width: 20,
      backgroundColor: 'zinc',
      mixBlendMode: 'difference' as const,
      borderRadius: '50%',
    },
    text: {
      x: mousePosition.x - 17,
      y: mousePosition.y - 17,
      height: 40,
      width: 40,
      backgroundColor: 'var(--cursor-hover)',
      mixBlendMode: 'difference' as const,
      borderRadius: '50%',
    },
    linkHover: { // ✅ Added missing variant
      x: mousePosition.x - 15,
      y: mousePosition.y - 15,
      height: 30,
      width: 30,
      backgroundColor: 'red',
      mixBlendMode: 'difference' as const,
      borderRadius: '50%',
    }
  };


  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50"
      variants={variants}
      animate={cursorVariant}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        backgroundColor: 'white',
        pointerEvents: 'none',
        mixBlendMode: 'normal',
      }}
    />
  );
};

export default Cursor;
