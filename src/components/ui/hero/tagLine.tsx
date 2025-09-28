import { Heading } from "@/lib/componentUtils/text";
import { useMediaQuery } from "@/lib/mediaQuery";
import { cn } from "@/lib/utils";



export const TagLine = ({className}: {className: string}) => {
    const isMobile = useMediaQuery("(max-width: 768px)");
    return (     
        <div className={cn("inline-block w-full", className)}>
  {isMobile ? (
    <>
      <span className="float-left">
        <Heading
          level={2}
          size="2xl"
          color="text-white"
          className="z-10"
          weight="extrabold"
        >
          Your Business {String(isMobile)},
        </Heading>
      </span>
      <span className="float-right">
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
    </>
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
      <span className="md:float-right">
        <Heading
          level={1}
          variant="gradient"
          size="7xl"
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