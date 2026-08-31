"use client";

import { useRef } from 'react';
import { useTranslations } from 'next-intl';
import { motion, useScroll, useTransform, useReducedMotion, type Variants } from 'framer-motion';
import { Container } from '@/components/layout/Container';

export function CompanySection() {
  const t = useTranslations('Company');
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  // Scroll Parallax for the huge background text
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Move the text horizontally opposite to the scroll direction
  const backgroundX = useTransform(scrollYProgress, [0, 1], ["5%", "-15%"]);

  // Stagger variants for the foreground content
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } // Custom easing for premium feel
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="relative w-full min-h-[85vh] lg:min-h-[100dvh] bg-background flex flex-col justify-center overflow-hidden py-24 lg:py-0"
    >
      
      {/* Architectural Background Wordmark */}
      <div 
        className="absolute inset-0 pointer-events-none select-none flex items-center justify-center overflow-hidden opacity-[0.02] dark:opacity-[0.03]"
        aria-hidden="true"
      >
        <motion.span 
          style={{ x: prefersReducedMotion ? 0 : backgroundX }}
          className="font-display text-[30vw] leading-none tracking-tighter whitespace-nowrap text-foreground"
        >
          MOVISTRATO
        </motion.span>
      </div>

      <Container className="relative z-10 w-full flex flex-col justify-center gap-16 md:gap-32">
        
        {/* Section Label */}
        <motion.div 
          initial={{ opacity: 0, width: 0 }}
          whileInView={{ opacity: 1, width: "auto" }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex items-center gap-4 overflow-hidden"
        >
          <div className="w-12 h-px bg-brand-gold/50 shrink-0" />
          <span className="font-mono text-[10px] tracking-widest text-brand-gold uppercase shrink-0">
            {t('label')}
          </span>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start"
        >
          
          {/* Left: Factual Metadata (Restrained) */}
          <div className="lg:col-span-3 flex flex-col gap-10 order-2 lg:order-1 pt-6 lg:pt-3 border-t lg:border-t-0 lg:border-l border-border/50 lg:pl-8">
            <motion.div variants={itemVariants} className="flex flex-col gap-1.5">
              <span className="font-mono text-[9px] tracking-widest text-muted-foreground uppercase">Founded</span>
              <span className="font-mono text-sm tracking-tight text-foreground">{t('fact_founded')}</span>
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex flex-col gap-1.5">
              <span className="font-mono text-[9px] tracking-widest text-muted-foreground uppercase">Location</span>
              <span className="font-mono text-sm tracking-tight text-foreground">{t('fact_location')}</span>
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex flex-col gap-1.5">
              <span className="font-mono text-[9px] tracking-widest text-muted-foreground uppercase">Focus</span>
              <span className="font-mono text-sm tracking-tight text-foreground">{t('fact_focus')}</span>
            </motion.div>
          </div>

          {/* Right: Massive Corporate Statement */}
          <div className="lg:col-span-9 flex flex-col order-1 lg:order-2 lg:pl-8">
            <motion.h2 
              variants={itemVariants}
              className="font-serif text-[clamp(2.5rem,5.5vw,5.2rem)] leading-[1.08] tracking-tight text-foreground mb-8 max-w-[22ch]"
            >
              <span>{t('statement_prefix')}</span>
              <span className="relative inline-block italic font-light text-brand-gold bg-gradient-to-r from-brand-gold via-amber-400 to-amber-500 bg-clip-text text-transparent underline decoration-brand-gold/40 decoration-2 underline-offset-8">
                {t('statement_highlight')}
              </span>
            </motion.h2>
            
            <motion.div variants={itemVariants} className="w-full max-w-[48ch]">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                {t('description')}
              </p>
            </motion.div>
          </div>

        </motion.div>
      </Container>
    </section>
  );
}
