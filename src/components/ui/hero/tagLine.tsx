import { Heading } from "@/lib/componentUtils/text";
import { cn } from "@/lib/utils";
export const TagLine = ({className}: {className: string}) => {
    return (     
        <div className={cn("inline-block", className)}>
        <Heading level={1} size="5xl" color=" text-white" className="z-10" weight="extrabold">
            Your Business,
        </Heading>
        <Heading level={1} variant="gradient" size="7xl" className= "italic text-right z-10" weight="extrabold" >Re-Freshed</Heading>    
        </div>
    );
}