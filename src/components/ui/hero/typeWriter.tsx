"use client"
import { cn } from "@/lib/utils"
import { Heading } from "@/lib/componentUtils/text";
import { TypewriterEffectSmooth} from "@/lib/componentUtils/typewriterEffect";

const words = [
  { text: "Design", className: "" },
  { text: "·", className: "text-green-400" }, // mint-lime accent
  { text: "Code", className: "" },
  { text: "·", className: "text-green-400" },
  { text: "Automate", className: "" }
];
export const Line1 = ({className}: {className: string}) => {
    return (     
        <div className={cn("inline-block", className)}>
        <Heading level={1} size="4xl" color=" text-white" className="z-10" weight="extrabold">
          We <TypewriterEffectSmooth words = {words} />&nbsp; {"→"} Your Success Story 
        </Heading> 
        </div>
    );
}