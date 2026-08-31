"use client";

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { motion, useReducedMotion, type Variants, AnimatePresence } from 'framer-motion';
import { Container } from '@/components/layout/Container';

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

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }
  }
};

const crosshairVariants: Variants = {
  hidden: { scale: 0, opacity: 0, rotate: -45 },
  visible: { 
    scale: 1, 
    opacity: 0.3,
    rotate: 0,
    transition: { duration: 1.2, ease: [0.21, 0.47, 0.32, 0.98] }
  }
};

export function EngineeringSection() {
  const t = useTranslations('Engineering');
  const reduce = useReducedMotion();
  const [activeDesc, setActiveDesc] = useState(0);

  const descriptions = [
    t('description'),
    t('description2'),
    t('description3')
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveDesc((prev) => (prev + 1) % descriptions.length);
    }, 5000); // 5 seconds per text
    return () => clearInterval(interval);
  }, [descriptions.length]);

  return (
    <section className="relative w-full py-20 lg:py-32 bg-background overflow-hidden flex flex-col justify-center">
      
      {/* Background Architectural Grid - strict precision */}
      <div 
        className="absolute inset-[-20%] z-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:100px_100px] opacity-[0.03] dark:opacity-[0.05]" 
        aria-hidden="true" 
      />

      {/* Structural Crosshairs with Motion */}
      <motion.div 
        initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }} variants={reduce ? {} : crosshairVariants}
        className="absolute top-12 left-12 hidden lg:flex items-center justify-center opacity-30"
      >
         <div className="w-px h-6 bg-brand-gold absolute" />
         <div className="w-6 h-px bg-brand-gold absolute" />
      </motion.div>
      <motion.div 
        initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }} variants={reduce ? {} : crosshairVariants}
        className="absolute bottom-12 right-12 hidden lg:flex items-center justify-center opacity-30"
      >
         <div className="w-px h-6 bg-brand-gold absolute" />
         <div className="w-6 h-px bg-brand-gold absolute" />
      </motion.div>

      <Container className="px-6 lg:px-12 max-w-none relative z-10 w-full flex-1 flex flex-col justify-center">
        
        <motion.div 
          variants={reduce ? {} : containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="w-full flex flex-col"
        >
          {/* Header Block */}
          <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-24 mb-16 lg:mb-20">
            
            <motion.div variants={headerVariants} className="flex flex-col gap-6 w-full lg:w-[50%] relative">
              <div className="flex items-center gap-3">
                <span className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground flex items-center gap-2">
                  <span className="w-2 h-2 border border-brand-gold/60" aria-hidden="true" />
                  {t('label')}
                </span>
              </div>
              
              <h2 className="font-display text-4xl sm:text-5xl lg:text-[4.5rem] leading-[0.9] tracking-tighter text-foreground">
                {t.rich('title', {
                  accent: (chunks) => (
                    <span className="relative inline-block text-brand-gold font-normal italic pr-2">
                      <span className="bg-gradient-to-r from-brand-gold via-amber-400 to-amber-500 bg-clip-text text-transparent">
                        {chunks}
                      </span>
                      {/* Editorial Architectural Underline */}
                      <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-brand-gold/80 via-amber-400/60 to-transparent" />
                    </span>
                  )
                })}
              </h2>
            </motion.div>

            <div className="flex flex-col gap-6 w-full lg:w-[40%] lg:pt-6 relative">
               
               <motion.div variants={headerVariants} className="border-l border-transparent pl-6 lg:pl-8 relative min-h-[100px] lg:min-h-[90px] flex items-center">
                 {/* The Scroll Line Track */}
                 <div className="absolute top-0 bottom-0 left-[-1px] w-[2px] bg-border/60">
                   {/* The Active Scroll Thumb */}
                   <motion.div 
                     initial={false}
                     animate={{ top: `${(activeDesc / descriptions.length) * 100}%` }}
                     transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
                     className="absolute left-0 w-full h-1/3 bg-brand-gold shadow-[0_0_8px_rgba(217,166,46,0.3)]" 
                   />
                 </div>
                 
                 {/* The Cycling Text */}
                 <div className="relative w-full h-full flex items-center">
                   <AnimatePresence mode="wait">
                     <motion.p 
                       key={activeDesc}
                       initial={{ opacity: 0, y: 10 }}
                       animate={{ opacity: 1, y: 0 }}
                       exit={{ opacity: 0, y: -10 }}
                       transition={{ duration: 0.5, ease: "easeOut" }}
                       className="font-sans text-base lg:text-lg text-muted-foreground leading-relaxed absolute top-1/2 -translate-y-1/2 left-0 w-full"
                     >
                       {descriptions[activeDesc]}
                     </motion.p>
                   </AnimatePresence>
                 </div>
               </motion.div>
               
               {/* Technical specs readout */}
               <motion.div variants={headerVariants} className="flex items-center gap-6 mt-4 opacity-80 pl-6 lg:pl-8">
                  <div className="flex flex-col gap-1">
                    <span className="font-mono text-[8px] uppercase tracking-widest text-muted-foreground">Framework</span>
                    <span className="font-mono text-[10px] text-foreground uppercase tracking-widest">React Server Components</span>
                  </div>
                  <div className="w-px h-6 bg-border" />
                  <div className="flex flex-col gap-1">
                    <span className="font-mono text-[8px] uppercase tracking-widest text-muted-foreground">Pattern</span>
                    <span className="font-mono text-[10px] text-foreground uppercase tracking-widest">Strict Types</span>
                  </div>
               </motion.div>
            </div>

          </div>

          {/* Modular Architectural System Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-border/40 border border-border/40 relative z-10 w-full shadow-sm">
            
            {/* Pillar 1 - Left column (Spans 5 cols) */}
            <motion.div variants={cardVariants} className="col-span-1 lg:col-span-5 flex flex-col p-8 lg:p-12 bg-background hover:bg-surface/30 transition-colors duration-500 relative cursor-default group overflow-hidden min-h-[350px] lg:min-h-[400px]">
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,var(--brand-gold)_25%,var(--brand-gold)_50%,transparent_50%,transparent_75%,var(--brand-gold)_75%,var(--brand-gold)_100%)] bg-[size:4px_4px] opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700" />
              
              <div className="flex justify-between items-start mb-8 relative z-10">
                <span className="font-mono text-[12px] text-brand-gold font-medium">[ 01 ]</span>
                <div className="w-2 h-2 border border-brand-gold/40 group-hover:bg-brand-gold transition-colors duration-500" />
              </div>

              <div className="flex flex-col gap-4 relative z-10 mt-auto">
                <h3 className="font-sans text-sm font-semibold tracking-widest uppercase text-foreground">
                  {t('pillar1_title')}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed pr-4">
                  {t('pillar1_desc')}
                </p>
              </div>
              
              <div className="absolute top-[40%] right-10 translate-y-[-50%] opacity-20 group-hover:opacity-60 transition-opacity duration-700 pointer-events-none text-brand-gold">
                {/* Structural SVG Graphic with drawing animation */}
                <svg width="120" height="120" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <motion.rect initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.5, ease: "easeInOut" }} x="10" y="10" width="80" height="80" stroke="currentColor" strokeWidth="1.5"/>
                  <motion.rect initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 0.2, ease: "easeInOut" }} x="25" y="25" width="20" height="20" stroke="currentColor" strokeWidth="1.5"/>
                  <motion.rect initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 0.4, ease: "easeInOut" }} x="55" y="55" width="20" height="20" stroke="currentColor" strokeWidth="1.5"/>
                  <motion.path initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 0.6, ease: "easeInOut" }} d="M45 35H80 M20 65H55 M35 45V80 M65 20V55" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4"/>
                </svg>
              </div>
            </motion.div>

            {/* Right column - Stacked vertically (Spans 7 cols) */}
            <div className="col-span-1 lg:col-span-7 grid grid-cols-1 grid-rows-2 gap-px bg-border/40">
               
               {/* Pillar 2 */}
               <motion.div variants={cardVariants} className="flex flex-col lg:flex-row p-8 lg:p-12 bg-background hover:bg-surface/30 transition-colors duration-500 relative cursor-default group overflow-hidden">
                 <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,var(--brand-gold)_25%,var(--brand-gold)_50%,transparent_50%,transparent_75%,var(--brand-gold)_75%,var(--brand-gold)_100%)] bg-[size:4px_4px] opacity-0 group-hover:opacity-[0.02] transition-opacity duration-700" />
                 <div className="flex justify-between items-start lg:w-1/4 mb-8 lg:mb-0 relative z-10">
                   <span className="font-mono text-[12px] text-muted-foreground group-hover:text-brand-gold transition-colors">[ 02 ]</span>
                 </div>
                 <div className="flex flex-col gap-4 relative z-10 lg:w-3/4 pr-12 lg:pr-16">
                    <h3 className="font-sans text-sm font-semibold tracking-widest uppercase text-foreground">
                      {t('pillar2_title')}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {t('pillar2_desc')}
                    </p>
                    <div className="mt-4 flex items-center gap-2 font-mono text-[10px] text-muted-foreground/60 uppercase">
                      <motion.span animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 2, repeat: Infinity }} className="w-1.5 h-1.5 bg-foreground/50 rounded-full" />
                      State: Immutable
                    </div>
                 </div>

                 {/* Pillar 2: Isometric Pyramid Matrix */}
                 <div className="absolute top-1/2 right-6 lg:right-10 translate-y-[-50%] opacity-20 group-hover:opacity-60 transition-opacity duration-700 pointer-events-none text-brand-gold">
                   <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <motion.polygon 
                       initial={{ pathLength: 0 }} 
                       whileInView={{ pathLength: 1 }} 
                       transition={{ duration: 1.5, ease: "easeInOut" }} 
                       points="50,15 88,40 50,65 12,40" 
                       stroke="currentColor" 
                       strokeWidth="1.5" 
                     />
                     <motion.polygon 
                       initial={{ pathLength: 0 }} 
                       whileInView={{ pathLength: 1 }} 
                       transition={{ duration: 1.5, delay: 0.2, ease: "easeInOut" }} 
                       points="50,30 76,48 50,66 24,48" 
                       stroke="currentColor" 
                       strokeWidth="1.5" 
                     />
                     <motion.line 
                       initial={{ pathLength: 0 }} 
                       whileInView={{ pathLength: 1 }} 
                       transition={{ duration: 1.5, delay: 0.4, ease: "easeInOut" }} 
                       x1="50" y1="15" x2="50" y2="85" 
                       stroke="currentColor" 
                       strokeWidth="1.5" 
                     />
                     <motion.path 
                       initial={{ pathLength: 0 }} 
                       whileInView={{ pathLength: 1 }} 
                       transition={{ duration: 1.5, delay: 0.6, ease: "easeInOut" }} 
                       d="M12 40L50 85L88 40" 
                       stroke="currentColor" 
                       strokeWidth="1.5" 
                       strokeDasharray="4 4" 
                     />
                   </svg>
                 </div>
               </motion.div>

               {/* Pillar 3 */}
               <motion.div variants={cardVariants} className="flex flex-col lg:flex-row p-8 lg:p-12 bg-background hover:bg-surface/30 transition-colors duration-500 relative cursor-default group overflow-hidden">
                 <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,var(--brand-gold)_25%,var(--brand-gold)_50%,transparent_50%,transparent_75%,var(--brand-gold)_75%,var(--brand-gold)_100%)] bg-[size:4px_4px] opacity-0 group-hover:opacity-[0.02] transition-opacity duration-700" />
                 <div className="flex justify-between items-start lg:w-1/4 mb-8 lg:mb-0 relative z-10">
                   <span className="font-mono text-[12px] text-muted-foreground group-hover:text-brand-gold transition-colors">[ 03 ]</span>
                 </div>
                 <div className="flex flex-col gap-4 relative z-10 lg:w-3/4 pr-12 lg:pr-16">
                    <h3 className="font-sans text-sm font-semibold tracking-widest uppercase text-foreground">
                      {t('pillar3_title')}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {t('pillar3_desc')}
                    </p>
                    <div className="mt-4 flex items-center gap-2 font-mono text-[10px] text-muted-foreground/60 uppercase">
                      <span className="w-1.5 h-1.5 bg-brand-gold/60 rounded-full animate-pulse" />
                      Perf: Native
                    </div>
                 </div>

                 {/* Pillar 3: Architectural Precision Star */}
                 <div className="absolute top-1/2 right-6 lg:right-10 translate-y-[-50%] opacity-20 group-hover:opacity-60 transition-opacity duration-700 pointer-events-none text-brand-gold">
                   <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <motion.polygon 
                       initial={{ pathLength: 0 }} 
                       whileInView={{ pathLength: 1 }} 
                       transition={{ duration: 1.5, ease: "easeInOut" }} 
                       points="50,10 61,38 90,50 61,62 50,90 39,62 10,50 39,38" 
                       stroke="currentColor" 
                       strokeWidth="1.5" 
                     />
                     <motion.polygon 
                       initial={{ pathLength: 0 }} 
                       whileInView={{ pathLength: 1 }} 
                       transition={{ duration: 1.5, delay: 0.2, ease: "easeInOut" }} 
                       points="50,28 72,50 50,72 28,50" 
                       stroke="currentColor" 
                       strokeWidth="1.5" 
                     />
                     <motion.circle 
                       initial={{ pathLength: 0 }} 
                       whileInView={{ pathLength: 1 }} 
                       transition={{ duration: 1.5, delay: 0.4, ease: "easeInOut" }} 
                       cx="50" cy="50" r="8" 
                       stroke="currentColor" 
                       strokeWidth="1.5" 
                     />
                     <motion.path 
                       initial={{ pathLength: 0 }} 
                       whileInView={{ pathLength: 1 }} 
                       transition={{ duration: 1.5, delay: 0.6, ease: "easeInOut" }} 
                       d="M50 0V100 M0 50H100" 
                       stroke="currentColor" 
                       strokeWidth="1" 
                       strokeDasharray="4 4" 
                     />
                   </svg>
                 </div>
               </motion.div>

            </div>

          </div>

        </motion.div>

      </Container>
    </section>
  );
}
