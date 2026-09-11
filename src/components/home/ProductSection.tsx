"use client";

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import Image from 'next/image';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import { AndroidLogo, AppleLogo, WindowsLogo, Globe } from '@phosphor-icons/react';
import { FaroInteractiveEngine } from '@/components/home/product/FaroInteractiveEngine';

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
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }
  }
};

const viewportVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.98 },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { duration: 0.9, ease: [0.21, 0.47, 0.32, 0.98] }
  }
};

const featureCardVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export function ProductSection() {
  const t = useTranslations('Product');
  const reduce = useReducedMotion();

  return (
    <section className="relative w-full min-h-screen py-16 lg:py-24 bg-background text-foreground overflow-hidden flex flex-col justify-center">
      
      {/* Precision HUD Corner Ticks */}
      <div className="absolute top-6 left-6 w-4 h-4 border-l border-t border-border/40 pointer-events-none" aria-hidden="true" />
      <div className="absolute top-6 right-6 w-4 h-4 border-r border-t border-border/40 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-6 left-6 w-4 h-4 border-l border-b border-border/40 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-6 right-6 w-4 h-4 border-r border-b border-border/40 pointer-events-none" aria-hidden="true" />

      {/* Engineering Blueprint Grid Background */}
      <div 
        className="absolute inset-[-20%] z-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:40px_40px] opacity-[0.03] dark:opacity-[0.05] pointer-events-none" 
        aria-hidden="true" 
      />

      {/* Breathing Ambient Warmth Field */}
      <div 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[45vh] bg-brand-gold/6 dark:bg-brand-gold/10 blur-[160px] rounded-full pointer-events-none z-0" 
        aria-hidden="true" 
      />
      
      <Container className="px-6 lg:px-12 max-w-none relative z-10 w-full flex-1 flex flex-col justify-center">
        
        <motion.div 
          variants={reduce ? {} : containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          className="w-full flex flex-col gap-12 lg:gap-16"
        >
          
          {/* TOP: Monumental Architectural Product Header Plate */}
          <motion.div 
            variants={textVariants}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end w-full pb-8 border-b border-border/20"
          >
            {/* LEFT: Product Designation & Architectural Specification Matrix */}
            <div className="col-span-1 lg:col-span-7 flex flex-col gap-6">
              
              <div className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 bg-brand-gold rotate-45 block" aria-hidden="true" />
                <span className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground font-semibold">
                  {t('label')}
                </span>
                <span className="font-mono text-[9px] tracking-widest text-brand-gold uppercase font-medium bg-brand-gold/10 px-2 py-0.5 border border-brand-gold/20 ml-2">
                  SISTEMA PRINCIPAL
                </span>
              </div>

              <h2 className="font-display text-[4rem] sm:text-[5.5rem] lg:text-[7.5rem] leading-[0.88] tracking-tighter text-foreground uppercase flex items-baseline">
                <span>{t('name')}</span>
                <span className="text-brand-gold text-[0.25em] sm:text-[0.3em] font-mono ml-4 font-normal tracking-widest drop-shadow-[0_0_20px_rgba(217,166,46,0.3)]">
                  [ 01 ]
                </span>
              </h2>

              {/* Integrated Technical Specifications Matrix */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-border/40 border border-border/40 mt-2 font-mono text-[9px] tracking-widest uppercase">
                <div className="bg-surface/40 dark:bg-surface/20 p-3 flex flex-col gap-1">
                  <span className="text-muted-foreground">{t('specs.status_label')}</span>
                  <span className="text-brand-gold font-semibold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse inline-block" />
                    {t('specs.status_value')}
                  </span>
                </div>
                <div className="bg-surface/40 dark:bg-surface/20 p-3 flex flex-col gap-1">
                  <span className="text-muted-foreground">{t('specs.version_label')}</span>
                  <span className="text-foreground font-medium">{t('specs.version_value')}</span>
                </div>
                <div className="bg-surface/40 dark:bg-surface/20 p-3 flex flex-col gap-1">
                  <span className="text-muted-foreground">{t('specs.location_label')}</span>
                  <span className="text-foreground font-medium">{t('specs.location_value')}</span>
                </div>
                <div className="bg-surface/40 dark:bg-surface/20 p-3 flex flex-col gap-1">
                  <span className="text-muted-foreground">ARQUITETURA</span>
                  <span className="text-foreground font-medium">RUST NATIVE</span>
                </div>
              </div>

            </div>
            
            {/* RIGHT: Editorial Proposition & Live Telemetry Strip */}
            <div className="col-span-1 lg:col-span-5 flex flex-col gap-6 lg:pl-4">
              <p className="font-sans text-base sm:text-lg text-foreground/85 dark:text-foreground/80 leading-relaxed">
                {t('description')}
              </p>
              
              {/* Telemetry Strip */}
              <div className="grid grid-cols-2 gap-px bg-border/40 border border-border/40 w-full">
                <div className="bg-surface/30 dark:bg-surface/15 p-3 flex flex-col gap-0.5">
                  <span className="font-mono text-[8px] uppercase tracking-widest text-muted-foreground">Latência Percetiva</span>
                  <span className="font-mono text-xs text-brand-gold font-medium">&lt; 16ms (120 FPS)</span>
                </div>
                <div className="bg-surface/30 dark:bg-surface/15 p-3 flex flex-col gap-0.5">
                  <span className="font-mono text-[8px] uppercase tracking-widest text-muted-foreground">Consumo de Memória</span>
                  <span className="font-mono text-xs text-foreground font-medium">~45 MB RAM (Cold)</span>
                </div>
                <div className="bg-surface/30 dark:bg-surface/15 p-3 flex flex-col gap-0.5">
                  <span className="font-mono text-[8px] uppercase tracking-widest text-muted-foreground">Sincronização</span>
                  <span className="font-mono text-xs text-brand-gold font-medium flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-brand-gold rounded-full animate-ping" />
                    Real-time Zero-Loss
                  </span>
                </div>
                <div className="bg-surface/30 dark:bg-surface/15 p-3 flex flex-col gap-0.5">
                  <span className="font-mono text-[8px] uppercase tracking-widest text-muted-foreground">Cadência de Render</span>
                  <span className="font-mono text-xs text-emerald-500 font-medium">120 Hz Nativo</span>
                </div>
              </div>

              {/* Supported Platforms Strip */}
              <div className="flex items-center justify-between pt-1 text-muted-foreground">
                <div className="flex items-center gap-3">
                  <span title="Windows Native"><WindowsLogo weight="fill" className="w-4 h-4 hover:text-brand-gold transition-colors" /></span>
                  <span title="Android Vulkan"><AndroidLogo weight="fill" className="w-4 h-4 hover:text-brand-gold transition-colors" /></span>
                  <span title="macOS / iOS"><AppleLogo weight="fill" className="w-4 h-4 hover:text-brand-gold transition-colors" /></span>
                  <span title="Web Assembly"><Globe weight="bold" className="w-4 h-4 hover:text-brand-gold transition-colors" /></span>
                </div>
                <span className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground/80">
                  UNIVERSAL NATIVE RUNTIME
                </span>
              </div>

            </div>
          </motion.div>

          {/* CENTER: The FARO Engineering Viewport Chassis (Showcase) */}
          <motion.div 
            variants={viewportVariants}
            className="relative w-full max-w-[1240px] mx-auto z-10"
          >
            {/* Precision Corner Ticks for the Showcase Chassis */}
            <div className="absolute -top-2 -left-2 w-3 h-3 border-l border-t border-brand-gold/60 pointer-events-none z-30" aria-hidden="true" />
            <div className="absolute -top-2 -right-2 w-3 h-3 border-r border-t border-brand-gold/60 pointer-events-none z-30" aria-hidden="true" />
            <div className="absolute -bottom-2 -left-2 w-3 h-3 border-l border-b border-brand-gold/60 pointer-events-none z-30" aria-hidden="true" />
            <div className="absolute -bottom-2 -right-2 w-3 h-3 border-r border-b border-brand-gold/60 pointer-events-none z-30" aria-hidden="true" />

            {/* Chassis Header Bar */}
            <div className="w-full bg-surface/90 dark:bg-surface/80 backdrop-blur-md border border-border/70 border-b-0 px-4 py-2.5 flex items-center justify-between relative z-20">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80 border border-red-600/40" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80 border border-amber-600/40" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 border border-emerald-600/40" />
                <span className="font-mono text-[10px] tracking-widest uppercase text-foreground/80 font-medium ml-3">
                  FARO WORKSPACE // NATIVE CLIENT v01.00
                </span>
              </div>
              <div className="hidden sm:flex items-center gap-3 font-mono text-[9px] tracking-widest text-muted-foreground uppercase">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                  DIRECTX 12 · VULKAN NDK
                </span>
                <span className="text-brand-gold font-medium bg-brand-gold/10 px-2 py-0.5 border border-brand-gold/20">
                  120 FPS LOCKED
                </span>
              </div>
            </div>

            {/* Main Viewport Screen Frame */}
            <div className="relative w-full aspect-[16/9.5] sm:aspect-[16/9] bg-[#0A0A0A] border border-border/70 overflow-hidden shadow-2xl group">
              
              {/* Subtle Screen Reflection and Grid Texture */}
              <div className="absolute inset-0 z-20 pointer-events-none bg-[linear-gradient(135deg,rgba(255,255,255,0.03)_0%,transparent_50%,rgba(0,0,0,0.2)_100%)]" />
              <div className="absolute inset-0 z-20 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(217,166,46,0.04),transparent_60%)]" />

              {/* High-Resolution Real Dashboard Screenshot */}
              <Image
                src="/products/faro/faro-desktop-dashboard.png"
                alt="FARO Desktop Native Workspace"
                fill
                className="object-cover object-left-top z-10 transition-transform duration-700 group-hover:scale-[1.01]"
                sizes="(max-width: 1280px) 100vw, 1240px"
                quality={95}
                priority={false}
              />

              {/* Floating Tactical Inspection Window (Context Lesson Exercise) */}
              <motion.div 
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 w-[70%] sm:w-[46%] lg:w-[42%] max-w-[480px] aspect-[16/9.5] z-30 bg-surface/95 dark:bg-surface/90 backdrop-blur-xl border border-brand-gold/50 shadow-[0_20px_50px_rgba(0,0,0,0.7)] p-2 sm:p-2.5 flex flex-col justify-between overflow-hidden group/tac"
              >
                {/* Tactical Window Top Bar */}
                <div className="flex items-center justify-between pb-1.5 mb-1 border-b border-border/40 font-mono text-[8px] sm:text-[9px] tracking-widest uppercase">
                  <div className="flex items-center gap-1.5 text-foreground font-semibold">
                    <span className="w-1.5 h-1.5 bg-brand-gold rounded-full animate-ping" />
                    SESSÃO ATIVA // MOTOR CONTEXTUAL
                  </div>
                  <span className="text-brand-gold font-medium bg-brand-gold/15 px-1.5 py-0.5 border border-brand-gold/30">
                    AO VIVO
                  </span>
                </div>

                {/* Real Lesson Detail Screenshot in native 16:9 ratio */}
                <div className="relative w-full flex-1 rounded-sm overflow-hidden border border-border/40 bg-black">
                  <Image
                    src="/products/faro/faro-desktop-learning.png"
                    alt="FARO Contextual Learning Session"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 60vw, 400px"
                    quality={90}
                  />
                </div>

                {/* Tactical Window Baseline */}
                <div className="pt-1.5 mt-1 border-t border-border/30 flex items-center justify-between font-mono text-[7px] sm:text-[8px] tracking-widest text-muted-foreground uppercase">
                  <span>DESAFIO CRU</span>
                  <span className="text-brand-gold">RECONSTRUÇÃO REAL-TIME →</span>
                </div>
              </motion.div>

              {/* Bottom Architectural Chassis Footer Bar */}
              <div className="absolute bottom-0 left-0 right-0 h-9 bg-surface/90 dark:bg-surface/85 backdrop-blur-md border-t border-border/50 px-4 flex items-center justify-between z-25 font-mono text-[9px] tracking-widest text-muted-foreground uppercase">
                <span className="hidden sm:flex items-center gap-2">
                  <span className="w-1 h-1 bg-brand-gold rounded-none" />
                  MOVISTRATO ENGINE CORE · DETERMINISTIC RUNTIME
                </span>
                <span className="text-brand-gold flex items-center gap-1">
                  LATÊNCIA &lt; 16MS · TAXA 120 FPS
                </span>
              </div>

            </div>

            {/* Bottom Action Bar with Official CTA */}
            <div className="w-full mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 p-4 sm:p-5 border border-border/50 bg-surface/30 dark:bg-surface/20 backdrop-blur-md">
              <div className="flex items-center gap-4 text-xs font-mono tracking-widest text-muted-foreground uppercase">
                <span className="text-foreground font-semibold">DISTRIBUIÇÃO:</span>
                <span className="text-brand-gold">WIN32 NATIVE · ANDROID APK · WEB ASM</span>
              </div>
              <Link 
                href="/products/faro"
                className="group flex items-center gap-3 px-6 py-2.5 bg-foreground text-background dark:bg-brand-gold dark:text-black font-mono text-xs font-semibold tracking-widest uppercase hover:bg-brand-gold hover:text-black dark:hover:bg-white transition-all duration-300 shadow-md"
              >
                <span>{t('cta')}</span>
                <span className="text-base font-sans font-light leading-none transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5">
                  →
                </span>
              </Link>
            </div>

          </motion.div>

          {/* PHASE 2: FARO INTERACTIVE ENGINE (High-Craft Product Simulation & Benchmarks) */}
          <motion.div 
            variants={reduce ? {} : containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.15 }}
            className="w-full flex flex-col gap-4 relative z-10"
          >
            <div className="flex items-center justify-between border-b border-border/20 pb-4">
              <div className="flex items-center gap-2 font-mono text-[10px] tracking-widest uppercase text-brand-gold font-semibold">
                <span className="w-1.5 h-1.5 bg-brand-gold rounded-none" />
                ARQUITETURA & CAPACIDADES EM TEMPO REAL
              </div>
              <span className="hidden sm:block font-mono text-[9px] tracking-widest uppercase text-muted-foreground">
                [ MOTOR FARO v01.00 // SIMULAÇÃO DETERMINÍSTICA ]
              </span>
            </div>

            <FaroInteractiveEngine />
          </motion.div>

        </motion.div>

      </Container>
    </section>
  );
}
