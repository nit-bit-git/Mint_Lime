import { Heading } from "@/lib/componentUtils/text";
import { useMediaQuery } from "@/lib/mediaQuery";
import { cn } from "@/lib/utils";



export const TagLine = ({className}: {className: string}) => {
    const isMobile = useMediaQuery("(hover: none) and (pointer: coarse)");
    return (     
        <div className={cn("inline-block w-full", className)}>
  {isMobile ? (
    <div className="relative w-full h-full flex flex-col md:flex-row">
      <span className="md:self-start">
        <Heading
          level={2}
          size="3xl"
          color="text-white"
          className="z-10"
          weight="extrabold"
        >
          Your Business,
        </Heading>
      </span>
      <span className="self-end">
        <Heading
          level={1}
          variant="gradient"
          size="3xl"
          className="italic text-right z-10"
          weight="extrabold"
        >
          Re-Freshed
        </Heading>
      </span>
    </div>
  ) : (
    <>
      <span className="float-left">
        <Heading
          level={1}
          size="5xl"
          color="text-white"
          className="z-10"
          weight="extrabold"
        >
          Your Business,
        </Heading>
      </span>
      <span className="lg:float-right">
        <Heading
          level={1}
          variant="gradient"
          size="5xl"
          className="italic text-right z-10"
          weight="extrabold"
        >
          Re-Freshed
        </Heading>
      </span>
    </>
  )}
</div>
    );
}