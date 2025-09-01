"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function AboutPage() {
  return (
    <>
    <Header/>
      <div className="bg-dark-bg text-white min-h-screen font-montserrat px-8 py-16 mt-40">
        {/* Hero / Introduction */}
        <section className="text-center max-w-3xl mx-auto">
          <p >
            We are a team of passionate professionals dedicated to creating innovative solutions for modern businesses.
          </p>
        </section>
      </div>

      <Footer />
    </>
  );
}
