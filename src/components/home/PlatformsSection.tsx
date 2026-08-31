"use client";

import { useRef } from 'react';
import { useTranslations } from 'next-intl';
import { motion, useScroll, useTransform, useReducedMotion, type Variants } from 'framer-motion';
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

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }
  }
};

const frameVariants: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 1.2, ease: [0.21, 0.47, 0.32, 0.98] }
  }
};

export function PlatformsSection() {
  const t = useTranslations('Platforms');
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const webY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [40, -40]);
  const windowsY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [80, -80]);
  const androidY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [120, -120]);

  return (
    <section ref={sectionRef} className="relative w-full py-24 lg:py-32 bg-background overflow-hidden flex flex-col justify-center">
      
      {/* Subtle ambient light to separate from Engineering */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[40vw] h-[60vh] bg-brand-gold/5 dark:bg-brand-gold/10 blur-[100px] rounded-full pointer-events-none z-0" aria-hidden="true" />

      <Container className="px-6 lg:px-12 max-w-none relative z-10 w-full flex-1 flex flex-col justify-center">
        
        <motion.div 
          variants={reduce ? {} : containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center"
        >
          
          {/* LEFT: Copy */}
          <div className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-1">
            <motion.div variants={itemVariants} className="flex items-center gap-4 mb-8">
              <span className="h-px w-8 bg-brand-gold" />
              <span className="font-mono text-[10px] tracking-widest uppercase text-brand-gold">
                {t('label')}
              </span>
            </motion.div>
            
            <motion.h2 
              variants={itemVariants}
              className="font-display text-4xl lg:text-5xl xl:text-6xl leading-[1.1] tracking-tight text-foreground mb-8 uppercase max-w-[15ch]"
            >
              {t.rich('title', {
                highlight: (chunks) => (
                  <span className="inline-block border border-foreground/20 rounded-full px-4 py-1 italic font-light mx-1 mt-1 lg:mt-2 bg-surface/50 backdrop-blur-sm shadow-sm lowercase transform -rotate-2">
                    {chunks}
                  </span>
                )
              })}
            </motion.h2>

            <motion.p 
              variants={itemVariants}
              className="text-base lg:text-lg text-muted-foreground leading-relaxed max-w-[42ch] mb-12"
            >
              {t.rich('description', {
                highlight: (chunks) => (
                  <span className="text-foreground font-medium">{chunks}</span>
                ),
                underline: (chunks) => (
                  <span className="underline decoration-brand-gold/50 underline-offset-4 text-foreground">{chunks}</span>
                )
              })}
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col gap-6 border-l border-border pl-6">
              <div className="flex flex-col gap-2">
                <span className="font-mono text-[9px] tracking-widest uppercase text-foreground flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-brand-gold rounded-full animate-pulse" />
                  {t('available_label')}
                </span>
                <span className="font-mono text-sm tracking-widest uppercase text-foreground">
                  {t('web')} · {t('android')} · {t('windows')}
                </span>
              </div>
              <div className="flex flex-col gap-2 mt-4 opacity-60">
                <span className="font-mono text-[9px] tracking-widest uppercase text-muted-foreground flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-border rounded-full" />
                  {t('planned_label')}
                </span>
                <span className="font-mono text-xs tracking-widest uppercase text-muted-foreground">
                  {t('ios')} · {t('macos')} · {t('linux')}
                </span>
              </div>
            </motion.div>
          </div>

          {/* RIGHT: Abstract Overlapping Flat-lay */}
          <div className="lg:col-span-7 flex justify-center lg:justify-end order-1 lg:order-2 w-full mb-16 lg:mb-0">
            
            <div className="relative w-full max-w-[500px] lg:max-w-[600px] aspect-[1/1] md:aspect-[4/3] lg:aspect-[16/11] mx-auto lg:mr-0 mt-8 lg:mt-0">
              
              {/* Web Frame */}
              <motion.div 
                variants={frameVariants}
                style={{ y: webY }}
                className="absolute top-0 right-[5%] w-[80%] aspect-[16/10] bg-surface border border-border shadow-md rounded-lg overflow-hidden flex flex-col z-0"
              >
                {/* Abstract Header */}
                <div className="w-full h-8 border-b border-border bg-background/50 flex items-center px-4 gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-border" />
                  <div className="w-2 h-2 rounded-full bg-border" />
                  <div className="w-2 h-2 rounded-full bg-border" />
                  <div className="ml-auto w-1/3 h-2 bg-border/50 rounded-full" />
                </div>
                {/* Abstract Content */}
                <div className="flex-1 flex p-4 gap-4">
                  <div className="w-1/4 h-full border-r border-border/50 pr-4 flex flex-col gap-3">
                    <div className="w-full h-2 bg-border/40 rounded-full" />
                    <div className="w-3/4 h-2 bg-border/40 rounded-full" />
                    <div className="w-5/6 h-2 bg-border/40 rounded-full" />
                  </div>
                  <div className="flex-1 h-full flex flex-col gap-4">
                    <div className="w-1/2 h-4 bg-brand-gold/20 rounded-sm" />
                    <div className="w-full flex-1 bg-border/20 rounded-md border border-border/30" />
                  </div>
                </div>
              </motion.div>

              {/* Windows Frame */}
              <motion.div 
                variants={frameVariants}
                style={{ y: windowsY }}
                className="absolute bottom-[10%] right-0 w-[70%] aspect-[16/10] bg-background border border-border/80 shadow-lg rounded-md overflow-hidden flex flex-col z-10 backdrop-blur-md"
              >
                {/* Abstract Header */}
                <div className="w-full h-8 flex items-center justify-end px-3 gap-2">
                  <div className="w-3 h-px bg-muted-foreground/50" />
                  <div className="w-3 h-2 border border-muted-foreground/50" />
                  <div className="w-3 h-3 flex items-center justify-center relative">
                    <div className="w-px h-full bg-muted-foreground/50 absolute rotate-45" />
                    <div className="w-px h-full bg-muted-foreground/50 absolute -rotate-45" />
                  </div>
                </div>
                {/* Abstract Content */}
                <div className="flex-1 border-t border-border/50 p-5 flex flex-col gap-4">
                   <div className="flex gap-3">
                     <div className="w-8 h-8 rounded-full bg-brand-gold/10 border border-brand-gold/30" />
                     <div className="flex flex-col justify-center gap-2 flex-1">
                       <div className="w-1/3 h-2 bg-foreground/20 rounded-full" />
                       <div className="w-1/4 h-1.5 bg-foreground/10 rounded-full" />
                     </div>
                   </div>
                   <div className="flex-1 bg-surface/50 border border-border/50 rounded flex gap-2 p-3">
                     <div className="w-1/2 h-full bg-border/30 rounded-sm" />
                     <div className="w-1/2 h-full bg-border/30 rounded-sm" />
                   </div>
                </div>
              </motion.div>

              {/* Android Frame */}
              <motion.div 
                variants={frameVariants}
                style={{ y: androidY }}
                className="absolute bottom-[5%] md:bottom-0 left-[2%] md:left-[10%] w-[32%] md:w-[25%] max-w-[140px] aspect-[9/19] bg-surface border-4 border-background shadow-xl rounded-[2rem] overflow-hidden flex flex-col z-20 ring-1 ring-border"
              >
                {/* Abstract Status Bar */}
                <div className="w-full h-6 flex justify-between items-center px-4 pt-1">
                  <div className="w-4 h-1.5 bg-muted-foreground/40 rounded-full" />
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 bg-muted-foreground/40 rounded-sm" />
                    <div className="w-2.5 h-1.5 bg-foreground/50 rounded-sm" />
                  </div>
                </div>
                {/* Abstract Content */}
                <div className="flex-1 px-3 py-4 flex flex-col gap-3">
                  <div className="w-full aspect-square rounded-full border-4 border-brand-gold/20 flex items-center justify-center">
                    <div className="w-1/2 h-1/2 bg-brand-gold/40 rounded-full" />
                  </div>
                  <div className="w-3/4 h-2 bg-foreground/20 rounded-full mx-auto mt-2" />
                  <div className="w-1/2 h-1.5 bg-foreground/10 rounded-full mx-auto" />
                  
                  <div className="w-full h-12 bg-border/30 rounded-xl mt-auto" />
                </div>
                {/* Abstract Navigation Bar */}
                <div className="w-full h-8 flex justify-center items-center pb-2">
                  <div className="w-1/3 h-1 bg-foreground/20 rounded-full" />
                </div>
              </motion.div>

              {/* Floating Data Card 1 */}
              <motion.div
                variants={frameVariants}
                style={{ y: windowsY }}
                className="absolute top-[10%] left-[25%] z-30 bg-surface/80 backdrop-blur-xl border border-border shadow-xl rounded-lg p-3 flex flex-col gap-1 w-fit hidden md:flex"
              >
                <span className="font-mono text-[9px] tracking-widest uppercase text-muted-foreground">{t('card1_label')}</span>
                <span className="font-mono text-sm tracking-tight text-brand-gold font-medium">{t('card1_value')}</span>
              </motion.div>

              {/* Floating Data Card 2 */}
              <motion.div
                variants={frameVariants}
                style={{ y: webY }}
                className="absolute bottom-[20%] right-[-2%] z-30 bg-surface/80 backdrop-blur-xl border border-border shadow-xl rounded-lg p-3 flex flex-col gap-1 w-fit hidden md:flex"
              >
                <span className="font-mono text-[9px] tracking-widest uppercase text-muted-foreground">{t('card2_label')}</span>
                <span className="font-sans font-medium text-sm tracking-tight text-foreground">{t('card2_value')}</span>
              </motion.div>


            </div>
          </div>

        </motion.div>

        {/* BOTTOM: Technical Pillars */}
        <motion.div 
          variants={reduce ? {} : containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="w-full mt-24 lg:mt-32 pt-16 border-t border-border/50 grid grid-cols-1 md:grid-cols-3 gap-12 relative"
        >
          {/* Animated subtle top line for "vida" */}
          <motion.div 
             className="absolute top-0 left-0 h-[1px] bg-brand-gold"
             initial={{ width: 0 }}
             whileInView={{ width: "100%" }}
             viewport={{ once: false }}
             transition={{ duration: 1.5, ease: [0.21, 0.47, 0.32, 0.98] }}
          />

          {[1, 2, 3].map((num) => (
            <motion.div key={num} variants={itemVariants} className="flex flex-col gap-4 relative group">
              {/* Abstract geometric pulsing indicator */}
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center w-6 h-6 border border-border rounded-full bg-surface/50 group-hover:border-brand-gold/50 transition-colors">
                   <span className="w-1.5 h-1.5 bg-brand-gold rounded-full" />
                </span>
                <span className="font-mono text-[10px] tracking-widest text-muted-foreground group-hover:text-foreground transition-colors">
                  00{num}
                </span>
              </div>
              
              {/* Feature Text */}
              {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
              <h3 className="text-base font-serif italic tracking-wide text-foreground mt-2">{t(`feature${num}_title` as any)}</h3>
              {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
              <p className="text-sm text-muted-foreground leading-relaxed border-l border-border/50 pl-4">{t(`feature${num}_desc` as any)}</p>
            </motion.div>
          ))}
        </motion.div>

      </Container>
    </section>
  );
}
