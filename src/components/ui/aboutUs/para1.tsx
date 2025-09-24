import { Paragraph } from "@/lib/componentUtils/text";
import { cn } from "@/lib/utils";
export const WhoUsContent = ({className}: {className?: string}) => {
    return (     
        <div className={cn("inline-block w-fit", className)}>
         <span className="float-left">
             <Paragraph  size="xl" color=" text-white" className="z-10" weight="bold">
               We’re Mint Lime — a team of tech creatives with a taste for bold ideas and smarter execution. We don’t just imagine better businesses; we build them.
               <br/> Our toolkit? Development, design, AI, and marketing.<br/> Our goal? Digital platforms that feel fresh today, scale tomorrow, and leave a lasting mark. <br/>Whether it’s a website, a brand identity, or a growth strategy, we shape ideas into results with precision and creativity.
            </Paragraph>
        </span>        
        </div>
    );
}