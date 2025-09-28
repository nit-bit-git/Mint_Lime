"use client";
import React from "react";
import { StickyScroll } from "@/lib/componentUtils/StickyScroll";
import { cn } from "@/lib/utils";
import { Heading } from "@/lib/componentUtils/text";


const content = [
 
   {
    title: "We refresh business",
    description:
      "It may be bold to say “refresh business” but we stick to our word. Every business is ever changing and a “refresh” is always something you would look for. We transform your challenges into fresh, scalable platforms built for an ever-changing pace.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
       
      </div>
    ),
  },
  {
    title: "We build bold brands",
    description:
      "Your brand is more than a logo, we believe we are capable for shaping experiences that earn trust and loyalty",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
        {/* Version control */}
      </div>
    ),
  },
  {
    title: "We automate the boring",
    description: "Obviously repetitive work does get tiring along the line, we can help automate those things for you because money is time yes?",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        {/* Running out of content */}
      </div>
    ),
  },
  {
    title: "We engineer reliability",
    description: "Your business should not collapse under traffic or pressure, so we make sure yours stay alive and balanced when things might go under the weather.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        {/* Running out of content */}
      </div>
    ),
  },
  {
    title: "We fuel growth",
    description: "It's not just the success we make for your business, it's also about the growth, partnership, business know-how and the friendship you can count on.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        {/* Running out of content */}
      </div>
),
},
];

export const WeDo = ({ className }: { className?: string }) => {
  // const ref = useRef<HTMLDivElement>(null);
  // const [isVisible, setIsVisible] = useState(false);

  // useEffect(() => {
  //   if (!ref.current) return;

  //   const observer = new IntersectionObserver(
  //     ([entry]) => setIsVisible(entry.intersectionRatio > 0.2),
  //     { threshold: [0, 0.2, 1] }
  //   );

  //   observer.observe(ref.current);
  //   return () => observer.disconnect();
  // }, []);

  return (
    <div className={cn(className, "relative w-full flex flex-col items-center justify-center")}>
      <Heading size="6xl" color="text-white" className="p-5" >
        WHAT WE DO ?
      </Heading>
      <StickyScroll content={content} contentClassName="shadow-xl w-full" />
    </div>
  );
};