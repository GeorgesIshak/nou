"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const slides = [
  { image: "/images/projects/3d1-living-room-kitchen.jpg", title: "Hâbitat All Suite Hotel", projectLink: "https://www.gnb-architects.com/projects/habitat-all-suite-hotel/" },
  { image: "/images/projects/7-scaled.jpg", title: "Modern Villa", projectLink: "/projects" },
  { image: "/images/projects/nicosia-view-6-f-md2-op2.jpg", title: "Nicosia Office View", projectLink: "/projects" },
  { image: "/images/projects/ydlmkcjn_v04.jpg", title: "Luxury Apartment", projectLink: "/projects" },
  { image: "/images/projects/int.v2-2.jpg", title: "Interior Concept", projectLink: "/projects" },
];

export default function ImageSlider() {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => setCurrent(current === length - 1 ? 0 : current + 1);
  const prevSlide = () => setCurrent(current === 0 ? length - 1 : current - 1);

  useEffect(() => {
    const timer = setInterval(() => setCurrent(prev => (prev === length - 1 ? 0 : prev + 1)), 5000);
    return () => clearInterval(timer);
  }, [length]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div
        className="flex w-full h-full transition-transform duration-1000"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full h-full flex-shrink-0 relative">
            <Image src={slide.image} alt={slide.title} fill className="object-cover" />
            <div className="absolute top-0 left-0 w-full h-full bg-black/30"></div>

            <div className="absolute bottom-80 left-32 z-10 text-white flex flex-col">
              <a href={slide.projectLink} className="cursor-pointer group inline-flex items-center gap-2 mt-2">
                <h2 className="text-4xl md:text-5xl font-medium transition-transform duration-500 group-hover:translate-y-[-3px] fade-in">{slide.title}</h2>
                <span className="block bg-white h-1 mt-2 w-12 transition-all duration-500 group-hover:w-6"></span>
              </a>

              <a href="/projects" className="group inline-flex items-center gap-2 mt-2 cursor-pointer">
                <span className="block bg-white h-0.5 w-24 transition-all duration-500 group-hover:w-12"></span>
                <h3 className="text-lg md:text-xl font-medium transition-transform duration-500 group-hover:translate-x-2 fade-in">All Projects</h3>
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-6 z-10">
        <button onClick={prevSlide} className="text-white text-3xl cursor-pointer">&#10094;</button>
        <button onClick={nextSlide} className="text-white text-3xl cursor-pointer">&#10095;</button>
      </div>
    </div>
  );
}
