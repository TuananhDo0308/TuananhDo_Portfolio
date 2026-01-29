"use client";

import ProfileHeader from "@/components/about/profileHeader";
import Experience from "@/components/about/experiences";
import Bio from "@/components/about/bio";
import Gallery from "@/components/about/gallery";
import AboutHero from "@/components/about/profileHeader";

export default function AboutPage() {
  return (
    <main className="bg-black min-h-screen">
      <AboutHero />
      
        <Experience />

      <Bio />
    </main>
  );
}
