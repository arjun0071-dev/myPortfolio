"use client";

import React from "react";
import { Timeline } from "../ui/timeline";

export function Timelinee() {
  const data = [
    {
      title: "2025",
      content: (
        <div className="p-1">
          <p className="mb-2 text-xl font-bold text-purple-400 uppercase tracking-wider">
            Frontend Development Course
          </p>
          <p className="mb-4 text-xs font-semibold text-indigo-300/80">
            ARIBT Institute, Nepal
          </p>
          <p className="text-xs md:text-sm text-neutral-400 leading-relaxed">
            Completed an intensive frontend development course covering 
            <span className="text-white"> HTML, CSS, JavaScript, React</span>, and modern UI practices with real-world projects and hands-on learning.
          </p>
        </div>
      ),
    },
    {
      title: "2022 – 2024",
      content: (
        <div className="p-1">
          <p className="mb-2 text-xl font-bold text-purple-400 uppercase tracking-wider">
            +2 (Higher Secondary Education)
          </p>
          <p className="mb-4 text-xs font-semibold text-indigo-300/80">
            Management Stream
          </p>
          <p className="text-xs md:text-sm text-neutral-400 leading-relaxed">
            Completed higher secondary education with a focus on 
            <span className="text-white"> Computer Science, Mathematics, and Account</span>, building a strong foundation in logical thinking and problem-solving.
          </p>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div className="p-1">
          <p className="mb-2 text-xl font-bold text-purple-400 uppercase tracking-wider">
            Secondary Education Examination (SEE)
          </p>
          <p className="mb-4 text-xs font-semibold text-indigo-300/80">
            Nepal
          </p>
          <p className="text-xs md:text-sm text-neutral-400 leading-relaxed">
            Successfully completed secondary education, developing early interest in 
            <span className="text-white"> computers, technology</span>, and creative problem-solving.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div style={{ backgroundColor: "#06030e" }} className="relative">
      {/* Decorative background glow to make the timeline pop */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent pointer-events-none" />
      
      <div id="eduction" className="relative w-full p-5 overflow-clip">
        <Timeline data={data} />
      </div>
    </div>
  );
}