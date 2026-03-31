import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="bg-[#0a0a0a] w-full min-h-[500px] py-24 flex items-center justify-start font-[Playfair_Display,serif]">
      <div className="w-full px-6 sm:px-12 lg:px-24 xl:pl-[400px] flex flex-col md:flex-row gap-8 lg:gap-16">
        {/* Section Title with decorative line */}
        <div className="flex flex-row md:flex-col gap-4 items-center md:items-start min-w-[200px] shrink-0">
          <h2 className="text-[#c9a84c] text-xl lg:text-2xl font-medium tracking-widest uppercase">
            Initiate Contact
          </h2>
          <div className="hidden md:block w-12 h-[1px] bg-[#c9a84c]/40 mt-2"></div>
        </div>

        {/* Contact Content Area */}
        <div className="max-w-3xl w-full">
          <h3 className="text-3xl md:text-4xl lg:text-5xl text-[#f5f5f0] mb-6 leading-tight">
            Open to strategic discussions and leadership roles.
          </h3>

          <p className="text-base lg:text-lg text-[#a0a0a0] font-sans mb-10 leading-relaxed max-w-2xl">
            Currently reviewing opportunities for post-MBA engagements
            commencing in Summer 2026.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6">
            <a
              href="mailto:farhan.irtiza@example.com"
              className="inline-flex justify-center items-center px-10 py-4 border border-[#c9a84c] text-[#c9a84c] uppercase tracking-[0.15em] text-sm font-sans hover:bg-[#c9a84c] hover:text-[#0a0a0a] transition-colors duration-300"
            >
              Send Email
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex justify-center items-center px-10 py-4 border border-[#c9a84c] text-[#c9a84c] uppercase tracking-[0.15em] text-sm font-sans hover:bg-[#c9a84c] hover:text-[#0a0a0a] transition-colors duration-300"
            >
              View LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
