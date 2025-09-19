
import { Heading, Paragraph } from "@/lib/componentUtils/text";
import { cn } from "@/lib/utils";
export const WeDo = ({className}: {className?: string}) => {
    return (     
        <div className={cn(" w-full", className)}>
         <span className="float-left">
            <Heading >
                What we do?
            </Heading>
             <Paragraph  size="xl" color=" text-white" className="z-10" weight="bold">
              
                We refresh business
                It may be bold to say “refresh business” but we stick to our word. Every businesses is ever changing and a “refresh” is always something you would look for. We transform your challenges into fresh, scalable platforms built for an ever-changing pace.
                We build bold brands
                Your brand is more than a logo, we believe we are capable for shaping experiences that earn trust and loyalty 
                We automate the boring
                Obviously repetitive work does get tiring along the line, we can help automate those things for you because money is time yes?
                We engineer reliability
                Your business should not collapse under traffic or pressure, so we make sure yours stay alive and balanced when things might go under the weather. 
                We fuel growth
                Its not just the success we make for your business, its also about the growth, partnership, business know-how and the friendship you can count on.
                </Paragraph>
        </span>        
        </div>
    );
}