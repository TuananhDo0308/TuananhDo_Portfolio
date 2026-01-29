import { createContext, useState, useContext, ReactNode } from 'react';

type CursorVariant = 'cursorLeave' | 'buttonHover';

interface CursorContextType {
  animateCursorVariant: CursorVariant;
  animateCursor: (variant: CursorVariant) => void;
}

const CursorContext = createContext<CursorContextType | null>(null);

export const useCursorContext = () => {
  const ctx = useContext(CursorContext);
  if (!ctx) throw new Error('CursorContext not found');
  return ctx;
};

export const CursorContextProvider = ({ children }: { children: ReactNode }) => {
  const [animateCursorVariant, setAnimateCursorVariant] =
    useState<CursorVariant>('cursorLeave');

  const animateCursor = (variant: CursorVariant) => {
    setAnimateCursorVariant(variant);
  };

  return (
    <CursorContext.Provider value={{ animateCursorVariant, animateCursor }}>
      {children}
    </CursorContext.Provider>
  );
};
