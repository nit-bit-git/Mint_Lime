"use client"
import React,  { useState, useRef, useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight, Pause, Play, RotateCcw } from 'lucide-react';
import { mainCarouselSlides } from "@/constants/imageData";
type Slide = { 
                id: number,
                title: string,
                subtitle: string,
                image: string,
                color: string, 
                        }
class CarouselManager {
    originalSlides: any;
    queueSize: number;
    currentIndex: number;
    preloadedSlideImages: Set<number>;
    stack: Slide[];
    queue: Slide[];
    constructor( slides : Slide[], queueSize = 3) {
        this.originalSlides = slides;
        this.queueSize = Math.min(queueSize, slides.length);
        this.currentIndex = 0;
        this.preloadedSlideImages = new Set();
        this.queue = [];
        this.stack = [];
        this.initializeDataStructs();
    }
    initializeDataStructs() {
        this.stack = [...this.originalSlides].reverse();
        this.fillQueue();
        this.preloadImages();

    }
    fillQueue() {
        while(this.queue.length < this.queueSize && this.stack.length > 0) {
            this.queue.push(this.stack.pop()!);
        }
        // if(this.stack.length === 0 && this.queue.length > 0) {
        //     const remainingSlides = [...this.originalSlides].filter(slide => !this.queue.find(q => q.id === slide.id));
        //     this.stack = [...remainingSlides].reverse();
        //  }
    }

    //lazy load images
    preloadImages() {
        if (typeof window === 'undefined') return; // Only run in browser

        const slidesToPreload = this.queue.filter(Boolean);
        slidesToPreload.forEach(slide => {
            if (slide && slide.image && !this.preloadedSlideImages.has(slide.id)) {
                const img = new window.Image();
                img.src = slide.image;
                img.alt = slide.title;
                img.onload = () => {
                    this.preloadedSlideImages.add(slide.id);
                };
                img.onerror = (event) => {
                    // Optionally handle failed preload
                    console.warn(`Failed to preload image: ${slide.image}`, event, img);
                };
            }
        });
    }

    next(){
        if(this.queue.length === 0) return null;
        const currentSlide = this.queue.shift()
        this.stack.unshift(currentSlide!);
        this.currentIndex = (this.currentIndex + 1) % this.originalSlides.length;
        this.fillQueue();
        this.preloadImages(); // Preload new images    
        return this.getCurrentState();
    }

    prev(){
        if(this.queue.length === 0) return null;
        const currentSlide = this.stack.shift();
        this.queue.unshift(currentSlide!);
        this.currentIndex = (this.currentIndex - 1 + this.originalSlides.length) % this.originalSlides.length;
        this.fillQueue();
        this.preloadImages();
        return this.getCurrentState();
    }

    jumpToSlide(targetIndex : number) {
    if (targetIndex < 0 || targetIndex >= this.originalSlides.length) return null;
    
    // Reorder slides to put target slide first
    const reorderedSlides = [
      ...this.originalSlides.slice(targetIndex),
      ...this.originalSlides.slice(0, targetIndex)
    ];
    
    this.stack = [...reorderedSlides].reverse();
    this.queue = [];
    this.currentIndex = targetIndex;
    this.fillQueue();
    this.preloadImages();
    
    return this.getCurrentState();
  }

    reset() {
    this.currentIndex = 0;
    this.stack = [];
    this.queue = [];
    this.preloadedSlideImages.clear();
    this.initializeDataStructs();
    return this.getCurrentState();
  }
  
  getCurrentState() {
    return {
      current: this.queue[0] || null,
      upcoming: this.queue.slice(1),
      stack: [...this.stack],
      queue: [...this.queue],
      currentIndex: this.currentIndex,
      stackSize: this.stack.length,
      queueSize: this.queue.length,
      preloadedCount: this.preloadedSlideImages.size
    };
  }
}

