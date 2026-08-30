'use client';

import { motion } from 'framer-motion';

export function TickerMarquee() {
  const items = [
    "// MOVISTRATO.SYS [ STATUS: ACTIVE ]",
    "// 120 FPS NATIVE ARCHITECTURE",
    "// CONTEXTUAL LEARNING ALGORITHMS",
    "// ZERO WEB WRAPPERS",
    "// CONTINUOUS ADAPTATION",
    "// NATIVE PERFORMANCE",
    "// UBIQUITOUS CONTINUITY",
    "// ENGINEERED IN EUROPE"
  ];

  // Repeat items to ensure smooth infinite scrolling
  const allItems = [...items, ...items, ...items];

  return (
    <div className="w-full h-8 flex items-center bg-brand-gold/5 border-b border-border/20 overflow-hidden relative z-10">
      {/* Edge Gradients */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
      
      <motion.div 
        animate={{ x: [0, -1000] }}
        transition={{ 
          duration: 30, 
          ease: "linear", 
          repeat: Infinity 
        }}
        className="flex items-center gap-8 whitespace-nowrap min-w-max pl-4"
      >
        {allItems.map((text, i) => (
          <div key={i} className="flex items-center gap-8">
            <span className="font-mono text-[9px] uppercase tracking-widest text-brand-gold/80">{text}</span>
            <div className="w-1.5 h-1.5 bg-border/40 rounded-full" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
