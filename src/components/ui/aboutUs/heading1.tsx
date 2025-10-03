import { Heading } from "@/lib/componentUtils/text";
import { useMediaQuery } from "@/lib/mediaQuery";
import { cn } from "@/lib/utils";
export const WhoAreWe = ({className}: {className?: string}) => {
    return (     
        <div className={cn("inline-block w-full lg:w-fit h-full", className)}>
         <span className=" flex flex-col items-center justify-center lg:float-left">
                 <Heading level={1} size="5xl" color=" text-white" className="z-10" weight="extrabold">
                Who are we ?
            </Heading>
        </span>   
       
        </div>
    );
}