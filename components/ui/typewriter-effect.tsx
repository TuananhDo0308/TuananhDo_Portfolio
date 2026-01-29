"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const TypewriterEffect = ({
  words,
  className,
  cursorClassName,
}: {
  words: { text: string; className?: string }[];
  className?: string;
  cursorClassName?: string;
}) => {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState<string[]>([]);
  const [isDeleting, setIsDeleting] = useState(false);

  const currentWord = words[wordIndex].text;

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayed.length < currentWord.length) {
      // typing
      timeout = setTimeout(() => {
setDisplayed(
  Array.from(currentWord.slice(0, displayed.length + 1)).map((c) =>
    c === " " ? "\u00A0" : c
  )
);      }, 120);
    } else if (!isDeleting && displayed.length === currentWord.length) {
      // pause before deleting
      timeout = setTimeout(() => setIsDeleting(true), 800);
    } else if (isDeleting && displayed.length > 0) {
      // deleting
      timeout = setTimeout(() => {
        setDisplayed(currentWord.slice(0, displayed.length - 1).split(""));
      }, 40);
    } else if (isDeleting && displayed.length === 0) {
      // next word
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, currentWord, words.length]);

  return (
    <div className={cn("text-base text-center", className)}>
      <div className="inline-flex tracking-[-0.03em]">
        {displayed.map((char, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1}}
            transition={{ duration: 0.15 }}
            className={cn(
              "text-black font-bold",
              words[wordIndex].className
            )}
          >
            {char}
          </motion.span>
        ))}
      </div>

      {/* blinking cursor */}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 1, repeat: Infinity }}
        className={cn(
          "inline-block ml-1 rounded-sm w-[3px] h-4 bg-blue-500",
          cursorClassName
        )}
      />
    </div>
  );
};
