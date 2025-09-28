import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/lib/mediaQuery";
import { motion } from "motion/react";
 

export function WhyChooseUsCards({ className }: { className?: string }) {
  const isMobile = useMediaQuery("(max-width: 768px)");

  const cards = [
    { 
      src: "/images/page2/buildForGrowth.svg", 
      title: "We fuel growth", 
      tag: "your growth story, powered by MintLime." 
    },
    { 
      src: "/images/page2/deliverabledriven.svg", 
      title: "Fresh ideas served daily.", 
      tag: "Ideas brewed fresh, just for you" 
    },
    { 
      src: "/images/page2/flexibilitytransparency.svg", 
      title: "Transparency you can trust.", 
      tag: "where transparency meets reliability" 
    }
  ];

  return (
    <main className={cn("w-full", className)}>
      <div className={cn(
        "grid gap-6 md:gap-8 p-4 md:p-6",
        isMobile 
          ? "grid-cols-1 max-w-sm mx-auto" 
          : "grid-cols-1 lg:grid-cols-3 max-w-6xl mx-auto"
      )}>
        {cards.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -4, scale: isMobile ? 1 : 1.02 }}
            className={cn(
              "relative group cursor-pointer border border-black/[0.2] dark:border-white/[0.2] overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300",
              isMobile 
                ? "w-full max-w-[320px] mx-auto" 
                : "w-full max-w-sm mx-auto h-[400px]"
            )}
          >

            {/* Background Image */}
            <div className={cn(
              "relative overflow-hidden",
              isMobile ? "h-[200px]" : "h-[280px]"
            )}>
              <Image
                src={item.src}
                alt={item.title}
                fill
                priority
                className="object-contain group-hover:scale-105 transition-transform duration-300"
                sizes={isMobile ? "320px" : "(max-width: 1024px) 50vw, 33vw"}
              />
            </div>

            {/* Overlay Text */}
            <div className="absolute bottom-0 w-full">
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              
              {/* Content Container */}
              <div className="relative z-10 p-4 md:p-6">
                <motion.h2 
                  className={cn(
                    "text-white font-semibold mb-2 leading-tight",
                    isMobile ? "text-lg" : "text-xl"
                  )}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  {item.title}
                </motion.h2>
                
                <motion.p 
                  className={cn(
                    "text-white/90 italic font-light leading-relaxed",
                    isMobile ? "text-sm" : "text-base"
                  )}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                >
                  {item.tag}
                </motion.p>
              </div>
            </div>

            {/* Hover Effect Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 via-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          </motion.div>
        ))}
      </div>
    </main>
  );
}