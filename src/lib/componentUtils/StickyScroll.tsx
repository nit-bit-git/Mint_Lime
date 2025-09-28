"use client";
import React, { useRef, useState, useMemo } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { Heading, Paragraph } from "./text";

interface StickyScrollContent {
  title: string;
  description: string;
  content?: React.ReactNode;
}

interface StickyScrollProps {
  content: StickyScrollContent[];
  contentClassName?: string;
}

export const StickyScroll: React.FC<StickyScrollProps> = ({
  content,
  contentClassName,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [activeCard, setActiveCard] = useState(0);
  const activeCardRef = useRef<number>(0);

  const backgroundColors = useMemo(
    () => ["#0f172a", "#000000", "#171717"],
    []
  );

  const linearGradients = useMemo(
    () => [
      "linear-gradient(135deg, #06b6d4 0%, #10b981 100%)",
      "linear-gradient(135deg, #ec4899 0%, #6366f1 100%)",
      "linear-gradient(135deg, #f97316 0%, #eab308 100%)",
    ],
    []
  );

  // Update active card only if it actually changes
  const handleCardEnter = (index: number) => {
    if (activeCardRef.current !== index) {
      activeCardRef.current = index;
      setActiveCard(index);
    }
  };

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      transition={{
        backgroundColor: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
      }}
      className="flex flex-row-reverse w-full justify-between  h-full min-h-screen overflow-y-auto px-5 lg:px-0"
      ref={ref}
    >
      {/* Text Section */}
      <div className="flex justify-between">
        <div className="w-full max-w-2xl pr-8 lg:pr-12 lg:py-6">
          {content.map((item, index) => (
            <motion.div
              key={`${item.title}-${index}`}
              className="mb-10 lg:mb-16 lg:mb-32 first:mt-16"
              initial={{ opacity: 0.5 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, amount: 0.6 }}
              onViewportEnter={() => handleCardEnter(index)}
            >
              <motion.div
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                  x: activeCard === index ? 0 : 20,
                  scale: activeCard === index ? 1 : 0.98,
                }}
                transition={{
                  duration: 0.6,
                  ease: [0.25, 0.1, 0.25, 1],
                  delay: activeCard === index ? 0.1 : 0,
                }}
              >
                <Heading
                  size="5xl"
                  color="text-white"
                  className=" mb-6 font-bold tracking-tight"
                >
                  {item.title}
                </Heading>

                <Paragraph
                  size="lg"
                  color="text-slate-300"
                  className=" leading-relaxed max-w-lg opacity-90 text-justify lg:text-base"
                >
                  {item.description}
                </Paragraph>
              </motion.div>
            </motion.div>
          ))}
          
        </div>
      </div>

      {/* Fixed Content Section */}
      {content[activeCard].content && (
        <div className="sticky top-10 hidden h-full w-[40%] overflow-hidden bg-white/20  lg:block">
          <motion.div
            key={activeCard}
            initial={{
              opacity: 0,
              scale: 0.8,
              rotateY: -15,
              z: -100,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              rotateY: 0,
              z: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.9,
              rotateY: 15,
              z: 100,
            }}
            transition={{
              duration: 0.6,
              ease: [0.25, 0.1, 0.25, 1],
              opacity: { duration: 0.3 },
              scale: { duration: 0.4 },
              rotateY: { duration: 0.5 },
            }}
            style={{
              background: linearGradients[activeCard % linearGradients.length],
              perspective: "1000px",
              transformStyle: "preserve-3d",
            }}
            className={cn(
              "relative h-full w-full overflow-hidden shadow-2xl",
              "border border-white/10 backdrop-blur-sm",
              contentClassName
            )}
            whileHover={{
              scale: 1.02,
              rotateY: 2,
              transition: { duration: 0.2 },
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="h-full w-full z-10"
            >
              {content[activeCard].content}
            </motion.div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
          </motion.div>
        </div>
      )}
    </motion.div>
  );
};
