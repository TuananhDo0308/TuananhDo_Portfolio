"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useCursorContext } from "../CursorContext";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { projects } from "@/lib/project";

export default function Works({ 
  columns = 3, 
  isHome = false 
}: { 
  columns?: number;
  isHome?: boolean;
}) {
  // Limit to 6 projects if isHome is true
  const displayedProjects = isHome ? projects.slice(0, 6) : projects;

  return (
    <section
      id="works"
      className="relative w-full bg-black text-white min-h-screen flex flex-col py-40 px-8"
    >
      {/* Section Header */}
      <div className="mx-auto w-full flex justify-between items-start mb-16">
        <motion.h1
          className="text-7xl md:text-8xl font-bold"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h1>
        <motion.div
          className="text-5xl md:text-7xl font-light text-white/30"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {isHome ? `${displayedProjects.length}/${projects.length}` : projects.length}
        </motion.div>
      </div>

      {/* Works Grid */}
      <div
        className={`mx-auto w-full grid grid-cols-1 gap-8 ${
          columns === 2 ? "md:grid-cols-2" : "md:grid-cols-3"
        }`}
      >
        {displayedProjects.map((work, index) => (
          <Link href={`/projects/${work.id}`} key={work.id}>
            <motion.div
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -8,
                transition: {
                  duration: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                },
              }}
            >
              {/* Work Type Badge */}
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 bg-neutral-500 rounded-full group-hover:bg-white transition-colors duration-300"></div>
                <span className="text-xs font-semibold tracking-widest text-neutral-400 uppercase group-hover:text-neutral-200 transition-colors duration-300">
                  {work.type}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <div className="mb-4">
                  <h3 className="text-xl font-bold mb-1 group-hover:text-white transition-colors duration-300">
                    {work.title}
                  </h3>
                  <p className="text-sm text-neutral-500 group-hover:text-neutral-300 transition-colors duration-300">
                    {work.description}
                  </p>
                </div>
                <ArrowUpRight
                  className="
                    mb-4
                    text-neutral-500 group-hover:text-white
                    transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)]
                    opacity-0 
                    -translate-x-3 translate-y-3
                    group-hover:opacity-100 
                    group-hover:translate-x-0 
                    group-hover:translate-y-0
                  "
                />
              </div>

              {/* Work Image with Overlay */}
              <div
                className={`relative w-full ${columns === 2 ? "aspect-video" : "aspect-square"} overflow-hidden bg-neutral-900 `}
              >
                {/* Subtle gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>

                {/* Image */}
                <Image
                  src={work.image || "/placeholder.svg"}
                  alt={work.title}
                  fill
                  className="object-cover transition-all duration-700 ease-out group-hover:scale-105 group-hover:brightness-110"
                />

                {/* Subtle border highlight */}
                <div className="absolute inset-0 border border-white/0 group-hover:border-white/10 transition-colors duration-500 "></div>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>

      {/* View All Projects Button - Only show on home page */}
      {isHome && projects.length > 6 && (
        <motion.div
          className="mx-auto mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link href="/projects">
            <motion.button
              className="group relative px-8 py-4 bg-white text-black font-semibold rounded-full overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Background animation on hover */}
              <span className="absolute inset-0 bg-neutral-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left"></span>
              
              {/* Button content */}
              <span className="relative flex items-center gap-2 group-hover:text-white transition-colors duration-300">
                View All Projects
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </motion.button>
          </Link>
        </motion.div>
      )}
    </section>
  );
}