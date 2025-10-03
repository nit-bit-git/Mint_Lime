"use client"
import { cn } from "@/lib/utils"
import { Heading } from "@/lib/componentUtils/text";
import { TypewriterEffectSmooth} from "@/lib/componentUtils/typewriterEffect";
import { useMediaQuery } from "@/lib/mediaQuery";

const words = [
{ text: "Crafting", className: "" },
{ text: "digital", className: "" },
{ text: "solutions", className: "" },
{ text: "that", className: "" },
{ text: "are", className: "" },
{ text: "fresh", className: "text-slate-400" }, // mint-lime accent\
{ text: "today", className: "text-slate-400" },
{ text: "and", className: "" },
{ text: "future-ready", className: "text-slate-400" },
{ text: "tomorrow", className: "text-slate-400" }
];
export const Line1 = ({className}: {className: string}) => {
    const isMobile = useMediaQuery("(hover: none) and (pointer: coarse)");
    return (     
        <div className={cn("inline-block", className)}>
          {isMobile ? (
            <>
            <Heading level={1} size="sm" color=" text-white" className="z-10 h-full italic max-w-full flex flex-col items-center justify-center" weight="extrabold">
            <TypewriterEffectSmooth className="h-full w-full " words = {words} />&nbsp; 
          </Heading> 
            </>):(
              <>
              <Heading level={4} size="xl" color=" text-white" className="z-10 whitespace-normal break-words h-fit italic w-full" weight="extrabold">
                <TypewriterEffectSmooth className="h-full w-full" words = {words} />&nbsp; 
              </Heading> 
              </>
            )}
        
        </div>
    );
}