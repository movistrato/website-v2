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
            className="flex flex-col lg:flex-row justify-between items-start lg:items-start gap-8"
          >
            <div className="flex flex-col gap-6 w-full lg:w-[60%] relative">
              {/* Technical grid marker */}
              
              <span className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-brand-gold rounded-full" />
                {t('label')}
              </span>
              <h2 className="font-display text-[4rem] sm:text-[5rem] lg:text-[8rem] leading-[0.85] tracking-tighter text-foreground uppercase flex items-baseline">
                <span>{t('name')}</span>
                <span className="text-brand-gold text-[0.25em] sm:text-[0.3em] font-mono ml-4 font-normal tracking-widest">[ 01 ]</span>
              </h2>

              {/* Technical specifications underneath FARO on PC/large screens */}
              <div className="hidden lg:flex flex-col gap-3 mt-8 font-mono text-[10px] tracking-widest text-muted-foreground/80 border-t border-border/50 pt-6 w-fit">
                <div className="flex gap-12 justify-between min-w-[260px]">
                  <span>{t('specs.status_label')}</span>
                  <span className="text-brand-gold font-semibold">{t('specs.status_value')}</span>
                </div>
                <div className="flex gap-12 justify-between min-w-[260px]">
                  <span>{t('specs.version_label')}</span>
                  <span className="text-foreground">{t('specs.version_value')}</span>
                </div>
                <div className="flex gap-12 justify-between min-w-[260px]">
                  <span>{t('specs.location_label')}</span>
                  <span className="text-foreground">{t('specs.location_value')}</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col gap-8 w-full lg:w-[35%] mb-2 lg:mb-4 lg:pt-8">
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

          {/* Overlay Layer: 3D Responsive Mockups */}
          {/* Overlay Layer: Clean High-End Mockups */}
          <div className="relative w-full pt-12 pb-20 lg:pt-24 lg:pb-32 px-4">
            
            {/* Central Canvas Wrapper - Locks proportions and positioning for all devices */}
            <div className="relative w-[95%] sm:w-[85%] lg:w-[75%] max-w-[850px] mx-auto">
              
              {/* Floating UI Badge - Left */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-[-10%] sm:top-[-5%] left-[5%] z-20 pointer-events-none hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-background/80 backdrop-blur-md border border-white/10 shadow-sm"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                <span className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">Engine: Native</span>
              </motion.div>

              {/* Floating UI Badge - Right */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-[15%] right-[-5%] sm:right-[-10%] z-20 pointer-events-none hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-background/80 backdrop-blur-md border border-white/10 shadow-sm"
              >
                <span className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">Latency</span>
                <span className="font-mono text-[10px] text-brand-gold">&lt; 16ms</span>
              </motion.div>

              {/* Desktop Mockup (Laptop) */}
              <motion.div 
                variants={desktopImageVariants}
                className="relative w-full flex flex-col items-center z-10 group"
              >
                {/* Laptop Screen Bezel */}
                <div className="relative w-full aspect-[16/10] bg-[#0a0a0a] rounded-t-xl sm:rounded-t-2xl lg:rounded-t-3xl p-[1.5%] sm:p-[2%] border border-[#333] shadow-md flex flex-col justify-between overflow-hidden">
                  
                  {/* Screen Glare (Glass reflection) */}
                  <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-tr from-white/0 via-white/[0.02] to-white/[0.08] mix-blend-overlay" />
                  <div className="absolute -inset-[100%] z-20 pointer-events-none bg-[linear-gradient(45deg,transparent_45%,rgba(255,255,255,0.05)_50%,transparent_55%)] translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-[2s] ease-in-out" />

                  {/* Webcam */}
                  <div className="absolute top-[1.5%] sm:top-[2%] left-1/2 -translate-x-1/2 w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-black ring-1 ring-white/20 z-30" />
                  
                  {/* Screen inner content */}
                  <div className="relative w-full h-full rounded-sm sm:rounded-md overflow-hidden bg-background border border-white/10 mt-[1%] z-10 shadow-inner">
                    <Image
                      src="/products/faro/faro-desktop-dashboard.png"
                      alt="FARO Dashboard Interface"
                      fill
                      className="object-cover object-left-top"
                      sizes="(max-width: 768px) 100vw, 85vw"
                      priority
                    />
                  </div>
                  
                  {/* Macbook bottom bezel logo area */}
                  <div className="absolute bottom-1 sm:bottom-1.5 lg:bottom-2 left-1/2 -translate-x-1/2 font-mono text-[4px] sm:text-[6px] text-white/30 uppercase tracking-widest hidden sm:block z-30">
                    MOVISTRATO
                  </div>
                </div>
                
                {/* Laptop Base */}
                <div className="relative w-[116%] h-2 sm:h-3 lg:h-4 bg-gradient-to-b from-[#e5e5e5] to-[#888888] dark:from-[#555] dark:to-[#111] rounded-b-xl sm:rounded-b-2xl lg:rounded-b-3xl border-t border-[#fff] dark:border-[#777] shadow-xl dark:shadow-[0_15px_30px_-5px_rgba(0,0,0,0.6)] flex justify-center z-20">
                  <div className="absolute top-0 w-full h-px bg-white/50 dark:bg-white/10" />
                  <div className="w-[15%] h-1 sm:h-1.5 lg:h-2 bg-[#b3b3b3] dark:bg-[#0a0a0a] rounded-b-md shadow-[inset_0_1px_3px_rgba(0,0,0,0.5)]" />
                </div>
              </motion.div>

              {/* Mobile Mockup (Phone) - Positioned relative to the canvas */}
              <motion.div 
                variants={mobileImageVariants}
                className="absolute bottom-[-10%] sm:bottom-[-15%] left-[-2%] sm:left-[-8%] w-[22%] min-w-[75px] max-w-[180px] aspect-[9/19.5] z-30"
              >
                <motion.div 
                  animate={{ y: [0, -12, 0] }} 
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="relative w-full h-full"
                >
                  {/* Phone Frame */}
                  <div className="relative w-full h-full bg-gradient-to-br from-[#e5e5e5] to-[#777777] dark:from-[#666] dark:to-[#0a0a0a] rounded-[15%] sm:rounded-[2.1rem] lg:rounded-[2.6rem] p-[2px] sm:p-[3px] shadow-lg dark:shadow-[0_15px_30px_-5px_rgba(0,0,0,0.5)]">
                    
                    <div className="relative w-full h-full bg-[#0a0a0a] rounded-[12%] sm:rounded-[2rem] lg:rounded-[2.5rem] p-[3px] sm:p-[6px] lg:p-[8px] border border-black overflow-hidden ring-1 ring-white/10">
                      
                      <div className="absolute inset-0 z-30 pointer-events-none bg-gradient-to-tr from-white/0 via-white/[0.04] to-white/[0.1] mix-blend-overlay" />
                      
                      <div className="absolute top-[4px] sm:top-[8px] lg:top-[12px] left-1/2 -translate-x-1/2 w-[35%] h-[8px] sm:h-[16px] lg:h-[20px] bg-black rounded-full z-20 flex justify-center items-center gap-1 sm:gap-1.5 shadow-md border border-white/10">
                         <div className="w-1 h-1 rounded-full bg-[#1a1a1a] ring-1 ring-white/10" />
                         <div className="w-1.5 sm:w-2.5 h-1 rounded-full bg-[#0a0a0a] ring-1 ring-white/5" />
                      </div>

                      <div className="relative w-full h-full rounded-[10%] sm:rounded-[1.6rem] lg:rounded-[2rem] overflow-hidden bg-background border border-white/5">
                        <Image
                          src="/products/faro/faro-desktop-learning.png"
                          alt="FARO Learning Interface"
                          fill
                          className="object-cover object-left lg:object-center"
                          sizes="(max-width: 768px) 30vw, 15vw"
                        />
                      </div>

                    </div>
                  </div>
                </motion.div>
              </motion.div>
              
              {/* CTA Overlay - Positioned relative to the canvas */}
              <motion.div 
                variants={ctaVariants}
                className="absolute bottom-[5%] sm:bottom-[-5%] right-[-2%] sm:right-[-10%] z-40 pointer-events-auto"
              >
                 <div className="flex flex-col gap-2 p-3 sm:p-5 lg:p-6 bg-background/80 dark:bg-background/40 backdrop-blur-xl border border-border/50 shadow-[0_15px_30px_rgba(0,0,0,0.2)] dark:shadow-[0_20px_40px_rgba(0,0,0,0.6)] rounded-xl sm:rounded-2xl ring-1 ring-white/10 dark:ring-white/5">
                   <span className="font-mono text-[8px] sm:text-[10px] tracking-widest text-muted-foreground uppercase">
                     {t('platforms')}
                   </span>
                   <Link 
                     href="/faro" 
                     className="group flex items-center gap-2 sm:gap-3 font-mono text-[10px] sm:text-xs tracking-widest uppercase text-foreground hover:text-brand-gold transition-colors focus-visible:outline-none w-fit"
                   >
                     <span>{t('cta')}</span>
                     <span className="text-lg sm:text-xl font-sans font-light leading-none transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
                   </Link>
                 </div>
              </motion.div>

            </div>
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
