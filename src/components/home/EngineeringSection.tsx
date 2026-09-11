"use client";

import { useTranslations } from 'next-intl';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import { StructuralPrecisionGraphic } from '@/components/home/engineering/StructuralPrecisionGraphic';
import { ZeroTrustStateGraphic } from '@/components/home/engineering/ZeroTrustStateGraphic';
import { BareMetalEfficiencyGraphic } from '@/components/home/engineering/BareMetalEfficiencyGraphic';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }
  }
};

export function EngineeringSection() {
  const t = useTranslations('Engineering');
  const reduce = useReducedMotion();

  const pillars = [
    {
      index: '01',
      title: t('pillar1_title'),
      desc: t('pillar1_desc'),
      principle: 'CONTRATOS E FRONTEIRAS',
      Graphic: StructuralPrecisionGraphic
    },
    {
      index: '02',
      title: t('pillar2_title'),
      desc: t('pillar2_desc'),
      principle: 'DETERMINISMO DE ESTADO',
      Graphic: ZeroTrustStateGraphic
    },
    {
      index: '03',
      title: t('pillar3_title'),
      desc: t('pillar3_desc'),
      principle: 'EXECUÇÃO DIRETA',
      Graphic: BareMetalEfficiencyGraphic
    }
  ];

  return (
    <section className="relative w-full py-20 lg:py-32 bg-background text-foreground overflow-hidden border-b border-border/20">
      
      {/* Precision Corner Ticks */}
      <div className="absolute top-6 left-6 w-3 h-3 border-l border-t border-border/40 pointer-events-none" aria-hidden="true" />
      <div className="absolute top-6 right-6 w-3 h-3 border-r border-t border-border/40 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-6 left-6 w-3 h-3 border-l border-b border-border/40 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-6 right-6 w-3 h-3 border-r border-b border-border/40 pointer-events-none" aria-hidden="true" />

      {/* Subtle Blueprint Grid Pattern */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:64px_64px] opacity-[0.025] dark:opacity-[0.04] pointer-events-none" 
        aria-hidden="true" 
      />

      <Container className="px-6 lg:px-12 max-w-none relative z-10 w-full">
        <motion.div 
          variants={reduce ? {} : containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="w-full flex flex-col gap-14 lg:gap-18"
        >
          {/* SECTION HEADER: Editorial Authority & Clear Manifesto */}
          <div className="flex flex-col lg:flex-row justify-between items-start gap-10 lg:gap-16 pb-12 border-b border-border/20">
            
            {/* Title & Architectural Label */}
            <motion.div variants={itemVariants} className="flex flex-col gap-5 w-full lg:w-[50%]">
              <div className="flex items-center gap-2 font-mono text-[10px] tracking-widest uppercase text-muted-foreground">
                <span className="w-1.5 h-1.5 bg-brand-gold rotate-45" aria-hidden="true" />
                <span className="font-semibold text-foreground">{t('label')}</span>
                <span className="text-brand-gold font-medium bg-brand-gold/10 px-2 py-0.5 border border-brand-gold/20 ml-2">
                  FILOSOFIA DE SOFTWARE
                </span>
              </div>

              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[0.95] tracking-tight text-foreground">
                {t.rich('title', {
                  accent: (chunks) => (
                    <span className="text-brand-gold font-normal italic pr-1">
                      {chunks}
                    </span>
                  )
                })}
              </h2>

              <p className="font-sans text-base sm:text-lg text-foreground/85 leading-relaxed max-w-xl">
                {t('description2')}
              </p>
            </motion.div>

            {/* Supporting Editorial Prose & System Principles */}
            <motion.div variants={itemVariants} className="flex flex-col justify-between gap-8 w-full lg:w-[45%] lg:pt-4">
              <p className="font-sans text-sm sm:text-base text-muted-foreground leading-relaxed">
                {t('description')}
              </p>

              {/* Structural Specification Key Indicators */}
              <div className="flex flex-col gap-2 pt-2 border-t border-border/20">
                <span className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-brand-gold/80" />
                  DIRETRIZES DE ENGENHARIA // SUMÁRIO EXECUTIVO
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1 font-mono text-[10px] tracking-wider uppercase">
                  <div className="flex items-center gap-2 px-3 py-2 bg-surface/30 dark:bg-surface/15 border border-border/40 hover:border-brand-gold/40 transition-colors">
                    <span className="text-brand-gold font-semibold text-[9px]">01</span>
                    <span className="text-foreground/90 font-medium">Contratos Estritos</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 bg-surface/30 dark:bg-surface/15 border border-border/40 hover:border-brand-gold/40 transition-colors">
                    <span className="text-brand-gold font-semibold text-[9px]">02</span>
                    <span className="text-foreground/90 font-medium">Estado Unidirecional</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 bg-surface/30 dark:bg-surface/15 border border-border/40 hover:border-brand-gold/40 transition-colors">
                    <span className="text-brand-gold font-semibold text-[9px]">03</span>
                    <span className="text-brand-gold font-medium">Runtime Minimalista</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* THE 3 ENGINEERING PILLARS: ARCHITECTURAL TRIPTYCH */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-border/40 border border-border/40 shadow-sm">
            {pillars.map((pillar) => {
              const GraphicComponent = pillar.Graphic;

              return (
                <motion.div
                  key={pillar.index}
                  variants={itemVariants}
                  className="bg-surface/30 dark:bg-surface/10 p-6 sm:p-8 lg:p-10 flex flex-col justify-between gap-8 hover:bg-surface/50 dark:hover:bg-surface/20 transition-colors duration-300 group"
                >
                  {/* Pillar Top Marker & Principle */}
                  <div className="flex flex-col gap-5">
                    <div className="flex items-center justify-between border-b border-border/20 pb-3 font-mono text-[10px] tracking-widest uppercase">
                      <span className="text-brand-gold font-semibold flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 bg-brand-gold" />
                        [ {pillar.index} ]
                      </span>
                      <span className="text-muted-foreground/80 text-[9px]">
                        {pillar.principle}
                      </span>
                    </div>

                    <div className="flex flex-col gap-3">
                      <h3 className="font-display text-2xl sm:text-3xl text-foreground tracking-tight group-hover:text-brand-gold transition-colors duration-300">
                        {pillar.title}
                      </h3>
                      <p className="font-sans text-sm sm:text-base text-muted-foreground leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>

                  {/* Functional Blueprint Schema Graphic */}
                  <div className="pt-2">
                    <GraphicComponent />
                  </div>
                </motion.div>
              );
            })}
          </div>

        </motion.div>
      </Container>
    </section>
  );
}
