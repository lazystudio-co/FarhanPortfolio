import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] w-full py-8 border-t border-[#2a2a2a]">
      {/* Keeping the same left-padding so the text aligns perfectly with the rest of the site */}
      <div className="w-full px-6 sm:px-12 lg:px-24 xl:pl-[400px] flex items-center justify-start">
        <p className="text-sm text-[#a0a0a0] font-sans tracking-wide">
          &copy; {new Date().getFullYear()} LazyStudio. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
