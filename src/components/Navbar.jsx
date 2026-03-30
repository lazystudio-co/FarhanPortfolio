import React from "react";

export default function Navbar() {
  return (
    <nav className="fixed w-full top-0 bg-[#0a0a0a] backdrop-blur-md border-b border-gray-800 z-50 h-[80px]">
      <div className="max-w-6xl mx-auto px-5 py-4 flex justify-between items-center pt-6">
        <a
          href="#"
          className="text-xl font-[Playfair_Display,serif] tracking-wide text-[#f5f5f0] hover:text-[#c9a84c] duration-400 ease-in-out "
        >
          Portfolio
        </a>

        <div className="flex gap-10">
          <a
            href="#about"
            className="uppercase font-[Playfair_Display,serif] tracking-wider text-[#f5f5f0] hover:text-[#c9a84c] duration-400 ease-in-out "
          >
            About
          </a>
          <a
            href="#competencies"
            className="uppercase tracking-wider font-[Playfair_Display,serif] text-[#f5f5f0] hover:text-[#c9a84c] duration-400 ease-in-out "
          >
            Capabilities
          </a>
          <a
            href="#projects"
            className="uppercase tracking-wider font-[Playfair_Display,serif] text-[#f5f5f0] hover:text-[#c9a84c] duration-400 ease-in-out "
          >
            Engagements
          </a>
          <a
            href="#experience"
            className="uppercase tracking-wider font-[Playfair_Display,serif] text-[#f5f5f0] hover:text-[#c9a84c] duration-400 ease-in-out "
          >
            Experience
          </a>
          <a
            href="#contact"
            className="uppercase tracking-wider font-[Playfair_Display,serif] text-[#f5f5f0] hover:text-[#c9a84c] duration-400 ease-in-out "
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
