"use client";

import React, { createContext, useContext, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LogoSVG } from "@/components/ui/loaderLogo";
/**
 * Enhanced Production-Grade Screen Loader
 * Features:
 * - Waits for fonts, images, DOM content, and paint events
 * - Smooth entrance and exit animations
 * - Accessibility compliant
 * - Performance optimized with proper cleanup
 * - Visual feedback with progress indication
 * - Customizable branding and styling
 */

/* ----------------- Types & Context ----------------- */
interface LoaderContextState {
  isLoading: boolean;
  progress: number;
  forceHide: () => void;
  forceShow: () => void;
  setProgress: (progress: number) => void;
}

const LoaderContext = createContext<LoaderContextState | null>(null);

export const useLoader = () => {
  const ctx = useContext(LoaderContext);
  if (!ctx) throw new Error("useLoader must be used within LoaderProvider");
  return ctx;
};

/* ----------------- Enhanced Loading Helpers ----------------- */
const waitForWindowLoad = (timeoutMs: number): Promise<void> =>
  new Promise((resolve) => {
    if (typeof window === "undefined") return resolve();
    if (document.readyState === "complete") return resolve();
    
    const timer = setTimeout(resolve, timeoutMs);
    const onLoad = () => {
      clearTimeout(timer);
      resolve();
    };
    
    window.addEventListener("load", onLoad, { once: true });
  });

const waitForFonts = (timeoutMs: number): Promise<void> =>
  new Promise((resolve) => {
    if (typeof document === "undefined" || !("fonts" in document)) return resolve();
    
    const timer = setTimeout(resolve, timeoutMs);
    (document as any).fonts.ready
      .then(() => {
        clearTimeout(timer);
        resolve();
      })
      .catch(() => resolve());
  });

const waitForCriticalImages = (timeoutMs: number): Promise<void> =>
  new Promise((resolve) => {
    if (typeof document === "undefined") return resolve();
    const checkImages = () => {
      const regularImgs = Array.from(document.querySelectorAll("img[data-critical='true']")) as HTMLImageElement[];
      const nextImgs = Array.from(document.querySelectorAll("img[data-nimg], img[data-priority]")) as HTMLImageElement[];
      
      const criticalNextImgs = nextImgs.filter(img => 
        img.hasAttribute('data-priority') || 
        img.closest('[data-critical="true"]')
      );
      
      const allImgs = [...regularImgs, ...criticalNextImgs];
      
      console.log("Found critical images:", allImgs.length); // Debug log
      
      if (allImgs.length === 0) {
        // If no images found, wait a bit more and check again
        setTimeout(checkImages, 500);
        return;
      }

    let loaded = 0;
    const timer = setTimeout(resolve, timeoutMs);
    
    const checkComplete = () => {
      loaded++;
      if (loaded >= allImgs.length) {
        clearTimeout(timer);
        resolve();
      }
    };

    allImgs.forEach((img) => {
      if (img.complete && img.naturalWidth > 0) {
        checkComplete();
      } else {
        const onLoad = () => {
          img.removeEventListener("load", onLoad);
          img.removeEventListener("error", onLoad);
          checkComplete();
        };
        img.addEventListener("load", onLoad);
        img.addEventListener("error", onLoad);
      }
    });
    };
    setTimeout(checkImages, 1000);
    
    // Safety timeout
    setTimeout(resolve, timeoutMs);
  });

const waitForDOMContentLoaded = (timeoutMs: number): Promise<void> =>
  new Promise((resolve) => {
    if (typeof document === "undefined") return resolve();
    if (document.readyState === "loading") {
      const timer = setTimeout(resolve, timeoutMs);
      const onReady = () => {
        clearTimeout(timer);
        resolve();
      };
      document.addEventListener("DOMContentLoaded", onReady, { once: true });
    } else {
      resolve();
    }
  });

const waitForFirstPaint = (): Promise<void> =>
  new Promise((resolve) => {
    if (typeof window === "undefined") return resolve();
    
    // Use requestAnimationFrame to ensure at least one paint cycle
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        resolve();
      });
    });
  });

/* ----------------- Enhanced Provider ----------------- */
interface LoaderProviderProps {
  children?: React.ReactNode;
  timeoutMs?: number;
  minLoadTime?: number;
}

