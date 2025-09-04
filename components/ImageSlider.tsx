"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { projects } from "@/data/projects";
import Link from "next/link";

export default function ImageSlider() {
  const slides = projects;
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => setCurrent(current === length - 1 ? 0 : current + 1);
  const prevSlide = () => setCurrent(current === 0 ? length - 1 : current - 1);

  useEffect(() => {
    const timer = setInterval(
      () => setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1)),
      5000
    );
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
            <Image
              src={slide.mainImage}
              alt={slide.title}
              fill
              className="object-cover"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black/30"></div>

            <div className="absolute bottom-100 md:bottom-80 left-7 md:left-4 z-10 text-white flex flex-col">
              {/* Link to the single project page using slug */}
              <Link
                href={`/projects/${slide.slug}`}
                className="cursor-pointer group inline-flex items-center gap-2 mt-2 cursor typewriter-animation"
              >
                <h2 className="text-3xl md:text-5xl font-medium transition-transform duration-500 group-hover:translate-y-[-3px] fade-in">
                  {slide.title}
                </h2>
                <span className="block bg-white h-1 mt-2 w-12 transition-all duration-500 group-hover:w-6"></span>
              </Link>

              {/* Link to all projects */}
              <Link
                href="/projects"
                className="group inline-flex items-center gap-2 mt-2 cursor-pointer cursor typewriter-animation"
              >
                <span className="block bg-white h-0.5 w-24 transition-all duration-500 group-hover:w-12"></span>
                <h3 className="text-lg md:text-xl font-medium transition-transform duration-500 group-hover:translate-x-2 fade-in">
                  All Projects
                </h3>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="absolute bottom-22 md:bottom-10 left-1/2 transform -translate-x-1/2 flex gap-6 z-10">
        <button
          onClick={prevSlide}
          className="text-white text-3xl cursor-pointer"
           aria-label="Previous slide"
        >
          &#10094;
        </button>
        <button
          onClick={nextSlide}
          className="text-white text-3xl cursor-pointer"
           aria-label="Next slide"
          
        >
          &#10095;
        </button>
      </div>
    </div>
  );
}
