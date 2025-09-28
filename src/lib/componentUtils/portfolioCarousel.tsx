"use client";
import Image from "next/image";
import { cn } from "@/lib/utils";
import React, { useCallback, useEffect, useState } from "react";
import { motion } from "motion/react";
import { Heading, Paragraph } from "./text";

export interface PortfolioCard {
  title: string;
  image: string;
  content: () => React.ReactNode;
}
export interface PortfolioMobileProps {
  cards: PortfolioCard[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  className?: string;
}
export function PortfolioMobile({ 
  cards,
  direction = "left",
  speed = "slow",
  className 
}: PortfolioMobileProps) {
  return (
    <div className={cn(
      "h-full flex flex-col antialiased bg-transparent items-center justify-center relative overflow-hidden py-4",
      className
    )}>
      {/* Compact Header */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-4 px-4"
      >
        <Heading size="xl" className="mb-2 bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 bg-clip-text text-transparent">
          Our Notable Works
        </Heading>
        <Paragraph size="sm" className="text-gray-600">
          Innovative mobile-first solutions
        </Paragraph>
      </motion.div>

      {/* Mobile-Optimized Cards */}
      <MobileInfiniteCards
        items={cards}
        direction={direction}
        speed={speed}
      />
    </div>
  );
}


export const MobileInfiniteCards = ({
  items,
  direction = "left",
  speed = "fast",
  className,
}: {
  items: PortfolioCard[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const addAnimation = useCallback(() => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      // Set direction
      containerRef.current.style.setProperty(
        "--animation-direction", 
        direction === "left" ? "forwards" : "reverse"
      );

      // Set mobile-optimized speed (slower for better readability)
      const speeds = {
        fast: "40s",
        normal: "60s", 
        slow: "90s"
      };
      containerRef.current.style.setProperty("--animation-duration", speeds[speed]);

      setStart(true);
    }
  }, [direction, speed]);

  useEffect(() => {
    addAnimation();
  }, [addAnimation]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-full overflow-hidden",
        "[mask-image:linear-gradient(to_right,transparent,white_5%,white_95%,transparent)]",
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() =>{setTimeout(() => setIsPaused(false), 2000)}}
        onTouchCancel={() => {setTimeout(() => setIsPaused(false), 1000)}}
        onClick={() => setIsPaused(!isPaused)}
        onMouseUp={() => setIsPaused(false)}
        onMouseLeave={() => setIsPaused(false)}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-3 py-3",
          start && "animate-scroll",
          isPaused && "[animation-play-state:paused]",
        )}
      >
        {items.map((item, idx) => (
          <li
            className="relative w-[260px] max-w-[260px] shrink-0"
            key={`${item.title}-${idx}`}
          >
            <div className="relative h-[320px] rounded-xl overflow-hidden shadow-md bg-white/90 backdrop-blur-sm border border-white/30">
              
              {/* Compact Image Section */}
              <div className="relative h-[45%] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="260px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>

              {/* Content Section - Optimized for small screens */}
              <div className="absolute bottom-0 left-0 right-0 h-[55%] p-3 bg-gradient-to-t from-black/95 via-black/85 to-transparent text-white flex flex-col justify-end">
                
                {/* Title */}
                <h3 className="text-sm font-bold mb-2 leading-tight line-clamp-2">
                  {item.title}
                </h3>

                {/* Content - Heavily truncated for mobile */}
                <div className="text-xs leading-relaxed text-white/90 line-clamp-3 overflow-hidden">
                  {item.content()}
                </div>

                {/* Small accent line */}
                <div className="mt-2 w-8 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full" />
              </div>

              {/* Subtle mobile interaction indicator */}
              <div className="absolute top-2 right-2 w-2 h-2 bg-white/40 rounded-full animate-pulse" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};