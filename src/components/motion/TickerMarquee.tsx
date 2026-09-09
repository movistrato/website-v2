'use client';

import { motion } from 'framer-motion';

interface TickerMarqueeProps {
  className?: string;
}

export function TickerMarquee({ className = '' }: TickerMarqueeProps) {
  const items = [
    { text: "MOVISTRATO.SYS", isSerif: false },
    { text: "Continuous Adaptation", isSerif: true },
    { text: "120 FPS NATIVE", isSerif: false },
    { text: "Contextual learning", isSerif: true },
    { text: "ZERO WEB WRAPPERS", isSerif: false },
    { text: "Ubiquitous Continuity", isSerif: true },
    { text: "Engineered in Europe", isSerif: true }
  ];

  // Duplicate items to ensure smooth infinite scrolling
  const allItems = [...items, ...items];

  return (
    <div
      className={`w-full h-11 sm:h-12 flex items-center border-y border-border/60 bg-surface/40 dark:bg-surface/20 overflow-hidden relative z-10 ${className}`}
    >
      {/* Edge Gradients for smooth fade in/out */}
      <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-28 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-28 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
      
      <motion.div 
        animate={{ x: ["0%", "-50%"] }}
        transition={{ 
          duration: 26, 
          ease: "linear", 
          repeat: Infinity 
        }}
        className="flex items-center gap-12 sm:gap-14 whitespace-nowrap"
      >
        {allItems.map((item, i) => (
          <div key={i} className="flex items-center gap-12 sm:gap-14">
            {item.isSerif ? (
              <span className="font-display italic text-xs lg:text-sm text-foreground tracking-wide">
                {item.text}
              </span>
            ) : (
              <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-brand-gold/90 font-medium">
                {item.text}
              </span>
            )}
            <span className="text-foreground/20 text-[10px] font-mono select-none">┼</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
