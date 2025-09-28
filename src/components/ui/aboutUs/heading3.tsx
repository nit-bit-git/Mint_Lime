import { Heading } from "@/lib/componentUtils/text";
import { cn } from "@/lib/utils";
export const OurMission = ({className}: {className?: string}) => {
    return (     
        <div className={cn("inline-block w-full", className)}>
         <span className="items-center">
             <Heading level={1} size="5xl" color=" text-white" className="z-10" weight="extrabold">
                Our Mission
            </Heading>
        </span>   
       
        </div>
    );
}