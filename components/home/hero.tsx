"use client";
import { motion } from "framer-motion";
import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Center, ContactShadows } from "@react-three/drei";
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
      className="relative w-full max-w-[100vw] h-screen overflow-hidden bg-black"
    >
      {/* 3D Canvas - Avatar in Center with hover effect */}
      <div
        className="absolute inset-0 z-10 flex max-w-full items-center justify-center overflow-hidden"
        onMouseEnter={() => animateCursor("avatarHover", "POKE")}
        onMouseLeave={() => animateCursor("cursorEnter")}
      >
        <div className="relative h-full w-full max-w-md overflow-hidden md:max-w-2xl">
          <div className="absolute inset-0 z-10 overflow-hidden">
            {/* NAME TAG */}
            <motion.div
              className="pointer-events-none absolute top-[15%] left-1/2 -translate-x-1/2 z-20"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              <div className="relative flex flex-col items-center">
                {/* Tag box - frosted glassmorphism */}
                <div className="relative px-4 py-1.5 rounded-full bg-neutral-900/80 backdrop-blur-md border border-white/15 shadow-[0_4px_24px_rgba(0,0,0,0.5)] flex items-center">
                  <TypewriterEffect
                    words={[
                      { text: "Fullstack Developer" },
                      { text: "Frontend Developer" },
                      { text: "TuananhDo" },
                    ]}
                  />
                </div>

                {/* Triangle pointer */}
                <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-t-[8px] border-l-transparent border-r-transparent border-t-neutral-900/80"></div>
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
                gl={{ antialias: true }}
              >
                <color attach="background" args={["#000000"]} />
                <ambientLight intensity={0.7} />
                <directionalLight position={[6, 8, 5]} intensity={1.4} />
                <pointLight
                  color={"#ffd1b3"}
                  position={[-5, 4, 3]}
                  intensity={0.5}
                />
                {/* Clean neutral rim lights for avatar edge separation */}
                <directionalLight
                  position={[-4, 5, -5]}
                  intensity={1.2}
                  color="#ffffff"
                />
                <pointLight
                  position={[4, 2, -4]}
                  intensity={0.8}
                  color="#ffffff"
                />

                <Center>
                  <AvatarModel />
                </Center>

                <ContactShadows
                  position={[0, -0.95, 0]}
                  opacity={0.55}
                  scale={3.5}
                  blur={2}
                  far={2.5}
                  color="#000000"
                />

                <Environment preset="sunset" />
              </Canvas>
            </Suspense>
          </div>
        </div>
      </div>

      {/* Left Side Text - Name */}
      <motion.div
        className="absolute left-4 md:left-8 bottom-8 group z-20"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
      >
        <motion.h2
          onMouseEnter={() => animateCursor("textHover")}
          onMouseLeave={() => animateCursor("cursorEnter")}
          className="text-white text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-tight relative select-none"
          whileHover={{
            textShadow: "0 0 20px rgba(255, 255, 255, 0.4)",
          }}
        >
          Tuấn Anh
          <motion.span
            className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-white/60 to-transparent"
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
