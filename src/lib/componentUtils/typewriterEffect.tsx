"use client"
import { cn } from "../utils";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

export const TypewriterEffect = ({ 
    words,
    className, 
    cursorClassName }: { 
        words: { text: string; className:string;}[];
        className?: string;
        cursorClassName?: string} ) => {

    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    useEffect(()=>{
               const word = words[currentWordIndex].text;
               let timeout: NodeJS.Timeout;

               if (!isDeleting && displayedText.length < word.length) {
                timeout = setTimeout(() => {
                    setDisplayedText(word.slice(0, displayedText.length + 1));
                }, 200);
                }else if (isDeleting && displayedText.length > 0) {
                    timeout = setTimeout(() => {
                        setDisplayedText(word.slice(0, displayedText.length - 1));
                    }, 100);
                } else if (!isDeleting && displayedText.length === word.length) {
                    timeout = setTimeout(() => setIsDeleting(true), 3200);
                } else if (isDeleting && displayedText.length === 0) {
                    setIsDeleting(false);
                    setCurrentWordIndex((prev) => (prev + 1) % words.length);
                }

                return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentWordIndex, words]);

    return (
    <span
      className={cn(
        "inline-block text-base sm:text-xl lg:text-3xl xl:text-5xl font-bold text-center",
        className
      )}
    >
      <span className={words[currentWordIndex].className}>
        {displayedText}
      </span>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "inline-block rounded-sm w-[4px] h-4 lg:h-6 xl:h-10 bg-blue-500",
          cursorClassName
        )}
      />
    </span>
  );
;
}

export const TypewriterEffectSmooth = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  const [typedCount, setTypedCount] = useState(0);

  // Flatten all characters including spaces
  const flatChars = words
    .map((word) => word.text.split(""))
    .reduce((acc, chars) => acc.concat(chars, [" "]), []);

  useEffect(() => {
    if (typedCount >= flatChars.length) return;
    const timer = setTimeout(() => setTypedCount((prev) => prev + 1), 50);
    return () => clearTimeout(timer);
  }, [typedCount, flatChars.length]);

  let remaining = typedCount;

  return (
    <span className={className} style={{ display: "inline-flex", flexWrap: "wrap" }}>
      {words.map((word, wordIdx) => {
        const wordChars = word.text.split("");
        if (remaining <= 0) return null;

        const charsToRender = wordChars.slice(0, remaining);
        remaining -= charsToRender.length + 1; // +1 for space
        return (
          <motion.span
            key={wordIdx}
            className={word.className}
            style={{ display: "inline-flex" }}
          >
            {charsToRender.map((char, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, y: -2 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.05 }}
              >
               {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
            &nbsp;
          </motion.span>
        );
      })}
      <motion.span
        className={cursorClassName}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 1 }}
      >
        |
      </motion.span>
    </span>
  );
};