import { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
  const cursorDotRef = useRef(null);
  const cursorOutlineRef = useRef(null);
  
  // Track mouse and outline positions with refs to avoid re-renders on every frame
  const mouse = useRef({ x: 0, y: 0 });
  const outline = useRef({ x: 0, y: 0 });
  
  const [isHovering, setIsHovering] = useState(false);
  const requestRef = useRef();

  useEffect(() => {
    // 1. Mouse movement listener
    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      // The dot follows the mouse instantly
      if (cursorDotRef.current) {
        cursorDotRef.current.style.left = `${e.clientX}px`;
        cursorDotRef.current.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    // 2. Animation loop for the trailing outline
    const animateOutline = () => {
      let distX = mouse.current.x - outline.current.x;
      let distY = mouse.current.y - outline.current.y;

      // 0.15 is the speed. Lower = slower/more drag, Higher = faster/tighter
      outline.current.x += distX * 0.15;
      outline.current.y += distY * 0.15;

      if (cursorOutlineRef.current) {
        cursorOutlineRef.current.style.left = `${outline.current.x}px`;
        cursorOutlineRef.current.style.top = `${outline.current.y}px`;
      }

      requestRef.current = requestAnimationFrame(animateOutline);
    };

    // Start the animation loop
    requestRef.current = requestAnimationFrame(animateOutline);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  // 3. Hover effects via event delegation (handles dynamic React elements better)
  useEffect(() => {
    const handleMouseOver = (e) => {
      // Check if hovering over interactive elements
      if (
        e.target.tagName?.toLowerCase() === 'a' ||
        e.target.tagName?.toLowerCase() === 'button' ||
        e.target.closest('a') ||
        e.target.closest('button') ||
        e.target.closest('.hover-target')
      ) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = (e) => {
      if (
        e.target.tagName?.toLowerCase() === 'a' ||
        e.target.tagName?.toLowerCase() === 'button' ||
        e.target.closest('a') ||
        e.target.closest('button') ||
        e.target.closest('.hover-target')
      ) {
        setIsHovering(false);
      }
    };

    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  // Tailwind CSS classes for the cursor pieces
  // Base fixed positioning, centering, z-index, blend mode, and disable pointer events
  const baseStyles = "fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none mix-blend-difference z-[9999]";

  return (
    <>
      <div 
        ref={cursorDotRef}
        className={`${baseStyles} w-2 h-2 bg-[#c9a84c]`}
      />
      <div 
        ref={cursorOutlineRef}
        className={`${baseStyles} transition-[width,height,background-color,border-color] duration-200 ease-out flex items-center justify-center
          ${isHovering 
            ? 'w-[60px] h-[60px] bg-[#c9a84c]/10 border-transparent' 
            : 'w-10 h-10 border border-[#c9a84c]/50 bg-transparent'
          }`}
      />
    </>
  );
};

export default CustomCursor;
