"use client";

import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <div
        className="min-h-screen px-1 pt-18 md:pt-12 pb-8"
      >
        <div className="text-5xl font-bold mt-8 md:mt-14.5"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1">
          {projects.map((project, i) => (
            <div
              key={project.slug}
              className={`
    relative group overflow-hidden
    ${i === 1 ? "sm:col-span-1" : ""}   
    ${i === 2 ? "sm:col-span-2" : ""}   
    ${i === 3 ? "sm:col-span-2" : ""}   
    ${i === 4 ? "sm:col-span-1" : ""}   
    ${i === 5 ? "sm:col-span-1" : ""}   
    ${i === 6 ? "sm:col-span-1" : ""}   
    ${i === 7 ? "sm:col-span-2" : ""}   
    ${i === 8 ? "sm:col-span-1" : ""}   
    ${i === 9 ? "sm:col-span-2" : ""}   
    ${i === 10 ? "sm:col-span-1" : ""}   
     ${i ===11 ? "sm:col-span-1" : ""}   
    ${i === 12? "sm:col-span-1" : ""}   
    ${i ===13 ? "sm:col-span-2" : ""}   
    ${i === 14 ? "sm:col-span-1" : ""}   
    ${i === 15 ? "sm:col-span-2" : ""}   
    ${i === 16 ? "sm:col-span-1" : ""}   
    ${i === 17 ? "sm:col-span-1" : ""}   
    ${i === 18 ? "sm:col-span-1" : ""}   
    ${i === 19 ? "sm:col-span-2" : ""}   
    min-h-[320px] sm:min-h-[400px] 
  `}
            >
              <Image
                src={project.mainImage}
                alt={project.title}
                fill
                  style={{ aspectRatio: "90/ 32" }} // wider frame

                className="object-fill object-center transition-transform duration-500 group-hover:scale-110"
              />

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
                  <h3 className="text-white font-medium text-[1.4em] sm:text-[1.7em] m-0 p-0 transition-transform duration-600 ease-in-out">
                    {project.title}
                  </h3>

                  <div className="flex items-center">
                    <span className="bg-white block h-[2px] w-[80px] sm:h-[3px] sm:w-[120px] md:w-0 md:group-hover:w-[220px] transition-all duration-600 ease-in-out"></span>
                    <h4 className="text-white text-[1.1em] sm:text-[1.2em] font-normal m-0 p-2 transition-transform duration-600 ease-in-out">
                      {project.location}
                    </h4>
                  </div>
                </div>

                <div className="flex items-center justify-end">
                  <span className="bg-white block h-[2px] w-[30px] sm:h-[3px] sm:w-[45px] md:w-0 md:group-hover:w-[45px] transition-all duration-600 ease-in-out"></span>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="text-white font-normal sm:font-medium text-[1em] sm:text-[1.1em] ml-2 transition-transform duration-600 ease-in-out"
                  >
                    View more
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
