import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Reveal = ({ children, delay = 0, className = "" }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;

    // Set initial position out of view natively via GSAP (hardware accelerated)
    gsap.set(el, { opacity: 0, y: 50 });

    // Animate into view triggered by scroll
    const tl = gsap.to(el, {
      opacity: 1,
      y: 0,
      duration: 1.2,
      delay: delay ? delay / 1000 : 0, // GSAP uses seconds instead of ms
      ease: "power3.out", // Ultra-premium smoothing curve
      scrollTrigger: {
        trigger: el,
        start: "top 85%", // Trigger animation precisely when element hits lower 85% of screen
        toggleActions: "play none none none", // Only play forwards
        once: true, // Fire once
      }
    });

    // Cleanup animation to prevent memory leaks in case of fast scroll/unmounts
    return () => {
      if (tl) tl.kill();
    };
  }, [delay]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
};

export default Reveal;
