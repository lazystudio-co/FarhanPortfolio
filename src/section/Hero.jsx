import Reveal from "../components/Reveal";

const Hero = () => {
  return (
    // Added 'relative' here in case you want the full-width bottom bar
    <section className="bg-[#0a0a0a] w-full min-h-screen flex items-center justify-start font-[Playfair_Display,serif] relative border-b border-[#2a2a2a]">
      <div className="w-full px-6 sm:px-12 lg:px-24 xl:pl-[400px] flex flex-col gap-3">
        <Reveal delay={100}>
          <h2 className="text-sm md:text-base lg:text-lg text-[#c9a84c] tracking-wide">
            M.B.A. Candidate, Strategic Management
          </h2>
        </Reveal>

        <Reveal delay={300}>
          <h1 className="text-5xl md:text-7xl lg:text-[80px] text-[#f5f5f0] leading-tight">
            Farhan Irtiza
          </h1>
        </Reveal>

        <Reveal delay={500}>
          <p className="text-base md:text-lg text-[#f5f5f0]/90 max-w-2xl italic">
            "Driving sustainable corporate growth through data-backed strategy,
            operational rigor, and principled leadership."
          </p>
        </Reveal>

        {/* Short, elegant gold horizontal bar */}
        <Reveal delay={700}>
          <div className="w-24 h-[2px] bg-[#c9a84c] mt-6"></div>
        </Reveal>
      </div>

      {/* OPTIONAL: If you meant a full-width line at the very bottom of the screen, uncomment the line below */}
      {/* <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/10"></div> */}
    </section>
  );
};

export default Hero;
