"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      <Header />
      <div className="bg-dark-bg text-white min-h-screen font-montserrat px-8 py-16 mt-40">
        {/* Hero / Introduction */}
        <section className="text-center mx-auto">
          <p>
            We are a team of passionate professionals dedicated to creating
            innovative solutions for modern businesses.
          </p>
        </section>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 p-6 bg-white rounded-lg shadow-md ">
          <Image
            src="/images/projects/founder.jpeg"
            alt="Co-Founder"
            width={260} 
            height={260} 
            className="w-32 h-32 md:w-60 md:h-80 object-cover shadow-md"
          />
          <div className="text-center md:text-left">
            <p className="text-lg italic text-gray-700">
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
