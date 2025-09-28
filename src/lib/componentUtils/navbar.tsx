import { IconX, IconMenu2 } from "@tabler/icons-react";
import { useScroll, useMotionValueEvent, motion, AnimatePresence } from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import { cn } from "../utils";

interface NavbarProps {
    children?: React.ReactNode;
    className?: string;
}
interface NavBodyProps {
    children?: React.ReactNode;
    className?: string;
    visible?: boolean;
}
interface NavItemProps {
    items: {
        name: string;
        link: string;
    } [];
    className?: string;
    visible?: boolean;
    onItemClick?: () => void;
}
interface MobileNavProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}
 
interface MobileNavHeaderProps {
  children: React.ReactNode;
  className?: string;
}
 
interface MobileNavMenuProps {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const Navbar = ({ children, className }: NavbarProps) => {
    const ref = useRef< HTMLDivElement >(null);
    const { scrollY } = useScroll({target: ref, offset: ["start start", "end start"]});
    const [visible, setVisible] = useState<boolean>(false);
    useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 60) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });
  return (
    <motion.div
      ref={ref}
      className={cn(" fixed inset-x-0  z-40 w-full", className)}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(
              child as React.ReactElement<{ visible?: boolean }>,
              { visible },
            )
          : child,
      )}
    </motion.div>
  );
}

export const NavBody = ({ children, className, visible }: NavBodyProps) => {
    return (
        <motion.div
            animate={{
                backdropFilter: visible ? "blur(10px)" : "none",
                boxShadow: visible
                    ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
                    : "none",
                width: visible ? "40%" : "100%",
                y: visible ? 20 : 0,
            }}
            transition={{
                type: "spring",
                stiffness: 200,
                damping: 50,
            }}
            style={{
                minWidth: "500px",
            }}
            className={cn(
                "relative z-[60] mx-auto hidden w-full max-w-7xl flex-row items-center justify-between self-start rounded-4xl px-4 py-2 lg:flex bg-transparent",
                visible && "bg-neutral-950/80",
                className,
            )}
        >
            {React.Children.map(children, (child, idx) =>
                (idx === 0 || idx === 1) && React.isValidElement(child)
                    ? React.cloneElement(child as React.ReactElement<{ visible?: boolean }>, { visible })
                    : child
            )}
        </motion.div>
    );
}

export const NavItems = ({ items, className, onItemClick, visible }: NavItemProps) => {
  const [hovered, setHovered] = useState<number | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Track when visible changes to trigger fade effect
  React.useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 200); // Fade duration

    return () => clearTimeout(timer);
  }, [visible]);

  return (
    <motion.div
      onMouseLeave={() => setHovered(null)}
      layout // enables smooth layout transitions
      animate={{
        // Add responsive spacing based on visible state
        gap: visible ? "0.25rem" : "0.5rem", // Tighter spacing when compact
        opacity: isTransitioning ? 0.3 : 1, // Fade during transition
      }}
      transition={{ 
        layout: { duration: 0.4, ease: "easeInOut" }, // Match NavBody transition
        gap: { duration: 0.4, ease: "easeInOut" },
        opacity: { duration: 0.2, ease: "easeInOut" }
      }}
      className={cn(
        "hidden w-fit flex-1 flex-row items-center justify-center text-sm font-medium text-zinc-600 hover:text-zinc-800 lg:flex pointer-events-auto",
        className
      )}
    >
      {items.map((item, index) => (
        <motion.a
          key={`link-${index}`}
          href={item.link}
          onMouseEnter={() => setHovered(index)}
          onClick={onItemClick}
          layout // makes spacing/padding animate smoothly
          animate={{
            // Responsive padding based on navbar state
            paddingLeft: visible ? "0.75rem" : "1rem", // px-3 vs px-4
            paddingRight: visible ? "0.75rem" : "1rem",
            opacity: isTransitioning ? 0 : 1, // Individual item fade
          }}
          transition={{ 
            layout: { duration: 0.4, ease: "easeInOut" },
            paddingLeft: { duration: 0.4, ease: "easeInOut" },
            paddingRight: { duration: 0.4, ease: "easeInOut" },
            opacity: { duration: 0.15, ease: "easeInOut" }
          }}
          className="relative py-2 text-neutral-600 dark:text-neutral-300"
        >
          {hovered === index && !isTransitioning && (
            <motion.div
              layoutId="hovered"
              className="absolute inset-0 h-full w-full rounded-full bg-neutral-800"
              transition={{ duration: 0.25, ease: "easeInOut" }}
            />
          )}
          <motion.span
            layout
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="relative z-10 py-1"
          >
            {item.name}
          </motion.span>
        </motion.a>
      ))}
    </motion.div>
  );
};
export const MobileNav = ({ children, className, visible }: MobileNavProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(10px)" : "none",
        boxShadow: visible
          ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
          : "none",
        width: visible ? "90%" : "100%",
        paddingRight: visible ? "12px" : "0px",
        paddingLeft: visible ? "12px" : "0px",
        borderRadius: visible ? "4px" : "2rem",
        y: visible ? 20 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      className={cn(
        "relative z-50 mx-auto flex w-full  max-w-[calc(100vw-2rem)] flex-col items-center justify-between bg-transparent px-0 py-2 lg:hidden",
        visible && "bg-neutral-950/80",
        className,
      )}
    >
      {children}
    </motion.div>
  );
};
 
