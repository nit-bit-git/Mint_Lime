import React from 'react';
import { cn } from '@/lib/utils';   
import Image from "next/image";
import { AspectRatio } from '@/lib/aspectRatio';


export const Hills = ({ className }: {className?: string}) => {
  return (
    <div className={cn("hidden md:block absolute top-25 w-full h-[200px] -z-10 bg-black", className)}>
      <AspectRatio ratio={4/3}>
          <Image
            src="/images/lastPage/hillArt.svg"
            alt="Decorative Hill"
            fill
            priority
            className="object-contain"
          />
            </AspectRatio>
    </div>
  );
};