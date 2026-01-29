"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ProjectDetail as ProjectDetailType } from "@/lib/project";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface ProjectDetailProps {
  project: ProjectDetailType;
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <main className="bg-black text-white min-h-screen">
      {/* Header with back button */}

      {/* Hero Image */}
      <section className="w-full h-96 md:h-120 relative overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </motion.div>
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black" />
      </section>

      {/* Project Content */}
      <section className=" mx-auto px-8 py-20">
        {/* Title and Meta */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 bg-neutral-500 rounded-full" />
            <span className="text-sm font-semibold tracking-widest text-neutral-400 uppercase">
              {project.type}
            </span>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mb-4">{project.title}</h1>
          <p className="text-xl text-neutral-400 max-w-3xl">{project.description}</p>
        </motion.div>

        {/* Project Meta Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 pb-20 border-b border-neutral-800"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div>
            <p className="text-sm text-neutral-500 uppercase tracking-widest mb-2">Category</p>
            <p className="text-lg font-semibold">{project.category}</p>
          </div>
          <div>
            <p className="text-sm text-neutral-500 uppercase tracking-widest mb-2">Year</p>
            <p className="text-lg font-semibold">{project.year}</p>
          </div>
          {project.client && (
            <div>
              <p className="text-sm text-neutral-500 uppercase tracking-widest mb-2">Client</p>
              <p className="text-lg font-semibold">{project.client}</p>
            </div>
          )}
          <div>
            <p className="text-sm text-neutral-500 uppercase tracking-widest mb-2">Role</p>
            <p className="text-lg font-semibold">{project.role}</p>
          </div>
        </motion.div>

        {/* Challenge Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-6">The Challenge</h2>
          <p className="text-lg text-neutral-300 leading-relaxed max-w-3xl">
            {project.challenge}
          </p>
        </motion.div>

        {/* Solution Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-6">The Solution</h2>
          <p className="text-lg text-neutral-300 leading-relaxed max-w-3xl">
            {project.solution}
          </p>
        </motion.div>

        {/* Result Section */}
        <motion.div
          className="mb-20 p-8 bg-neutral-900 rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-6">The Result</h2>
          <p className="text-lg text-neutral-300 leading-relaxed">{project.result}</p>
        </motion.div>

        {/* Project Gallery */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-8">Project Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.images.map((image, index) => (
              <motion.div
                key={index}
                className="relative w-full aspect-video rounded-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${project.title} - Image ${index + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tags */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-lg font-semibold mb-4">Tags</h3>
          <div className="flex flex-wrap gap-3">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 bg-neutral-900 text-neutral-300 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Navigation */}
        <motion.div
          className="border-t border-neutral-800 pt-16 grid grid-cols-2 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {project.prevProject ? (
            <Link href={`/project/${project.prevProject}`}>
              <div className="group ">
                <p className="text-sm text-neutral-500 uppercase tracking-widest mb-2">
                  Previous Project
                </p>
                <div className="flex items-center gap-2 group-hover:text-neutral-300 transition-colors">
                  <ArrowLeft size={20} />
                  <span className="text-lg font-semibold">View Previous</span>
                </div>
              </div>
            </Link>
          ) : (
            <div />
          )}

          {project.nextProject ? (
            <Link href={`/project/${project.nextProject}`} className="text-right">
              <div className="group ">
                <p className="text-sm text-neutral-500 uppercase tracking-widest mb-2">
                  Next Project
                </p>
                <div className="flex items-center justify-end gap-2 group-hover:text-neutral-300 transition-colors">
                  <span className="text-lg font-semibold">View Next</span>
                  <ArrowRight size={20} />
                </div>
              </div>
            </Link>
          ) : (
            <div />
          )}
        </motion.div>
      </section>
    </main>
  );
}
