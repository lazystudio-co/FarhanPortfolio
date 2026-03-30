import React from "react";

const Experience = () => {
  const experiences = [
    {
      date: "2025 – Present",
      title: "Master of Business Administration",
      org: "Prestigious Graduate School of Business",
      desc: "Concentration in Strategic Management and Corporate Finance. President of the Consulting Club. Recipient of the Dean's Fellowship for Academic Excellence.",
    },
    {
      date: "2021 – 2024",
      title: "Senior Associate, Strategy",
      org: "Global Management Consulting Firm",
      desc: "Advised Fortune 500 clients across financial services and industrials. Directed teams of analysts in comprehensive market due diligence and organizational redesigns.",
    },
    {
      date: "2017 – 2021",
      title: "Bachelor of Science in Economics",
      org: "Elite University",
      desc: "Graduated Summa Cum Laude. Minor in Statistical Modeling. Published undergraduate thesis on the impacts of algorithmic trading on market liquidity.",
    },
  ];

  return (
    <section className="bg-[#0a0a0a] w-full min-h-[600px] py-24 flex items-center justify-start font-[Playfair_Display,serif] border-b border-[#2a2a2a]">
      <div className="w-full px-6 sm:px-12 lg:px-24 xl:pl-[400px] flex flex-col md:flex-row gap-8 lg:gap-16">
        {/* Section Title with decorative line */}
        <div className="flex flex-row md:flex-col gap-4 items-center md:items-start min-w-[200px] shrink-0">
          <h2 className="text-[#c9a84c] text-xl lg:text-2xl font-medium tracking-widest uppercase">
            Curriculum Vitae
          </h2>
          <div className="hidden md:block w-12 h-[1px] bg-[#c9a84c]/40 mt-2"></div>
        </div>

        {/* Timeline Content Area */}
        <div className="max-w-4xl w-full">
          {/* Timeline Line Container */}
          <div className="mt-4 border-l border-[#c9a84c]/40 pl-8 md:pl-10 flex flex-col gap-12 md:gap-16 ml-2 md:ml-4">
            {experiences.map((item, idx) => (
              <div key={idx} className="relative group">
                {/* The gold dot on the timeline (Interactive on hover) */}
                <div className="absolute -left-[2.35rem] md:-left-[2.85rem] top-1.5 w-3 h-3 bg-[#0a0a0a] border border-[#c9a84c] rounded-full group-hover:bg-[#c9a84c] group-hover:shadow-[0_0_8px_rgba(201,168,76,0.6)] transition-all duration-300"></div>

                {/* Date */}
                <span className="text-sm text-[#c9a84c] tracking-[0.1em] block mb-2 font-sans font-medium">
                  {item.date}
                </span>

                {/* Title */}
                <h3 className="text-2xl lg:text-3xl mb-1 text-[#f5f5f0] group-hover:text-[#c9a84c] transition-colors duration-300">
                  {item.title}
                </h3>

                {/* Organization */}
                <h4 className="font-sans text-base text-[#a0a0a0] mb-4">
                  {item.org}
                </h4>

                {/* Description */}
                <p className="text-base text-[#a0a0a0] font-sans leading-relaxed max-w-2xl">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
