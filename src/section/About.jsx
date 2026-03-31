import React from "react";
import Reveal from "../components/Reveal";

const About = () => {
  return (
    <section id="about" className="bg-[#0a0a0a] w-full min-h-[600px] py-24 flex items-center justify-start font-[Playfair_Display,serif] border-b border-[#2a2a2a]">
      {/* Aligning with your Hero layout for consistency */}
      <div className="w-full px-6 sm:px-12 lg:px-24 xl:pl-[400px] flex flex-col md:flex-row gap-8 lg:gap-16">
        {/* Section Title with a decorative vertical line */}
        <Reveal>
          <div className="flex flex-row md:flex-col gap-4 items-center md:items-start min-w-[200px]">
            <h2 className="text-[#c9a84c] text-xl lg:text-2xl font-medium tracking-widest uppercase">
              Executive Summary
            </h2>
            <div className="hidden md:block w-12 h-[1px] bg-[#c9a84c]/40 mt-2"></div>
          </div>
        </Reveal>

        {/* Narrative Text */}
        <Reveal delay={200}>
          <div className="max-w-3xl">
            <p className="text-[#f5f5f0] text-lg lg:text-xl leading-relaxed opacity-90 first-letter:text-4xl first-letter:font-bold first-letter:text-[#c9a84c] first-letter:mr-2 first-letter:float-left">
              Alexander Wright is a strategic management professional specializing
              in operational transformation and corporate finance. With a rigorous
              analytical approach developed at top-tier institutions, he
              identifies latent value streams and engineers resilient
              organizational frameworks. He partners with executive teams to
              translate complex market dynamics into decisive, quantifiable action
              plans.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default About;
