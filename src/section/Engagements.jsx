import React from "react";

const Engagements = () => {
  const projects = [
    {
      sector: "FinTech",
      time: "8 Months",
      title: "Post-Merger Integration",
      desc: "Led the operational integration of a $50M acquired asset. Harmonized technology stacks, consolidated redundant departments, and established unified KPIs across the newly formed entity.",
      impactNum: "$4.2M",
      impactLabel: "Annual Synergies",
    },
    {
      sector: "Global Logistics",
      time: "12 Months",
      title: "Supply Chain Optimization",
      desc: "Restructured procurement frameworks and renegotiated Tier-1 vendor contracts amid global shipping volatility. Implemented predictive inventory models.",
      impactNum: "18%",
      impactLabel: "Margin Expansion",
    },
    {
      sector: "Healthcare Tech",
      time: "6 Months",
      title: "Go-To-Market Strategy",
      desc: "Developed the market entry thesis for a new predictive diagnostics tool. Profiled addressable market segments, defined pricing tiers, and outlined enterprise sales protocols.",
      impactNum: "$12M",
      impactLabel: "Pipeline Generated",
    },
  ];

  return (
    <section id="projects" className="bg-[#0a0a0a] w-full min-h-[600px] py-24 flex items-center justify-start font-[Playfair_Display,serif] border-b border-[#2a2a2a]">
      <div className="w-full px-6 sm:px-12 lg:px-24 xl:pl-[400px] flex flex-col md:flex-row gap-8 lg:gap-16">
        {/* Section Title with decorative line */}
        <div className="flex flex-row md:flex-col gap-4 items-center md:items-start min-w-[200px] shrink-0">
          <h2 className="text-[#c9a84c] text-xl lg:text-2xl font-medium tracking-widest uppercase">
            Select Engagements
          </h2>
          <div className="hidden md:block w-12 h-[1px] bg-[#c9a84c]/40 mt-2"></div>
        </div>

        {/* Projects Content Area */}
        <div className="max-w-5xl w-full">
          <div className="flex flex-col gap-12 lg:gap-16">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="border-t border-[#2a2a2a] pt-8 grid grid-cols-1 lg:grid-cols-[1.2fr_3fr_1.5fr] gap-6 lg:gap-8 items-start group"
              >
                {/* Meta Data */}
                <div className="text-sm uppercase tracking-[0.1em] text-[#a0a0a0] font-sans lg:pt-2">
                  <span className="block mb-1">
                    Sector:{" "}
                    <span className="text-[#f5f5f0]">{project.sector}</span>
                  </span>
                  <span className="block">
                    Timeline:{" "}
                    <span className="text-[#f5f5f0]">{project.time}</span>
                  </span>
                </div>

                {/* Role / Description */}
                <div>
                  <h3 className="text-2xl lg:text-3xl text-[#f5f5f0] mb-3 group-hover:text-[#c9a84c] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-base text-[#a0a0a0] font-sans leading-relaxed">
                    {project.desc}
                  </p>
                </div>

                {/* Impact Metrics */}
                <div className="lg:text-right lg:pt-1">
                  <div className="text-4xl lg:text-5xl text-[#c9a84c]">
                    {project.impactNum}
                  </div>
                  <span className="block font-sans text-xs uppercase tracking-[0.1em] text-[#a0a0a0] mt-2">
                    {project.impactLabel}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Engagements;
