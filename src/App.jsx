import { useEffect } from "react";
import Home from "./pages/Home";
import CustomCursor from "./components/CustomCursor";

import Lenis from "lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Register ScrollTrigger globally across our app
gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // 1. Initialize Lenis smooth scroll engine globally
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    // 2. Tie Lenis scroll events directly into GSAP's ScrollTrigger refresh engine
    lenis.on('scroll', ScrollTrigger.update);

    // 2.5 Intercept all hash clicks for perfectly smooth navbar scroll routing
    const handleHashClick = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (target) {
        e.preventDefault();
        const id = target.getAttribute("href");
        if (id === "#") {
          lenis.scrollTo(0, { duration: 1.5 }); // Scroll to very top
        } else {
          lenis.scrollTo(id, { offset: -80, duration: 1.5 }); // offset -80 ensures it stops exactly under your navbar
        }
      }
    };
    document.addEventListener("click", handleHashClick);

    // 3. Link Lenis requestAnimationFrame to the master GSAP Ticker
    const syncGsapTicker = (time) => {
      lenis.raf(time * 1000); // GSAP provides time in seconds, Lenis expects ms
    };
    gsap.ticker.add(syncGsapTicker);

    // Stop GSAP from attempting to lag-smooth, since Lenis now handles frame-rate drops directly
    gsap.ticker.lagSmoothing(0);

    // Cleanup physics loops upon component unmount
    return () => {
      document.removeEventListener("click", handleHashClick);
      lenis.destroy();
      gsap.ticker.remove(syncGsapTicker);
    };
  }, []);

  return (
    <>
      <CustomCursor />
      <Home />
    </>
  );
}

export default App;
