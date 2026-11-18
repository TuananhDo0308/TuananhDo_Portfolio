"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useCursorContext } from "@/components/CursorContext";
import { Briefcase, Calendar, ArrowUpRight } from "lucide-react";

const companies = [
  {
    id: 1,
    name: "Bosch Global Software Vietnam",
    role: "Frontend Developer",
    period: "2025",
    logo: "/TuananhDo_Portfolio/images/companies/bosch.png",
    description:
      "Engineered a responsive event management web application and CMS with integrated chatbot and Azure SSO authentication, adhering to strict corporate design guidelines in an Agile environment.",
    skills: ["React", "Tailwind CSS", "Azure SSO", "Agile", "Chatbot Integration"],
  },
  {
    id: 2,
    name: "Viqium AI",
    role: "Frontend Developer",
    period: "2024 - 2025",
    logo: "/TuananhDo_Portfolio/images/companies/viqium.png",
    description:
      "Developed an AI-driven e-commerce chatbot platform frontend from scratch using Next.js. Authored custom embeddable JavaScript code allowing seamless multi-platform third-party website integrations.",
    skills: ["Next.js", "TypeScript", "Tailwind CSS", "Redux Toolkit", "NextAuth"],
  },
  {
    id: 3,
    name: "SkyeEducation",
    role: "Frontend Developer",
    period: "2023 - 2024",
    logo: "/TuananhDo_Portfolio/images/companies/sky.png",
    description:
      "Designed interactive UI in Figma and developed the platform using Next.js and Framer Motion. Configured automated CI/CD pipelines with GitHub Actions, SonarQube, and Docker deployment on AWS ECS.",
    skills: ["Next.js", "Framer Motion", "Docker", "AWS ECS", "CI/CD"],
  },
];

export default function Experience() {
  const { animateCursor } = useCursorContext();

  return (
    <section className="py-20 px-4 md:px-8 text-white">
      <div className="mx-auto">
        {/* Section Header */}
        <div className="mb-12 pb-6 border-b border-white/10 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Briefcase className="w-4 h-4 text-neutral-400" />
              <span className="font-mono text-xs uppercase tracking-widest text-neutral-400">
                // 02. PROFESSIONAL EXPERIENCE
              </span>
            </div>
            <h2
              onMouseEnter={() => animateCursor("textHover")}
              onMouseLeave={() => animateCursor("cursorEnter")}
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight select-none"
            >
              Experience
            </h2>
          </div>
          <span className="font-mono text-xs text-neutral-500 uppercase tracking-widest">
            {companies.length} ORGANIZATIONS & TEAMS
          </span>
        </div>

        {/* Experience List - Sharp Cards (NO rounded corners) */}
        <div className="space-y-6">
          {companies.map((company, index) => (
            <motion.div
              key={company.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => animateCursor("buttonHover")}
              onMouseLeave={() => animateCursor("cursorEnter")}
              className="group border border-white/10 bg-white/[0.02] hover:border-white/30 hover:bg-white/[0.04] p-6 md:p-8 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                {/* Left: Company Logo & Details */}
                <div className="flex items-start gap-5">
                  {/* Logo Frame - Sharp Square */}
                  <div className="relative w-14 h-14 shrink-0 border border-white/15 bg-neutral-900 overflow-hidden">
                    <Image
                      src={company.logo || "/placeholder.svg"}
                      alt={company.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-white transition-colors">
                      {company.name}
                    </h3>
                    <p className="text-sm font-medium text-neutral-400">
                      {company.role}
                    </p>
                  </div>
                </div>

                {/* Right: Period Badge */}
                <div className="flex items-center gap-2 self-start font-mono text-xs text-neutral-400 px-3 py-1.5 border border-white/15 bg-white/[0.03] uppercase tracking-wider">
                  <Calendar className="w-3.5 h-3.5 text-neutral-500" />
                  <span>{company.period}</span>
                </div>
              </div>

              {/* Company Description */}
              <p className="mt-5 text-sm sm:text-base text-neutral-300 leading-relaxed font-light max-w-4xl">
                {company.description}
              </p>

              {/* Skills Tags - Sharp Badges */}
              <div className="flex flex-wrap gap-2 mt-6 pt-5 border-t border-white/10">
                {company.skills.map((skill) => (
                  <span
                    key={skill}
                    onMouseEnter={(e) => {
                      e.stopPropagation();
                      animateCursor("tagHover");
                    }}
                    onMouseLeave={(e) => {
                      e.stopPropagation();
                      animateCursor("buttonHover");
                    }}
                    className="px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider border border-white/10 bg-white/[0.02] text-neutral-400 group-hover:border-white/20 group-hover:text-neutral-300 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
