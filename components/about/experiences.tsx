"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const companies = [
  {
    id: 1,
    name: "Bosch Global Software Vietnam",
    role: "Frontend Developer",
    period: "2025",
    logo: "/TuananhDo_Portfolio/images/companies/bosch.png",
  },
  {
    id: 2,
    name: "Viqium",
    role: "Frontend Developer",
    period: "2024 - 2025",
    logo: "/TuananhDo_Portfolio/images/companies/viqium.png",
  },
  {
    id: 3,
    name: "SkyeEducation",
    role: "Frontend Developer",
    period: "2023 - 2024",
    logo: "/TuananhDo_Portfolio/images/companies/sky.png",
  },
];

export default function Experience() {
  return (
    <motion.div
      className="py-16 px-8  mx-auto"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="space-y-4">
        {companies.map((company, index) => (
          <motion.div
            key={company.id}
            className="flex items-center gap-6 p-4 rounded-lg hover:bg-white/5 transition-colors  group"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div
              className={`relative w-12 h-12 rounded-lg aspect-square overflow-hidden bg-neutral-900 `}
            >
              {/* Subtle gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>

              {/* Image */}
              <Image
                src={company.logo || "/placeholder.svg"}
                alt={company.name}
                fill
                className="object-cover transition-all duration-700 ease-out group-hover:scale-105 group-hover:brightness-110"
              />

              {/* Subtle border highlight */}
              <div className="absolute inset-0 border border-white/0 group-hover:border-white/10 transition-colors duration-500 "></div>
            </div>

            <div className="flex-1">
              <h3 className="text-white font-semibold text-lg">
                {company.name}
              </h3>
              <p className="text-gray-400 text-sm">{company.role}</p>
            </div>
            <p className="text-gray-500 text-sm whitespace-nowrap">
              {company.period}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
