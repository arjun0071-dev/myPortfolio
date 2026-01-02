"use client";

import React from "react";
import Slider from "react-slick";
import { FaQuoteLeft } from "react-icons/fa";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "Emma Johnson",
    role: "Creative Director",
    text: "Working with Arjun was an absolute pleasure. He perfectly understood my vision and turned it into something even better than I imagined.",
  },
  {
    name: "David Carter",
    role: "Startup Founder",
    text: "The attention to detail and commitment to quality really stood out. Every step of the process was smooth and professional.",
  },
  {
    name: "Sophia Martinez",
    role: "Business Owner",
    text: "From start to finish, everything was handled with care and expertise. The final result exceeded my expectations.",
  },
];

const Arrow = ({ onClick, direction }) => (
  <button
    onClick={onClick}
    className={`absolute top-1/2 -translate-y-1/2 z-20 hidden md:flex
      ${direction === "next" ? "-right-24" : "-left-24"}
      h-14 w-14 rounded-full border border-purple-500/30 bg-purple-500/5 backdrop-blur-md
      items-center justify-center
      text-purple-400 text-2xl hover:bg-purple-600 hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(168,85,247,0.2)]`}
  >
    {direction === "next" ? "❯" : "❮"}
  </button>
);

export default function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: true,
    arrows: true,
    nextArrow: <Arrow direction="next" />,
    prevArrow: <Arrow direction="prev" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <section
      id="testimonial"
      className="relative w-full min-h-screen flex items-center justify-center px-6 py-24 text-white overflow-hidden"
      style={{ backgroundColor: "#06030e" }} 
    >
     
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="w-full max-w-5xl text-center relative z-10">
        
        <h2 className="text-4xl md:text-5xl font-bold mb-20">
          What <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">Clients Say</span>
        </h2>

        <div className="testimonial-slider-container">
          <Slider {...settings}>
            {testimonials.map((t, index) => (
              <div key={index} className="px-4 outline-none">
                <div
                  className="mx-auto w-full max-w-4xl
                  bg-gradient-to-b from-white/10 to-transparent backdrop-blur-xl
                  border border-purple-500/20 rounded-3xl
                  p-10 md:p-16 shadow-2xl relative"
                >
                  {/* Glowing Quote Icon */}
                  <div className="flex justify-center mb-8">
                    <div className="p-4 rounded-full bg-purple-500/10 border border-purple-500/20">
                      <FaQuoteLeft className="text-purple-400 text-3xl opacity-90 shadow-purple-500/50" />
                    </div>
                  </div>

                  <p className="text-lg md:text-2xl italic leading-relaxed text-gray-200 mb-10 font-light">
                    “{t.text}”
                  </p>

                  <h4 className="font-bold text-xl md:text-2xl text-white tracking-tight">
                    {t.name}
                  </h4>
                  <p className="text-sm md:text-base text-purple-400/80 mt-1 uppercase tracking-widest font-medium">
                    {t.role}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

    
      <style jsx global>{`
        .slick-dots li button:before {
          color: #a78bfa !important;
          font-size: 12px !important;
          opacity: 0.3;
        }
        .slick-dots li.slick-active button:before {
          color: #8b5cf6 !important;
          opacity: 1;
        }
      `}</style>
    </section>
  );
}