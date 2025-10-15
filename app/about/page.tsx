"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      <Header />
      <div className="bg-dark-bg text-[#2b2929] font-montserrat px-8 py-16 mt-20 md:mt-30">
        {/* Hero / Introduction */}
        <section className="mx-auto mb-8">
          <h2 className="text-2xl md:text-3xl text-justify font-medium transition-transform duration-500 group-hover:translate-y-[-3px] fade-in mb-4">
            About Us
          </h2>
          <p className="text-sm md:text-base text-black leading-relaxed text-justify mt-4">
            <span className="font-bold">nou architecture studio</span> is an
            international design office founded in 2017 in Limassol, Cyprus. The
            studio provides comprehensive services in architecture, interior
            design, and landscape design, delivering projects that range in
            scale from complete buildings to private residences and landscape
            developments. Guided by a philosophy rooted in context, concept,
            nature, and light, nou architecture studio approaches every
            project—regardless of type or scale—as a unique narrative shaped by
            its surroundings, giving each work a distinct identity.
            <br />
            <br />
            Our practice is unified by a commitment to thoughtful detail and
            spatial harmony. Each project becomes an exploration of how light,
            material, and proportion define atmosphere and emotion.
            <br />
            <br />
            We see architecture as a projection of still moments—translated
            through walls, spaces, and landscape—crafted to reflect the character
            of each site and the lifestyle of its users. For us, architecture is
            not merely about form, but about designing distinctive, tailor-made
            experiences that elevate everyday life.
            <br />
            <br />
            With a focus on innovation, functionality, and personalized service,
            nou architecture studio delivers unique, practical designs that
            realize each project’s full potential to the highest international
            standards.
          </p>
        </section>

        {/* Founder Section */}
        <section className="mx-auto py-4">
          <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-8 md:gap-12 items-start">
            <div>
              <h2 className="font-montserrat text-1.5xl md:text-2xl font-medium text-neutral-900">
                Nada Noueihed
              </h2>
              <span className="block text-0.8xl text-neutral-600 mt-1">
                Founder &amp; Principal Architect
              </span>

              <p className="pt-6 text-sm md:text-base text-neutral-800 leading-relaxed text-justify">
                Nada Noueihed is an architect with extensive experience across
                all sectors of architectural design and supervision. A graduate
                of the American University of Beirut, where she was nominated
                for the Azar Award, she began her professional journey in
                Lebanon and Cyprus before founding nou architecture studio in
                Limassol in 2017. <br/><br/>Throughout her career, Nada has contributed to
                and led the design of large-scale projects in Cyprus,
                collaborating with a range of firms and consultants on
                significant developments. Her work reflects a deep commitment to
                contextual design, refined detailing, and the pursuit of spaces
                that harmonize functionality with emotion.
              </p>
            </div>

            <div className="relative w-full overflow-hidden rounded-2xl">
              <div className="relative h-[360px]">
                <Image
                  src="/images/projects/founder.jpeg"
                  alt="Nada Noueihed — Founder & Principal Architect"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
