"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { motion } from "motion/react";
import { cn } from "../lib/utils";

export const StickyScroll = ({ content, contentClassName }) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  // UPDATED: Deep backgrounds to match your theme
  const backgroundColors = [
    "#06030e", // Your primary deep navy
    "#0d0725", // Subtle purple-tinted navy
    "#09021f", // Dark violet-black
  ];

  // UPDATED: High-end purple/indigo/fuchsia gradients
  const linearGradients = [
    "linear-gradient(to bottom right, #8b5cf6, #6366f1)", // violet to indigo
    "linear-gradient(to bottom right, #a855f7, #ec4899)", // purple to pink
    "linear-gradient(to bottom right, #6366f1, #3b82f6)", // indigo to blue
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0]
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="relative flex flex-col lg:flex-row h-[30rem] justify-center items-start space-x-10 overflow-y-auto rounded-xl p-8 transition-colors duration-700 custom-scrollbar"
      ref={ref}
    >
      {/* Text Content */}
      <div className="relative flex items-start px-4">
        <div className="max-w-2xl space-y-16">
          {content.map((item, index) => (
            <div key={item.title + index}>
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                className="text-3xl font-extrabold text-white tracking-tight drop-shadow-lg transition-opacity duration-500"
              >
                {/* Highlight active title with purple */}
                <span className={activeCard === index ? "text-purple-400" : "text-white"}>
                    {item.title}
                </span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                className="mt-6 max-w-md text-lg text-slate-300 leading-relaxed transition-opacity duration-500"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>

      {/* Sticky Card */}
      <div
        style={{ background: backgroundGradient }}
        className={cn(
          "sticky top-10 hidden h-72 w-96 overflow-hidden rounded-2xl shadow-[0_0_40px_rgba(139,92,246,0.2)] lg:block transition-all duration-500 hover:scale-105 border border-white/10",
          contentClassName
        )}
      >
        {content[activeCard]?.content ?? null}
      </div>

  
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(139, 92, 246, 0.3);
          border-radius: 10px;
        }
      `}</style>
    </motion.div>
  );
};