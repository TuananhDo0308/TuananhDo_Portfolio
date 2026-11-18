"use client";

import AboutHero from "@/components/about/profileHeader";
import Experience from "@/components/about/experiences";
import Bio from "@/components/about/bio";

export default function AboutPage() {
  return (
    <main className="bg-black min-h-screen text-white">
      <AboutHero />
      <Experience />
      <Bio />
    </main>
  );
}
