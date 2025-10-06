"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      <Header />
      <div className="bg-dark-bg text-[#2b2929]  font-montserrat px-8 py-16 mt-20 md:mt-40">
        {/* Hero / Introduction */}
        <section className="mx-auto mb-8">
           <h2 className="text-2xl md:text-3xl text-justify font-medium transition-transform duration-500 group-hover:translate-y-[-3px] fade-in mb-4">
                  About Us
           </h2>
          <p className="text-sm md:text-base text-black leading-relaxed text-justify mt-4">
            Based in Cyprus, Nou Architecture is a design studio passionate about creating spaces that balance functionality, aesthetics, and context. From bespoke family homes to striking residential towers, our projects reflect a commitment to thoughtful architecture, attention to detail, and innovative use of materials. We specialize in residential buildings that connect with their surroundings, respond to light and landscape, and provide a unique living experience. Each project is tailored to the client’s lifestyle, whether it’s a serene urban home, a vibrant coastal apartment, or a sustainable off-grid residence. At Nou Architecture, we don’t just design buildings—we craft environments that inspire, engage, and endure.
          </p>
        </section>

        {/* Founder / Quote */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 p-4 md:p6 bg-white rounded-lg shadow-md mb-8">
          <Image
            src="/images/projects/founder.jpeg"
            alt="Co-Founder"
            width={260} 
            height={260} 
            className="w-60 h-60 md:w-60 md:h-80 object-cover shadow-md"
          />
          <div className="text-center md:text-left">
            <p className="text-sm md:text-base text-black leading-relaxed text-justify">
            &quot;Our mission is to create lasting impact through innovation and
              integrity.&quot;
            </p>
            <p className="mt-4 font-semibold text-gray-900">
              — Jane Doe, Co-Founder
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
