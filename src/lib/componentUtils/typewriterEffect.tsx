"use client"
import { cn } from "../utils";
import { useAnimate, useInView, stagger, motion } from "motion/react";
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
        "inline-block text-base sm:text-xl md:text-3xl lg:text-5xl font-bold text-center",
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
          "inline-block rounded-sm w-[4px] h-4 md:h-6 lg:h-10 bg-blue-500",
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
  // split text inside of words into array of characters
  const wordsArray = words.map((word) => {
    return {
      ...word,
      text: word.text.split(""),
    };
  });

  const renderWords = () => {
    return (
      <span>
        {wordsArray.map((word, idx) => {
          return (
            <span key={`word-${idx}`} className="inline-block">
              {word.text.map((char, index) => (
                <span
                  key={`char-${index}`}
                  className={cn(`dark:text-white text-black`, word.className)}
                >
                  {char}
                </span>
              ))}
              &nbsp;
            </span>
          );
        })}
      </span>
    );
  };

  return (
    <span
      className={cn(
        "inline-flex items-baseline gap-1 font-bold",
        className
      )}
    >
      <motion.span
        className="overflow-hidden"
        initial={{ width: "0%" }}
        whileInView={{ width: "fit-content" }}
        transition={{
          duration: 2,
          ease: "linear",
          delay: 1,
        }}
      >
        <span
          className="inline"
          style={{ whiteSpace: "nowrap" }}
        >
          {renderWords()}
        </span>
      </motion.span>

      {/* cursor */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "inline-block align-baseline rounded-sm w-[4px] h-4 sm:h-6 xl:h-12 bg-blue-500",
          cursorClassName
        )}
      />
    </span>
  );
};
