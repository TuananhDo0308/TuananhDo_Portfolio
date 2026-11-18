"use client";

import { createContext, useState, useContext, ReactNode } from "react";

interface CursorContextType {
  initialCursorVariant: string;
  setInitialCursorVariant: (variant: string) => void;
  animateCursorVariant: string;
  setAnimateCursorVariant: (variant: string) => void;
  cursorText: string;
  setCursorText: (text: string) => void;
  animateCursor: (variant: string, text?: string) => void;
}

const CursorContext = createContext<CursorContextType | undefined>(undefined);

export const useCursorContext = () => {
  const context = useContext(CursorContext);
  if (!context) {
    throw new Error("useCursorContext must be used within CursorContextProvider");
  }
  return context;
};

interface CursorContextProviderProps {
  children: ReactNode;
}

export const CursorContextProvider = ({ children }: CursorContextProviderProps) => {
  const [initialCursorVariant, setInitialCursorVariant] = useState<string>("cursorEnter");
  const [animateCursorVariant, setAnimateCursorVariant] = useState<string>("cursorEnter");
  const [cursorText, setCursorText] = useState<string>("");

  const animateCursor = (variant: string, text: string = "") => {
    setInitialCursorVariant(animateCursorVariant);
    setAnimateCursorVariant(variant);
    setCursorText(text);
  };

  return (
    <CursorContext.Provider
      value={{
        initialCursorVariant,
        setInitialCursorVariant,
        animateCursorVariant,
        setAnimateCursorVariant,
        cursorText,
        setCursorText,
        animateCursor,
      }}
    >
      {children}
    </CursorContext.Provider>
  );
};
