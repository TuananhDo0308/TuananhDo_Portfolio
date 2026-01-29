"use client"
import { CursorContextProvider } from "../CursorContext";
import Cursor from "../CustomCursorComp";
import Header from "./header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <CursorContextProvider>
        <Cursor />
        <Header/>
      {children}
    </CursorContextProvider>
  );
}