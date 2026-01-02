"use client";
import React from "react";
import { FiLayout, FiCode, FiPenTool, FiTrendingUp } from "react-icons/fi";

function Skill() {
  const services = [
    {
      title: "UI / UX Design",
      description:
        "Designing clean, intuitive, and visually engaging interfaces focused on real user needs.",
      icon: <FiLayout />,
    },
    {
      title: "Web Development",
      description:
        "Building fast, responsive, and scalable websites using React, Next.js, and Tailwind CSS.",
      icon: <FiCode />,
    },
    {
      title: "Graphic Design",
      description:
        "Crafting logos, social media visuals, and brand assets that communicate clearly.",
      icon: <FiPenTool />,
    },
    {
      title: "SEO Optimization",
      description:
        "Improving website visibility, performance, and rankings with modern SEO strategies.",
      icon: <FiTrendingUp />,
    },
  ];

  return (
    <section
      id="skills"
      className="relative py-24 px-4 sm:px-6 md:px-10"
      style={{ backgroundColor: "#06030e" }} // Consistent background
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">Skills</span>
        </h2>
        <p className="mt-4 text-gray-400 max-w-xl mx-auto italic">
          Turning ideas into powerful digital experiences through design and code.
        </p>
        <span className="block w-20 h-1 bg-gradient-to-r from-purple-500 to-indigo-600 mx-auto mt-6 rounded-full" />
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="group relative p-8 rounded-2xl border border-purple-500/10 
                       transition-all duration-500 hover:-translate-y-3"
            style={{ 
              backgroundColor: "rgba(13, 7, 37, 0.4)", // Glassy look
              backdropFilter: "blur(8px)"
            }}
          >
            
            <div className="absolute inset-0 rounded-2xl bg-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div
              className="flex items-center justify-center w-14 h-14 rounded-xl 
                         bg-purple-500/10 text-purple-400 text-2xl mb-6
                         group-hover:bg-purple-600 group-hover:text-white
                         group-hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]
                         transition-all duration-500"
            >
              {service.icon}
            </div>

          
            <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors">
              {service.title}
            </h3>

           
            <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
              {service.description}
            </p>

        
            <span
              className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-b-2xl
                         group-hover:w-full transition-all duration-500"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skill;