"use client";
import { cn } from "@/lib/utils";
import React, { useRef, useState, useEffect} from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useVelocity,
  useAnimationControls,
  PanInfo
} from "motion/react"

interface DraggableCardBodyProps {
  parentRef?: React.RefObject<HTMLDivElement | null>;
  className?: string;
  children: React.ReactNode;
  setDragging?: (dragging: boolean) => void;
}

export const DraggableCardBody = ({ parentRef, className, children, setDragging }: DraggableCardBodyProps) => {
    const dragX = useMotionValue(0);
    const dragY = useMotionValue(0);
    const hoverX = useMotionValue(0);
    const hoverY = useMotionValue(0);
    const cardRef = useRef<HTMLDivElement>(null);
    const controls = useAnimationControls();
    
    const [isDragging, setIsDragging] = useState(false);
    const [constraints, setConstraints] = useState({
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    });
    
    const velocityX = useVelocity(dragX);
    const velocityY = useVelocity(dragY);

    const springConfig = {
        stiffness: 100,
        damping: 20,
        mass: 0.5,
    };

    const bounceSpringConfig = {
        stiffness: 160,
        damping: 10,
        mass: 0.5,
    };

    // Disable built-in drag momentum to handle it manually
    const dragInertiaConfig = {
        power: 0,
        timeConstant: 0,
    };

    const rotateX = useSpring(
        useTransform(hoverY, [-300, 300], isDragging ? [0, 0] : [25, -25]),
        springConfig,
    );

    const rotateY = useSpring(
        useTransform(hoverX, [-300, 300], isDragging ? [0, 0] : [25, -25]),
        springConfig,
    );

    const opacity = useSpring(
        useTransform(dragX, [-300, 0, 300], [0.8, 1, 0.8]),
        springConfig,
    );

    const glareOpacity = useSpring(
        useTransform(dragX, [-300, 0, 300], [0.2, 0, 0.2]),
        springConfig,
    );

    // Fix constraints calculation
    useEffect(() => {
        const updateConstraints = () => {
            if (parentRef?.current && cardRef.current) {
                const parentRect = parentRef.current.getBoundingClientRect();
                const cardRect = cardRef.current.getBoundingClientRect();
                
                // Calculate available space in parent
                const availableWidth = parentRect.width;
                const availableHeight = parentRect.height;
                const cardWidth = cardRect.width || 320; // fallback
                const cardHeight = cardRect.height || 384; // fallback
                
                const padding = 20;
                
                // Calculate max movement from center
                const maxX = Math.max(0, (availableWidth - cardWidth) / 2 - padding);
                const maxY = Math.max(0, (availableHeight - cardHeight) / 2 - padding);
                
                setConstraints({
                    top: -maxY,
                    left: -maxX,
                    right: maxX,
                    bottom: maxY,
                });
                
                console.log('Constraints updated:', {
                    parent: { width: availableWidth, height: availableHeight },
                    card: { width: cardWidth, height: cardHeight },
                    constraints: { top: -maxY, left: -maxX, right: maxX, bottom: maxY }
                });
            }
        };

        // Wait for DOM to settle
        const timeout = setTimeout(updateConstraints, 100);
        
        const observer = new ResizeObserver(updateConstraints);
        if (parentRef?.current) {
            observer.observe(parentRef.current);
        }
        
        window.addEventListener('resize', updateConstraints);
        
        return () => {
            clearTimeout(timeout);
            observer.disconnect();
            window.removeEventListener('resize', updateConstraints);
        };
    }, [parentRef]);

    // Enhanced bounce physics
    const simulateBouncePhysics = (startX: number, startY: number, velocityX: number, velocityY: number) => {
        let currentX = startX;
        let currentY = startY;
        let vx = velocityX * 0.5; // Scale down initial velocity
        let vy = velocityY * 0.5;
        
        const bounceCoeff = 0.7;
        const friction = 0.98;
        const minVelocity = 0.1;
        
        const animateStep = () => {
            // Update position
            currentX += vx;
            currentY += vy;
            
            // Check boundaries and bounce
            if (currentX <= constraints.left) {
                currentX = constraints.left;
                vx = Math.abs(vx) * bounceCoeff;
            } else if (currentX >= constraints.right) {
                currentX = constraints.right;
                vx = -Math.abs(vx) * bounceCoeff;
            }
            
            if (currentY <= constraints.top) {
                currentY = constraints.top;
                vy = Math.abs(vy) * bounceCoeff;
            } else if (currentY >= constraints.bottom) {
                currentY = constraints.bottom;
                vy = -Math.abs(vy) * bounceCoeff;
            }
            
            // Apply friction
            vx *= friction;
            vy *= friction;
            
            // Update motion values
            dragX.set(currentX);
            dragY.set(currentY);
            
            // Continue if velocity is significant
            if (Math.abs(vx) > minVelocity || Math.abs(vy) > minVelocity) {
                requestAnimationFrame(animateStep);
            } 
            else {
                // Final spring back to center if needed
               
                controls.start({
                    x: 0,
                    y: 0,
                    transition: {
                        type: "spring",
                        stiffness: 150,
                        damping: 25,
                        mass: 0.8,
                        duration: 0.6
                    }
                });
            }
        };
        
        // Start animation if there's significant velocity
        if (Math.abs(vx) > 0.5 || Math.abs(vy) > 0.5) {
            requestAnimationFrame(animateStep);
        }
        
       
        
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { width, height, left, top } =
      cardRef.current?.getBoundingClientRect() ?? {
        width: 0,
        height: 0,
        left: 0,
        top: 0,
      };
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const deltaX = clientX - centerX;
    const deltaY = clientY - centerY;
    hoverX.set(deltaX);
    hoverY.set(deltaY);
  };
 
  const handleMouseLeave = () => {
    hoverX.set(0);
    hoverY.set(0);
  };

   
    const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
        document.body.style.cursor = "default";
        setIsDragging(false);
        setDragging?.(false);
        dragX.set(0);
        dragY.set(0);
        if (parentRef?.current && cardRef.current) {
        const parentRect = parentRef.current.getBoundingClientRect();
        const cardRect = cardRef.current.getBoundingClientRect();
        
        const { width: p_width, height: p_height, left: p_left, top: p_top } = parentRect;
        const { width: c_width, height: c_height, left: c_left, top: c_top } = cardRect;
        
        // Calculate card center in viewport coordinates
        const cardCenterX = c_left + c_width / 2;
        const cardCenterY = c_top + c_height / 2;
        
        // Check if card center is outside parent bounds
        const isOutsideParent = (
            cardCenterX < p_left || 
            cardCenterX > (p_left + p_width) || 
            cardCenterY < p_top || 
            cardCenterY > (p_top + p_height)
        );
        
        if (isOutsideParent) {
            controls.start({
                x: 0,
                y: 0,
                transition: {
                    type: "spring",
                    ...bounceSpringConfig,
                },
            });
        }
    }
        // Reset rotation
        controls.start({
            
            rotateX: 0,
            rotateY: 0,
            transition: {
                type: "spring",
                ...springConfig,
            },
        });

        const currentVelocityX = velocityX.get() * 0.005;
        const currentVelocityY = velocityY.get() * 0.005;
        const currentX = info.offset.x;
        const currentY = info.offset.y;
        
        console.log('Drag end:', {
            position: { x: currentX, y: currentY },
            velocity: { x: currentVelocityX, y: currentVelocityY },
            constraints
        });
        
        // Start bounce physics simulation
        simulateBouncePhysics(currentX, currentY, currentVelocityX, currentVelocityY);
    };

    return (
        <motion.div
            ref={cardRef}
            drag
            dragConstraints={constraints}
            dragElastic={0} // Disable built-in elastic behavior
            onDragStart={() => {
                document.body.style.cursor = "grabbing";
                setIsDragging(true);
                setDragging?.(true);
            }}
            onDragEnd={handleDragEnd}
            style={{
                x: dragX,
                y: dragY,
                rotateX,
                rotateY,
                opacity,
                willChange: "transform",
            }}
            animate={controls}
            whileHover={{ scale: 1.02, zIndex:10 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={cn(className,
                "min-h-96 w-80 overflow-hidden rounded-md bg-neutral-100 p-6 shadow-2xl cursor-grab active:cursor-grabbing transform-gpu dark:bg-neutral-900",
            )}
            dragTransition={dragInertiaConfig}
        >
            {children}
            
            <motion.div
                style={{
                    opacity: glareOpacity,
                }}
                className="pointer-events-none absolute inset-0 bg-white select-none opacity-10"
            />
        </motion.div>
    );
};

