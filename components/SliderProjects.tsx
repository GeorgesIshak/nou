"use client";

import Image from "next/image";
import { useState, useEffect, useCallback, useRef } from "react";

interface SliderProjectsProps {
  images: string[];
}

export default function SliderProjects({ images }: SliderProjectsProps) {
  const [current, setCurrent] = useState(0);
  const [modalImage, setModalImage] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(3);
  const sliderRef = useRef<HTMLDivElement>(null);

  const gap = 16;

  // Create a duplicated slides array for infinite effect
  const slides = [...images, ...images];

  const next = useCallback(() => {
    setCurrent((prev) => prev + 1);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => prev - 1);
  }, []);

  // Auto-scroll
  useEffect(() => {
    const interval = setInterval(next, 6000);
    return () => clearInterval(interval);
  }, [next]);

  // Responsive slides
  useEffect(() => {
    const handleResize = () => setVisibleCount(window.innerWidth < 768 ? 1 : 3);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle infinite effect
  useEffect(() => {
    const total = images.length;

    if (current >= total) {
      // jump back to start instantly
      setTimeout(() => setCurrent(0), 300); // match CSS transition
    }
    if (current < 0) {
      setTimeout(() => setCurrent(total - 1), 300);
    }
  }, [current, images.length]);

  return (
    <div className="relative w-full overflow-hidden">
  <div
    ref={sliderRef}
    className="flex transition-transform duration-500"
    style={{
      gap: visibleCount === 1 ? "0px" : `${gap}px`,
      transform: `translateX(-${current * (100 / visibleCount)}%)`,
    }}
  >
    {slides.map((img, idx) => (
      <div
        key={idx}
        className="relative flex-shrink-0 overflow-hidden rounded-lg bg-black aspect-[5/4]" // taller, consistent frame
        style={{
          // equal columns accounting for gaps
          flexBasis:
            visibleCount === 1
              ? "100%"
              : `calc((100% - ${(visibleCount - 1) * gap}px) / ${visibleCount})`,
        }}
        onClick={() => setModalImage(img)}
      >
        <Image
          src={img}
          alt={`Slide ${idx}`}
          fill
          className="object-cover" // full-bleed, tiny crop for consistency
          style={{ objectPosition: "center", pointerEvents: "none" }}
          sizes={`(max-width: 768px) 100vw, ${100 / visibleCount}vw`}
          priority={idx < 3}
        />
      </div>
    ))}
  </div>


      {/* Buttons */}
      <button
        onClick={prev}
        className="absolute top-1/2 left-2 md:left-4 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full z-10"
      >
        ❮
      </button>
      <button
        onClick={next}
        className="absolute top-1/2 right-2 md:right-4 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full z-10"
      >
        ❯
      </button>

      {/* Modal */}
      {modalImage && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="relative w-full max-w-3xl h-[80vh] md:h-[70vh]">
            <Image
              src={modalImage}
              alt="Zoomed"
              fill
              className="object-contain rounded-lg"
            />
            <button
              className="absolute top-2 right-2 text-white text-2xl font-bold bg-black/50 p-2 rounded-full"
              onClick={() => setModalImage(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
