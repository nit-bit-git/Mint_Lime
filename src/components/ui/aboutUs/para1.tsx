import { Paragraph } from "@/lib/componentUtils/text";
import { useMediaQuery } from "@/lib/mediaQuery";
import { cn } from "@/lib/utils";
export const WhoUsContent = ({className}: {className?: string}) => {
    const isMobile = useMediaQuery("(max-width: 768px)");
    return (     
        <div className={cn("inline-block w-full md:w-fit", className)}>
         <span className="flex flex-col items-center justify-center text-justify md:float-left">
            { isMobile ? (
                <Paragraph  size="md" color=" text-white" className="z-10" weight="bold">
               We&apos;re Mint Lime — a team of tech creatives with a taste for bold ideas and smarter execution. We don&apos;t just imagine better businesses; we build them.
               <br/> Our toolkit? Development, design, AI, and marketing.<br/> Our goal? Digital platforms that feel fresh today, scale tomorrow, and leave a lasting mark. <br/>Whether it&apos;s a website, a brand identity, or a growth strategy, we shape ideas into results with precision and creativity.
            </Paragraph>
            ):(
                <Paragraph  size="xl" color=" text-white" className="z-10" weight="bold">
               We&apos;re Mint Lime — a team of tech creatives with a taste for bold ideas and smarter execution. We don&apos;t just imagine better businesses; we build them.
               <br/> Our toolkit? Development, design, AI, and marketing.<br/> Our goal? Digital platforms that feel fresh today, scale tomorrow, and leave a lasting mark. <br/>Whether it&apos;s a website, a brand identity, or a growth strategy, we shape ideas into results with precision and creativity.
            </Paragraph>
            )
            }
             
        </span>        
        </div>
    );
}