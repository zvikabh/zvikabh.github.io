'use client';

import { createContext, useState, useContext } from 'react';

const TitleContext = createContext();

export default function TitleProvider({ children }) {
  const [shortTitle, setShortTitle] = useState("");

  return (
    <TitleContext.Provider value={{ shortTitle, setShortTitle }}>
      {children}
    </TitleContext.Provider>
  );
}

export function useTitle() {
  const context = useContext(TitleContext);
  if (context === undefined) {
    throw new Error('useTitle must be used within a TitleProvider');
  }
  return context;
}
