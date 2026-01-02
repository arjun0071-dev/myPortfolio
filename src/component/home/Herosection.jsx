"use client";

import React from "react";
import Image from "next/image";
import me from "../../../public/me.jpg";
import { motion } from "motion/react";
import { LayoutTextFlip } from "../ui/layout-text-flip";

function Herosection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6"
      style={{ backgroundColor: "#06030e" }} // Slightly deeper dark for better contrast
    >
      {/* Card */}
      <div
        className="w-full max-w-7xl rounded-3xl border px-10 py-16 transition-all duration-500"
        style={{
          backgroundColor: "#0d0725", // Subtle purple-tinted dark
          borderColor: "#3b2b85",     // Deep purple border instead of grey
          boxShadow: "0 0 40px rgba(0,0,0,0.5)"
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-20">

          {/* Image Section */}
          <div className="flex justify-center">
            <div className="relative group">
              {/* Vibrant Purple Glow behind image */}
              <span
                className="absolute inset-0 rounded-full blur-[60px] opacity-40 animate-pulse"
                style={{ backgroundColor: "#8b5cf6" }}
              />

              <Image
                src={me}
                alt="Arjun Chhetri"
                priority
                className="relative w-[300px] h-[300px] rounded-full object-cover border-[4px] transition-transform duration-500 group-hover:scale-105"
                style={{ borderColor: "#a78bfa" }} // Soft purple border
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="space-y-6">
            <motion.div className="text-purple-300 font-medium tracking-widest uppercase">
               <LayoutTextFlip
                text="HI, I’M"
                words={["Arjun Chhetri", "Frontend Developer"]}
              />
            </motion.div>

            <p
              className="text-lg max-w-xl leading-relaxed opacity-90"
              style={{ color: "#e2e8f0" }}
            >
              Frontend Developer crafting modern, responsive, and high-quality
              web applications using{" "}
              <strong className="text-purple-400">React</strong>,{" "}
              <strong className="text-purple-400">Next.js</strong>, and{" "}
              <strong className="text-purple-400">Tailwind CSS</strong>.
            </p>

            {/* Gradient Button with Glow */}
            <div className="pt-6">
              <a
                href="#project"
                className="relative inline-block px-10 py-4 rounded-full font-bold text-white transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(139,92,246,0.4)]"
                style={{
                  background: "linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)",
                }}
              >
                View Projects
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Herosection;