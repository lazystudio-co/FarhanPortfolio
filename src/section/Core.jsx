import React from "react";

const Capabilities = () => {
  const capabilities = [
    {
      title: "Corporate Strategy",
      desc: "Aligning long-term enterprise goals with market realities, focusing on competitive advantage and sustainable scaling.",
    },
    {
      title: "Financial Modeling",
      desc: "Rigorous quantitative analysis, valuation, and capital allocation frameworks to ensure optimal ROI on strategic initiatives.",
    },
    {
      title: "Operations Excellence",
      desc: "Streamlining supply chains and internal processes using Lean methodologies to reduce overhead and accelerate delivery.",
    },
    {
      title: "Change Leadership",
      desc: "Guiding organizations through complex transformations by securing stakeholder alignment and mitigating cultural friction.",
    },
    {
      title: "Data Analytics",
      desc: "Translating disparate data sets into cohesive, executive-level insights that drive empirical decision-making.",
    },
    {
      title: "Market Expansion",
      desc: "Conducting comprehensive risk assessments and go-to-market strategies for emerging sectors and global territories.",
    },
  ];

  return (
    <section className="bg-[#0a0a0a] w-full min-h-[600px] py-24 flex items-center justify-start font-[Playfair_Display,serif] border-b border-[#2a2a2a]">
      <div className="w-full px-6 sm:px-12 lg:px-24 xl:pl-[400px] flex flex-col md:flex-row gap-8 lg:gap-16">
        {/* Section Title with a decorative vertical line */}
        <div className="flex flex-row md:flex-col gap-4 items-center md:items-start min-w-[200px] shrink-0">
          <h2 className="text-[#c9a84c] text-xl lg:text-2xl font-medium tracking-widest uppercase">
            Core Capabilities
          </h2>
          <div className="hidden md:block w-12 h-[1px] bg-[#c9a84c]/40 mt-2"></div>
        </div>

        {/* Capabilities Grid Content */}
        <div className="max-w-4xl w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {capabilities.map((comp, idx) => (
              <div
                key={idx}
                className="border border-[#2a2a2a] p-8 lg:p-10 hover:border-[#c9a84c] hover:-translate-y-1 transition-all duration-300 bg-transparent group"
              >
                <h3 className="text-xl lg:text-2xl text-[#f5f5f0] mb-3 group-hover:text-[#c9a84c] transition-colors duration-300">
                  {comp.title}
                </h3>
                {/* Using a standard sans-serif font for readability on the descriptions */}
                <p className="text-base text-[#a0a0a0] font-sans leading-relaxed">
                  {comp.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
