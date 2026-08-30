"use client";

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { Container } from '@/components/layout/Container';

// --- ANIMATION VARIANTS ---

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

const textVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }
  }
};

const nodeVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const lineVariants: Variants = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: { 
    scaleX: 1, 
    opacity: 1,
    transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }
  }
};

const verticalLineVariants: Variants = {
  hidden: { scaleY: 0, opacity: 0 },
  visible: { 
    scaleY: 1, 
    opacity: 1,
    transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }
  }
};

export function AdaptiveSystemSection() {
  const t = useTranslations('AdaptiveSystem');
  const reduce = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);

  const nodes = [
    { key: 'node_user', label: t('node_user') },
    { key: 'node_interaction', label: t('node_interaction') },
    { key: 'node_signals', label: t('node_signals') },
    { key: 'node_context', label: t('node_context') },
    { key: 'node_adaptation', label: t('node_adaptation') },
    { key: 'node_experience', label: t('node_experience') }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % nodes.length);
    }, 1000); // Pass the gold highlight every 1 second
    return () => clearInterval(interval);
  }, [nodes.length]);

  return (
    <section className="relative w-full min-h-screen py-20 lg:py-32 bg-background overflow-hidden flex flex-col justify-center">
      
      {/* Background Architectural Grid */}
      <div 
        className="absolute inset-[-20%] z-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:40px_40px] opacity-[0.03] dark:opacity-[0.05]" 
        aria-hidden="true" 
      />

      {/* Desktop Abstract Brand Ribbon / Ambient Wave */}
      <div className="hidden lg:flex absolute top-1/2 left-0 w-full h-[30vh] -translate-y-1/2 overflow-hidden pointer-events-none items-center justify-center z-0">
         <svg className="w-[150%] h-full" viewBox="0 0 1200 200" preserveAspectRatio="none">
           <motion.path 
             d="M 0 100 Q 150 200 300 100 T 600 100 T 900 100 T 1200 100 T 1500 100 T 1800 100 T 2100 100 T 2400 100 T 2700 100 T 3000 100"
             fill="none" 
             stroke="var(--brand-gold)" 
             strokeWidth="1.5"
             className="opacity-70 dark:opacity-60"
             animate={reduce ? {} : { x: [0, -600] }}
             transition={{ repeat: Infinity, duration: 3.5, ease: "linear" }}
           />
           <motion.path 
             d="M 0 120 Q 200 220 400 120 T 800 120 T 1200 120 T 1600 120 T 2000 120 T 2400 120 T 2800 120 T 3200 120 T 3600 120"
             fill="none" 
             stroke="currentColor" 
             strokeWidth="1"
             className="opacity-30 dark:opacity-20 text-foreground"
             animate={reduce ? {} : { x: [0, -800] }}
             transition={{ repeat: Infinity, duration: 5.5, ease: "linear" }}
           />
         </svg>
      </div>

      <Container className="px-6 lg:px-12 max-w-none relative z-10 w-full flex-1 flex flex-col justify-center">
        
        <motion.div 
          variants={reduce ? {} : containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="w-full flex flex-col gap-10 lg:gap-24"
        >
          
          {/* TOP: Concept Introduction */}
          <div className="flex flex-col lg:flex-row justify-between items-start gap-12 w-full">
            <motion.div variants={textVariants} className="flex flex-col gap-6 w-full lg:w-[45%]">
              <span className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground flex items-center gap-2">
                <span className="w-1.5 h-1.5 border border-brand-gold/60" aria-hidden="true" />
                {t('label')}
              </span>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-[4.5rem] leading-[0.9] tracking-tighter text-foreground">
                {t('title')}
              </h2>
            </motion.div>

            <motion.div variants={textVariants} className="flex flex-col gap-6 w-full lg:w-[35%] lg:pt-4">
              <p className="font-sans text-base lg:text-lg text-muted-foreground leading-relaxed">
                {t('description')}
              </p>
              {/* Decorative data element */}
              <div className="hidden lg:flex items-center gap-4 border-l border-brand-gold/30 pl-4 mt-2">
                 <div className="flex flex-col gap-1">
                   <span className="font-mono text-[8px] uppercase tracking-widest text-muted-foreground/60">State</span>
                   <span className="font-mono text-[10px] tracking-widest text-brand-gold animate-pulse">ACTIVE LOOP</span>
                 </div>
                 <div className="flex flex-col gap-1 ml-4">
                   <span className="font-mono text-[8px] uppercase tracking-widest text-muted-foreground/60">Latency</span>
                   <span className="font-mono text-[10px] tracking-widest text-foreground">{'<'} 16ms</span>
                 </div>
              </div>
            </motion.div>
          </div>

          {/* Mobile/Tablet In-Flow Wave (Precisely between Text and Timeline) */}
          <div className="block lg:hidden relative w-full h-16 sm:h-20 overflow-hidden pointer-events-none -my-2">
            <svg className="w-[300%] h-full" viewBox="0 0 1200 200" preserveAspectRatio="none">
              <motion.path 
                d="M 0 100 Q 150 200 300 100 T 600 100 T 900 100 T 1200 100 T 1500 100 T 1800 100 T 2100 100 T 2400 100 T 2700 100 T 3000 100"
                fill="none" 
                stroke="var(--brand-gold)" 
                strokeWidth="1.5"
                className="opacity-70 dark:opacity-60"
                animate={reduce ? {} : { x: [0, -600] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: "linear" }}
              />
              <motion.path 
                d="M 0 120 Q 200 220 400 120 T 800 120 T 1200 120 T 1600 120 T 2000 120 T 2400 120 T 2800 120 T 3200 120 T 3600 120"
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1"
                className="opacity-30 dark:opacity-20 text-foreground"
                animate={reduce ? {} : { x: [0, -800] }}
                transition={{ repeat: Infinity, duration: 5.5, ease: "linear" }}
              />
            </svg>
          </div>

          {/* BOTTOM: Flow Diagram (Editorial & Engineered) */}
          <div className="relative w-full pb-8 lg:pb-0 mt-2 lg:mt-20">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between relative pl-8 lg:pl-0 gap-10 lg:gap-0">
              
              {/* Connecting Background Line (Desktop) */}
              <motion.div 
                variants={lineVariants}
                className="hidden lg:block absolute left-[5%] right-[5%] top-1.5 -translate-y-1/2 h-[1px] bg-border/60 origin-left z-0"
              />

              {/* Connecting Background Line (Mobile) */}
              <motion.div 
                variants={verticalLineVariants}
                className="block lg:hidden absolute top-3 bottom-3 left-3 -translate-x-1/2 w-[1px] bg-border/60 origin-top z-0"
              />

              {nodes.map((node, i) => {
                const isGold = i === activeIndex;
                const isHighlight = i === activeIndex;
                
                return (
                  <motion.div 
                    key={node.key} 
                    variants={nodeVariants}
                    className="flex flex-row lg:flex-col items-center justify-start lg:justify-center gap-6 lg:gap-4 relative z-10 group w-full lg:w-auto"
                  >
                    {/* Node point */}
                    <div className={`w-6 h-6 lg:w-3 lg:h-3 rounded-none flex items-center justify-center transition-all duration-500 shrink-0
                      ${isGold ? 'bg-brand-gold scale-110 shadow-[0_0_15px_rgba(217,166,46,0.4)]' : 
                        isHighlight ? 'bg-foreground border border-brand-gold/50' : 
                        'bg-surface border border-border group-hover:border-foreground/50'}`
                    }>
                      {isGold && <div className="w-2 h-2 lg:w-1 lg:h-1 bg-background" />}
                    </div>

                    {/* Connecting dashed vertical line to label (editorial touch) - Desktop */}
                    <div className={`hidden lg:block w-px h-6 bg-gradient-to-b ${isGold ? 'from-brand-gold/80' : 'from-border/50'} to-transparent transition-colors duration-500`} />

                    {/* Connecting dashed horizontal line to label (editorial touch) - Mobile */}
                    <div className={`block lg:hidden w-6 h-px bg-gradient-to-r ${isGold ? 'from-brand-gold/80' : 'from-border/50'} to-transparent transition-colors duration-500`} />

                    {/* Technical Label */}
                    <span className={`font-mono text-[11px] lg:text-[10px] uppercase tracking-widest text-left lg:text-center whitespace-nowrap transition-colors duration-500
                      ${isGold ? 'text-brand-gold font-bold' : 
                        isHighlight ? 'text-foreground' : 
                        'text-muted-foreground group-hover:text-foreground'}`
                    }>
                      {node.label}
                    </span>
                  </motion.div>
                );
              })}

            </div>
          </div>

        </motion.div>
      </Container>
    </section>
  );
}
