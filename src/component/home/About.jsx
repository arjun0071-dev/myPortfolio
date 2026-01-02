"use client";
import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";

const content = [
  {
    title: "Frontend Development",
    description:
      "I build modern, responsive, and user-friendly interfaces using React and JavaScript. My focus is on clean code, reusable components, and smooth user experiences across all devices.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--violet-500),var(--purple-500))] text-white text-xl font-bold shadow-[inset_0_0_20px_rgba(255,255,255,0.2)]">
        Frontend Development
      </div>
    ),
  },
  {
    title: "Interactive Experiences",
    description:
      "I love adding life to websites through animations, interactions, and dynamic functionality. JavaScript helps me create engaging interfaces that feel fast and intuitive.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white bg-[#0d0725]">
        <img
          src="/realtime.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover opacity-80 hover:opacity-100 transition-opacity"
          alt="frontend interaction demo"
        />
      </div>
    ),
  },
  {
    title: "UI & Visual Design",
    description:
      "With Adobe Photoshop, I design clean UI layouts, edit images, and create visual assets that enhance the overall look and feel of web projects.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--indigo-500),var(--purple-500))] text-white text-xl font-bold">
        UI & Design
      </div>
    ),
  },
  {
    title: "Continuous Learning",
    description:
      " I’m always learning new tools and improving my skills to stay up to date with modern frontend technologies, best practices, and design trends, turning curiosity into better design and cleaner code.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--fuchsia-500),var(--violet-500))] text-white text-xl font-bold">
        Growth Mindset
      </div>
    ),
  },
  {

  },
];

export function About() {
  return (
    <div className="bg-[#06030e]">
      <div id="about" className="w-full overflow-hidden" style={{ backgroundColor: "#06030e" }}>
        {/* Section Header (Optional but recommended for clarity) */}
        <div className="pt-20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-tighter">
                Discover <span className="text-purple-500">My Approach</span>
            </h2>
            <div className="mt-2 h-1 w-20 bg-purple-600 mx-auto rounded-full" />
        </div>
        
        <StickyScroll content={content} />
      </div>
    </div>
  );
}