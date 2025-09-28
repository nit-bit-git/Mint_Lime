import { MotionProps } from "motion/react";
import React from "react";

// ============ SAFE TYPE DEFINITIONS ============

/**
 * Safe HTML props that exclude all Framer Motion-specific props
 * to prevent conflicts between React and Motion event handlers
 */
type SafeHTMLProps<T> = Omit<
  React.HTMLAttributes<T>,
  // Motion animation props
  | "initial"
  | "animate" 
  | "exit"
  | "transition"
  | "variants"
  | "whileHover"
  | "whileTap"
  | "whileFocus"
  | "whileDrag"
  | "whileInView"
  // Motion drag props
  | "drag"
  | "dragConstraints"
  | "dragElastic"
  | "dragMomentum"
  | "dragTransition"
  | "onDrag"
  | "onDragStart"
  | "onDragEnd"
  // Motion layout props
  | "layout"
  | "layoutId"
  | "layoutDependency"
  // Motion animation events (conflicting with React events)
  | "onAnimationStart"
  | "onAnimationComplete"
  | "onTransitionEnd"
  // Motion hover events
  | "onHoverStart"
  | "onHoverEnd"
  // Motion tap events  
  | "onTap"
  | "onTapStart"
  | "onTapCancel"
  // Motion focus events
  | "onFocus"
  | "onBlur"
  // Motion viewport events
  | "onViewportEnter"
  | "onViewportLeave"
  // Motion pan events
  | "onPan"
  | "onPanStart"
  | "onPanEnd"
  // Motion scale events
  | "onDirectionLock"
  // Motion update events
  | "onUpdate"
  // Motion gesture events
  | "onPointerDown"
  | "onPointerUp"
  | "onPointerEnter"
  | "onPointerLeave"
>;

/**
 * Safe button props that work with both button and anchor elements
 * while excluding conflicting Motion props
 */
type SafeButtonProps = Omit<
  React.ComponentPropsWithoutRef<"button"> & React.ComponentPropsWithoutRef<"a">,
  // Motion animation props
  | "initial"
  | "animate" 
  | "exit"
  | "transition"
  | "variants"
  | "whileHover"
  | "whileTap"
  | "whileFocus"
  | "whileDrag"
  | "whileInView"
  // Motion drag props
  | "drag"
  | "dragConstraints"
  | "dragElastic"
  | "dragMomentum"
  | "dragTransition"
  | "onDrag"
  | "onDragStart"
  | "onDragEnd"
  // Motion layout props
  | "layout"
  | "layoutId"
  | "layoutDependency"
  // Motion animation events (conflicting with React events)
  | "onAnimationStart"
  | "onAnimationComplete"
  | "onTransitionEnd"
  // Motion hover events
  | "onHoverStart"
  | "onHoverEnd"
  // Motion tap events  
  | "onTap"
  | "onTapStart"
  | "onTapCancel"
  // Motion viewport events
  | "onViewportEnter"
  | "onViewportLeave"
  // Motion pan events
  | "onPan"
  | "onPanStart"
  | "onPanEnd"
  // Motion scale events
  | "onDirectionLock"
  // Motion update events
  | "onUpdate"
  // Motion gesture events
  | "onPointerDown"
  | "onPointerUp"
  | "onPointerEnter"
  | "onPointerLeave"
>;

// ============ COMPONENT INTERFACE DEFINITIONS ============

/**
 * Base interface for all text components
 */
interface BaseTextProps {
  children: React.ReactNode;
  className?: string;
  animated?: boolean;
  animationProps?: MotionProps;
  as?: React.ElementType;
}

/**
 * Props for Heading component
 */
interface HeadingProps extends BaseTextProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  variant?: "default" | "gradient" | "outlined" | "shadow" ;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl";
  weight?: "light" | "normal" | "medium" | "semibold" | "bold" | "extrabold";
  color?: string;
  bg?:string
}

/**
 * Props for Paragraph component
 */
interface ParagraphProps extends BaseTextProps {
  variant?: "default" | "muted" | "emphasis" | "small" | "large";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  weight?: "light" | "normal" | "medium" | "semibold" | "bold";
  color?: string;
}

/**
 * Props for TextGroup component
 */
interface TextGroupProps {
  children: React.ReactNode;
  className?: string;
  animated?: boolean;
  animationProps?: MotionProps;
  spacing?: "tight" | "normal" | "loose";
}

/**
 * Props for Button component
 */
interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "destructive" | "gradient";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  animated?: boolean;
  animationProps?: MotionProps;
  loading?: boolean;
  disabled?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  as?: React.ElementType;
  href?: string;
  onClick?: () => void;
}

