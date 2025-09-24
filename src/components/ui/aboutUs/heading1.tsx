import { Heading } from "@/lib/componentUtils/text";
import { cn } from "@/lib/utils";
export const WhoAreWe = ({className}: {className?: string}) => {
    return (     
        <div className={cn("inline-block w-fit", className)}>
         <span className="float-left">
             <Heading level={1} size="5xl" color=" text-white" className="z-10" weight="extrabold">
                Who are we ?
            </Heading>
        </span>   
       
        </div>
    );
}