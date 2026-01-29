"use client"
import { useLenisRaf } from "@/hooks/useLenis";
import { CursorContextProvider } from "../CursorContext";
import Cursor from "../CustomCursorComp";
import Lenis from "../lenis";
import Header from "./header";
import Footer from "./footer";

export default function Layout({ children }: { children: React.ReactNode }) {
      useLenisRaf();

  return (
    <Lenis>
    <CursorContextProvider>
        <Cursor />
        <Header/>
      {children}
      <Footer/>
    </CursorContextProvider>
    </Lenis>
  );
}