"use client";

import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import { AdaptiveTelemetryCockpit } from '@/components/home/adaptive/AdaptiveTelemetryCockpit';
import { ClosedLoopPipeline, type PipelineStage } from '@/components/home/adaptive/ClosedLoopPipeline';

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

const textVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }
  }
};

export function AdaptiveSystemSection() {
  const t = useTranslations('AdaptiveSystem');
  const locale = useLocale();
  const reduce = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isUserHovering, setIsUserHovering] = useState(false);

  const stages: PipelineStage[] = locale === 'pt' ? [
    {
      id: 'node_user',
      label: t('node_user'),
      tag: 'ENTRADA HUMANA',
      metric: '100% SOBERANIA',
      description: 'Intenção pura e ritmo natural de estudo, sem interferência ou formulários forçados.'
    },
    {
      id: 'node_interaction',
      label: t('node_interaction'),
      tag: 'Δt < 8.3MS',
      metric: 'SUB-FRAME SAMPLING',
      description: 'Captura temporal exata de hesitação, tempo de resposta e cadência cognitiva em cada item.'
    },
    {
      id: 'node_signals',
      label: t('node_signals'),
      tag: 'CAPTURA DE SINAIS',
      metric: 'CURVA DE RETENÇÃO',
      description: 'Transformação de dados brutos de interação em vetores de esquecimento e consolidação.'
    },
    {
      id: 'node_context',
      label: t('node_context'),
      tag: 'MATRIZ DE DADOS',
      metric: 'ESPACIAL LEXICAL',
      description: 'Reconstrução contínua da árvore de conhecimento e prontidão cognitiva em tempo real.'
    },
    {
      id: 'node_adaptation',
      label: t('node_adaptation'),
      tag: 'REAJUSTE CONTÍNUO',
      metric: 'PESO DETERMINÍSTICO',
      description: 'Rebalanceamento algorítmico da ordem e dificuldade de exercícios antes da próxima ação.'
    },
    {
      id: 'node_experience',
      label: t('node_experience'),
      tag: 'FEEDBACK FECHADO',
      metric: 'ZERO FRICTION',
      description: 'Entrega imediata da próxima tela personalizada, fechando o circuito adaptativo sem latência.'
    }
  ] : [
    {
      id: 'node_user',
      label: t('node_user'),
      tag: 'HUMAN INPUT',
      metric: '100% SOVEREIGNTY',
      description: 'Natural intent and learning flow without forced testing or artificial roadblocks.'
    },
    {
      id: 'node_interaction',
      label: t('node_interaction'),
      tag: 'Δt < 8.3MS',
      metric: 'SUB-FRAME SAMPLING',
      description: 'Precise timing of hesitation, cadence, and response latencies for each concept.'
    },
    {
      id: 'node_signals',
      label: t('node_signals'),
      tag: 'SIGNAL EXTRACTION',
      metric: 'RETENTION CURVE',
      description: 'Raw interaction telemetry mapped into long-term memory decay modeling.'
    },
    {
      id: 'node_context',
      label: t('node_context'),
      tag: 'NEURAL MATRIX',
      metric: 'LEXICAL SPACE',
      description: 'Dynamic graph reconstruction reflecting the active knowledge frontier.'
    },
    {
      id: 'node_adaptation',
      label: t('node_adaptation'),
      tag: 'CONTINUOUS TUNING',
      metric: 'DETERMINISTIC WEIGHT',
      description: 'Algorithmic rebalancing of vocabulary challenge prior to the next action.'
    },
    {
      id: 'node_experience',
      label: t('node_experience'),
      tag: 'CLOSED FEEDBACK',
      metric: 'ZERO FRICTION',
      description: 'Immediate delivery of the calibrated session, completing the closed-loop circuit.'
    }
  ];

  // Cycling loop through the closed circuit unless the user is actively inspecting
  useEffect(() => {
    if (isUserHovering || reduce) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % stages.length);
    }, 2800);

    return () => clearInterval(interval);
  }, [stages.length, isUserHovering, reduce]);

  return (
    <section 
      className="relative w-full py-20 lg:py-28 bg-background text-foreground overflow-hidden border-b border-border/20"
      onMouseEnter={() => setIsUserHovering(true)}
      onMouseLeave={() => setIsUserHovering(false)}
    >
      {/* Precision Corner Ticks */}
      <div className="absolute top-6 left-6 w-3 h-3 border-l border-t border-border/40 pointer-events-none" aria-hidden="true" />
      <div className="absolute top-6 right-6 w-3 h-3 border-r border-t border-border/40 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-6 left-6 w-3 h-3 border-l border-b border-border/40 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-6 right-6 w-3 h-3 border-r border-b border-border/40 pointer-events-none" aria-hidden="true" />

      {/* Background Architectural Grid Pattern */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:48px_48px] opacity-[0.025] dark:opacity-[0.045] pointer-events-none" 
        aria-hidden="true" 
      />

      {/* Delicate Ambient Glow */}
      <div 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[35vh] bg-brand-gold/4 dark:bg-brand-gold/6 blur-[160px] rounded-full pointer-events-none" 
        aria-hidden="true" 
      />

      <Container className="px-6 lg:px-12 max-w-none relative z-10 w-full">
        <motion.div 
          variants={reduce ? {} : containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="w-full flex flex-col gap-10 lg:gap-14"
        >
          {/* HEADER & TELEMETRY STAGE */}
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-14 w-full">
            {/* Left: Section Manifesto and Headline */}
            <motion.div variants={textVariants} className="flex flex-col gap-5 w-full lg:w-[52%]">
              <div className="flex flex-wrap items-center gap-2 font-mono text-[10px] tracking-widest uppercase text-muted-foreground">
                <span className="w-1.5 h-1.5 bg-brand-gold rotate-45" aria-hidden="true" />
                <span className="font-semibold text-foreground">{t('label')}</span>
                <span className="text-brand-gold font-medium bg-brand-gold/10 px-2 py-0.5 border border-brand-gold/25 ml-1">
                  CLOSED-LOOP ARCHITECTURE
                </span>
              </div>

              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[0.95] tracking-tight text-foreground">
                {t.rich('title', {
                  software: (chunks) => (
                    <span className="inline-flex items-center gap-2 px-3 py-0.5 border border-brand-gold/60 bg-brand-gold/10 text-brand-gold font-mono text-[0.52em] align-middle tracking-widest uppercase mr-3">
                      <span className="w-1.5 h-1.5 bg-brand-gold rounded-none animate-pulse" />
                      {chunks}
                    </span>
                  )
                })}
              </h2>

              <p className="font-sans text-base sm:text-lg text-foreground/80 leading-relaxed max-w-2xl">
                {t('description')}
              </p>
            </motion.div>

            {/* Right: Architectural Telemetry Cockpit */}
            <motion.div variants={textVariants} className="w-full lg:w-[45%] flex flex-col justify-end">
              <AdaptiveTelemetryCockpit 
                activeIndex={activeIndex} 
                stageName={stages[activeIndex].label} 
              />
            </motion.div>
          </div>

          {/* 6-STAGE CLOSED-LOOP INTERACTIVE PIPELINE */}
          <motion.div variants={textVariants} className="w-full pt-4">
            <ClosedLoopPipeline 
              stages={stages}
              activeIndex={activeIndex}
              onSelectStage={(idx) => setActiveIndex(idx)}
            />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
