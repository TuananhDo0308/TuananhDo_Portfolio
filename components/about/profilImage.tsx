"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ProfileImage() {
  return (
    <motion.div
      className="relative w-full h-96 md:h-screen flex items-center justify-center overflow-hidden rounded-lg"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="relative w-full h-full bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop"
          alt="Profile"
          fill
          className="object-cover"
        />
      </div>
    </motion.div>
  );
}
