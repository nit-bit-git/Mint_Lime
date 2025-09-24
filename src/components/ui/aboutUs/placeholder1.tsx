import React from "react";
import { EvervaultCard, Icon } from "@/lib/componentUtils/placeholder";
 
export function MintLimeIllustration() {
  return (
    <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start justify-between max-w-fit mx-auto p-4 relative min-h-[25rem] min-w-[20rem]">
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
 
      <EvervaultCard text="hover" />
      <span className="absolute bottom-0 bg-slate-900/60 px-5 rounded-t-xl">
      <h2 className=" dark:text-white text-black mt-4 text-sm font-light">
        Thirsty? don't worry we got you covered.
      </h2>
      <p className="text-sm border max-w-fit font-light dark:border-white/[0.2] border-black/[0.2] rounded-full mt-4 text-black dark:text-white px-2 py-0.5">
        psss... hover me out
      </p>
      </span>
      
    </div>
  );
}