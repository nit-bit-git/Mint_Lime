"use client"
import React, { useState, useRef, useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight, Pause, Play, RotateCcw } from 'lucide-react';
import { mainCarouselSlides } from "@/constants/imageData";
import { AspectRatio } from "@/lib/aspectRatio";
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image";
import { useMediaQuery } from "@/lib/mediaQuery";
type Slide = { 
  id: number,
  title: string,
  subtitle: string,
  image: string,
  color: string,
}

// ---------------------- Carousel Manager ----------------------
class CarouselManager {
  originalSlides: Slide[];
  queueSize: number;
  currentIndex: number;
  preloadedSlideImages: Set<number>;
  queue2: Slide[];
  queue: Slide[];

  constructor(slides: Slide[], queueSize = 3) {
    this.originalSlides = slides;
    this.queueSize = Math.min(queueSize, slides.length);
    this.currentIndex = 0;
    this.preloadedSlideImages = new Set();
    this.queue = [];
    this.queue2 = [];
    this.initializeDataStructs();
  }

  initializeDataStructs() {
    this.queue2 = [...this.originalSlides].reverse();
    this.fillQueue();
  }

  fillQueue() {
    while(this.queue.length < this.queueSize && this.queue2.length > 0) {
      this.queue.push(this.queue2.pop()!);
    }
  }

  // Preload only the next slide to reduce CPU load
  preloadNextSlide() {
    if (typeof window === 'undefined') return;
    const nextSlide = this.queue[1];
    if (nextSlide && !this.preloadedSlideImages.has(nextSlide.id)) {
      const img = new window.Image();
      img.src = nextSlide.image;
      img.alt = nextSlide.title;
      img.onload = () => this.preloadedSlideImages.add(nextSlide.id);
    }
  }

  next() {
    if(this.queue.length === 0) return null;
    const currentSlide = this.queue.shift();
    this.queue2.unshift(currentSlide!);
    this.currentIndex = (this.currentIndex + 1) % this.originalSlides.length;
    this.fillQueue();
    this.preloadNextSlide();
    return this.getCurrentState();
  }

  prev() {
    if(this.queue.length === 0) return null;
    if(this.queue2.length === 0) {
      const remainingSlides = [...this.originalSlides]
        .filter(slide => !this.queue.find(q => q.id === slide.id))
        .sort((a,b) => b.id - a.id);
      this.queue2 = [...remainingSlides];
    }
    const upcomingSlide = this.queue2.shift();
    this.queue.unshift(upcomingSlide!);
    if(this.queue.length > this.queueSize) this.queue2.push(this.queue.pop()!);
    this.currentIndex = (this.currentIndex - 1 + this.originalSlides.length) % this.originalSlides.length;
    this.fillQueue();
    this.preloadNextSlide();
    return this.getCurrentState();
  }

  jumpToSlide(targetIndex: number) {
    if (targetIndex < 0 || targetIndex >= this.originalSlides.length) return null;
    const reorderedSlides = [
      ...this.originalSlides.slice(targetIndex),
      ...this.originalSlides.slice(0, targetIndex)
    ];
    this.queue2 = [...reorderedSlides].reverse();
    this.queue = [];
    this.currentIndex = targetIndex;
    this.fillQueue();
    this.preloadNextSlide();
    return this.getCurrentState();
  }

  reset() {
    this.currentIndex = 0;
    this.queue2 = [];
    this.queue = [];
    this.preloadedSlideImages.clear();
    this.initializeDataStructs();
    return this.getCurrentState();
  }

  getCurrentState() {
    return {
      current: this.queue[0] || null,
      upcoming: this.queue.slice(1),
      queue2: [...this.queue2],
      queue: [...this.queue],
      currentIndex: this.currentIndex,
      stackSize: this.queue2.length,
      queueSize: this.queue.length,
      preloadedCount: this.preloadedSlideImages.size
    };
  }
}

// ---------------------- Lazy Image Component ----------------------
const LazyImage = ({ src, alt, className, onLoad, onError }: { src: string; alt: string; className: string; onLoad?: ()=> void; onError?: ()=> void }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  return (
    <AspectRatio ratio={16/9}>
      {hasError ? (
        <div className="w-full h-full flex items-center justify-center text-gray-500">
          Failed to load image
        </div>
      ) : (
        <>
          <Image
            src={src}
            alt={alt}
            loading="lazy"
            className={`w-full h-auto max-h-[400px] object-cover transition-opacity duration-300 ${isLoading ? 'opacity-50' : 'opacity-100'} ${className}`}
            onLoad={handleLoad}
            onError={handleError}
            data-critical="true"
            fill
          />
          
        </>
      )}
    </AspectRatio>
  );
};

