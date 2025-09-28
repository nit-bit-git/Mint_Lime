import React from "react";
import Image from "next/image";
import { AspectRatio } from "@/lib/aspectRatio";
interface IconProps {
  className?: string;
  style?: React.CSSProperties;
}
export const InstagramIcon : React.FC<IconProps> = ({ className, style }) => (
  <AspectRatio ratio={1} className={className} style={style} >
    <Image
      src="/images/icons/Instagram.svg"
      alt="Instagram"
      fill
      style={{ objectFit: "contain" }}
    />
  </AspectRatio>
);

export const LinkedInIcon : React.FC<IconProps> = ({ className, style }) => (
  <AspectRatio ratio={1} className={className} style={style}>
    <Image
      src="/images/icons/LinkedIn.svg"
      alt="LinkedIn"
      fill
      style={{ objectFit: "contain" }}
    />
  </AspectRatio>
);

export const YouTubeIcon : React.FC<IconProps> = ({ className, style }) => (
  <AspectRatio ratio={1} className={className} style={style}>
    <Image
      src="/images/icons/YouTube.svg"
      alt="YouTube"
      fill
      style={{ objectFit: "contain" }}
    />
  </AspectRatio>
);

export const XIcon : React.FC<IconProps> = ({ className, style }) => (
  <AspectRatio ratio={1} className={className} style={style}>
    <Image
      src="/images/icons/X.svg"
      alt="X"
      fill
      style={{ objectFit: "contain" }}
    />
  </AspectRatio>
);
