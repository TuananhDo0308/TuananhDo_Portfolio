"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ProjectDetail as ProjectDetailType, projects } from "@/lib/project";
import { useCursorContext } from "@/components/CursorContext";
import {
  ArrowUpRight,
  ArrowLeft,
  ArrowRight,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Calendar,
  Layers,
  User,
  Briefcase,
  CheckCircle2,
} from "lucide-react";

interface ProjectDetailProps {
  project: ProjectDetailType;
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  const { animateCursor } = useCursorContext();
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  // Compute current index, previous and next projects
  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const totalProjects = projects.length;
  const prevProject =
    projects[(currentIndex - 1 + totalProjects) % totalProjects];
  const nextProject = projects[(currentIndex + 1) % totalProjects];

  // Keyboard navigation for image lightbox
  useEffect(() => {
    if (selectedImageIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedImageIndex(null);
      } else if (e.key === "ArrowRight") {
        setSelectedImageIndex((prev) =>
          prev !== null ? (prev + 1) % project.images.length : null
        );
      } else if (e.key === "ArrowLeft") {
        setSelectedImageIndex((prev) =>
          prev !== null
            ? (prev - 1 + project.images.length) % project.images.length
            : null
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImageIndex, project.images.length]);

  return (
    <main className="bg-black text-white min-h-screen pt-24 pb-20">
      {/* Top Breadcrumb Navigation Bar */}
      <div className="w-full border-b border-white/10 px-4 md:px-8 py-4 mb-8">
        <div className="mx-auto flex items-center justify-between">
          <Link
            href="/projects"
            onMouseEnter={() => animateCursor("buttonHover")}
            onMouseLeave={() => animateCursor("cursorEnter")}
            className="group inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform duration-300" />
            <span>All Projects</span>
          </Link>

          <div className="flex items-center gap-4 text-xs font-mono text-neutral-500 uppercase tracking-wider">
            <span className="hidden sm:inline">
              Project {String(currentIndex + 1).padStart(2, "0")} /{" "}
              {String(totalProjects).padStart(2, "0")}
            </span>
            <span className="px-2 py-0.5 border border-white/10 bg-white/[0.03] text-neutral-400">
              {project.type}
            </span>
          </div>
        </div>
      </div>

      {/* Project Hero Header */}
      <section className="px-4 md:px-8 mb-12">
        <div className="mx-auto">
          {/* Metadata chips */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-2 h-2 bg-neutral-400" />
            <span className="text-xs font-mono font-semibold tracking-widest text-neutral-400 uppercase">
              {project.category}
            </span>
            <span className="text-neutral-600 font-mono">•</span>
            <span className="text-xs font-mono text-neutral-400 uppercase">
              {project.year}
            </span>
          </motion.div>

          {/* Project Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onMouseEnter={() => animateCursor("textHover")}
            onMouseLeave={() => animateCursor("cursorEnter")}
            className="text-4xl sm:text-6xl md:text-8xl font-bold tracking-tight mb-6"
          >
            {project.title}
          </motion.h1>

          {/* Subtitle / Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-2xl text-neutral-400 max-w-4xl leading-relaxed mb-8"
          >
            {project.description}
          </motion.p>

          {/* Action Links & Buttons - Sharp Rectangles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => animateCursor("buttonHover")}
                onMouseLeave={() => animateCursor("cursorEnter")}
                className="group relative inline-flex items-center gap-2.5 px-7 py-3.5 bg-white text-black font-semibold text-xs uppercase tracking-widest hover:bg-neutral-200 transition-colors border border-white"
              >
                <span>Visit Live Site</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => animateCursor("buttonHover")}
                onMouseLeave={() => animateCursor("cursorEnter")}
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 bg-neutral-950 text-white font-semibold text-xs uppercase tracking-widest hover:bg-neutral-900 hover:border-white transition-all border border-white/20"
              >
                <span>View on GitHub</span>
                <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
            )}

            {!project.liveUrl && !project.githubUrl && project.link && (
              <a
                href={project.link.url}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => animateCursor("buttonHover")}
                onMouseLeave={() => animateCursor("cursorEnter")}
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 bg-white text-black font-semibold text-xs uppercase tracking-widest hover:bg-neutral-200 transition-colors border border-white"
              >
                <span>
                  {project.link.type === "Product"
                    ? "Visit Product"
                    : "View Repository"}
                </span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            )}
          </motion.div>
        </div>
      </section>

      {/* Main Hero Showcase Image - Sharp Frame */}
      <section className="w-full px-4 md:px-8 mb-16">
        <div className="mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden border border-white/10 bg-neutral-950"
          >
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-cover object-top"
              priority
            />
            {/* Subtle gradient vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

            {/* Sharp Corner Reticle Accents */}
            <div className="absolute top-3 left-3 font-mono text-[10px] text-white/40 tracking-widest uppercase">
              // FIG. 00 — HERO PREVIEW
            </div>
            <div className="absolute bottom-3 right-3 font-mono text-[10px] text-white/40 tracking-widest uppercase">
              {project.type}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Structured Meta Specifications Grid - Crisp Sharp Dividers */}
      <section className="px-4 md:px-8 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto grid grid-cols-2 lg:grid-cols-4 border-t border-b border-white/10 divide-y sm:divide-y-0 sm:divide-x divide-white/10"
        >
          {/* Role */}
          <div className="p-6 md:p-8 space-y-2">
            <div className="flex items-center gap-2 text-neutral-500 font-mono text-xs uppercase tracking-widest">
              <User className="w-3.5 h-3.5" />
              <span>Role</span>
            </div>
            <p className="text-base sm:text-lg font-semibold text-white">
              {project.role}
            </p>
          </div>

          {/* Client / Organization */}
          <div className="p-6 md:p-8 space-y-2">
            <div className="flex items-center gap-2 text-neutral-500 font-mono text-xs uppercase tracking-widest">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Client / Context</span>
            </div>
            <p className="text-base sm:text-lg font-semibold text-white">
              {project.client || "Independent Project"}
            </p>
          </div>

          {/* Year */}
          <div className="p-6 md:p-8 space-y-2">
            <div className="flex items-center gap-2 text-neutral-500 font-mono text-xs uppercase tracking-widest">
              <Calendar className="w-3.5 h-3.5" />
              <span>Year</span>
            </div>
            <p className="text-base sm:text-lg font-semibold text-white">
              {project.year}
            </p>
          </div>

          {/* Category */}
          <div className="p-6 md:p-8 space-y-2">
            <div className="flex items-center gap-2 text-neutral-500 font-mono text-xs uppercase tracking-widest">
              <Layers className="w-3.5 h-3.5" />
              <span>Category</span>
            </div>
            <p className="text-base sm:text-lg font-semibold text-white">
              {project.category}
            </p>
          </div>
        </motion.div>
      </section>

      {/* Narrative Section: The Challenge, The Solution, The Result */}
      <section className="px-4 md:px-8 mb-24">
        <div className="mx-auto space-y-20">
          {/* 01 / The Challenge */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-start"
          >
            <div className="md:col-span-4">
              <div className="font-mono text-xs text-neutral-500 uppercase tracking-widest mb-2">
                01 / OBJECTIVE & PROBLEM
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
                The Challenge
              </h2>
            </div>
            <div className="md:col-span-8">
              <p className="text-lg sm:text-xl text-neutral-300 leading-relaxed font-light">
                {project.challenge}
              </p>
            </div>
          </motion.div>

          <div className="w-full h-px bg-white/10" />

          {/* 02 / The Solution */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-start"
          >
            <div className="md:col-span-4">
              <div className="font-mono text-xs text-neutral-500 uppercase tracking-widest mb-2">
                02 / ARCHITECTURE & EXECUTION
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
                The Solution
              </h2>
            </div>
            <div className="md:col-span-8">
              <p className="text-lg sm:text-xl text-neutral-300 leading-relaxed font-light">
                {project.solution}
              </p>
            </div>
          </motion.div>

          <div className="w-full h-px bg-white/10" />

          {/* 03 / The Result - Sharp Editorial Card (NO rounded corners) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="border border-white/15 bg-white/[0.02] p-8 md:p-12 relative overflow-hidden"
          >
            <div className="flex items-center gap-2 mb-4 font-mono text-xs text-neutral-400 uppercase tracking-widest">
              <CheckCircle2 className="w-4 h-4 text-white" />
              <span>03 / KEY OUTCOMES & IMPACT</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 tracking-tight">
              The Result
            </h2>
            <p className="text-lg sm:text-xl text-neutral-300 leading-relaxed max-w-4xl font-light">
              {project.result}
            </p>

            {/* Corner accent marker */}
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-white/40 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-white/40 pointer-events-none" />
          </motion.div>
        </div>
      </section>

      {/* Tech Stack & Tags Section - Sharp Rectangular Badges */}
      {project.tags && project.tags.length > 0 && (
        <section className="px-4 md:px-8 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto"
          >
            <div className="font-mono text-xs text-neutral-500 uppercase tracking-widest mb-6">
              04 / TECHNOLOGIES & TOOLS
            </div>
            <div className="flex flex-wrap gap-2.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  onMouseEnter={() => animateCursor("tagHover")}
                  onMouseLeave={() => animateCursor("cursorEnter")}
                  className="px-4 py-2 border border-white/15 bg-white/[0.03] text-neutral-300 hover:border-white hover:text-white hover:bg-white/[0.08] transition-all text-xs font-mono uppercase tracking-wider"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </section>
      )}

      {/* Project Gallery - Interactive Sharp Frames */}
      {project.images && project.images.length > 0 && (
        <section className="px-4 md:px-8 mb-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto"
          >
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
              <div className="font-mono text-xs text-neutral-500 uppercase tracking-widest">
                05 / PROJECT GALLERY ({project.images.length})
              </div>
              <div className="text-xs font-mono text-neutral-400 hidden sm:block">
                CLICK TO EXPAND HIGH-RES
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.images.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => setSelectedImageIndex(index)}
                  onMouseEnter={() =>
                    animateCursor("projectHover", "EXPAND ⤢")
                  }
                  onMouseLeave={() => animateCursor("cursorEnter")}
                  className="group relative aspect-video w-full overflow-hidden border border-white/10 bg-neutral-950 cursor-pointer"
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${project.title} - Showcase ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="px-4 py-2 border border-white/40 bg-black/70 backdrop-blur-sm text-xs font-mono uppercase tracking-widest flex items-center gap-2">
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>View Fullscreen</span>
                    </div>
                  </div>

                  {/* Figure label badge */}
                  <div className="absolute top-3 left-3 px-2 py-1 bg-black/80 backdrop-blur-xs border border-white/10 font-mono text-[10px] text-neutral-400 uppercase tracking-wider">
                    FIG. {String(index + 1).padStart(2, "0")}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
      )}

      {/* Next / Previous Project Navigation - Sharp Split Box */}
      <section className="px-4 md:px-8">
        <div className="mx-auto border border-white/10 divide-y md:divide-y-0 md:divide-x divide-white/10 grid grid-cols-1 md:grid-cols-2">
          {/* Previous Project Link */}
          <Link
            href={`/projects/${prevProject.slug}`}
            onMouseEnter={() =>
              animateCursor("projectHover", "PREV ↖")
            }
            onMouseLeave={() => animateCursor("cursorEnter")}
            className="group block p-8 md:p-12 hover:bg-white/[0.02] transition-colors relative"
          >
            <div className="flex items-center gap-2 text-xs font-mono text-neutral-500 uppercase tracking-widest mb-3">
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
              <span>Previous Project</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-neutral-200 group-hover:text-white transition-colors mb-2">
              {prevProject.title}
            </h3>
            <p className="text-xs font-mono text-neutral-500 uppercase tracking-wider">
              {prevProject.category} • {prevProject.year}
            </p>
          </Link>

          {/* Next Project Link */}
          <Link
            href={`/projects/${nextProject.slug}`}
            onMouseEnter={() =>
              animateCursor("projectHover", "NEXT ↗")
            }
            onMouseLeave={() => animateCursor("cursorEnter")}
            className="group block p-8 md:p-12 hover:bg-white/[0.02] transition-colors relative text-left md:text-right"
          >
            <div className="flex items-center md:justify-end gap-2 text-xs font-mono text-neutral-500 uppercase tracking-widest mb-3">
              <span>Next Project</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-neutral-200 group-hover:text-white transition-colors mb-2">
              {nextProject.title}
            </h3>
            <p className="text-xs font-mono text-neutral-500 uppercase tracking-wider">
              {nextProject.category} • {nextProject.year}
            </p>
          </Link>
        </div>
      </section>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 md:p-8"
          >
            {/* Modal Header Bar */}
            <div className="flex items-center justify-between w-full border-b border-white/15 pb-4">
              <div className="font-mono text-xs uppercase tracking-widest text-neutral-400">
                {project.title} — IMAGE{" "}
                {String(selectedImageIndex + 1).padStart(2, "0")} /{" "}
                {String(project.images.length).padStart(2, "0")}
              </div>
              <button
                type="button"
                onClick={() => setSelectedImageIndex(null)}
                onMouseEnter={() => animateCursor("buttonHover")}
                onMouseLeave={() => animateCursor("cursorEnter")}
                className="flex items-center gap-2 px-3 py-1.5 border border-white/20 hover:border-white text-xs font-mono uppercase tracking-wider text-neutral-300 hover:text-white transition-all bg-white/[0.05]"
              >
                <span>Close (Esc)</span>
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Center Image Viewport */}
            <div className="relative w-full flex-1 my-4 flex items-center justify-center overflow-hidden">
              <div className="relative w-full h-full max-w-6xl max-h-[80vh] border border-white/10 bg-black">
                <Image
                  src={
                    project.images[selectedImageIndex] || "/placeholder.svg"
                  }
                  alt={`${project.title} - Fullscreen View`}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Prev Image Button */}
              {project.images.length > 1 && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImageIndex((prev) =>
                      prev !== null
                        ? (prev - 1 + project.images.length) %
                          project.images.length
                        : null
                    );
                  }}
                  onMouseEnter={() => animateCursor("buttonHover")}
                  onMouseLeave={() => animateCursor("cursorEnter")}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/80 border border-white/20 hover:border-white text-white transition-all"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
              )}

              {/* Next Image Button */}
              {project.images.length > 1 && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImageIndex((prev) =>
                      prev !== null
                        ? (prev + 1) % project.images.length
                        : null
                    );
                  }}
                  onMouseEnter={() => animateCursor("buttonHover")}
                  onMouseLeave={() => animateCursor("cursorEnter")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/80 border border-white/20 hover:border-white text-white transition-all"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              )}
            </div>

            {/* Modal Footer Bar */}
            <div className="flex items-center justify-between w-full border-t border-white/15 pt-4 text-xs font-mono text-neutral-500">
              <div>USE LEFT/RIGHT ARROWS TO NAVIGATE</div>
              <div>PRESS ESC TO EXIT</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
