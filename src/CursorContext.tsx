'use client';

import React, { createContext, useContext, useState } from 'react';

interface CursorContextProps {
  cursorVariant: 'default' | 'linkHover' | 'text'; // ✅ Added 'text'
  setCursorVariant: (variant: 'default' | 'linkHover' | 'text') => void;
}


const CursorContext = createContext<CursorContextProps | undefined>(undefined);

export const CursorProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  
  const [cursorVariant, setCursorVariant] = useState<'default' | 'linkHover' | 'text'>('default');


  return (
    <CursorContext.Provider value={{ cursorVariant, setCursorVariant }}>
      {children}
    </CursorContext.Provider>
  );
};

export const useCursor = () => {
  const context = useContext(CursorContext);
  if (!context) {
    throw new Error('useCursor must be used within a CursorProvider');
  }
  return context;
};
