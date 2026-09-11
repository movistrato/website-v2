"use client";

import { useTranslations } from 'next-intl';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import {
  AdaptiveCurveGraphic,
  UbiquitousSyncGraphic,
  NativePerformanceGraphic,
} from '@/components/home/manifesto/ManifestoCardGraphics';
import {
  ContextualAlgorithmGraphic,
  NativeStackGraphic,
} from '@/components/home/manifesto/MethodBentoGraphics';

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
      
      {/* HUD Corners */}
      <div className="absolute top-6 left-6 w-4 h-4 border-l border-t border-border/40" aria-hidden="true" />
      <div className="absolute top-6 right-6 w-4 h-4 border-r border-t border-border/40" aria-hidden="true" />
      <div className="absolute bottom-6 left-6 w-4 h-4 border-l border-b border-border/40" aria-hidden="true" />
      <div className="absolute bottom-6 right-6 w-4 h-4 border-r border-b border-border/40" aria-hidden="true" />
      
      {/* Static Background Grid */}
      <div 
        className="absolute inset-[-20%] z-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:40px_40px] opacity-[0.03] dark:opacity-[0.05]" 
        aria-hidden="true" 
      />
      
      <Container className="px-6 lg:px-12 relative z-10 w-full flex-1 flex flex-col justify-center">
        <motion.div 
          variants={reduce ? {} : containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.25 }}
          className="flex flex-col gap-12 lg:gap-14 w-full"
        >
          
          {/* TOP: Harmonious Grid with Architectural Thesis Plate & Hero Headline */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch w-full">
            
            {/* LEFT: Structural Architectural Thesis Plate (Beautifully framed & fitted) */}
            <motion.div 
              variants={leftColumnVariants}
              className="col-span-1 lg:col-span-4 flex flex-col justify-between p-6 sm:p-7 border border-border/50 bg-surface/30 dark:bg-surface/20 backdrop-blur-md relative group shadow-sm"
            >
              {/* Precision Corner Tick Accents */}
              <div className="absolute -top-1 -left-1 w-2.5 h-2.5 border-l border-t border-brand-gold/60 pointer-events-none" aria-hidden="true" />
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 border-r border-t border-brand-gold/60 pointer-events-none" aria-hidden="true" />
              <div className="absolute -bottom-1 -left-1 w-2.5 h-2.5 border-l border-b border-brand-gold/60 pointer-events-none" aria-hidden="true" />
              <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 border-r border-b border-brand-gold/60 pointer-events-none" aria-hidden="true" />

              {/* Plate Header */}
              <div className="flex items-center justify-between pb-4 border-b border-border/40">
                <div className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 bg-brand-gold rotate-45 block" aria-hidden="true" />
                  <span className="font-mono text-[10px] tracking-widest uppercase text-foreground font-semibold">
                    {t('label')}
                  </span>
                </div>
                <span className="font-mono text-[9px] tracking-widest text-brand-gold uppercase font-medium bg-brand-gold/10 px-1.5 py-0.5 border border-brand-gold/20">
                  MANIFESTO
                </span>
              </div>

              {/* Body Text with Refined Editorial Leading & Contrast */}
              <div className="py-6">
                <p className="font-sans text-sm sm:text-[15px] lg:text-base text-foreground/85 dark:text-foreground/80 leading-relaxed">
                  {t('body')}
                </p>
              </div>

              {/* Plate Technical Baseline Rubric */}
              <div className="pt-4 border-t border-border/40 flex items-center justify-between text-[9px] font-mono text-muted-foreground uppercase tracking-widest">
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  PARADIGMA ADAPTATIVO
                </span>
                <span className="text-brand-gold font-mono font-medium">[ 01 ]</span>
              </div>
            </motion.div>
  
            {/* RIGHT: Monumental Editorial Thesis Headline */}
            <div className="col-span-1 lg:col-span-8 flex flex-col justify-center relative lg:pl-4">
              {/* Intense Breathing Ambient Glow */}
              <motion.div 
                animate={{ opacity: [0.1, 0.35, 0.1], scale: [0.9, 1.1, 0.9] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-brand-gold/8 dark:bg-brand-gold/12 blur-[120px] rounded-full pointer-events-none z-0"
              />
  
              <motion.h2 
                variants={wordVariants} 
                className="font-display text-[2.75rem] sm:text-5xl lg:text-[4.75rem] xl:text-[5.25rem] leading-[0.92] tracking-tight text-foreground relative z-10"
              >
                {t.rich('title', {
                  accent: (chunks) => (
                    <span className="relative inline-block text-brand-gold italic font-normal drop-shadow-[0_0_24px_rgba(217,166,46,0.25)]">
                      <span className="relative z-10">{chunks}</span>
                      {/* Architectural living light underline with smooth shimmer */}
                      <span 
                        className="absolute left-0 -bottom-1 w-full h-[2px] bg-[linear-gradient(90deg,#D9A62E,30%,#FFF6CC,50%,#D9A62E,70%,transparent)] bg-[length:200%_100%] animate-shimmer block" 
                        aria-hidden="true" 
                      />
                    </span>
                  )
                })}
              </motion.h2>
            </div>
          </div>

          {/* BOTTOM: Premium UI Cards (The 3 Core Values) - Full Width with Active Pipeline */}
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-px bg-border/40 border border-border/40 relative z-10">
            
            {/* Card 1: Adaptação Contínua */}
            <motion.div variants={coreValueVariants} className="group flex flex-col justify-between p-6 lg:p-8 bg-background hover:bg-surface/50 transition-all duration-500 overflow-hidden relative cursor-default">
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,var(--brand-gold)_25%,var(--brand-gold)_50%,transparent_50%,transparent_75%,var(--brand-gold)_75%,var(--brand-gold)_100%)] bg-[size:10px_10px] opacity-0 group-hover:opacity-[0.02] transition-opacity duration-500" />
              
              <div className="flex justify-between items-start mb-2">
                 <span className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground group-hover:text-brand-gold transition-colors">01</span>
                 <motion.div 
                   className="w-1.5 h-1.5 bg-brand-gold"
                   animate={{ opacity: [0.3, 1, 0.3], scale: [0.9, 1.25, 0.9] }}
                   transition={{ duration: 2.4, repeat: Infinity, delay: 0 }}
                 />
              </div>

              {/* Architectural Schematic Drawing: Adaptive Curve */}
              <AdaptiveCurveGraphic />

              <div className="flex flex-col gap-2.5 relative z-10 pt-4 border-t border-border/20">
                <span className="font-sans text-xs font-semibold tracking-widest uppercase text-foreground group-hover:text-brand-gold transition-colors">{t('details.item1_title')}</span>
                <span className="text-xs lg:text-sm text-muted-foreground leading-relaxed">{t('details.item1_body')}</span>
              </div>
            </motion.div>

            {/* Card 2: Continuidade Ubíqua */}
            <motion.div variants={coreValueVariants} className="group flex flex-col justify-between p-6 lg:p-8 bg-background hover:bg-surface/50 transition-all duration-500 overflow-hidden relative cursor-default">
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,var(--brand-gold)_25%,var(--brand-gold)_50%,transparent_50%,transparent_75%,var(--brand-gold)_75%,var(--brand-gold)_100%)] bg-[size:10px_10px] opacity-0 group-hover:opacity-[0.02] transition-opacity duration-500" />
              
              <div className="flex justify-between items-start mb-2">
                 <span className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground group-hover:text-brand-gold transition-colors">02</span>
                 <motion.div 
                   className="w-1.5 h-1.5 bg-brand-gold"
                   animate={{ opacity: [0.3, 1, 0.3], scale: [0.9, 1.25, 0.9] }}
                   transition={{ duration: 2.4, repeat: Infinity, delay: 0.8 }}
                 />
              </div>

              {/* Architectural Schematic Drawing: Ubiquitous Sync */}
              <UbiquitousSyncGraphic />

              <div className="flex flex-col gap-2.5 relative z-10 pt-4 border-t border-border/20">
                <span className="font-sans text-xs font-semibold tracking-widest uppercase text-foreground group-hover:text-brand-gold transition-colors">{t('details.item2_title')}</span>
                <span className="text-xs lg:text-sm text-muted-foreground leading-relaxed">{t('details.item2_body')}</span>
              </div>
            </motion.div>

            {/* Card 3: Performance Nativa */}
            <motion.div variants={coreValueVariants} className="group flex flex-col justify-between p-6 lg:p-8 bg-background hover:bg-surface/50 transition-all duration-500 overflow-hidden relative cursor-default">
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,var(--brand-gold)_25%,var(--brand-gold)_50%,transparent_50%,transparent_75%,var(--brand-gold)_75%,var(--brand-gold)_100%)] bg-[size:10px_10px] opacity-0 group-hover:opacity-[0.02] transition-opacity duration-500" />
              
              <div className="flex justify-between items-start mb-2">
                 <span className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground group-hover:text-brand-gold transition-colors">03</span>
                 <motion.div 
                   className="w-1.5 h-1.5 bg-brand-gold"
                   animate={{ opacity: [0.3, 1, 0.3], scale: [0.9, 1.25, 0.9] }}
                   transition={{ duration: 2.4, repeat: Infinity, delay: 1.6 }}
                 />
              </div>

              {/* Architectural Schematic Drawing: Native Performance */}
              <NativePerformanceGraphic />

              <div className="flex flex-col gap-2.5 relative z-10 pt-4 border-t border-border/20">
                <span className="font-sans text-xs font-semibold tracking-widest uppercase text-foreground group-hover:text-brand-gold transition-colors">{t('details.item3_title')}</span>
                <span className="text-xs lg:text-sm text-muted-foreground leading-relaxed">{t('details.item3_body')}</span>
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
          className="w-full mt-12 lg:mt-16 pt-12 border-t border-border/20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
        >
          {/* Bento Header: Architectural Thesis Card */}
          <motion.div 
            variants={leftColumnVariants} 
            className="col-span-1 lg:col-span-4 flex flex-col justify-between p-6 sm:p-7 border border-border/50 bg-surface/30 dark:bg-surface/20 backdrop-blur-md relative group shadow-sm"
          >
            {/* Precision Corner Ticks */}
            <div className="absolute -top-1 -left-1 w-2.5 h-2.5 border-l border-t border-brand-gold/60 pointer-events-none" aria-hidden="true" />
            <div className="absolute -top-1 -right-1 w-2.5 h-2.5 border-r border-t border-brand-gold/60 pointer-events-none" aria-hidden="true" />
            <div className="absolute -bottom-1 -left-1 w-2.5 h-2.5 border-l border-b border-brand-gold/60 pointer-events-none" aria-hidden="true" />
            <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 border-r border-b border-brand-gold/60 pointer-events-none" aria-hidden="true" />

            <div className="flex flex-col gap-5">
              {/* Header Rubric */}
              <div className="flex items-center justify-between pb-3.5 border-b border-border/30">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-brand-gold rounded-none block" />
                  <span className="font-mono text-[10px] tracking-widest uppercase text-foreground font-semibold">
                    {t('method_label')}
                  </span>
                </div>
                <span className="font-mono text-[9px] tracking-widest text-brand-gold uppercase font-medium bg-brand-gold/10 px-1.5 py-0.5 border border-brand-gold/20">
                  METHOD / 02
                </span>
              </div>

              {/* Title with Editorial Newsreader & Living Accent Underline */}
              <h3 className="font-display text-3xl sm:text-4xl lg:text-[2.6rem] leading-[1.05] tracking-tight text-foreground">
                {t.rich('method_title', {
                  accent: (chunks) => (
                    <span className="relative inline-block text-brand-gold italic font-normal drop-shadow-[0_0_20px_rgba(217,166,46,0.25)]">
                      <span className="relative z-10">{chunks}</span>
                      <span 
                        className="absolute left-0 -bottom-1 w-full h-[2px] bg-[linear-gradient(90deg,#D9A62E,30%,#FFF6CC,50%,#D9A62E,70%,transparent)] bg-[length:200%_100%] animate-shimmer block" 
                        aria-hidden="true" 
                      />
                    </span>
                  ),
                })}
              </h3>

              {/* Body Text */}
              <p className="font-sans text-xs sm:text-sm text-foreground/80 dark:text-foreground/75 leading-relaxed">
                {t('method_body')}
              </p>
            </div>

            {/* Bottom Architectural Baseline */}
            <div className="pt-4 mt-6 border-t border-border/30 flex items-center justify-between text-[9px] font-mono text-muted-foreground uppercase tracking-widest">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
                INTERFACE INVISÍVEL
              </span>
              <span className="text-brand-gold font-mono font-medium">[ 120 FPS NATIVO ]</span>
            </div>
          </motion.div>

          {/* Bento Grid Visuals (2 High-Craft Interactive Cards) */}
          <div className="col-span-1 lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
            
            {/* Bento Card 1: Contextual Algorithm */}
            <motion.div 
              variants={coreValueVariants} 
              className="bg-background hover:bg-surface/40 p-6 sm:p-7 border border-border/60 hover:border-brand-gold/50 flex flex-col justify-between relative overflow-hidden group transition-all duration-500 shadow-sm"
            >
              {/* Corner accents */}
              <div className="absolute top-0 right-0 w-2.5 h-2.5 border-r border-t border-border group-hover:border-brand-gold/60 transition-colors" />
              <div className="absolute bottom-0 left-0 w-2.5 h-2.5 border-l border-b border-border group-hover:border-brand-gold/60 transition-colors" />
              
              {/* Subtle background glow on hover */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(217,166,46,0.06),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              <div className="flex justify-between items-start mb-2 relative z-10">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10px] uppercase text-foreground font-semibold tracking-widest group-hover:text-brand-gold transition-colors">
                    Algoritmo
                  </span>
                  <span className="font-mono text-[8px] text-muted-foreground tracking-wider uppercase border-l border-border/40 pl-2">
                    CONTEXT MATRIX
                  </span>
                </div>
                <div className="w-2 h-2 bg-brand-gold animate-pulse rounded-none" />
              </div>

              {/* Interactive Graphic */}
              <div className="my-auto py-2 relative z-10">
                <ContextualAlgorithmGraphic />
              </div>

              <div className="pt-3 border-t border-border/20 flex items-center justify-between text-[8px] font-mono text-muted-foreground uppercase tracking-widest relative z-10">
                <span>PADRÃO COGNITIVO</span>
                <span className="text-brand-gold group-hover:translate-x-0.5 transition-transform">ADAPTAÇÃO REAL-TIME →</span>
              </div>
            </motion.div>

            {/* Bento Card 2: Native Architecture Stack */}
            <motion.div 
              variants={coreValueVariants} 
              className="bg-background hover:bg-surface/40 p-6 sm:p-7 border border-border/60 hover:border-brand-gold/50 flex flex-col justify-between relative overflow-hidden group transition-all duration-500 shadow-sm"
            >
              {/* Corner accents */}
              <div className="absolute top-0 right-0 w-2.5 h-2.5 border-r border-t border-border group-hover:border-brand-gold/60 transition-colors" />
              <div className="absolute bottom-0 left-0 w-2.5 h-2.5 border-l border-b border-border group-hover:border-brand-gold/60 transition-colors" />
              
              {/* Subtle background glow on hover */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(217,166,46,0.06),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              <div className="flex justify-between items-start mb-2 relative z-10">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10px] uppercase text-foreground font-semibold tracking-widest group-hover:text-brand-gold transition-colors">
                    Stack Nativa
                  </span>
                  <span className="font-mono text-[8px] text-muted-foreground tracking-wider uppercase border-l border-border/40 pl-2">
                    BARE-METAL PIPELINE
                  </span>
                </div>
                <span className="font-mono text-[10px] text-brand-gold font-semibold tracking-wider">
                  120 FPS
                </span>
              </div>

              {/* Interactive Graphic */}
              <div className="my-auto py-2 relative z-10">
                <NativeStackGraphic />
              </div>

              <div className="pt-3 border-t border-border/20 flex items-center justify-between text-[8px] font-mono text-muted-foreground uppercase tracking-widest relative z-10">
                <span>ZERO ABSTRAÇÕES</span>
                <span className="text-brand-gold group-hover:translate-x-0.5 transition-transform">DESEMPENHO PURO →</span>
              </div>
            </motion.div>

          </div>
        </motion.div>

      </Container>
    </section>
  );
}
