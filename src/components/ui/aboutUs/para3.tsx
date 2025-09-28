import { Lens } from "@/lib/componentUtils/lens";
import { Heading, Paragraph } from "@/lib/componentUtils/text";
import { useMediaQuery } from "@/lib/mediaQuery";
import { cn } from "@/lib/utils";
import { useState } from "react";

const valueContent = [
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
        ];
export const OurMissionContent = ({className}: {className?: string}) => {
    const [hovering, setHovering] = useState(false);
    const isMobile = useMediaQuery("(hover: none) and (pointer: coarse)");
    return (
  <div className={cn("w-full h-full inline-block", className)}>
    {/* Use Lens on lg+ screens */}
    <div className="hidden lg:block">
      <Lens hovering={hovering} setHovering={setHovering} lensSize={300}>
        <Content mode= {isMobile} />
      </Lens>
    </div>

    {/* Mobile / small screens */}
    <div className="block lg:hidden">
      <Content mode={isMobile} />
    </div>
  </div>
)     ;
}
// Extracted Content for reuse
const Content = ({mode}:{mode: boolean}) => (
  <div className="px-6 py-3 lg:px-12 lg:py-5">
    {/* Main Description */}
    {mode ? (
      <>
      <Paragraph
      size="lg"
      color="text-white"
      className="z-10 leading-relaxed text-justify lg:text-xl"
      weight="bold"
    >
      At Mint Lime, we empower businesses to overcome digital challenges by building scalable platforms, bringing designs to life with seamless user experiences, and navigating the AI-driven future. We turn data into actionable insights, maximize digital marketing impact, optimize processes for efficiency, and provide strategic guidance to drive informed decisions and sustainable growth.
    </Paragraph>

    {/* Values Section */}
    <div className="mt-8 lg:mt-10">
      <Heading
        size="2xl"
        color="text-white"
        className="z-10 mb-4 text-lg lg:text-xl"
        weight="bold"
      >
        Our Values
      </Heading>

      <ul className="list-disc list-inside space-y-4 text-white text-left">
        {valueContent.map((item, idx) => (
          <li
            key={idx}
            className="transition-all duration-200 hover:translate-x-1 hover:text-blue-400 focus:text-blue-400"
          >
            <span className="font-semibold">
              <Paragraph
                  size="lg"
                  color="text-white"
                  className="z-10 leading-relaxed text-base"
                  weight="bold"
                >
                  {item.title}
              </Paragraph>
              </span> 
          </li>
        ))}
      </ul>
    </div>
    </>  
    ) : (
      <>
      <Paragraph
      size="xl"
      color="text-white"
      className="z-10 leading-relaxed text-base lg:text-xl"
      weight="bold"
    >
      At Mint Lime, we empower businesses to overcome digital challenges by building scalable platforms, bringing designs to life with seamless user experiences, and navigating the AI-driven future. We turn data into actionable insights, maximize digital marketing impact, optimize processes for efficiency, and provide strategic guidance to drive informed decisions and sustainable growth.
    </Paragraph>

    {/* Values Section */}
    <div className="mt-8 lg:mt-10">
      <Heading
        size="4xl"
        color="text-white"
        className="z-10 mb-4 text-lg lg:text-xl"
        weight="bold"
      >
        Our Values
      </Heading>

      <ul className="list-disc list-inside space-y-4 text-white text-left">
        {valueContent.map((item, idx) => (
          <li
            key={idx}
            className="transition-all duration-200 hover:translate-x-1 hover:text-blue-400 focus:text-blue-400"
          >
            <span className="font-semibold">
              <Paragraph
                  size="xl"
                  color="text-white"
                  className="z-10 leading-relaxed text-base lg:text-xl"
                  weight="bold"
                >
                  {item.title}:
              </Paragraph>
            </span> <Paragraph>{item.description}</Paragraph>
          </li>
        ))}
      </ul>
    </div>
      </>
    )}
    
  </div>
);
