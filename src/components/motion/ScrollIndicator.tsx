"use client";

import { motion } from "framer-motion";

export function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2, duration: 1 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-20"
    >
      <div className="w-[1px] h-16 bg-border/40 relative overflow-hidden">
        <motion.div
          className="w-full h-1/2 bg-brand-gold absolute top-0 left-0"
          animate={{
            y: ["-100%", "200%"],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 0.5
          }}
        />
      </div>
    </motion.div>
  );
}
