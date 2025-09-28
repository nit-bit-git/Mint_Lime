import { Heading } from "@/lib/componentUtils/text";
import { useMediaQuery } from "@/lib/mediaQuery";
import { cn } from "@/lib/utils";
export const OurMission = ({className}: {className?: string}) => {
    const isMobile = useMediaQuery("(max-width: 768px)");
        return (     
            <div className={cn("inline-block w-full md:w-fit h-full", className)}>
             <span className=" flex flex-col items-center justify-center md:float-left">
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