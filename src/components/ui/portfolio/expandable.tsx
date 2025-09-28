import { useOutsideClick } from "@/lib/componentUtils/popup";
import { motion } from "motion/react";
import { useRef } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
export const ExpandableCardDemo = ({ active, setActive }: {active: any, setActive:React.Dispatch<any>}) => {
 const ref = useRef<HTMLDivElement>(null);
  useOutsideClick(ref, () => setActive(null));
  return createPortal (
    <>
      {/* Overlay */}
      <motion.div
        key="overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/20 h-screen w-full z-50 backdrop-blur-2xl"
        onClick={() => setActive(null)}
      />

      {/* Expanded Card */}
      <div className="fixed inset-0  grid place-items-center z-[100] ">
        <motion.div
          layoutId={`card-${active.title}`}
          ref={ref}
          initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
          className="w-full max-w-[500px] h-fit flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
        >
          <motion.div layoutId={`image-${active.title}`} className="relative h-80 w-full overflow-hidden sm:rounded-t-3xl">
            <Image
              src={active.image}
              alt={active.title}
              fill
              className="w-full h-80 object-cover object-top sm:rounded-t-3xl"
            />
          </motion.div>

          <div className="p-4">
            <motion.h3
              layoutId={`title-${active.title}`}
              className="font-medium text-neutral-700 dark:text-neutral-200 text-lg"
            >
              {active.title}
            </motion.h3>
            <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
          </div>
        </motion.div>
      </div>
    </>, document.body
  );
};
