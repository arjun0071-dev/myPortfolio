"use client";
import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";

export const LayoutTextFlip = ({
  text = "HI, I’M",
  words = ["Arjun", "Frontend Developer", "React Developer"],
  duration = 3000, // Slightly faster for better engagement
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, duration);

    return () => clearInterval(interval);
  }, [duration, words.length]);

  return (
    <div className="flex flex-col items-center text-center">
      {/* Static "HI, I'M" Text */}
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-xl sm:text-2xl font-medium tracking-[0.2em] text-purple-400/80 uppercase"
      >
        {text}
      </motion.span>

      {/* Flipping Words with Gradient */}
      <motion.span
        layout
        className="relative mt-4 text-3xl sm:text-3xl font-extrabold tracking-tighter"
      >
        <AnimatePresence mode="popLayout">
          <motion.span
            key={currentIndex}
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-block whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-violet-500 to-indigo-500 drop-shadow-[0_0_15px_rgba(168,85,247,0.3)]"
          >
            {words[currentIndex]}
          </motion.span>
        </AnimatePresence>
      </motion.span>
    </div>
  );
};