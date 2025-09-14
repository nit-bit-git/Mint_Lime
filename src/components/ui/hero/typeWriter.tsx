"use client"
import { cn } from "@/lib/utils"
import { Heading } from "@/lib/componentUtils/text";
import { TypewriterEffect } from "@/lib/componentUtils/typewriterEffect";


const words = [{ text: "Design .", className: "" }, { text: "Code .", className: "" }, { text: "Automate .", className: ""}];
export const Line1 = ({className}: {className: string}) => {
    return (     
        <div className={cn("inline-block", className)}>
        <Heading level={1} size="5xl" color=" text-white" className="z-10" weight="extrabold">
          We {"{"}<TypewriterEffect words = {words} />{"}"} {"=>"} Your Success STORY
        </Heading> 
        </div>
    );
}