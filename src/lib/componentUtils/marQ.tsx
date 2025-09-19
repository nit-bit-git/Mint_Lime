import { motion } from "framer-motion";

export default function FMMarquee({ children, duration = 20 }: { children: React.ReactNode; duration?: number }) {
  return (
    <div className="overflow-hidden">
      <motion.div
        style={{ display: "inline-flex" }}
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration,
            ease: "linear"
          }
        }}
      >
        <div className="flex gap-8">{children}</div>
        <div className="flex gap-8" aria-hidden>{children}</div>
      </motion.div>
    </div>
  );
}