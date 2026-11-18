"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useCursorContext } from "@/components/CursorContext";
import { ArrowUpRight, MapPin, Award, GraduationCap, Code2 } from "lucide-react";

export default function AboutHero() {
  const { animateCursor } = useCursorContext();

  return (
    <section className="relative bg-black text-white pt-36 md:pt-44 pb-16 px-4 md:px-8">
      {/* Top Animated Border Line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="w-full h-px bg-white/10 origin-left mb-12"
      />

      <div className="mx-auto">
        {/* Section Index & Title */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="w-2 h-2 bg-neutral-400" />
            <span className="font-mono text-xs uppercase tracking-widest text-neutral-400">
              // 01. PROFILE & OVERVIEW
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onMouseEnter={() => animateCursor("textHover")}
            onMouseLeave={() => animateCursor("cursorEnter")}
            className="text-6xl sm:text-7xl md:text-8xl font-bold tracking-tight select-none"
          >
            Profile
          </motion.h1>
        </div>

        {/* Main Grid: Bio Info on Left, Sharp Portrait on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Side: Personal Info & Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 space-y-8"
          >
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                  Đỗ Trần Tuấn Anh
                </h2>
                <span className="px-2.5 py-1 text-xs font-mono uppercase tracking-wider border border-white/20 bg-white/[0.04] text-neutral-300">
                  Anh Do
                </span>
              </div>
              <p className="text-xl sm:text-2xl text-neutral-400 font-light">
                Frontend & Full-Stack Developer
              </p>
            </div>

            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed font-light max-w-2xl">
              Creative engineer dedicated to crafting high-performance web applications,
              real-time systems, and interactive digital interfaces. Bridging engineering rigor
              with thoughtful micro-interactions and modern AI tooling.
            </p>

            {/* Quick Credentials / Key Facts Matrix */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border border-white/10 bg-white/[0.02] p-6 divide-y sm:divide-y-0 sm:divide-x divide-white/10 font-mono text-xs">
              <div className="space-y-3 pt-2 sm:pt-0">
                <div className="flex items-center gap-2 text-neutral-500 uppercase tracking-wider">
                  <MapPin className="w-3.5 h-3.5 text-neutral-400" />
                  <span>Location</span>
                </div>
                <p className="text-neutral-200 font-sans text-sm font-semibold">
                  Ho Chi Minh City, Vietnam
                </p>
              </div>

              <div className="space-y-3 sm:pl-6 pt-4 sm:pt-0">
                <div className="flex items-center gap-2 text-neutral-500 uppercase tracking-wider">
                  <GraduationCap className="w-3.5 h-3.5 text-neutral-400" />
                  <span>Education</span>
                </div>
                <p className="text-neutral-200 font-sans text-sm font-semibold">
                  HCMC University of Education
                </p>
              </div>
            </div>

            {/* Research & Honors Badge */}
            <div className="flex items-start gap-3 border border-white/10 bg-white/[0.02] p-5">
              <Award className="w-5 h-5 text-neutral-400 shrink-0 mt-0.5" />
              <div>
                <span className="block text-xs font-mono text-neutral-500 uppercase tracking-widest mb-1">
                  HONORS & PUBLICATIONS
                </span>
                <p className="text-sm text-neutral-300 leading-relaxed">
                  Published author in the <span className="text-white font-medium">Asian Journal of Research in Computer Science (AJRCOS)</span>.
                  Awarded 3rd Prize at Ministry Level & Faculty 2nd Prize in Scientific Research.
                </p>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/projects"
                onMouseEnter={() => animateCursor("buttonHover")}
                onMouseLeave={() => animateCursor("cursorEnter")}
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 bg-white text-black font-semibold text-xs uppercase tracking-widest hover:bg-neutral-200 transition-colors border border-white"
              >
                <span>Explore Works</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>

              <Link
                href="/contact"
                onMouseEnter={() => animateCursor("buttonHover")}
                onMouseLeave={() => animateCursor("cursorEnter")}
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 bg-neutral-950 text-white font-semibold text-xs uppercase tracking-widest hover:bg-neutral-900 hover:border-white transition-all border border-white/20"
              >
                <span>Get In Touch</span>
                <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </Link>
            </div>
          </motion.div>

          {/* Right Side: Sharp Portrait Image (NO rounded corners) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div
              onMouseEnter={() => animateCursor("projectHover", "PROFILE")}
              onMouseLeave={() => animateCursor("cursorEnter")}
              className="group relative w-full max-w-md aspect-[4/5] border border-white/15 bg-neutral-950 overflow-hidden"
            >
              <Image
                src="/TuananhDo_Portfolio/images/profile.png"
                alt="Đỗ Trần Tuấn Anh"
                fill
                className="object-cover object-top grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                priority
              />

              {/* Subtle gradient vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

              {/* Corner Reticle & Metadata */}
              <div className="absolute top-3 left-3 px-2 py-1 bg-black/80 backdrop-blur-xs border border-white/15 font-mono text-[10px] text-neutral-400 uppercase tracking-wider">
                // FIG. 01 — ANH DO
              </div>

              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between font-mono text-[10px] text-neutral-400 uppercase tracking-wider">
                <span>DEVELOPER & CREATIVE</span>
                <span>HCMC, VN</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
