"use client";

import { motion } from "framer-motion";
import { Code2, FileCode, Coffee, Palette, ArrowDownRight, Icon } from "lucide-react";
import Link from "next/link";

const stacks = [
  { name: "React", href: "https://reactjs.org/" },
  { name: "Next.js", href: "https://nextjs.org/" },
  { name: "Java Spring Boot", href: "https://spring.io/projects/spring-boot" },
  { name: "Tailwind CSS", href: "https://tailwindcss.com/" },
];

export default function Stack() {
  return (
    <section className="relative bg-black text-white py-24">
      <div className="mx-auto px-8">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="border-t border-white/10 p-8 w-full origin-left"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 py-40 items-center">
          {/* Left Side - Focus Label */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col items-start h-full justify-start"
          >
            <div className="relative">
              <h2 className="text-3xl lg:text-5xl font-medium">Focus <ArrowDownRight className="inline w-8 h-8" /></h2>
          
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-sm mt-2 text-gray-400"
            >
              Tech Stack
            </motion.p>
          </motion.div>

          {/* Right Side - Stack List */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-start justify-start"
          >
            <div className="space-y-6 w-full">
              {stacks.map((stack, index) => {
                return (
                  <motion.div
                    key={stack.name}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 10 }}
                    className="group flex items-center gap-4 cursor-default"
                  >
                    <Link href={stack.href} className="text-4xl lg:text-5xl font-bold text-white group-hover:text-neutral-300 transition-colors duration-300">
                      {stack.name}
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}