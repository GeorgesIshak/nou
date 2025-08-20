"use client";

import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects"; // adjust path

export default function ProjectsPage() {
  return (
    <div className="min-h-screen px-8 py-16">
      <div className="text-5xl font-bold mb-4 mt-24 md:mt-40"></div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <div
            key={project.slug}
            className={`
    relative group overflow-hidden
    ${i === 1 ? "sm:col-span-2" : ""}   
    ${i === 2 ? "sm:col-span-2" : ""}   
    ${i === 3 ? "sm:row-span-2" : ""}   
    ${i === 4 ? "sm:col-span-2" : ""}   
    ${i === 5 ? "sm:row-span-2" : ""}   
    ${i === 6 ? "sm:col-span-2" : ""}   
    ${i === 7 ? "sm:col-span-2" : ""}   
    ${i === 8 ? "sm:col-span-2" : ""}   
    ${i === 9 ? "sm:row-span-2" : ""}   
    ${i === 10 ? "sm:col-span-2" : ""}   
    min-h-[280px] sm:min-h-[360px] 
  `}
          >
            {/* Image */}
            <Image
              src={project.mainImage}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Overlay */}
            <div
              className="
              absolute inset-0 
              bg-black/20 md:bg-black/40 
              flex flex-col justify-between 
              opacity-100 md:opacity-0 
              md:group-hover:opacity-100 
              transition-all duration-500 
              p-4
            "
            >
              <div className="flex flex-col">
                {/* Title */}
                <h3 className="text-white font-semibold text-[1.6em] sm:text-[2em] m-0 p-0 transition-transform duration-600 ease-in-out">
                  {project.title}
                </h3>

                {/* Location */}
                <div className="flex items-center">
                  <span className="bg-white block h-[2px] w-[80px] sm:h-[3px] sm:w-[120px] md:w-0 md:group-hover:w-[220px] transition-all duration-600 ease-in-out"></span>
                  <h4 className="text-white text-[1.1em] sm:text-[1.2em] font-normal m-0 p-2 transition-transform duration-600 ease-in-out">
                    {project.location}
                  </h4>
                </div>
              </div>

              {/* View More Link */}
              <div className="flex items-center justify-end">
                <span className="bg-white block h-[2px] w-[30px] sm:h-[3px] sm:w-[45px] md:w-0 md:group-hover:w-[45px] transition-all duration-600 ease-in-out"></span>
                <Link
                  href={`/projects/${project.slug}`}
                  className="text-white font-normal sm:font-semibold text-[1.1em] sm:text-[1.2em] ml-2 transition-transform duration-600 ease-in-out"
                >
                  View more
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
