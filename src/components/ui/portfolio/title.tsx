import { Heading } from "@/lib/componentUtils/text";
import { cn } from "@/lib/utils";
export const OurWork = ({className}: {className?: string}) => {
    return (     
        <div className={cn("inline-block w-full", className)}>
         <span className="float-left">
             <Heading level={1} size="5xl" color=" text-white" className="z-10" weight="extrabold">
               Our Notable Works
            </Heading>
        </span>   
       
        </div>
    );
}