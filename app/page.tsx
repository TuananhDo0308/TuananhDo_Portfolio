"use client";
import { CursorContextProvider } from "@/components/CursorContext";
import Cursor from "@/components/CustomCursorComp";
import HeroSection from "@/components/home/hero";
import WorkSection from "@/components/home/works";

export default function Home() {
  return (
    <>
      {/* Hero Section - Fullscreen 3D */}
      <HeroSection />

      <WorkSection columns={2} />

    </>
  );
}
