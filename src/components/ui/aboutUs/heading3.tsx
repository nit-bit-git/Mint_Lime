import { Heading } from "@/lib/componentUtils/text";
import { useMediaQuery } from "@/lib/mediaQuery";
import { cn } from "@/lib/utils";
export const OurMission = ({className}: {className?: string}) => {
    const isMobile = useMediaQuery("(hover: none) and (pointer: coarse)");
        return (     
            <div className={cn("inline-block w-full lg:w-fit h-full", className)}>
             <span className=" flex flex-col items-center justify-center lg:float-left">
                { isMobile ? (
                     <Heading level={4} size="3xl" color=" text-white" className="z-10" weight="extrabold">
                    Our Mission
                </Heading>
                ) : (
                     <Heading level={1} size="5xl" color=" text-white" className="z-10" weight="extrabold">
                    Our Mission
                </Heading>
                )}
            </span>   
           
            </div>
    );
}