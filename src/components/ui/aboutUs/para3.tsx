import { Lens } from "@/lib/componentUtils/lens";
import { Paragraph } from "@/lib/componentUtils/text";
import { cn } from "@/lib/utils";
import { useState } from "react";
export const OurMissionContent = ({className}: {className?: string}) => {
    const [hovering, setHovering] = useState(false);
    
    return (
  <div className={cn("w-full h-full inline-block", className)}>
    {/* Use Lens on md+ screens */}
    <div className="hidden md:block">
      <Lens hovering={hovering} setHovering={setHovering} lensSize={300}>
        <Content />
      </Lens>
    </div>

    {/* Mobile / small screens */}
    <div className="block md:hidden">
      <Content />
    </div>
  </div>
)     ;
}
// Extracted Content for reuse
const Content = () => (
  <div className="px-6 py-8 md:px-12 md:py-10">
    {/* Main Description */}
    <Paragraph
      size="xl"
      color="text-white"
      className="z-10 leading-relaxed text-base md:text-xl"
      weight="bold"
    >
      At Mint Lime, we empower businesses to overcome digital challenges by building scalable platforms, bringing designs to life with seamless user experiences, and navigating the AI-driven future. We turn data into actionable insights, maximize digital marketing impact, optimize processes for efficiency, and provide strategic guidance to drive informed decisions and sustainable growth.
    </Paragraph>

    {/* Values Section */}
    <div className="mt-8 md:mt-10">
      <Paragraph
        size="xl"
        color="text-white"
        className="z-10 mb-4 text-lg md:text-xl"
        weight="bold"
      >
        Our Values
      </Paragraph>

      <ul className="list-disc list-inside space-y-4 text-white text-left">
        {[
          {
            title: "Quality First",
            description:
              "Prioritize delivering exceptional, high-caliber solutions that stand the test of time. Every project is executed with care, precision, and commitment.",
          },
          {
            title: "Purposeful Innovation",
            description:
              "We believe in driving progress with innovation that solves real-world challenges, not just for novelty. Every idea is carefully crafted to add lasting value.",
          },
          {
            title: "Customer-Focused Impact",
            description:
              "Clients’ success is our success. Listening, understanding, and partnership creates solutions that drive growth and elevate their business.",
          },
          {
            title: "Disciplined Execution",
            description:
              "Approach every project with structure, focus, and integrity, ensuring standards are maintained at every step, from conception to delivery.",
          },
        ].map((item, idx) => (
          <li
            key={idx}
            className="transition-all duration-200 hover:translate-x-1 hover:text-blue-400 focus:text-blue-400"
          >
            <span className="font-semibold">{item.title}:</span> {item.description}
          </li>
        ))}
      </ul>
    </div>
  </div>
);
