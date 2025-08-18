import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white mt-20">
      <div className="text-center py-10 px-6 max-w-3xl mx-auto">
        <h2 className="text-2xl font-normal uppercase mb-4">Nou Architecture</h2>
        <p className="text-sm leading-relaxed">
          We believe architecture is more than structures,. With every project, we blend creativity, precision, and purpose to bring visions to life through thoughtful design. We are a team of architects, designers, and developers who are passionate about creating beautiful and functional spaces.
        </p>
      </div>

      {/* Middle Section: Menu + Social Icons */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center py-6 px-6">
        {/* Menu Left */}
        <ul className="flex gap-8 mb-4 md:mb-0">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About Us</Link></li>
          <li><Link href="/projects">Projects</Link></li>
        </ul>

        {/* Social Icons Right */}
        <div className="flex gap-6">
      
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white mx-6"></div>

      {/* Bottom Section: Copyright */}
      <div className="text-center text-sm py-6">
        © Copyright 2025 Nou, All rights reserved.
      </div>
    </footer>
  );
}