export const LoaderProvider: React.FC<LoaderProviderProps> = ({ 
  children, 
  timeoutMs = 8000, 
  minLoadTime = 800 
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const forced = useRef<{ hide: boolean }>({ hide: false });
  const startTime = useRef<number>(Date.now());

  useEffect(() => {
    let mounted = true;
    startTime.current = Date.now();
    
    const updateProgress = (value: number) => {
      if (mounted) setProgress(Math.min(value, 90)); // Cap at 90% until complete
    };

    const runLoadingSequence = async () => {
      try {
        const tasks = [
          waitForDOMContentLoaded(timeoutMs / 4),
          waitForFonts(timeoutMs / 2),
          waitForCriticalImages(timeoutMs),
          waitForWindowLoad(timeoutMs),
          waitForFirstPaint(),
        ];

        // Execute tasks with progress updates
        let completed = 0;
        const taskPromises = tasks.map((task) =>
          task.then(() => {
            completed++;
            updateProgress((completed / tasks.length) * 90);
          })
        );

        await Promise.all(taskPromises);

        if (!mounted || forced.current.hide) return;

        // Ensure minimum load time for smooth UX
        const elapsed = Date.now() - startTime.current;
        const remainingTime = Math.max(0, minLoadTime - elapsed);
        
        if (remainingTime > 0) {
          await new Promise(resolve => setTimeout(resolve, remainingTime));
        }

        if (mounted && !forced.current.hide) {
          setProgress(100);
          // Small delay to show 100% before hiding
          setTimeout(() => {
            if (mounted && !forced.current.hide) {
              setIsLoading(false);
            }
          }, 200);
        }
      } catch (error) {
        console.warn("Loading sequence error:", error);
        if (mounted) setIsLoading(false);
      }
    };

    runLoadingSequence();

    return () => { mounted = false; };
  }, [timeoutMs, minLoadTime]);

  const value: LoaderContextState = {
    isLoading,
    progress,
    setProgress,
    forceHide: () => {
      forced.current.hide = true;
      setProgress(100);
      setIsLoading(false);
    },
    forceShow: () => {
      forced.current.hide = false;
      startTime.current = Date.now();
      setProgress(0);
      setIsLoading(true);
    },
  };

  return <LoaderContext.Provider value={value}>{children}</LoaderContext.Provider>;
};

/* ----------------- Enhanced Loader UI ----------------- */
interface LoaderProps {
  brandName?: string;
  logoComponent?: React.ReactNode;
  theme?: 'light' | 'dark' | 'gradient' | 'gradient2';
  showProgress?: boolean;
}

export const Loader: React.FC<LoaderProps> = ({ 
  brandName = "MintLime",
  logoComponent,
  theme = 'dark',
  showProgress = true
}) => {
  const ctx = useContext(LoaderContext);
  const [shouldShow, setShouldShow] = useState(true);
  useEffect(() => {
    // Only hide if context says not loading
    if (ctx && !ctx.isLoading) {
      setShouldShow(false);
    }
  }, [ctx, ctx?.isLoading]);
  if (!ctx) {
    // Show a basic loader while context initializes
    return (
      <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }
  const { isLoading, progress } = ctx;
  const themeClasses = {
    light: "bg-white/95 text-slate-900",
    dark: "bg-slate-900/95 text-white",
    gradient: "bg-gradient-to-br from-gray-900 via-gray-950 to-black text-slate-100",
    gradient2:"bg-gradient-to-br from-gray-900 via-indigo-950 to-black text-slate-100"

  };

 const defaultLogo = (
  <motion.div
    className="relative"
    initial={{ scale: 0.8, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
  >
    <motion.div
      className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 via-green-200/80 to-teal-500 flex items-center justify-center shadow-2xl"
      animate={{ rotate: [0, 5, -5, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    >
      <motion.div
        className="w-10 h-10 text-white" // Adjust size as needed
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.3, duration: 0.4, type: "spring", stiffness: 200 }}
      >
        <LogoSVG className="w-full h-full" />
      </motion.div>
    </motion.div>
    
    {/* Animated ring - same as before */}
    <motion.div
      className="absolute inset-0 rounded-2xl border-2 border-blue-400/30"
      animate={{ 
        scale: [1, 1.1, 1],
        opacity: [0.5, 0.2, 0.5]
      }}
      transition={{ 
        duration: 2, 
        repeat: Infinity, 
        ease: "easeInOut",
        delay: 0.5
      }}
    />
  </motion.div>
 );

  return (
    <AnimatePresence mode="wait">
        <div className={`initial-loader ${!isLoading ? 'loaded' : ''}`}>
      {(isLoading || shouldShow) && (
        <motion.div
          key="screen-loader"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            scale: 0.95,
            filter: "blur(10px)"
          }}
          transition={{ 
            opacity: { duration: 0.3 },
            scale: { duration: 0.4 },
            filter: { duration: 0.4 }
          }}
          className={`fixed inset-0 z-[9999] flex items-center justify-center backdrop-blur-md ${themeClasses[theme]}`}
          role="dialog"
          aria-label="Loading application"
          aria-live="polite"
        >
          <div className="flex flex-col items-center justify-center gap-8 select-none">
            {/* Logo Section */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
              className="flex flex-col items-center gap-4"
            >
              {logoComponent || defaultLogo}
              
              
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-center"
              >
                <h1 className="text-3xl font-bold tracking-tight mb-2  text-green-500 ">
                  {brandName}
                </h1>
                <p className="text-sm opacity-70 font-medium  text-green-700">
                  Crafting digital experiences
                </p>
              </motion.div>
            </motion.div>

            {/* Progress Section */}
            {showProgress && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="flex flex-col items-center gap-4 min-w-[280px]"
              >
                {/* Progress Bar */}
                <div className="w-full h-1 bg-black/10 dark:bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-green-500 to-teal-500 rounded-full origin-left"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: progress / 100 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                </div>
                
                {/* Progress Text */}
                <motion.span 
                  className="text-xs font-mono opacity-60 tabular-nums"
                  key={progress} // Re-animate on change
                  initial={{ opacity: 0.4 }}
                  animate={{ opacity: 0.6 }}
                  transition={{ duration: 0.2 }}
                >
                  {Math.round(progress)}%
                </motion.span>
              </motion.div>
            )}

            {/* Animated Dots */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.4 }}
              className="flex items-center gap-1"
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 rounded-full bg-current opacity-40"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.4, 0.8, 0.4]
                  }}
                  transition={{
                    duration: 1.2,
                    delay: i * 0.2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </motion.div>
          </div>

          {/* Subtle background animation */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-current opacity-5 rounded-full"
                animate={{
                  x: [0, 100, -100, 0],
                  y: [0, -100, 100, 0],
                  opacity: [0, 0.1, 0],
                }}
                transition={{
                  duration: 8 + i,
                  delay: i * 1.2,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  left: `${20 + (i * 15)}%`,
                  top: `${30 + (i * 10)}%`,
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
      </div>
    </AnimatePresence>
  );
};

/* ----------------- Usage Example Component ----------------- */