// Optimized image component with lazy loading
const LazyImage = ({ src, alt, className, onLoad, onError }:{src: string; alt: string, className: string, onLoad?: ()=> void, onError?: ()=>void}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const imgRef = useRef(null);
  
  // Intersection Observer for lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (imgRef.current) {
      observer.observe(imgRef.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  const handleLoad = () => {
    setIsLoading(false);
    onLoad?.();
  };
  
  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
    onError?.();
  };
  
  return (
    <div ref={imgRef} className={`relative ${className}`}>
      {isIntersecting && !hasError && (
        <img
          src={src}
          alt={alt}
          className={`transition-opacity duration-300 ${
            isLoading ? 'opacity-0' : 'opacity-100'
          } ${className}`}
          onLoad={handleLoad}
          onError={handleError}
        />
      )}
      
      {isLoading && isIntersecting && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      
      {hasError && (
        <div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-500">
          Failed to load image
        </div>
      )}
    </div>
  );
};


const CarouselMain = ({
    slides = mainCarouselSlides,
    autoPlay = true, 
    interval = 4000,
    showDebug = false, 
    className = "h-full w-full"
}) =>{    

        const [dataManager] = useState(new CarouselManager(slides, 3));
        const [carouselState, setCarouselState] = useState(dataManager.getCurrentState());
        const [isAutoPlaying, setIsAutoPlaying] = useState< Boolean >(autoPlay);
        
        const autoPlayRef = useRef< NodeJS.Timeout | number | null >(null);
        
        const updateCarouselState = () => {
            setCarouselState(dataManager.getCurrentState());
        };
    //autoPlay 
        const startAutoPlay = useCallback(() => {
            if (isAutoPlaying) {
                autoPlayRef.current = setInterval(() => {
                    dataManager.next();
                    updateCarouselState();
                }, interval);
            }
        }, [isAutoPlaying, interval]);

        const stopAutoPlay = useCallback(()=>{
            if(autoPlayRef.current) 
                {
                    clearInterval(autoPlayRef.current);
                    autoPlayRef.current = null;
        
                }
        },[]);
        // autoPlay useEffect
        useEffect(() => {
            if (isAutoPlaying) {
                startAutoPlay();
            }else {
                stopAutoPlay();
            }

            return () => { 
                stopAutoPlay();
            }
        },[isAutoPlaying, startAutoPlay, stopAutoPlay] )

        const handleNext = () => {
            stopAutoPlay();
            dataManager.next();
            updateCarouselState();
            if (isAutoPlaying) setTimeout(startAutoPlay, 100);
        }

        const handlePrev = () => {
            stopAutoPlay();
            dataManager.prev();
            updateCarouselState();
            if (isAutoPlaying) setTimeout(startAutoPlay, 100);
        }

        const handleJumpToSlide = (index : number) => {
            stopAutoPlay();
            dataManager.jumpToSlide(index);
            updateCarouselState();
            if (isAutoPlaying) setTimeout(startAutoPlay, 100);
        }

        const handleReset = () => {
            stopAutoPlay();
            dataManager.reset();
            updateCarouselState();
            if (isAutoPlaying) setTimeout(startAutoPlay, 100);
        }

        if (!carouselState.current) return <div>No slides available</div>;
        return (
            <div className="w-full max-w-4xl  h-full mx-auto space-y-6">
             <div className="relative h-96 md:h-[500px] rounded-xl shadow-2xl overflow-hidden">
        {/* Current Slide */}
        <div className="relative w-full h-full">
          <LazyImage
            src={carouselState.current.image}
            alt={carouselState.current.title}
            className="w-full h-full object-cover"
          />
          <div className={`absolute inset-0  bg-gradient-to-r ${carouselState.current.color}/0.6`} />
          <div className="absolute inset-0 flex items-center justify-center text-center">
            <div className="text-white px-6">
              <h2 className="text-3xl md:text-5xl font-bold mb-2 drop-shadow-lg">
                {carouselState.current.title}
              </h2>
              <p className="text-lg md:text-xl opacity-90 drop-shadow-md">
                {carouselState.current.subtitle}
              </p>
            </div>
          </div>
        </div>
        
        {/* Navigation Controls */}
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-200"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-200"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
        
        {/* Control Panel */}
        <div className="absolute top-4 right-4 flex space-x-2">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-all duration-200"
          >
            {isAutoPlaying ? <Pause className="w-5 h-5 text-white" /> : <Play className="w-5 h-5 text-white" />}
          </button>
          
          <button
            onClick={handleReset}
            className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-all duration-200"
          >
            <RotateCcw className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
      
      {/* Slide Indicators */}
      <div className="flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleJumpToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              carouselState.currentIndex === index
                ? 'bg-blue-500 w-8'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
      
      {/* Upcoming Slides Preview */}
      <div className="bg-white rounded-lg shadow-lg p-4">
        <h4 className="font-semibold text-gray-800 mb-3">Upcoming Slides (Queue Preview)</h4>
        <div className="flex space-x-4 overflow-x-auto">
          {carouselState.upcoming.map((slide) => (
            <div key={slide.id} className={`flex-shrink-0 w-24 h-16 bg-gradient-to-r ${slide.color} rounded-lg flex items-center justify-center text-white text-sm font-semibold`}>
              {slide.title}
            </div>
          ))}
        </div>
      </div>
      </div>
        )
}

export default CarouselMain;