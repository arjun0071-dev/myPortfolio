"use client";

import Image from "next/image";
import React from "react";
import logo from "../../../public/logo.png";

function Navbar() {
  const navItems = [
    { title: "Home", id: "home" },
    { title: "About", id: "about" },
    { title: "Skills", id: "skills" },
    { title: "Testimonial", id: "testimonial" },
    { title: "Project", id: "project" },
  ];

  const scrollWithDelay = (id) => {
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 300);
  };

  return (
    <header 
      className="fixed top-0 left-0 z-50 w-full py-2 backdrop-blur-md border-b"
      style={{ 
        backgroundColor: "rgba(6, 3, 14, 0.8)", 
        borderColor: "rgba(139, 92, 246, 0.2)"
      }}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
      
        <div className="flex items-center gap-2 relative group">
          <div className="absolute -inset-2 bg-purple-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
          <Image
            src={logo}
            alt="Logo"
            width={40}
            height={40}
            className="relative object-contain"
          />
        </div>

      
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((val, i) => (
            <button
              key={i}
              onClick={() => scrollWithDelay(val.id)}
              className="
                font-medium tracking-wide text-gray-300
                hover:text-purple-400
                relative
                after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px]
                after:bg-lineart-to-r after:from-purple-500 after:to-indigo-500
                after:transition-all after:duration-300
                hover:after:w-full
                text-sm transition-colors
              "
            >
              {val.title}
            </button>
          ))}
        </div>

        <div className="md:hidden text-purple-400">
        
        </div>
      </nav>
    </header>
  );
}

export default Navbar;