export const MobileNavHeader = ({
  children,
  className,
}: MobileNavHeaderProps) => {
  return (
    <div
      className={cn(
        "flex w-full flex-row items-center justify-between",
        className,
      )}
    >
      {children}
    </div>
  );
};
 
export const MobileNavMenu = ({
  children,
  className,
  isOpen,
  onClose,
}: MobileNavMenuProps) => {
  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose} // click outside closes
          />

          {/* Menu */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={cn(
              "absolute inset-x-0 top-16 z-50 flex w-full flex-col items-start justify-start gap-4 rounded-lg px-4 py-8 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] bg-neutral-950",
              className
            )}
          >
            {children}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export const MobileNavToggle = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => {
  return isOpen ? (
    <IconX className="text-white" onClick={onClick} />
  ) : (
    <IconMenu2 className="text-white" onClick={onClick} />
  );
};
 export const NavbarLogo = ({
  children,
  visible,
  className,
}: {
  children?: React.ReactNode;
  visible?: boolean;
  className?: string;
}) => {
  const childArray = React.Children.toArray(children);

  return (
    <a
      href="#"
      className="relative z-20 flex items-center space-x-2 px-2 py-1 text-sm font-normal text-black pointer-events-none"
    >
      <AnimatePresence mode="wait">
        {visible ? (
          <motion.div
            key="symbol"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 30 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className={cn(className)}
          >
            {childArray[1] ?? childArray[0] ?? null}
          </motion.div>
        ) : (
          // Logo text (slide in from the left)
          <motion.div
            key="logo"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className={cn(className)}
          >
            {childArray[0] ?? childArray[1] ?? null}
          </motion.div>
        )}
      </AnimatePresence>
    </a>
  );
};
 
export const NavbarButton = ({
  href,
  as: Tag = "a",
  children,
  className,
  variant = "primary",
  ...props
}: {
  href?: string;
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "dark" | "gradient";
} & (
  | React.ComponentPropsWithoutRef<"a">
  | React.ComponentPropsWithoutRef<"button">
)) => {
  const baseStyles =
    "px-4 py-2 rounded-md bg-white button bg-white text-black text-sm font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center";
 
  const variantStyles = {
    primary:
      "shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]",
    secondary: "bg-transparent shadow-none dark:text-white",
    dark: "bg-black text-white shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]",
    gradient:
      "bg-gradient-to-b from-blue-500 to-blue-700 text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset]",
  };
 
  return (
    <Tag
      href={href || undefined}
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </Tag>
  );
};