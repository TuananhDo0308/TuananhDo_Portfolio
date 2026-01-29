"use client";

import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <main className="bg-black min-h-100 px-8 flex flex-col items-start justify-center gap-10 pt-80 pb-40">
  
      <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="w-full px-8  bg-white/10   h-px"
        />
 <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-6xl md:text-7xl font-bold"
          >
            Get in touch ↓


          </motion.h1>
  </main>
  );
}