"use client";

import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects"; // <-- adjust path

export default function ProjectsPage() {
  return (
    <div className=" min-h-screen px-8 py-16">
    <div className="text-5xl font-bold mb-4 mt-40" ></div>  


      <div
        className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          lg:grid-cols-3 
          gap-6
        "
      >
        {projects.map((project, i) => (
          <Link
            key={project.slug}
            href={project.projectLink || "#"}
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
            `}
         style={{ minHeight: "360px" }}

          >
            {/* Image */}
            <Image
              src={project.mainImage}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-all duration-500 p-4">
  <div className="flex flex-col">
    {/* Title */}
    <h3 className="text-white font-semibold text-[2em] m-0 p-0 transition-transform duration-600 ease-in-out">
      {project.title}
    </h3>

    {/* Location */}
    <div className="flex items-center">
    <span className="bg-white block h-[3px] w-0 group-hover:w-[240px] transition-all duration-600 ease-in-out"></span>
      <p className="text-white-500 text-[1.4em] m-0 p-2 transition-transform duration-600 ease-in-out ">
        {project.location}
      </p>
    </div>
  </div>

  {/* View More */}
  <div className="flex items-center justify-end">
    <span className="bg-white block h-[3px] w-0 group-hover:w-[45px] transition-all duration-600 ease-in-out"></span>
    <p className="text-white-500 font-semiboldtext-[1.2em] m-0 p-2 transition-transform duration-600 ease-in-out">
      View more
    </p>
  </div>
</div>

          </Link>
        ))}
      </div>
    </div>
  );
}
