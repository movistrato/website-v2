"use client";

import { useTranslations } from 'next-intl';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import { TickerMarquee } from '@/components/motion/TickerMarquee';

// --- ANIMATION VARIANTS ---

const containerVariants: Variants = {
  hidden: { 
    opacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1
    }
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
      staggerDirection: 1
    }
  }
};

const leftColumnVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }
  }
};

const wordVariants: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(8px)", scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    scale: 1,
    transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }
  }
};

const coreValueVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

export function ManifestoSection() {
  const t = useTranslations('Manifesto');
  const reduce = useReducedMotion();

  return (
    <section className="relative w-full min-h-screen py-12 lg:py-20 bg-background overflow-hidden flex flex-col justify-center">
      
      {/* Absolute top ticker */}
      <div className="absolute top-0 left-0 w-full">
        <TickerMarquee />
      </div>
      
      {/* HUD Corners */}
      <div className="absolute top-16 left-6 w-4 h-4 border-l border-t border-border/40" aria-hidden="true" />
      <div className="absolute top-16 right-6 w-4 h-4 border-r border-t border-border/40" aria-hidden="true" />
      <div className="absolute bottom-6 left-6 w-4 h-4 border-l border-b border-border/40" aria-hidden="true" />
      <div className="absolute bottom-6 right-6 w-4 h-4 border-r border-b border-border/40" aria-hidden="true" />
      
      {/* Static Background Grid */}
      <div 
        className="absolute inset-[-20%] z-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:40px_40px] opacity-[0.03] dark:opacity-[0.05]" 
        aria-hidden="true" 
      />
      
      <Container className="px-6 lg:px-12 max-w-none relative z-10 w-full flex-1 flex flex-col justify-center">
        <motion.div 
          variants={reduce ? {} : containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="flex flex-col gap-12 lg:gap-16 w-full"
        >
          
          {/* TOP: Grid with Label and Thesis */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-end w-full">
            
            {/* LEFT: Structural Label & Body */}
            <motion.div 
              variants={leftColumnVariants}
              className="col-span-1 lg:col-span-4 flex flex-col gap-6 relative pb-2 lg:pb-4"
            >
              <div className="flex flex-col gap-6">
                {/* Decorative crosshair */}
                <div className="absolute -top-12 -left-6 hidden lg:flex opacity-20 items-center justify-center">
                   <div className="w-px h-4 bg-brand-gold absolute" />
                   <div className="w-4 h-px bg-brand-gold absolute" />
                </div>
  
                <div className="flex items-center gap-4">
                   <div className="w-1.5 h-1.5 border border-brand-gold/60 rotate-45" aria-hidden="true" />
                   <span className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground">
                     {t('label')}
                   </span>
                </div>
                
                <div className="hidden lg:block w-full h-[1px] bg-border/40" aria-hidden="true" />
                
                <p className="font-sans text-base lg:text-lg text-muted-foreground leading-relaxed max-w-sm">
                  {t('body')}
                </p>
              </div>
            </motion.div>
  
            {/* RIGHT: Massive Kinetic Thesis */}
            <div className="col-span-1 lg:col-span-8 lg:pl-12 relative">
              {/* Intense Breathing Ambient Glow */}
              <motion.div 
                animate={{ opacity: [0.1, 0.4, 0.1], scale: [0.85, 1.15, 0.85] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-brand-gold/10 dark:bg-brand-gold/10 blur-[120px] rounded-full pointer-events-none z-0"
              />
  
              <motion.h2 variants={wordVariants} className="font-display text-[2.75rem] sm:text-5xl lg:text-[5.5rem] leading-[0.9] tracking-tighter text-foreground relative z-10">
                {t.rich('title', {
                  accent: (chunks) => (
                    <span className="relative inline-block text-brand-gold italic px-2 py-0.5 bg-brand-gold/10 border-b-2 border-brand-gold font-normal">
                      {chunks}
                    </span>
                  )
                })}
              </motion.h2>
            </div>
          </div>

          {/* BOTTOM: Premium UI Cards (The 3 Core Values) - Full Width */}
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-px bg-border/40 border border-border/40 relative z-10">
            
            {/* Card 1 */}
            <motion.div variants={coreValueVariants} className="group flex flex-col justify-between p-6 lg:p-10 bg-background hover:bg-surface/40 transition-all duration-500 overflow-hidden relative cursor-default">
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,var(--brand-gold)_25%,var(--brand-gold)_50%,transparent_50%,transparent_75%,var(--brand-gold)_75%,var(--brand-gold)_100%)] bg-[size:10px_10px] opacity-0 group-hover:opacity-[0.02] transition-opacity duration-500" />
              <div className="flex justify-between items-start mb-10 lg:mb-14">
                 <span className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground group-hover:text-brand-gold transition-colors">01</span>
                 <div className="w-1.5 h-1.5 bg-brand-gold/0 group-hover:bg-brand-gold rounded-none transition-colors duration-500" />
              </div>
              <div className="flex flex-col gap-3 relative z-10">
                <span className="font-sans text-xs font-semibold tracking-widest uppercase text-foreground group-hover:text-brand-gold transition-colors">{t('details.item1_title')}</span>
                <span className="text-sm text-muted-foreground leading-relaxed">{t('details.item1_body')}</span>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div variants={coreValueVariants} className="group flex flex-col justify-between p-6 lg:p-10 bg-background hover:bg-surface/40 transition-all duration-500 overflow-hidden relative cursor-default">
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,var(--brand-gold)_25%,var(--brand-gold)_50%,transparent_50%,transparent_75%,var(--brand-gold)_75%,var(--brand-gold)_100%)] bg-[size:10px_10px] opacity-0 group-hover:opacity-[0.02] transition-opacity duration-500" />
              <div className="flex justify-between items-start mb-10 lg:mb-14">
                 <span className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground group-hover:text-brand-gold transition-colors">02</span>
                 <div className="w-1.5 h-1.5 bg-brand-gold/0 group-hover:bg-brand-gold rounded-none transition-colors duration-500" />
              </div>
              <div className="flex flex-col gap-3 relative z-10">
                <span className="font-sans text-xs font-semibold tracking-widest uppercase text-foreground group-hover:text-brand-gold transition-colors">{t('details.item2_title')}</span>
                <span className="text-sm text-muted-foreground leading-relaxed">{t('details.item2_body')}</span>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div variants={coreValueVariants} className="group flex flex-col justify-between p-6 lg:p-10 bg-background hover:bg-surface/40 transition-all duration-500 overflow-hidden relative cursor-default">
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,var(--brand-gold)_25%,var(--brand-gold)_50%,transparent_50%,transparent_75%,var(--brand-gold)_75%,var(--brand-gold)_100%)] bg-[size:10px_10px] opacity-0 group-hover:opacity-[0.02] transition-opacity duration-500" />
              <div className="flex justify-between items-start mb-10 lg:mb-14">
                 <span className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground group-hover:text-brand-gold transition-colors">03</span>
                 <div className="w-1.5 h-1.5 bg-brand-gold/0 group-hover:bg-brand-gold rounded-none transition-colors duration-500" />
              </div>
              <div className="flex flex-col gap-3 relative z-10">
                <span className="font-sans text-xs font-semibold tracking-widest uppercase text-foreground group-hover:text-brand-gold transition-colors">{t('details.item3_title')}</span>
                <span className="text-sm text-muted-foreground leading-relaxed">{t('details.item3_body')}</span>
              </div>
            </motion.div>

          </div>

        </motion.div>

        {/* --- PHASE 2: THE METHOD BENTO BOX --- */}
        <motion.div 
          variants={reduce ? {} : containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="w-full mt-12 lg:mt-16 pt-12 border-t border-border/10 grid grid-cols-1 lg:grid-cols-12 gap-8"
        >
          {/* Bento Header */}
          <motion.div variants={coreValueVariants} className="col-span-1 lg:col-span-4 flex flex-col gap-6">
            <span className="font-mono text-[10px] tracking-widest uppercase text-brand-gold flex items-center gap-2">
               <span className="w-1.5 h-1.5 bg-brand-gold rounded-none" />
               {t('method_label')}
            </span>
            <h3 className="font-display text-3xl lg:text-4xl leading-none tracking-tight text-foreground">
              {t('method_title')}
            </h3>
            <p className="font-sans text-muted-foreground leading-relaxed">
              {t('method_body')}
            </p>
          </motion.div>

          {/* Bento Grid Visuals */}
          <div className="col-span-1 lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-px bg-border/20 border border-border/20">
            
            {/* Bento Card 1: Contextual Graph */}
            <motion.div variants={coreValueVariants} className="bg-background hover:bg-surface/30 p-8 aspect-video flex flex-col justify-between relative overflow-hidden group transition-colors duration-500">
              <div className="flex justify-between items-start">
                <span className="font-mono text-[10px] uppercase text-muted-foreground tracking-widest">Algoritmo</span>
                <div className="w-2 h-2 bg-brand-gold animate-pulse rounded-none" />
              </div>
              <div className="flex items-end gap-1 h-24 mt-auto opacity-70">
                {/* CSS Bar Chart - Animated */}
                {[40, 70, 45, 90, 65, 100, 80].map((h, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ height: "5%" }}
                    whileInView={{ height: `${h}%` }}
                    transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                    className="flex-1 bg-border/50 transition-colors duration-700 group-hover:bg-brand-gold/40" 
                  />
                ))}
              </div>
            </motion.div>

            {/* Bento Card 2: Architecture Stack */}
            <motion.div variants={coreValueVariants} className="bg-background hover:bg-surface/30 p-8 aspect-video flex flex-col justify-between relative overflow-hidden group transition-colors duration-500">
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,var(--border)_25%,var(--border)_50%,transparent_50%,transparent_75%,var(--border)_75%,var(--border)_100%)] bg-[size:20px_20px] opacity-[0.02] group-hover:opacity-[0.05] transition-opacity duration-700" />
              <div className="flex justify-between items-start relative z-10">
                <span className="font-mono text-[10px] uppercase text-muted-foreground tracking-widest">Stack Nativa</span>
                <span className="font-mono text-[10px] text-brand-gold">120 FPS</span>
              </div>
              <div className="flex flex-col gap-1 mt-auto relative z-10">
                <div className="w-full h-8 border border-border/40 flex items-center px-4 font-mono text-[10px] text-muted-foreground group-hover:border-brand-gold/50 transition-colors uppercase tracking-widest bg-background">UI LAYER</div>
                <div className="w-full h-8 border border-border/40 flex items-center px-4 font-mono text-[10px] text-muted-foreground group-hover:border-brand-gold/50 transition-colors uppercase tracking-widest bg-background">ENGINE CORE</div>
                <div className="w-full h-8 border border-border/40 flex items-center px-4 font-mono text-[10px] text-muted-foreground group-hover:border-brand-gold/50 transition-colors uppercase tracking-widest bg-border/20">HARDWARE</div>
              </div>
            </motion.div>

          </div>
        </motion.div>

      </Container>
    </section>
  );
}
