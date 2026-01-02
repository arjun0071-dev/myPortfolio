"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import tailor from "../../../public/tailor.png";
import portfolio from "../../../public/portfolio.png";

function Project() {
  const projects = [
    {
      img: portfolio,
      title: "Portfolio Website",
      description:
        "A modern personal portfolio built with React, Tailwind CSS, and Framer Motion animations.",
      tech: ["React", "Tailwind", "Framer Motion"],
      link: "#",
    },
    {
      img: tailor,
      title: "Tailor",
      description:
        "High-converting landing page with smooth scroll and responsive design.",
      tech: ["React", "Tailwind", "Framer Motion"],
      link: "https://new-tailor.vercel.app/",
    },
  ];

  return (
    <section 
      id="project" 
      className="min-h-screen text-white py-16 px-6"
      style={{ backgroundColor: "#06030e" }} // Themed background
    >
      <h2 className="text-4xl font-bold text-center mb-10">
        My <span className="text-purple-500">Projects</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white/5 border border-purple-500/10 rounded-xl p-4 shadow-md flex flex-col hover:shadow-purple-500/30 transition-transform duration-300 hover:-translate-y-2 hover:scale-105 max-w-md mx-auto"
          >
            <div className="w-full h-40 relative mb-3">
              <Image
                src={project.img}
                alt={project.title}
                fill
                className="object-cover rounded-lg"
              />
            </div>

            <h3 className="text-lg font-semibold mb-2">{project.title}</h3>

            <p className="text-gray-400 mb-3 text-sm">{project.description}</p>

            <div className="flex flex-wrap gap-1 mb-3">
              {project.tech.map((item) => (
                <span
                  key={`${project.title}-${item}`}
                  className="text-xs bg-purple-500/10 text-purple-400 px-2 py-0.5 rounded-full border border-purple-500/20"
                >
                  {item}
                </span>
              ))}
            </div>

            <Link
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-auto text-purple-400 hover:text-purple-300 text-sm font-medium"
            >
              View Demo →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Project;