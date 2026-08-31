'use client';

import { motion } from 'framer-motion';

export function TickerMarquee() {
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
    <div className="w-full h-10 flex items-center border-y border-foreground/10 dark:border-foreground/5 overflow-hidden relative z-10 bg-transparent">
      {/* Edge Gradients */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
      
      <motion.div 
        animate={{ x: ["0%", "-50%"] }}
        transition={{ 
          duration: 25, 
          ease: "linear", 
          repeat: Infinity 
        }}
        className="flex items-center gap-12 whitespace-nowrap"
      >
        {allItems.map((item, i) => (
          <div key={i} className="flex items-center gap-12">
            {item.isSerif ? (
              <span className="font-display italic text-xs lg:text-sm text-foreground tracking-wide">
                {item.text}
              </span>
            ) : (
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-brand-gold/90 font-medium">
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
