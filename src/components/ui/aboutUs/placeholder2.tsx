import React from "react";
import Image from "next/image";
import { Icon } from "@/lib/componentUtils/placeholder";
import { cn } from "@/lib/utils";
import { AspectRatio } from "@/lib/aspectRatio";
 
export function WhyChooseUsCards({ className }: { className: string }) {
  return (
    <main className={cn("grid gap-6 sm:grid-cols-2 lg:grid-cols-3", className)}>
      {[
        { src: "/images/page2/buildForGrowth.svg", title: "Thirsty? don't worry we got you covered.", tag: "Check me out" },
        { src: "/images/page2/deliverabledriven.svg", title: "Fresh ideas served daily.", tag: "Learn more" },
        { src: "/images/page2/flexibilitytransparency.svg", title: "Transparency you can trust.", tag: "Explore" }
      ].map((item, i) => (
        <div
          key={i}
          className="relative h-[30rem] w-full max-w-sm mx-auto border border-black/[0.2] dark:border-white/[0.2] overflow-hidden rounded-xl"
        >
          {/* Decorative Icons */}
          <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
          <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
          <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
          <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

          {/* Background Image */}
          <AspectRatio ratio={3/4}>
          <Image
            src={item.src}
            alt={item.title}
            fill
            priority
            className="object-cover"
          />
            </AspectRatio>
          {/* Overlay Text */}
          <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 via-black/30 to-transparent p-4 backdrop-blur-sm">
            <h2 className="text-white text-base font-medium">{item.title}</h2>
            <p className="inline-block mt-2 text-sm border font-light border-white/50 rounded-full px-3 py-1 text-white">
              {item.tag}
            </p>
          </div>
        </div>
      ))}
    </main>
  );
}
