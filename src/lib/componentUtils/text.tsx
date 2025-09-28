import { motion, MotionProps } from "motion/react";
import React from "react";
import { cn } from "../utils";
import { HeadingComponentProps, ParagraphComponentProps } from "../types";
export const Heading = ({
    children,
    className, 
    color,
    level = 1, 
    variant = 'default',
    size = 'xl',
    weight = 'bold',
    animated = false,
    animationProps,
    as,
    ...props
}: HeadingComponentProps) => {
    const Tag = as || (`h${level}` as React.ElementType);
    const sizeStyles = {
    xs: "text-xs",
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
    "3xl": "text-3xl",
    "4xl": "text-4xl",
    "5xl": "text-5xl",
    "6xl": "text-6xl",
    "7xl": "text-7xl",
  };
  const weightStyles = {
    light: "font-light",
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
    extrabold: "font-extrabold",
  };
  const variantStyles = {
    default: "text-gray-900 dark:text-white",
    gradient: "bg-gradient-to-r from-emerald-400 via-lime-400 to-green-500 bg-clip-text text-transparent",
    outlined: "text-transparent text-bold [-webkit-text-stroke:2px_theme(colors.gray.300)] dark:[-webkit-text-stroke:2px_theme(colors.gray.600)] [-webkit-text-fill-color:transparent]",  
    shadow: "text-gray-900 dark:text-white [text-shadow:2px_2px_4px_rgba(0,0,0,0.3)]",
  };;
  const baseStyles = "leading-tight tracking-tight px-4";
   if (animated) {
        return (
            <motion.div
            className={cn("inline-block", className)}
            {...animationProps}
            {...(props as MotionProps)} // Cast motion-specific props
        >
                <Tag 
                    className={cn(
                        baseStyles,
                        sizeStyles[size],
                        weightStyles[weight],
                        ...(color ? color :variantStyles[variant])
                        
                    )}
                    {...props}  // Now props only contains safe HTML attributes
                >
                    {children} 
                </Tag>
            </motion.div>
        );
    }
    return  (
        <div className={cn("inline-block", className )}>
            <Tag 
                    className={cn(
                    baseStyles,
                    sizeStyles[size],
                    weightStyles[weight],
                    color? color :  variantStyles[variant]
                )}
                {...props}  // Safe HTML props only
            >
                {children} 
            </Tag>
        </div>
    );
};
export const Paragraph = ({
    children,
    className, 
    variant = 'default',
    size = 'md',
    weight = 'medium',
    animated = false,
    animationProps,
    as : Tag = 'p',
    ...props
}: ParagraphComponentProps) => {
    const sizeStyles = {
    xs: "text-xs",
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
    xl: "text-xl",
  };

  const weightStyles = {
    light: "font-light",
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
  };

  const variantStyles = {
    default: "text-gray-700 dark:text-gray-300",
    muted: "text-gray-500 dark:text-gray-400",
    emphasis: "text-gray-900 dark:text-white",
    small: "text-gray-600 dark:text-gray-400 text-sm",
    large: "text-gray-800 dark:text-gray-200 text-lg",
  };

  const baseStyles = "leading-relaxed";
  
   if (animated) {
        return (
            <motion.div
            className={cn("inline-block", className)}
            {...animationProps}
            {...(props as MotionProps)} // Cast motion-specific props
        >
                <Tag 
                    className={cn(
                        baseStyles,
                        sizeStyles[size],
                        weightStyles[weight],
                        variantStyles[variant]
                    )}
                    {...props}  // Now props only contains safe HTML attributes
                >
                    {children} 
                </Tag>
            </motion.div>
        );
    }
    return  (
        <div className={cn("inline-block", className)}>
            <Tag 
                    className={cn(
                    baseStyles,
                    sizeStyles[size],
                    weightStyles[weight],
                    variantStyles[variant]
                )}
                {...props}  // Safe HTML props only
            >
                {children} 
            </Tag>
        </div>
    );
};