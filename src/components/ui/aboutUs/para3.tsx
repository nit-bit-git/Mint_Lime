import { Paragraph } from "@/lib/componentUtils/text";
import { cn } from "@/lib/utils";
export const OurMissionContent = ({className}: {className?: string}) => {
    return (     
        <div className={cn("inline-block w-full h-full", className)}>
         <span className="float-left">
             <Paragraph  size="xl" color=" text-white" className="z-10" weight="bold">
               At Mint Lime, we empower businesses to overcome digital challenges by building scalable platforms, bringing designs to life with seamless user experiences, and navigating the AI-driven future. We turn data into actionable insights, maximize digital marketing impact, optimize processes for efficiency and provide strategic guidance to drive informed decisions and sustainable growth.
            </Paragraph>
            <div>
                <Paragraph  size="xl" color=" text-white" className="z-10" weight="bold">
                    Our Values
                </Paragraph>
               
                <ul className="list-disc list-inside mt-4 space-y-2 text-left">
                    <li>
                    <span className="font-semibold">Quality First:</span>  
                    Prioritize delivering exceptional, high-caliber solutions that stand the test of time. Every project is executed with care, precision and a commitment.
                    </li>
                    <li>
                    <span className="font-semibold">Purposeful Innovation:</span>  
                    We believe in driving progress with innovation that solves real-world challenges, not just for the sake of novelty. Every idea is carefully crafted to add lasting value.
                    </li>
                    <li>
                    <span className="font-semibold">Customer-Focused Impact:</span>  
                    Clients’ success is our success. Listening, understanding, and partnership creates solutions that drive growth and elevate their business.
                    </li>
                    <li>
                    <span className="font-semibold">Disciplined Execution:</span>  
                    Approach every project with structure, focus and integrity, ensuring that standards are maintained at every step, from conception to delivery.
                    </li>
                </ul>
            </div>
               
        </span>        
        </div>
    );
}