/**
 * Props for ButtonGroup component
 */
interface ButtonGroupProps {
  children: React.ReactNode;
  className?: string;
  orientation?: "horizontal" | "vertical";
  spacing?: "tight" | "normal" | "loose";
}

// ============ FINAL COMPONENT TYPE SIGNATURES ============

/**
 * Complete type signature for Heading component
 * Combines HeadingProps with safe HTML props for headings
 */
export type HeadingComponentProps = HeadingProps & SafeHTMLProps<HTMLHeadingElement>;

/**
 * Complete type signature for Paragraph component  
 * Combines ParagraphProps with safe HTML props for paragraphs
 */
export type ParagraphComponentProps = ParagraphProps & SafeHTMLProps<HTMLParagraphElement>;

/**
 * Complete type signature for TextGroup component
 * Uses only safe HTML div props
 */
export type TextGroupComponentProps = TextGroupProps & SafeHTMLProps<HTMLDivElement>;

/**
 * Complete type signature for Button component
 * Combines ButtonProps with safe button/anchor props
 */
export type ButtonComponentProps = ButtonProps & SafeButtonProps;

/**
 * Complete type signature for ButtonGroup component
 * Uses only safe HTML div props
 */
export type ButtonGroupComponentProps = ButtonGroupProps & SafeHTMLProps<HTMLDivElement>;

// ============ UTILITY TYPES ============

/**
 * Extract only Motion-specific props from a component props type
 * Useful for separating Motion props from HTML props
 */
export type MotionOnlyProps = Pick<
  MotionProps,
  | "initial"
  | "animate"
  | "exit" 
  | "transition"
  | "variants"
  | "whileHover"
  | "whileTap"
  | "whileFocus"
  | "whileDrag"
  | "whileInView"
  | "drag"
  | "dragConstraints"
  | "dragElastic"
  | "onDrag"
  | "onDragStart"
  | "onDragEnd"
  | "layout"
  | "layoutId"
  | "onAnimationStart"
  | "onAnimationComplete"
  | "onHoverStart"
  | "onHoverEnd"
  | "onTap"
  | "onTapStart"
  | "onTapCancel"
  | "onViewportEnter"
  | "onViewportLeave"
>;

/**
 * Type guard to check if a prop is Motion-specific
 */
export const isMotionProp = (prop: string): boolean => {
  const motionProps = [
    "initial", "animate", "exit", "transition", "variants",
    "whileHover", "whileTap", "whileFocus", "whileDrag", "whileInView",
    "drag", "dragConstraints", "dragElastic", "onDrag", "onDragStart", "onDragEnd",
    "layout", "layoutId", "layoutDependency",
    "onAnimationStart", "onAnimationComplete", "onTransitionEnd",
    "onHoverStart", "onHoverEnd", "onTap", "onTapStart", "onTapCancel",
    "onViewportEnter", "onViewportLeave", "onPan", "onPanStart", "onPanEnd",
    "onDirectionLock", "onUpdate"
  ];
  return motionProps.includes(prop);
};

/**
 * Utility to separate Motion props from HTML props at runtime
 * Useful for dynamic prop filtering if needed
 */
export const separateProps = <T extends Record<string, any>>(
  props: T
): { motionProps: Partial<MotionOnlyProps>; htmlProps: Omit<T, keyof MotionOnlyProps> } => {
  const motionProps: Partial<MotionOnlyProps> = {};
  const htmlProps = { ...props } as any;

  Object.keys(props).forEach((key) => {
    if (isMotionProp(key)) {
      motionProps[key as keyof MotionOnlyProps] = props[key];
      delete htmlProps[key];
    }
  });

  return { motionProps, htmlProps };
};

// ============ EXAMPLES OF HOW TO USE THESE TYPES ============

/*
// Example component using these types:

export const MyHeading = ({
  children,
  className,
  level = 1,
  variant = "default", 
  // ...other props are automatically typed correctly
  ...props  // This is now type-safe!
}: HeadingComponentProps) => {
  // Implementation here
  // props will only contain safe HTML attributes
  // Motion props must go in animationProps
};

// Usage:
<MyHeading 
  level={1}
  variant="gradient"
  onClick={() => {}}        // ✅ Safe HTML prop
  className="my-class"      // ✅ Safe HTML prop  
  // whileHover={{}}        // ❌ TypeScript error - use animationProps
  animationProps={{         // ✅ Correct way for Motion props
    whileHover: { scale: 1.1 },
    onAnimationStart: (def) => console.log(def)
  }}
>
  My Title
</MyHeading>
*/