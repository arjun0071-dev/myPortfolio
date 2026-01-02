"use client";
import { useScroll, useTransform, motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

export const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full font-sans md:px-10"
      style={{ backgroundColor: "#06030e" }} // Matches the rest of your site
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white max-w-4xl">
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">Education Journey</span>
        </h2>

        <p className="mt-4 text-sm md:text-base font-normal leading-relaxed text-gray-400 max-w-md">
          A timeline of my academic growth, learning milestones, and the skills I’ve
          developed along the way.
        </p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div key={index} className="flex justify-start pt-10 md:pt-40 md:gap-10">
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
            
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-[#0d0725] border border-purple-500/20 flex items-center justify-center shadow-[0_0_15px_rgba(168,85,247,0.2)]">
                <div className="h-4 w-4 rounded-full bg-purple-500 border border-purple-400 shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-3xl font-bold text-gray-700 dark:text-gray-800 transition-colors duration-500 hover:text-purple-900/50">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-purple-400">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}

        {/* The Animated Vertical Line */}
        <div
          style={{ height: height + "px" }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-purple-500/10 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-indigo-500 via-purple-500 to-transparent from-[0%] via-[50%] rounded-full shadow-[0_0_15px_rgba(168,85,247,0.5)]"
          />
        </div>
      </div>
    </div>
  );
};