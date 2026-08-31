"use client";

import { motion } from 'framer-motion';

export function SectionDivider() {
  return (
    <div className="w-full flex items-center py-10 lg:py-16 relative z-20 px-6 lg:px-12">
      <div className="w-full h-px bg-foreground/20 dark:bg-foreground/15" />
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-6 flex items-center gap-3 shrink-0"
      >
        <span className="w-1.5 h-1.5 bg-brand-gold/80 rotate-45" />
        <span className="font-mono text-sm lg:text-base tracking-widest text-brand-gold font-bold select-none">
          {"//"}
        </span>
        <span className="w-1.5 h-1.5 bg-brand-gold/80 rotate-45" />
      </motion.div>
      <div className="w-full h-px bg-foreground/20 dark:bg-foreground/15" />
    </div>
  );
}
