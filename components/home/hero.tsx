"use client";
import { motion } from "framer-motion";
import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Center } from "@react-three/drei";
import { AvatarModel } from "./avatar-viewer";
import { useCursorContext } from "@/components/CursorContext";
import { useLenis } from "lenis/react";
import { TypewriterEffect } from "../ui/typewriter-effect";

export default function HeroSection() {
  const { animateCursor } = useCursorContext();
  const lenis = useLenis();

  const mouseEnterHandler = () => {
    animateCursor("buttonHover");
  };
  const mouseLeaveHandler = () => {
    animateCursor("cursorEnter");
  };

  return (
    <section
      id="hero"
      className="relative w-full h-screen overflow-hidden bg-black"
    >
      {/* 3D Canvas - Avatar in Center with hover effect */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <div className="w-full h-full max-w-2xl">
          <div className="absolute inset-0 z-10">
            {/* NAME TAG */}
            <motion.div
              className="pointer-events-none absolute top-[15%] left-1/2 -translate-x-1/2 z-20"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              <div className="relative flex flex-col items-center">
                {/* Tag box */}
                <div className="relative px-5 py-1.5 rounded-md bg-white backdrop-blur-sm">
                  {/* Glow */}

                  {/* Text */}
                  <TypewriterEffect
                    words={[
                      { text: "Fullstack Developer" },
                      { text: "Frontend Developer" },
                      { text: "TuananhDo" },
                    ]}
                  />
                </div>

                {/* Triangle pointer */}
                <div className="w-0 h-0 border-l-[8px] border-r-[8px] border-t-[10px] border-l-transparent border-r-transparent border-t-white"></div>
              </div>
            </motion.div>

            <Suspense
              fallback={
                <div className="flex items-center justify-center h-full text-white">
                  Loading...
                </div>
              }
            >
              <Canvas
                camera={{
                  position: [0, 1, 4],
                  fov: 40,
                }}
                // className='pt-20'
                gl={{ antialias: true }}
              >
                <color attach="background" args={["#000000"]} />
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1.2} />
                <pointLight
                  color={"#ffffff"}
                  position={[-5, 5, -5]}
                  intensity={0.6}
                />
                <pointLight position={[5, 2, 5]} intensity={0.4} />

                <Center>
                  <AvatarModel />
                </Center>

                <Environment preset="sunset" />
              </Canvas>
            </Suspense>
          </div>
        </div>
      </div>

      {/* Left Side Text - Frontend Developer with enhanced effects */}
      <motion.div
        className="absolute left-8 bottom-8 group z-20"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
      >
        <motion.h2
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          className="text-white text-6xl md:text-7xl lg:text-8xl font-bold leading-4 md:leading-10 lg:leading-20 relative"
          whileHover={{
            textShadow: "0 0 20px rgba(59, 130, 246, 0.8)",
          }}
        >
          Tuấn Anh
          <motion.span
            className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-blue-500 to-transparent"
            initial={{ width: 0 }}
            whileHover={{ width: "100%" }}
            transition={{ duration: 0.3 }}
          />
        </motion.h2>
      </motion.div>

      {/* Bottom Right - Scroll Indicator with pulse effect */}
      <motion.div
        className="absolute bottom-8 right-8 z-20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
      >
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <motion.button
            className="w-12 h-12 rounded-full border border-white bg-transparent flex items-center justify-center text-white hover:text-black group relative overflow-hidden"
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            whileHover={{
              backgroundColor: "#ffffff",
              borderColor: "#ffffff",
              boxShadow: "0 0 20px rgba(255, 255, 255, 0.8)",
            }}
            onClick={() =>
              lenis?.scrollTo("#works", { offset: 0, duration: 2 })
            }
            whileTap={{ scale: 0.9 }}
          >
            {/* Ripple effect on hover */}
            <motion.span
              className="absolute inset-0 rounded-full bg-white"
              initial={{ scale: 0, opacity: 0.5 }}
              whileHover={{
                scale: 2,
                opacity: 0,
                transition: { duration: 0.6 },
              }}
            />
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="transition-transform group-hover:translate-y-1 group-hover:text-black relative z-10"
            >
              <path
                d="M12 5 L12 19 M12 19 L7 14 M12 19 L17 14"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}
