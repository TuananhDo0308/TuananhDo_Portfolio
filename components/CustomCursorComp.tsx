"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  AnimatePresence,
  type Variants,
} from "framer-motion";
import { useEffect, useState } from "react";
import { useCursorContext } from "../components/CursorContext";

function Cursor() {
  const { animateCursorVariant, cursorText, animateCursor } = useCursorContext();

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth fluid spring for the outer morphing shape
  const springConfig = { damping: 25, stiffness: 320, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const variants: Variants = {
    cursorEnter: {
      width: 32,
      height: 32,
      borderRadius: "50%",
      border: "1.5px solid rgba(255, 255, 255, 0.7)",
      backgroundColor: "rgba(255, 255, 255, 0)",
      boxShadow: "0 0 10px rgba(255, 255, 255, 0.08)",
      mixBlendMode: "normal" as const,
      rotate: 0,
      scale: 1,
      opacity: 1,
      transition: { type: "spring" as const, damping: 25, stiffness: 350 },
    },
    cursorLeave: {
      scale: 0,
      opacity: 0,
      transition: { duration: 0.15 },
    },
    buttonHover: {
      width: 52,
      height: 52,
      borderRadius: "50%",
      border: "0px solid transparent",
      backgroundColor: "#ffffff",
      boxShadow: "none",
      mixBlendMode: "difference" as const,
      rotate: 0,
      scale: 1.25,
      opacity: 1,
      transition: { type: "spring" as const, damping: 20, stiffness: 300 },
    },
    projectHover: {
      width: 86,
      height: 86,
      borderRadius: "50%",
      border: "1px solid rgba(255, 255, 255, 0.3)",
      backgroundColor: "#ffffff",
      boxShadow: "0 12px 35px rgba(0, 0, 0, 0.6)",
      mixBlendMode: "normal" as const,
      rotate: 0,
      scale: 1,
      opacity: 1,
      transition: { type: "spring" as const, damping: 22, stiffness: 280 },
    },
    avatarHover: {
      width: 74,
      height: 74,
      borderRadius: "50%",
      border: "2px dashed rgba(255, 255, 255, 0.85)",
      backgroundColor: "rgba(255, 255, 255, 0.12)",
      boxShadow: "0 0 20px rgba(255, 255, 255, 0.2)",
      mixBlendMode: "normal" as const,
      rotate: 0,
      scale: 1,
      opacity: 1,
      transition: { type: "spring" as const, damping: 20, stiffness: 300 },
    },
    tagHover: {
      width: 36,
      height: 36,
      borderRadius: "0px",
      border: "1.5px solid #ffffff",
      backgroundColor: "rgba(255, 255, 255, 0.15)",
      boxShadow: "0 0 12px rgba(255, 255, 255, 0.25)",
      mixBlendMode: "normal" as const,
      rotate: 45,
      scale: 1.15,
      opacity: 1,
      transition: { type: "spring" as const, damping: 22, stiffness: 320 },
    },
    textHover: {
      width: 4,
      height: 44,
      borderRadius: "2px",
      border: "0px solid transparent",
      backgroundColor: "#ffffff",
      boxShadow: "none",
      mixBlendMode: "difference" as const,
      rotate: 0,
      scale: 1,
      opacity: 1,
      transition: { type: "spring" as const, damping: 25, stiffness: 350 },
    },
    copyHover: {
      width: 78,
      height: 34,
      borderRadius: "9999px",
      border: "1px solid rgba(255, 255, 255, 0.4)",
      backgroundColor: "#ffffff",
      boxShadow: "0 8px 24px rgba(0, 0, 0, 0.4)",
      mixBlendMode: "normal" as const,
      rotate: 0,
      scale: 1,
      opacity: 1,
      transition: { type: "spring" as const, damping: 22, stiffness: 300 },
    },
    click: {
      scale: 0.85,
      transition: { duration: 0.08 },
    },
  };

  useEffect(() => {
    const mouseMoveHandler = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const mouseEnterHandler = () => {
      setIsVisible(true);
      if (animateCursorVariant === "cursorLeave") {
        animateCursor("cursorEnter");
      }
    };

    const mouseLeaveHandler = () => {
      setIsVisible(false);
      animateCursor("cursorLeave");
    };

    const mouseDownHandler = () => {
      setIsClicking(true);
    };

    const mouseUpHandler = () => {
      setIsClicking(false);
    };

    window.addEventListener("mousemove", mouseMoveHandler);
    document.addEventListener("mouseenter", mouseEnterHandler);
    document.addEventListener("mouseleave", mouseLeaveHandler);
    window.addEventListener("mousedown", mouseDownHandler);
    window.addEventListener("mouseup", mouseUpHandler);

    return () => {
      window.removeEventListener("mousemove", mouseMoveHandler);
      document.removeEventListener("mouseenter", mouseEnterHandler);
      document.removeEventListener("mouseleave", mouseLeaveHandler);
      window.removeEventListener("mousedown", mouseDownHandler);
      window.removeEventListener("mouseup", mouseUpHandler);
    };
  }, [animateCursor, animateCursorVariant, isVisible, mouseX, mouseY]);

  return (
    <>
      {/* Outer morphing cursor */}
      <motion.div
        className="cursor"
        variants={variants}
        animate={
          !isVisible
            ? "cursorLeave"
            : animateCursorVariant || "cursorEnter"
        }
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
          scale: isClicking ? 0.88 : 1,
        }}
      >
        <AnimatePresence mode="wait">
          {cursorText && (
            <motion.span
              key={cursorText}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              transition={{ duration: 0.15 }}
              className={`select-none pointer-events-none font-bold tracking-wider uppercase text-center ${
                animateCursorVariant === "projectHover"
                  ? "text-[11px] text-black font-extrabold flex items-center justify-center gap-1"
                  : animateCursorVariant === "avatarHover"
                  ? "text-[10px] font-mono text-white tracking-widest"
                  : animateCursorVariant === "copyHover"
                  ? "text-[10px] font-mono text-black font-semibold"
                  : "text-[10px] text-white"
              }`}
            >
              {cursorText}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Pinpoint Center Micro-Dot (Immediate tracking, active in neutral & tag states) */}
      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="fixed top-0 left-0 pointer-events-none z-[10000]"
        animate={{
          scale:
            !isVisible ||
            animateCursorVariant === "buttonHover" ||
            animateCursorVariant === "projectHover" ||
            animateCursorVariant === "avatarHover" ||
            animateCursorVariant === "textHover" ||
            animateCursorVariant === "copyHover" ||
            animateCursorVariant === "cursorLeave"
              ? 0
              : isClicking
              ? 0.7
              : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.12 }}
      >
        <div className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_6px_rgba(255,255,255,0.8)]" />
      </motion.div>
    </>
  );
}

export default Cursor;
