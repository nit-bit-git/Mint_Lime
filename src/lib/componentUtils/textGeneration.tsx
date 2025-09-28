"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "motion/react";
import { cn } from "@/lib/utils";
import { Paragraph } from "./text";
import { useMediaQuery } from "../mediaQuery";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  delay = 0.4, // in seconds
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  delay?: number;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");
  const isMobile = useMediaQuery("(max-width: 768px)")
  useEffect(() => {
    const timeout = setTimeout(() => {
      animate(
        "span",
        { opacity: 1, filter: filter ? "blur(0px)" : "none" },
        { duration: duration ?? 1, delay: stagger(0.2) }
      );
    }, delay * 1000);

    return () => clearTimeout(timeout);
  }, [words, animate, filter, duration, delay]);

  const renderWords = () => (
    <motion.div ref={scope}>
      {wordsArray.map((word, idx) => (
        <motion.span
          key={word + idx}
          className="text-white opacity-0"
          style={{
            filter: filter ? "blur(10px)" : "none",
          }}
        >
          
          {isMobile ? (
            <Paragraph className="inline-block" color="text-white" size="sm">
            {word}&nbsp;
          </Paragraph>
          ) : (
            <Paragraph className="inline-block" color="text-white" size="lg">
            {word}&nbsp;
          </Paragraph>
          )}
          
        </motion.span>
      ))}
    </motion.div>
  );

  return (
    <div className={cn("font-bold", className)}>
        <div className="dark:text-white text-2xl leading-snug tracking-wide">
          {renderWords()}
          
      </div>
    </div>
  );
};
