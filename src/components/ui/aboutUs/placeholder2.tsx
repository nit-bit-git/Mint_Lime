import React from "react";
import Image from "next/image";
import { Icon } from "@/lib/componentUtils/placeholder";
import { cn } from "@/lib/utils";
import { AspectRatio } from "@/lib/aspectRatio";
 
export function WhyChooseUsCards({ className }: { className: string }) {
  return (
    <main className={cn("", className)}>
      {[
        { src: "/images/page2/buildForGrowth.svg", title: "We fuel growth", tag: "your growth story, powered by MintLime." },
        { src: "/images/page2/deliverabledriven.svg", title: "Fresh ideas served daily.", tag: "Ideas brewed fresh, just for you" },
        { src: "/images/page2/flexibilitytransparency.svg", title: "Transparency you can trust.", tag: "where transparency meets reliability" }
      ].map((item, i) => (
        <div
          key={i}
          className="relative max-h-[25rem] w-full max-w-sm mx-auto border border-black/[0.2] dark:border-white/[0.2] overflow-hidden rounded-xl"
        >
          {/* Decorative Icons */}
          <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
          <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
          <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
          <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

          {/* Background Image */}
          <AspectRatio ratio={3/3}>
          <Image
            src={item.src}
            alt={item.title}
            fill
            priority
            className="object-contain"
          />
            </AspectRatio>
          {/* Overlay Text */}
          <div className="absolute bottom-0 w-full pt-4">
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent blur-2xl"></div>
            <div className="relative z-10">
                
            <span className="absolute bottom-0 w-full bg-slate-900/60 p-5 rounded-t-xl"><h2 className="text-white text-base font-medium">{item.title}</h2>
            <p className="inline-block mt-2 text-sm italic font-light rounded-full px-3 py-1 text-white">
              {item.tag}
            </p>
            </span>    
            
            </div>
            
          </div>
        </div>
      ))}
    </main>
  );
}
