"use client";

import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

interface LensProps {
  children: React.ReactNode;
  zoomFactor?: number;
  lensSize?: number;
  isStatic?: boolean;
  position?: { x: number; y: number };
}

export const Lens: React.FC<LensProps> = ({
  children,
  zoomFactor = 1.5,
  lensSize = 170,
  isStatic = false,
  position = { x: 200, y: 150 },
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  // const [isScrolling, setIsScrolling] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 100, y: 100 });
  const [smoothPosition, setSmoothPosition] = useState({ x: 100, y: 100 });

  // --- Scroll detection ---
  // useEffect(() => {
  //   let scrollTimeout: NodeJS.Timeout;

  //   const handleScroll = () => {
  //     setIsScrolling(true);
  //     clearTimeout(scrollTimeout);
  //     scrollTimeout = setTimeout(() => setIsScrolling(false), 150);
  //   };

  //   window.addEventListener("scroll", handleScroll, { passive: true });
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //     clearTimeout(scrollTimeout);
  //   };
  // }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    if (!isHovering) setIsHovering(true);
  };


  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  // --- Smooth follow effect ---
  useEffect(() => {
    let animationFrame: number;

    const lerp = (start: number, end: number, amt: number) =>
      start + (end - start) * amt;

    const animate = () => {
      setSmoothPosition((prev) => ({
        x: lerp(prev.x, isStatic ? position.x : mousePosition.x, 0.15),
        y: lerp(prev.y, isStatic ? position.y : mousePosition.y, 0.15),
      }));
      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [mousePosition, isStatic, position]);

  const lensX = smoothPosition.x;
  const lensY = smoothPosition.y;

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden rounded-lg z-20"
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      {/* Base content */}
     <motion.div 
      className={`transition-opacity duration-200 ${isHovering ? '' : 'opacity-100'}`}
      style={isHovering ? {
        maskImage: `radial-gradient(circle ${lensSize / 2}px at ${lensX}px ${lensY}px, transparent 100%, black 100%)`,
        WebkitMaskImage: `radial-gradient(circle ${lensSize / 2}px at ${lensX}px ${lensY}px, transparent 100%, black 100%)`,
      } : {}}
    >
      {children}
    </motion.div>

      {/* Lens effect */}
      <AnimatePresence>
        {isHovering  && (
          <motion.div
            key="lens"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute inset-0 overflow-hidden z-50 pointer-events-none"
            style={{
              maskImage: `radial-gradient(circle ${lensSize / 2}px at ${lensX}px ${lensY}px, black 100%, transparent 100%)`,
              WebkitMaskImage: `radial-gradient(circle ${lensSize / 2}px at ${lensX}px ${lensY}px, black 100%, transparent 100%)`,
              transformOrigin: `${lensX}px ${lensY}px`,
            }}
          >
            <div
              className="absolute inset-0"
              style={{
                transform: `scale(${zoomFactor})`,
                transformOrigin: `${lensX}px ${lensY}px`,
              }}
            >
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
