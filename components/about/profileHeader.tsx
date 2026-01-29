"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="relative min-h-screen bg-black text-white">
      {/* Top Border Line */}
     

      {/* Main Content Container */}
      <div className="relative min-h-screen pt-80 flex flex-col">
        {/* Hero Title Section */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="w-full px-8 h-px bg-white/10 origin-left"
        />
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-5 pb-40 justify-start px-8">

          <div className="hidden md:block"/>
          <div className="hidden lg:block"/>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-7xl md:text-8xl font-medium"
          >
            Profile
          </motion.h1>
        </div>

        {/* Middle Border Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="w-full px-8  bg-white/10   h-px"
        />

        {/* Bottom Section with Info and Image */}
        <div className="relative grid grid-cols-1 lg:grid-cols-2 min-h-[50vh]">
          {/* Left Side - Experience Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex items-start justify-start px-8 py-10"
          >
            <h2 className="text-xl md:text-2xl font-light text-white/80">
              Experience
            </h2>
          </motion.div>

          {/* Right Side - Name, Title, and Image */}
          <div className="relative flex flex-col-reverse md:flex-row items-start justify-between px-8 py-10">
            {/* Name and Title */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="z-10"
            >
              <h3 className="text-base md:text-2xl font-medium mb-1">
                Anh Do Tran Tuan
              </h3>
              <p className="text-xl md:text-xl text-white/60">
                Frontend Developer
              </p>
            </motion.div>

            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="relative w-full aspect-square md:w-80 md:h-80 lg:w-96 lg:h-96"
            >
              <div className="absolute inset-0  overflow-hidden">
                <Image
                  src="/TuananhDo_Portfolio/images/profile.png"
                  alt="Profile"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              
              {/* Decorative gradient overlay */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500/20 via-transparent to-orange-500/20 mix-blend-overlay" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}