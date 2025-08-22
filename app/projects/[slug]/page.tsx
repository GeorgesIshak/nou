// app/projects/[slug]/page.tsx
import { projects } from "@/data/projects";
import SliderProjects from "@/components/SliderProjects";
import Image from "next/image";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) return notFound();

  return (
    <>
    <Header/>
    <div className="min-h-screen bg-dark-bg text-white">
      <div className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src={project.mainImage}
          alt={project.title}
          fill
          className="absolute inset-0 w-full h-full object-cover opacity-60 animate-zoomOut"
        />

        <div className="absolute bottom-26 md:bottom-12 left-0 z-10 text-white flex flex-col w-full px-6 md:px-16">
          <div className="cursor-pointer group inline-flex items-center gap-2 mt-2 project-title">
            <h2 className="text-[26px] md:text-4xl font-medium transition-transform duration-500 group-hover:translate-y-[-3px]">
              {project.title}
            </h2>
            <span className="block bg-white h-1 mt-2 w-12 transition-all duration-500 group-hover:w-6"></span>
          </div>
          <div className="group inline-flex items-center gap-2 mt-2 cursor-pointer all-projects-link">
            <span className="block bg-white h-0.5 w-24 transition-all duration-500 group-hover:w-12"></span>
            <h3 className="text-lg md:text-xl font-medium transition-transform duration-500 group-hover:translate-x-2">
              {project.location}
            </h3>
          </div>
        </div>
      </div>

      <div className="mx-auto py-12 px-6 text-justify">
        <p className="text-lg text-gray-300 leading-relaxed glow-text">
          {project.description}
        </p>
      </div>

      <div className="mx-auto px-6 pb-16">
        <SliderProjects images={project.images} />
      </div>
    </div>
    <Footer/>
    </>
  );
}
