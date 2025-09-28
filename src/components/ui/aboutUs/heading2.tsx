import { Heading } from "@/lib/componentUtils/text";
import { useMediaQuery } from "@/lib/mediaQuery";
import { cn } from "@/lib/utils";
export const WhyUs = ({className}: {className?: string}) => {
    const isMobile = useMediaQuery("(max-width: 768px)");
        return (     
            <div className={cn("inline-block w-full md:w-fit h-full", className)}>
             <span className=" flex flex-col items-center justify-center md:float-left">
                { isMobile ? (
                     <Heading level={4} size="3xl" color=" text-white" className="z-10" weight="extrabold">
                    Why Us ?
                </Heading>
                ) : (
                     <Heading level={1} size="7xl" color=" text-white" className="z-10" weight="extrabold">
                    Why Us ?
                </Heading>
                )}
            </span>   
           
            </div>
    );
}