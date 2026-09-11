"use client";

import { useRef } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { motion, useScroll, useTransform, useReducedMotion, type Variants } from 'framer-motion';
import { Container } from '@/components/layout/Container';

export function CompanySection() {
  const t = useTranslations('Company');
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  // Cinematic horizontal parallax for the architectural background wordmark
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const backgroundX = useTransform(scrollYProgress, [0, 1], ["4%", "-12%"]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.14,
        delayChildren: 0.1,
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="relative w-full min-h-[90vh] lg:min-h-[100dvh] bg-background flex flex-col justify-center overflow-hidden py-24 lg:py-32 border-b border-border/20"
    >
      {/* Precision Corner Ticks */}
      <div className="absolute top-6 left-6 w-3 h-3 border-l border-t border-border/40 pointer-events-none" aria-hidden="true" />
      <div className="absolute top-6 right-6 w-3 h-3 border-r border-t border-border/40 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-6 left-6 w-3 h-3 border-l border-b border-border/40 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-6 right-6 w-3 h-3 border-r border-b border-border/40 pointer-events-none" aria-hidden="true" />

      {/* Subtle Background Blueprint Grid */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:64px_64px] opacity-[0.025] dark:opacity-[0.04] pointer-events-none" 
        aria-hidden="true" 
      />

      {/* Ambient Warm Golden Aura */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[40vh] bg-brand-gold/3 dark:bg-brand-gold/6 blur-[180px] rounded-full pointer-events-none z-0" 
        aria-hidden="true" 
      />

      {/* Architectural Background Wordmark with Outline Cut & Parallax Motion */}
      <div 
        className="absolute inset-0 pointer-events-none select-none flex items-center justify-center overflow-hidden z-0"
        aria-hidden="true"
      >
        <motion.span 
          style={{ x: prefersReducedMotion ? 0 : backgroundX }}
          className="font-display text-[26vw] leading-none tracking-tighter whitespace-nowrap text-foreground/3 dark:text-foreground/4 font-semibold selection:bg-transparent"
        >
          MOVISTRATO
        </motion.span>
      </div>

      <Container className="relative z-10 w-full flex flex-col justify-center gap-14 lg:gap-20">
        
        {/* Section Top Header & Rubric */}
        <motion.div 
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-wrap items-center justify-between gap-4 border-b border-border/20 pb-4"
        >
          <div className="flex items-center gap-3 font-mono text-[10px] tracking-widest uppercase text-muted-foreground">
            <span className="w-1.5 h-1.5 bg-brand-gold rotate-45" />
            <span className="font-semibold text-foreground">{t('label')}</span>
            <span className="text-brand-gold font-medium bg-brand-gold/10 px-2 py-0.5 border border-brand-gold/25 ml-1">
              SOBERANIA DE PRODUTO
            </span>
          </div>

          <span className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground/70 hidden sm:inline-block">
            INDEPENDÊNCIA E ENGENHARIA DELIBERADA
          </span>
        </motion.div>

        {/* Main Content Grid: Factual Entity Matrix (Left) + Monumental Statement (Right) */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
        >
          
          {/* Left Column: Factual Entity Matrix (Structured, Architectural, Crisp) */}
          <div className="lg:col-span-4 flex flex-col gap-3 order-2 lg:order-1 font-mono">
            {/* Card 1: Founded */}
            <motion.div 
              variants={itemVariants} 
              className="p-4 sm:p-5 bg-surface/30 dark:bg-surface/10 border border-border/40 hover:border-brand-gold/40 transition-colors duration-300 flex flex-col gap-2 group"
            >
              <div className="flex items-center justify-between text-[9px] uppercase tracking-widest text-muted-foreground border-b border-border/20 pb-2">
                <span className="flex items-center gap-1.5">
                  <span className="w-1 h-1 bg-brand-gold" />
                  01 // FUNDAÇÃO
                </span>
                <span className="flex items-center gap-1 text-emerald-500 font-medium text-[8px]">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping" />
                  ATIVO
                </span>
              </div>
              <div className="flex items-baseline justify-between pt-1">
                <span className="font-sans font-semibold text-xl sm:text-2xl text-foreground tracking-tight group-hover:text-brand-gold transition-colors">
                  {t('fact_founded')}
                </span>
                <span className="text-[8px] uppercase tracking-wider text-muted-foreground">
                  NOVA GERAÇÃO
                </span>
              </div>
            </motion.div>
            
            {/* Card 2: Location */}
            <motion.div 
              variants={itemVariants} 
              className="p-4 sm:p-5 bg-surface/30 dark:bg-surface/10 border border-border/40 hover:border-brand-gold/40 transition-colors duration-300 flex flex-col gap-2 group"
            >
              <div className="flex items-center justify-between text-[9px] uppercase tracking-widest text-muted-foreground border-b border-border/20 pb-2">
                <span className="flex items-center gap-1.5">
                  <span className="w-1 h-1 bg-brand-gold" />
                  02 // JURISDIÇÃO
                </span>
                <span className="text-[8px] text-muted-foreground/70">
                  UNIÃO EUROPEIA
                </span>
              </div>
              <div className="flex items-baseline justify-between pt-1">
                <span className="font-sans font-semibold text-xl sm:text-2xl text-foreground tracking-tight group-hover:text-brand-gold transition-colors">
                  {t('fact_location')}
                </span>
                <span className="text-[8px] uppercase tracking-wider text-muted-foreground">
                  SEDE GLOBAL
                </span>
              </div>
            </motion.div>
            
            {/* Card 3: Focus */}
            <motion.div 
              variants={itemVariants} 
              className="p-4 sm:p-5 bg-surface/30 dark:bg-surface/10 border border-border/40 hover:border-brand-gold/40 transition-colors duration-300 flex flex-col gap-2 group"
            >
              <div className="flex items-center justify-between text-[9px] uppercase tracking-widest text-muted-foreground border-b border-border/20 pb-2">
                <span className="flex items-center gap-1.5">
                  <span className="w-1 h-1 bg-brand-gold" />
                  03 // MANDATO
                </span>
                <span className="text-[8px] text-brand-gold font-medium">
                  PROPRIETÁRIO
                </span>
              </div>
              <div className="flex items-baseline justify-between pt-1">
                <span className="font-sans font-semibold text-base sm:text-lg text-foreground tracking-tight group-hover:text-brand-gold transition-colors">
                  {t('fact_focus')}
                </span>
                <span className="text-[8px] uppercase tracking-wider text-muted-foreground">
                  ZERO CONSULTORIA
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Monumental Corporate Statement */}
          <div className="lg:col-span-8 flex flex-col gap-8 order-1 lg:order-2 lg:pl-4">
            {/* Monumental Headline */}
            <motion.h2 
              variants={itemVariants}
              className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-[4.75rem] leading-[0.96] tracking-tight text-foreground max-w-[20ch]"
            >
              <span>{t('statement_prefix')}</span>
              <span className="relative inline-block text-brand-gold font-serif italic font-normal px-1">
                <span className="bg-gradient-to-r from-brand-gold via-amber-300 to-brand-gold bg-clip-text text-transparent">
                  {t('statement_highlight')}
                </span>
                {/* Architectural Precision Underline */}
                <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-brand-gold/80 via-amber-400/60 to-transparent" />
              </span>
            </motion.h2>
            
            {/* Editorial Narrative (No large em-dash, pure readable cadence) */}
            <motion.div variants={itemVariants} className="w-full max-w-2xl">
              <p className="font-sans text-lg sm:text-xl lg:text-2xl text-foreground/85 font-light leading-relaxed">
                {t('description')}
              </p>
            </motion.div>

            {/* Institutional Action Badge */}
            <motion.div variants={itemVariants} className="pt-4 flex items-center gap-6">
              <Link 
                href="/company" 
                className="group flex items-center gap-3 font-mono text-xs tracking-widest uppercase text-foreground hover:text-brand-gold transition-colors focus-visible:outline-none w-fit py-2 border-b border-foreground/30 hover:border-brand-gold"
              >
                <span>{t('cta')}</span>
                <span className="text-base font-sans font-light leading-none transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
              </Link>

              <span className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground/60 hidden sm:inline-block">
                ARQUITETURA DE LONGO PRAZO
              </span>
            </motion.div>
          </div>

        </motion.div>
      </Container>
    </section>
  );
}