// ---------------------- Carousel Main ----------------------
const CarouselMain = ({
  slides = mainCarouselSlides,
  autoPlay = true, 
  interval = 4000,
  className = ""
}) => {    
  const [dataManager] = useState(new CarouselManager(slides, 3));
  const [carouselState, setCarouselState] = useState(dataManager.getCurrentState());
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(autoPlay);
  const autoPlayRef = useRef<NodeJS.Timeout | number | null>(null);
  const isMobile = useMediaQuery("(max-width: 768px)") ?? false;
   const updateCarouselState = useCallback(() => {
    setCarouselState(dataManager.getCurrentState());
  }, [dataManager]);
  const startAutoPlay = useCallback(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        dataManager.next();
        updateCarouselState();
      }, interval);
    }
  }, [dataManager, updateCarouselState, isAutoPlaying, interval]);

  const stopAutoPlay = useCallback(() => {
    if(autoPlayRef.current) {
      clearInterval(autoPlayRef.current as number);
      autoPlayRef.current = null;
    }
  }, []);

  useEffect(() => {
    if (isAutoPlaying) startAutoPlay();
    else stopAutoPlay();
    return () => stopAutoPlay();
  }, [isAutoPlaying, startAutoPlay, stopAutoPlay]);

  const handleNext = () => { stopAutoPlay(); dataManager.next(); updateCarouselState(); if (isAutoPlaying) setTimeout(startAutoPlay, 100); }
  const handlePrev = () => { stopAutoPlay(); dataManager.prev(); updateCarouselState(); if (isAutoPlaying) setTimeout(startAutoPlay, 100); }
  const handleJumpToSlide = (index: number) => { stopAutoPlay(); dataManager.jumpToSlide(index); updateCarouselState(); if (isAutoPlaying) setTimeout(startAutoPlay, 100); }
  const handleReset = () => { stopAutoPlay(); dataManager.reset(); updateCarouselState(); if (isAutoPlaying) setTimeout(startAutoPlay, 100); }

  if (!carouselState.current) return <div>No slides available</div>;

  return (
    <div className={`w-full h-full my-auto md:my-0 md:h-inherit relative max-w-4xl mx-auto ${className}`}>
  <div className="relative rounded-2xl shadow-2xl overflow-hidden">

    {/* Current Slide */}
    <div className="relative w-full h-full">
      <AnimatePresence mode="wait">
        <motion.div
          key={carouselState.current.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="relative w-full"
        >
          <LazyImage
            src={carouselState.current.image}
            alt={carouselState.current.title}
            className="w-full"
          />
          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-black/30" />
          {/* Text content */}
          <div className="absolute inset-0 flex items-center justify-center text-center px-6">
            <div className="text-white max-w-3xl">
              <motion.h2
                key={carouselState.current.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-3xl md:text-5xl font-extrabold mb-2 drop-shadow-lg"
              >
                {carouselState.current.title}
              </motion.h2>
              <motion.p
                key={carouselState.current.subtitle}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
                className="text-lg md:text-xl opacity-90 drop-shadow-md"
              >
                {carouselState.current.subtitle}
                
              </motion.p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>

    {/* Navigation Buttons */}
    { isMobile ? (
      <>
      </>
    ) : (
      <>
    <motion.button
      onClick={handlePrev}
      whileHover={{ scale: 1.15 }}
      className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 backdrop-blur-md rounded-full p-3 shadow-lg transition-all duration-300 pointer-events-auto"
    >
      <ChevronLeft className="w-6 h-6 text-black" />
    </motion.button>
    <motion.button
      onClick={handleNext}
      whileHover={{ scale: 1.15 }}
      className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 backdrop-blur-md rounded-full p-3 shadow-lg transition-all duration-300 pointer-events-auto"
    >
      <ChevronRight className="w-6 h-6 text-black" />
    </motion.button>
  </>)}

    {/* Control Panel */}
    <div className="absolute top-4 right-4 flex space-x-3 pointer-events-auto">
      { isMobile ? (
      <>
      </>
    ) : (
      <>
      <motion.button
        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
        whileHover={{ scale: 1.15 }}
        className="bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full p-2 shadow-lg transition-all duration-300 pointer-events-auto"
      >
        {isAutoPlaying ? <Pause className="w-5 h-5 text-black" /> : <Play className="w-5 h-5 text-black" />}
      </motion.button>
      <motion.button
        onClick={handleReset}
        whileHover={{ scale: 1.15 }}
        className="bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full p-2 shadow-lg transition-all duration-300 pointer-events-auto"
      >
        <RotateCcw className="w-5 h-5 text-black" />
      </motion.button>
      </>)}
    </div>

    {/* Slide Indicators */}
    { isMobile ? (
      <>
      </>
    ) : (
      <div className="absolute bottom-6 flex w-full justify-center space-x-2 pointer-events-auto">
      {slides.map((_, index) => (
        <motion.button
          key={index}
          onClick={() => handleJumpToSlide(index)}
          animate={{ scale: carouselState.currentIndex === index ? 1.3 : 1 }}
          className={`rounded-full transition-all duration-300 pointer-events-auto ${carouselState.currentIndex === index 
            ? 'bg-blue-500 w-6 h-6 shadow-md' 
            : 'bg-white/50 w-3 h-3 hover:bg-white/70'}`}
        />
      ))}
    </div> )}
  </div>
</div>
  );
};

export default CarouselMain;
