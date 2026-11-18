"use client";

import { motion } from "framer-motion";
import { useCursorContext } from "@/components/CursorContext";

export default function ContactPage() {
  const { animateCursor } = useCursorContext();

  return (
    <main className="bg-black min-h-screen px-4 md:px-8 flex flex-col items-start justify-center gap-10 pt-52 md:pt-80 pb-24 md:pb-40">
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="w-full bg-white/10 h-px origin-left"
      />
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        onMouseEnter={() => animateCursor("textHover")}
        onMouseLeave={() => animateCursor("cursorEnter")}
        className="text-6xl md:text-7xl font-bold select-none"
      >
        Get in touch ↓
      </motion.h1>
    </main>
  );
}
