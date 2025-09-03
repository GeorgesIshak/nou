// app/projects/[slug]/page.tsx
import { projects } from "@/data/projects";
import SliderProjects from "@/components/SliderProjects";
import { notFound } from "next/navigation";
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
      <Header />
      <div className="min-h-screen px-1 pt-16 pb-8">
        
        {/* Slider */}
        <div className="mx-auto px-6 mt-8 md:mt-14.5">
          <SliderProjects images={project.images} />
        </div>

        {/* Grid: Data left, Description right */}
        <div className="mx-auto justify-center px-6 md:grid md:grid-cols-3 gap-3">
          
          {/* Data Column */}
          <div className="flex flex-col w-full py-6 md:py-12 text-black">
            <div className="inline-flex items-center gap-2 mb-2 project-title">
              <h2 className="text-[24px] md:text-3xl font-medium">
                {project.title}
              </h2>
              <span className="block bg-black h-1 mt-2 w-12"></span>
            </div>

            <div className="inline-flex items-center gap-2 mb-1">
              <span className="block bg-black h-0.5 w-24"></span>
              <h3 className="text-sm md:text-lg font-medium">{project.location}</h3>
            </div>
            <div className="inline-flex items-center gap-2 mb-1">
              <span className="block bg-black h-0.5 w-24"></span>
              <h3 className="text-sm md:text-lg font-medium">Type: {project.type}</h3>
            </div>
            <div className="inline-flex items-center gap-2 mb-1">
              <span className="block bg-black h-0.5 w-24"></span>
              <h3 className="text-sm md:text-lg font-medium">Status: {project.status}</h3>
            </div>
            <div className="inline-flex items-center gap-2">
              <span className="block bg-black h-0.5 w-24"></span>
              <h3 className="text-sm md:text-lg font-medium">Size: {project.size}</h3>
            </div>
          </div>

          {/* Description Column */}
          <div className="col-span-2 text-justify  flex flex-col py-4 md:py-12">
            <p className="text-lg text-gray-300 leading-relaxed">
              {project.description}
            </p>
          </div>

        </div>

      </div>
    </>
  );
}
