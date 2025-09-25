"use client"
import { cn } from "@/lib/utils"
import { Heading } from "@/lib/componentUtils/text";
import { TypewriterEffectSmooth} from "@/lib/componentUtils/typewriterEffect";

const words = [
{ text: "Crafting digital solutions that are", className: "" },
  { text: "fresh today", className: "text-slate-400" }, // mint-lime accent
  { text: "and", className: "" },
  { text: "future-ready tomorrow", className: "text-slate-400" }
];
export const Line1 = ({className}: {className: string}) => {
    return (     
        <div className={cn("inline-block", className)}>
        <Heading level={1} size="lg" color=" text-white" className="z-10 whitespace-normal break-words h-fit italic w-full" weight="extrabold">
          <TypewriterEffectSmooth className="h-full w-full" words = {words} />&nbsp; 
        </Heading> 
        </div>
    );
}