"use client";

import Image from "next/image";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import { useCursorContext } from "../CursorContext";
import { useEffect, useState } from "react";

export default function Header() {
  const { animateCursor } = useCursorContext();
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      setIsScrolled(latest > 50);
    });
    return () => unsubscribe();
  }, [scrollY]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const mouseEnterHandler = () => {
    animateCursor("buttonHover");
  };
  const mouseLeaveHandler = () => {
    animateCursor("cursorLeave");
  };

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#works", label: "Works" },
    { href: "#contact", label: "Contact" },
  ];

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 w-full px-8 py-5 text-white flex justify-between bg-black items-center z-50 transition-all duration-300"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Logo with subtle hover effect */}
        <motion.div
          className="w-10 h-10 flex items-center justify-center relative z-50 "
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          <Image
            src="/Applogo.png"
            alt="Logo"
            width={40}
            height={40}
            className="w-8 h-8"
          />
        </motion.div>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.href}
              href={link.href}
              className="text-lg relative group "
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: index * 0.1,
                duration: 0.3,
              }}
            >
              <span className="relative z-10 transition-colors duration-200 text-white/50 hover:text-white">
                {link.label}
              </span>
            </motion.a>
          ))}
        </nav>

        {/* Hamburger Menu Button - Mobile Only */}
        <motion.button
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          className="md:hidden relative z-50 w-10 h-10 group flex items-center justify-center "
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileTap={{ scale: 0.9 }}
          aria-label="Toggle menu"
        >
          <div className="relative w-6 h-6 ">
            {/* Line 1 - TOP */}
            <motion.span
              className="absolute w-6 h-0.5 bg-white/50 group-hover:bg-white rounded-full"
              animate={
                isMenuOpen ? { y: -14, opacity: 0 } : { y: 0, opacity: 1 }
              }
              transition={{ duration: 0.3 }}
            />

            {/* Line 2 - MIDDLE TOP */}
            <motion.span
              className="absolute w-6 h-0.5 bg-white/50 group-hover:bg-white rounded-full"
              animate={isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 6 }}
              transition={{ duration: 0.3 }}
            />

            {/* Line 3 - MIDDLE BOTTOM */}
            <motion.span
              className="absolute w-6 h-0.5 bg-white/50 group-hover:bg-white rounded-full"
              animate={
                isMenuOpen ? { rotate: -45, y: 8 } : { rotate: 0, y: 12 }
              }
              transition={{ duration: 0.3 }}
            />

            {/* Line 4 - BOTTOM */}
            <motion.span
              className="absolute w-6 h-0.5 bg-white/50 group-hover:bg-white rounded-full"
              animate={
                isMenuOpen ? { y: 22, opacity: 0 } : { y: 18, opacity: 1 }
              }
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.button>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-black z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.nav
              className="flex flex-col items-center justify-center h-full gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="text-4xl font-bold text-white/50 hover:text-white transition-colors relative overflow-hidden"
                  onClick={handleLinkClick}
                  onMouseEnter={mouseEnterHandler}
                  onMouseLeave={mouseLeaveHandler}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.3,
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.label}

                  {/* Underline effect */}
                  <motion.span
                    className="absolute bottom-0 left-0 w-full h-1 bg-blue-500"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}

              {/* Social Links or Extra Info (optional) */}
              <motion.div
                className="absolute bottom-10 flex gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <span className="text-white/30 text-sm">© 2026 Tuan Anh</span>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
