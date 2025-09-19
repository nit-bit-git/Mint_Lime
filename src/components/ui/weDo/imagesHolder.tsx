
          
  

import React from "react";
import { EvervaultCard, Icon } from "@/lib/componentUtils/placeholder";
import { cn } from "@/lib/utils";
 
export function WeDoCards({className}: {className?: string}) {
  return (
    // <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem]">
    //   <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
    //   <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
    //   <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
    //   <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
    <div className={cn(className)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full h-full max-w-5xl mx-auto">

  <div className="bg-gray-300 flex-1 rounded-xl"></div>

  <div className="flex flex-col gap-4">
    <div className="bg-gray-300 flex-1 rounded-xl"></div>
    <div className="bg-gray-300 flex-1 rounded-tr-xl rounded-tl-xl rounded-br-xl rounded-bl-none"></div>
  </div>

  <div className="flex flex-col gap-4">
    <div className="bg-gray-300 rounded-bl-xl rounded-tr-none rounded-tl-xl rounded-br-xl flex-1"></div>
    <div className="bg-gray-300 rounded-xl flex-1"></div>
  </div>

  <div className="flex flex-col gap-4">
    <div className="flex justify-center">
      <div className="bg-gray-300 w-20 h-20 sm:w-28 sm:h-28 md:w-64 md:h-64 rounded-full"></div>
    </div>
    <div className="bg-gray-300 rounded-xl flex-1"></div>
  </div>
</div>
</div>

  );
}