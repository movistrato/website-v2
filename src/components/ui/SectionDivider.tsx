"use client";

import { motion } from 'framer-motion';

export function SectionDivider() {
  return (
    <div className="w-full flex justify-center items-center py-6 lg:py-10 overflow-hidden relative z-20">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex items-center gap-4 text-xs lg:text-sm font-mono tracking-[0.3em] font-light"
      >
        <span className="text-border/60">-------------</span>
        <span className="relative">
          {/* Gradient text that animates */}
          <span 
            className="absolute inset-0 bg-gradient-to-r from-brand-gold via-amber-200 to-brand-gold bg-[length:200%_auto] bg-clip-text text-transparent opacity-90"
            style={{
              animation: 'shimmer 3s linear infinite'
            }}
          >
            //
          </span>
          <span className="opacity-0">//</span>
        </span>
        <span className="text-border/60">-------------</span>
      </motion.div>
    </div>
  );
}
