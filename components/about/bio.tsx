"use client";

import { motion } from "framer-motion";
import { useCursorContext } from "@/components/CursorContext";
import { BookOpen, Sparkles, Terminal, Cpu } from "lucide-react";

export default function Bio() {
  const { animateCursor } = useCursorContext();

  const paragraphs = [
    "Tuấn Anh is a full-stack developer with a strong focus on modern web experiences, real-time systems, and interactive interfaces. He works across both frontend and backend, turning complex ideas into clean, high-performance products. With a deep interest in how technology and user experience intersect, he builds applications that are not only functional, but intuitive and engaging to use.",
    "His technical background spans React, Next.js, React Native, and .NET, along with real-time communication technologies such as WebRTC, PeerJS, and STOMP. He has worked on projects involving video calling systems, 3D web integration, custom UI interactions, and scalable backend services. Tuấn Anh enjoys solving architectural problems and optimizing systems so that performance, maintainability, and user experience grow together.",
    "Beyond traditional web development, he is especially interested in AI-powered products and conversational systems. He has explored building chatbot platforms similar to Tidio and applying Generative AI in practical contexts, including youth community initiatives and digital engagement campaigns. He sees AI not as a replacement for human creativity, but as a tool to amplify impact and accessibility.",
    "Driven by curiosity and a builder mindset, Tuấn Anh constantly experiments with new technologies, design patterns, and interaction models. Whether it's refining micro-interactions on the frontend or structuring backend pipelines, his goal is always the same: create digital products that feel smooth, thoughtful, and future-ready.",
  ];

  const technicalCompetencies = [
    "Next.js 16",
    "React 19",
    "TypeScript",
    "Tailwind CSS v4",
    "Three.js / R3F",
    "Model Context Protocol (MCP)",
    "Node.js / Bun",
    "Python",
    "WebRTC / PeerJS",
    "PostgreSQL",
    "Drizzle ORM",
    "Docker / AWS",
  ];

  const corePrinciples = [
    {
      index: "01",
      title: "Performance & Architecture",
      desc: "Fast load times, minimal bundle footprints, and clean code separation.",
    },
    {
      index: "02",
      title: "Tactile Micro-Interactions",
      desc: "Spring physics, custom cursor dynamics, and intuitive feedback.",
    },
    {
      index: "03",
      title: "Autonomous AI & MCP",
      desc: "Enabling agents to interact directly with calendars, tools, and developer workflows.",
    },
  ];

  return (
    <section className="py-20 px-4 md:px-8 text-white">
      <div className="mx-auto">
        {/* Section Header */}
        <div className="mb-12 pb-6 border-b border-white/10 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <BookOpen className="w-4 h-4 text-neutral-400" />
              <span className="font-mono text-xs uppercase tracking-widest text-neutral-400">
                // 03. BIOGRAPHY & PHILOSOPHY
              </span>
            </div>
            <h2
              onMouseEnter={() => animateCursor("textHover")}
              onMouseLeave={() => animateCursor("cursorEnter")}
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight select-none"
            >
              Biography
            </h2>
          </div>
          <span className="font-mono text-xs text-neutral-500 uppercase tracking-widest">
            ENGINEERING & MINDSET
          </span>
        </div>

        {/* 2-Column Layout: Narrative Paragraphs on Left, Stack & Principles on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Narrative Story */}
          <div className="lg:col-span-7 space-y-6">
            {paragraphs.map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`leading-relaxed font-light ${
                  index === 0
                    ? "text-lg sm:text-xl text-neutral-200"
                    : "text-base sm:text-lg text-neutral-400"
                }`}
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          {/* Right Column: Principles & Competencies Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 space-y-8"
          >
            {/* Core Principles Box */}
            <div className="border border-white/10 bg-white/[0.02] p-6 md:p-8 space-y-6">
              <div className="flex items-center gap-2 pb-4 border-b border-white/10">
                <Sparkles className="w-4 h-4 text-neutral-400" />
                <h3 className="font-mono text-xs uppercase tracking-widest text-neutral-300">
                  CORE ENGINEERING PRINCIPLES
                </h3>
              </div>

              <div className="space-y-6">
                {corePrinciples.map((item) => (
                  <div key={item.index} className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs text-neutral-500">
                        {item.index}.
                      </span>
                      <h4 className="text-base font-bold text-white">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-sm text-neutral-400 font-light pl-6 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Competencies Matrix */}
            <div className="border border-white/10 bg-white/[0.02] p-6 md:p-8 space-y-5">
              <div className="flex items-center gap-2 pb-4 border-b border-white/10">
                <Cpu className="w-4 h-4 text-neutral-400" />
                <h3 className="font-mono text-xs uppercase tracking-widest text-neutral-300">
                  TECHNICAL COMPETENCIES
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {technicalCompetencies.map((tech) => (
                  <span
                    key={tech}
                    onMouseEnter={() => animateCursor("tagHover")}
                    onMouseLeave={() => animateCursor("cursorEnter")}
                    className="px-3 py-1 text-xs font-mono uppercase tracking-wider border border-white/15 bg-white/[0.03] text-neutral-300 hover:border-white hover:text-white transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
