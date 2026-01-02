"use client";
import Image from "next/image";
import React from "react";
import logo from '../../../public/logo.png'
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";

export default function Footer() {
  const socialLinks = [
    { icon: <FaGithub />, url: "https://github.com/arjun0071-dev", label: "Github" },
    { icon: <FaLinkedin />, url: "https://linkedin.com/", label: "LinkedIn" },
    { icon: <FaEnvelope />, url: "mailto:arjunchhetri202518@gmail.com", label: "Email" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative pt-20 pb-10 overflow-hidden" style={{ backgroundColor: "#06030e" }}>
      
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-600/10 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          
       
          <div className="lg:col-span-5 space-y-8">
            <div className="flex items-center gap-4">
               <div className="p-2 bg-white/5 rounded-xl border border-white/10">
                <Image src={logo} alt="Logo" width={40} height={40} />
               </div>
            
            </div>

            <p className="text-gray-400 text-lg leading-relaxed max-w-md">
              Building the next generation of web experiences with <span className="text-white font-medium">precision</span> and <span className="text-purple-400 font-medium">creativity</span>. Based in Nepal, working globally.
            </p>

            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

         
          <div className="lg:col-span-7">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 md:p-10 rounded-3xl relative">
              <h3 className="text-2xl font-bold text-white mb-6">Let&apos;s build something <span className="text-purple-400">great.</span></h3>
              
              <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
                />
                <textarea
                  placeholder="Tell me about your project..."
                  rows={4}
                  className="md:col-span-2 bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all resize-none"
                />
                <button className="md:col-span-2 group relative flex items-center justify-center gap-2 bg-linear-to-r from-purple-600 to-indigo-600 text-white font-bold py-4 rounded-2xl hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] transition-all active:scale-95">
                  Send Message
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </form>
            </div>
          </div>
        </div>

     
        <div className="flex flex-col md:flex-row items-center justify-between pt-10 border-t border-white/5 gap-6">
          <p className="text-gray-500 text-sm italic">
            © {new Date().getFullYear()} Arjun Chhetri. Design inspired by modern minimalism.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-purple-400 transition-colors uppercase tracking-widest"
          >
            Back to top <FaArrowUp size={12} />
          </button>
        </div>
      </div>
    </footer>
  );
}