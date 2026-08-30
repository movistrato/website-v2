"use client";

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import Image from 'next/image';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import { AndroidLogo, AppleLogo, WindowsLogo, Globe } from '@phosphor-icons/react';

// --- ANIMATION VARIANTS ---

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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

const desktopImageVariants: Variants = {
  hidden: { opacity: 0, y: 100, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { duration: 1, ease: [0.21, 0.47, 0.32, 0.98] }
  }
};

const mobileImageVariants: Variants = {
  hidden: { opacity: 0, x: 50, y: 20 },
  visible: { 
    opacity: 1, 
    x: 0,
    y: 0,
    transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }
  }
};

const ctaVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const featureCardVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

export function ProductSection() {
  const t = useTranslations('Product');
  const reduce = useReducedMotion();

  return (
    <section className="relative w-full min-h-screen py-12 lg:py-20 bg-background text-foreground overflow-hidden flex flex-col justify-center">
      
      {/* Consistent Background Grid */}
      <div 
        className="absolute inset-[-20%] z-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:40px_40px] opacity-[0.03] dark:opacity-[0.05]" 
        aria-hidden="true" 
      />

      {/* Ambient Glow - identical to rest of website */}
      <div className="absolute top-1/4 right-1/4 w-[60vw] h-[40vh] bg-brand-gold/5 dark:bg-brand-gold/10 blur-[150px] rounded-full pointer-events-none z-0" aria-hidden="true" />
      
      <Container className="px-6 lg:px-12 max-w-none relative z-10 w-full flex-1 flex flex-col justify-center">
        
        <motion.div 
          variants={reduce ? {} : containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          className="w-full flex flex-col gap-8 lg:gap-14"
        >
          
          {/* Base Layer: Text */}
          <motion.div 
            variants={textVariants}
            className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8"
          >
            <div className="flex flex-col gap-6 w-full lg:w-[60%] relative">
              {/* Technical grid marker */}
              <div className="absolute -top-10 -left-6 hidden lg:flex opacity-20 font-mono text-[8px] tracking-widest text-brand-gold">
                [ 01_FARO_PRODUCT_REVEAL ]
              </div>
              <span className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-brand-gold rounded-full" />
                {t('label')}
              </span>
              <h2 className="font-display text-[4rem] sm:text-[5rem] lg:text-[8rem] leading-[0.85] tracking-tighter text-foreground uppercase">
                {t('name')}
              </h2>
            </div>
            
            <div className="flex flex-col gap-8 w-full lg:w-[35%] mb-2 lg:mb-4">
              <p className="font-sans text-base lg:text-xl text-muted-foreground leading-relaxed max-w-md">
                {t('description')}
              </p>
              
              {/* Technical Specs Grid */}
              <div className="grid grid-cols-2 gap-px bg-border/40 border border-border/40 w-full mt-4">
                <div className="bg-background p-4 flex flex-col gap-1">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">Engine</span>
                  <span className="font-mono text-xs text-foreground">Rust Native Core</span>
                </div>
                <div className="bg-background p-4 flex flex-col gap-1">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">Latency</span>
                  <span className="font-mono text-xs text-foreground">&lt; 16ms</span>
                </div>
                <div className="bg-background p-4 flex flex-col gap-1">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">Footprint</span>
                  <span className="font-mono text-xs text-foreground">~45 MB RAM</span>
                </div>
                <div className="bg-background p-4 flex flex-col gap-1">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">Sync</span>
                  <span className="font-mono text-xs text-brand-gold animate-pulse">Real-time</span>
                </div>
              </div>

              {/* Added: UI Density - Platform Icons */}
              <div className="flex items-center gap-4 pt-4">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <AppleLogo weight="fill" className="w-5 h-5 hover:text-foreground transition-colors" />
                  <WindowsLogo weight="fill" className="w-5 h-5 hover:text-foreground transition-colors" />
                  <AndroidLogo weight="fill" className="w-5 h-5 hover:text-foreground transition-colors" />
                  <Globe weight="bold" className="w-5 h-5 hover:text-foreground transition-colors" />
                </div>
                <span className="text-[10px] uppercase font-mono tracking-widest text-muted-foreground/60">
                  Universal Native
                </span>
              </div>
            </div>
          </motion.div>

          {/* Overlay Layer: Images */}
          <div className="relative w-full flex items-end justify-center">
            
            {/* Desktop Image */}
            <motion.div 
              variants={desktopImageVariants}
              className="relative w-[120%] lg:w-[90%] aspect-[4/3] lg:aspect-[21/9] origin-bottom shadow-[0_30px_70px_rgba(0,0,0,0.12)] dark:shadow-[0_30px_70px_rgba(0,0,0,0.7)]"
            >
               <div className="w-full h-full rounded-none lg:rounded-t-sm overflow-hidden border border-border/80 ring-1 ring-border/60 bg-surface flex flex-col pointer-events-auto">
                 {/* Decorative UI Bar */}
                 <div className="w-full h-8 bg-surface/80 backdrop-blur-md border-b border-border/50 flex items-center px-4 gap-2 shrink-0">
                    <div className="w-2 h-2 rounded-none bg-border/80" />
                    <div className="w-2 h-2 rounded-none bg-border/80" />
                    <div className="w-2 h-2 rounded-none bg-border/80" />
                 </div>
                 <div className="relative w-full flex-1">
                   <Image
                     src="/products/faro/faro-desktop-dashboard.png"
                     alt="FARO Dashboard Interface"
                     fill
                     className="object-cover object-left-top"
                     sizes="100vw"
                     priority
                   />
                 </div>
               </div>
            </motion.div>

            {/* Mobile Image overlay - High Precision Ring & Focused Elevation */}
            <motion.div 
              variants={mobileImageVariants}
              className="absolute right-[-5%] lg:right-[5%] bottom-[10%] w-[50%] lg:w-[30%] aspect-[4/3] pointer-events-auto shadow-[0_25px_60px_-15px_rgba(0,0,0,0.35)] dark:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.95)]"
            >
               <div className="w-full h-full rounded-none overflow-hidden border border-border ring-1 ring-foreground/15 dark:ring-white/20 bg-surface">
                 <Image
                   src="/products/faro/faro-desktop-learning.png"
                   alt="FARO Learning Interface"
                   fill
                   className="object-cover object-center scale-110 lg:scale-125"
                   sizes="(max-width: 768px) 60vw, 35vw"
                 />
               </div>
            </motion.div>
            
            {/* CTA Overlay */}
            <motion.div 
              variants={ctaVariants}
              className="absolute left-0 lg:left-12 bottom-[10%] z-30 pointer-events-auto"
            >
               <div className="flex flex-col gap-4 p-6 bg-background border border-border/50 rounded-none shadow-xl">
                 <span className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
                   {t('platforms')}
                 </span>
                 <Link 
                   href="/faro" 
                   className="group flex items-center gap-3 font-mono text-xs tracking-widest uppercase text-foreground hover:text-brand-gold transition-colors focus-visible:outline-none w-fit"
                 >
                   <span>{t('cta')}</span>
                   <span className="text-xl font-sans font-light leading-none transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
                 </Link>
               </div>
            </motion.div>

          </div>

        </motion.div>

        {/* --- PHASE 2: PRODUCT FEATURES DEEP-DIVE --- */}
        <motion.div 
          variants={reduce ? {} : containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="w-full mt-12 lg:mt-16 grid grid-cols-1 lg:grid-cols-3 gap-px bg-border/40 border border-border/40 relative z-10"
        >
          {/* Feature 1 */}
          <motion.div variants={featureCardVariants} className="group flex flex-col gap-8 p-8 lg:p-12 bg-background hover:bg-surface/40 transition-all duration-500 overflow-hidden relative cursor-default">
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,var(--brand-gold)_25%,var(--brand-gold)_50%,transparent_50%,transparent_75%,var(--brand-gold)_75%,var(--brand-gold)_100%)] bg-[size:10px_10px] opacity-0 group-hover:opacity-[0.02] transition-opacity duration-500" />
            <div className="w-12 h-12 rounded-none border border-border/40 bg-surface flex items-center justify-center text-muted-foreground group-hover:text-brand-gold group-hover:border-brand-gold/50 transition-all duration-500 relative z-10 shadow-sm">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <div className="flex flex-col gap-4 relative z-10">
              <h4 className="font-sans text-xs font-semibold tracking-widest text-foreground uppercase group-hover:text-brand-gold transition-colors">{t('features.f1_title')}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{t('features.f1_body')}</p>
            </div>
          </motion.div>

          {/* Feature 2 */}
          <motion.div variants={featureCardVariants} className="group flex flex-col gap-8 p-8 lg:p-12 bg-background hover:bg-surface/40 transition-all duration-500 overflow-hidden relative cursor-default">
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,var(--brand-gold)_25%,var(--brand-gold)_50%,transparent_50%,transparent_75%,var(--brand-gold)_75%,var(--brand-gold)_100%)] bg-[size:10px_10px] opacity-0 group-hover:opacity-[0.02] transition-opacity duration-500" />
            <div className="w-12 h-12 rounded-none border border-border/40 bg-surface flex items-center justify-center text-muted-foreground group-hover:text-brand-gold group-hover:border-brand-gold/50 transition-all duration-500 relative z-10 shadow-sm">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <div className="flex flex-col gap-4 relative z-10">
              <h4 className="font-sans text-xs font-semibold tracking-widest text-foreground uppercase group-hover:text-brand-gold transition-colors">{t('features.f2_title')}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{t('features.f2_body')}</p>
            </div>
          </motion.div>

          {/* Feature 3 */}
          <motion.div variants={featureCardVariants} className="group flex flex-col gap-8 p-8 lg:p-12 bg-background hover:bg-surface/40 transition-all duration-500 overflow-hidden relative cursor-default">
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,var(--brand-gold)_25%,var(--brand-gold)_50%,transparent_50%,transparent_75%,var(--brand-gold)_75%,var(--brand-gold)_100%)] bg-[size:10px_10px] opacity-0 group-hover:opacity-[0.02] transition-opacity duration-500" />
            <div className="w-12 h-12 rounded-none border border-border/40 bg-surface flex items-center justify-center text-muted-foreground group-hover:text-brand-gold group-hover:border-brand-gold/50 transition-all duration-500 relative z-10 shadow-sm">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
              </svg>
            </div>
            <div className="flex flex-col gap-4 relative z-10">
              <h4 className="font-sans text-xs font-semibold tracking-widest text-foreground uppercase group-hover:text-brand-gold transition-colors">{t('features.f3_title')}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{t('features.f3_body')}</p>
            </div>
          </motion.div>
        </motion.div>

      </Container>
    </section>
  );
}
