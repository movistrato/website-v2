'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '@/components/layout/Container';

type ChapterId = '0' | '1' | '2' | '3' | '4' | '5' | '6';

interface Chapter {
  id: ChapterId;
  scale: number;
  originX: string;
  originY: string;
  tag: string;
}

const CHAPTERS: Chapter[] = [
  { id: '0', scale: 1.0, originX: '50%', originY: '50%', tag: 'ESCUDO HERÁLDICO' },
  { id: '1', scale: 2.3, originX: '50%', originY: '65%', tag: 'AS CINCO QUINAS' },
  { id: '2', scale: 2.7, originX: '34%', originY: '36%', tag: 'LINHAS DE CIRCUITO' },
  { id: '3', scale: 2.5, originX: '50%', originY: '50%', tag: 'O CENTRO GEOMÉTRICO' },
  { id: '4', scale: 2.5, originX: '50%', originY: '18%', tag: 'A COROA DE AMBIÇÃO' },
  { id: '5', scale: 1.6, originX: '50%', originY: '50%', tag: 'O SISTEMA CROMÁTICO' },
  { id: '6', scale: 1.0, originX: '50%', originY: '50%', tag: 'O MANIFESTO' },
];

export function IdentitySection() {
  const t = useTranslations('Identity');
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentChapter = CHAPTERS[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % CHAPTERS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + CHAPTERS.length) % CHAPTERS.length);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section className="relative w-full bg-background text-foreground overflow-hidden border-t border-border/40 py-20 lg:py-28">
      
      {/* Precision Corner Ticks */}
      <div className="absolute top-6 left-6 w-3 h-3 border-l border-t border-border/40 pointer-events-none" aria-hidden="true" />
      <div className="absolute top-6 right-6 w-3 h-3 border-r border-t border-border/40 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-6 left-6 w-3 h-3 border-l border-b border-border/40 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-6 right-6 w-3 h-3 border-r border-b border-border/40 pointer-events-none" aria-hidden="true" />

      {/* Subtle Blueprint Grid Background */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:56px_56px] opacity-[0.025] dark:opacity-[0.04] pointer-events-none" 
        aria-hidden="true" 
      />

      <Container className="relative z-10 w-full flex flex-col gap-20 lg:gap-28">
        
        {/* ========================================================================= */}
        {/* PHASE 1: THE NAME (Pure Editorial Typographic Diptych)                    */}
        {/* ========================================================================= */}
        {/* ========================================================================= */}
        {/* PHASE 1: THE NAME (Pure Editorial Typographic Diptych)                    */}
        {/* ========================================================================= */}
        <div className="w-full flex flex-col gap-12 lg:gap-16 border-b border-border/20 pb-16 lg:pb-24">
          
          {/* Header & Opening Aphorism */}
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-5 max-w-3xl"
          >
            <div className="flex items-center gap-2 font-mono text-[10px] tracking-widest uppercase text-muted-foreground">
              <motion.span 
                animate={{ rotate: [45, 225, 45] }}
                transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                className="w-1.5 h-1.5 bg-brand-gold inline-block" 
              />
              <span className="font-semibold text-foreground">IDENTIDADE // O NOME</span>
            </div>
            <h3 className="font-serif italic text-2xl sm:text-3xl lg:text-4xl text-foreground font-light leading-snug">
              &ldquo;{t('name.intro')}&rdquo;
            </h3>
          </motion.div>

          {/* Typographic Diptych: MOVI and STRATO with Kinetic & Layered Motion */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 relative">
            {/* Center architectural dividing line on desktop */}
            <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-px -translate-x-1/2 pointer-events-none" aria-hidden="true">
              <motion.div 
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="w-full h-full bg-border/40 origin-top"
              />
              <motion.div 
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.7 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-background border border-border/60 flex items-center justify-center font-mono text-[8px] text-brand-gold"
              >
                +
              </motion.div>
            </div>

            {/* Left: MOVI (Kinetic Horizontal Energy) */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-4 group md:pr-8 lg:pr-12"
            >
              <div className="flex items-center justify-between border-b border-border/30 pb-2 font-mono text-[9px] uppercase tracking-widest text-muted-foreground">
                <span className="text-brand-gold font-semibold flex items-center gap-1.5">
                  <motion.span 
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    className="w-1 h-1 bg-brand-gold inline-block" 
                  />
                  {t('name.movi.label')}
                </span>
                <span className="text-[8px] opacity-70 font-mono">01</span>
              </div>

              <div className="flex flex-col gap-2">
                <div className="overflow-hidden">
                  <motion.h4 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                      hidden: {},
                      visible: { transition: { staggerChildren: 0.06 } }
                    }}
                    className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl tracking-tight text-foreground group-hover:text-brand-gold transition-colors duration-500 flex"
                  >
                    {['M', 'O', 'V', 'I'].map((char, index) => (
                      <motion.span
                        key={index}
                        variants={{
                          hidden: { opacity: 0, x: -14, filter: 'blur(3px)' },
                          visible: { 
                            opacity: 1, 
                            x: 0, 
                            filter: 'blur(0px)',
                            transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } 
                          }
                        }}
                        whileHover={{ x: 3, transition: { duration: 0.15 } }}
                        className="inline-block cursor-default"
                      >
                        {char}
                      </motion.span>
                    ))}
                  </motion.h4>
                </div>

                {/* Velocity track representing movement and progress */}
                <div className="h-0.5 w-24 bg-border/30 relative overflow-hidden">
                  <motion.div 
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="h-full w-full bg-gradient-to-r from-brand-gold via-amber-400 to-transparent origin-left"
                  />
                  <motion.div 
                    animate={{ x: [-24, 96] }}
                    transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut", repeatDelay: 0.6 }}
                    className="absolute top-0 left-0 w-6 h-full bg-white/80 blur-[1px]"
                  />
                </div>
              </div>

              <p className="font-sans text-base lg:text-lg text-foreground/80 leading-relaxed max-w-md">
                {t('name.movi.text')}
              </p>
            </motion.div>

            {/* Right: STRATO (Layered Architectural Foundations) */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-4 group md:pl-8 lg:pl-12 border-t md:border-t-0 border-border/30 pt-8 md:pt-0"
            >
              <div className="flex items-center justify-between border-b border-border/30 pb-2 font-mono text-[9px] uppercase tracking-widest text-muted-foreground">
                <span className="text-brand-gold font-semibold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 border border-brand-gold inline-block" />
                  {t('name.strato.label')}
                </span>
                <span className="text-[8px] opacity-70 font-mono">02</span>
              </div>

              <div className="flex flex-col gap-2">
                <div className="overflow-hidden">
                  <motion.h4 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                      hidden: {},
                      visible: { transition: { staggerChildren: 0.05, delayChildren: 0.12 } }
                    }}
                    className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl tracking-tight text-foreground group-hover:text-brand-gold transition-colors duration-500 flex"
                  >
                    {['S', 'T', 'R', 'A', 'T', 'O'].map((char, index) => (
                      <motion.span
                        key={index}
                        variants={{
                          hidden: { opacity: 0, y: 16, filter: 'blur(3px)' },
                          visible: { 
                            opacity: 1, 
                            y: 0, 
                            filter: 'blur(0px)',
                            transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } 
                          }
                        }}
                        whileHover={{ y: -3, transition: { duration: 0.15 } }}
                        className="inline-block cursor-default"
                      >
                        {char}
                      </motion.span>
                    ))}
                  </motion.h4>
                </div>

                {/* Architectural Stratum Layers representing foundations */}
                <div className="flex flex-col gap-1 w-24" aria-hidden="true">
                  <motion.div 
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="origin-left h-0.5 w-full bg-brand-gold/80" 
                  />
                  <motion.div 
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    className="origin-left h-0.5 w-3/4 bg-border/80" 
                  />
                  <motion.div 
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
                    className="origin-left h-0.5 w-1/2 bg-border/50" 
                  />
                </div>
              </div>

              <p className="font-sans text-base lg:text-lg text-foreground/80 leading-relaxed max-w-md">
                {t('name.strato.text')}
              </p>
            </motion.div>
          </div>

          {/* Organic Philosophical Synthesis */}
          <motion.div 
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="pt-8 border-t border-border/30 flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 relative"
          >
            {/* Animated expanding top border */}
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-brand-gold/60 via-border/60 to-transparent origin-left"
              aria-hidden="true"
            />

            <div className="flex flex-wrap items-baseline gap-3">
              <span className="font-display text-2xl lg:text-3xl tracking-tight text-foreground font-medium group hover:text-brand-gold transition-colors duration-300">
                Movistrato.
              </span>
              <span className="font-serif italic text-lg sm:text-xl text-brand-gold font-normal">
                {t('name.conclusion')}
              </span>
            </div>
            <div className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-widest text-muted-foreground/80">
              <span>{t('name.transition')}</span>
              <motion.span 
                animate={{ y: [0, 3, 0] }}
                transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
                className="text-brand-gold inline-block"
              >
                ↓
              </motion.span>
            </div>
          </motion.div>

        </div>

        {/* ========================================================================= */}
        {/* PHASE 2: THE MARK & OPTICAL LOUPE (Fast Zoom, Chapter Scrubber, Dynamic)  */}
        {/* ========================================================================= */}
        <div className="w-full flex flex-col gap-10">
          
          {/* Section Headline */}
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-3"
          >
            <span className="font-mono text-[10px] tracking-widest uppercase text-brand-gold flex items-center gap-2">
              <motion.span 
                animate={{ rotate: [45, 225, 45] }}
                transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                className="w-1.5 h-1.5 bg-brand-gold inline-block" 
              />
              {t('label')}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl tracking-tight text-foreground leading-[1.05]">
              {t.rich('title', {
                marker: (chunks) => (
                  <span className="relative inline-block text-brand-gold font-serif italic font-normal px-1">
                    <span className="bg-gradient-to-r from-brand-gold via-amber-300 to-brand-gold bg-clip-text text-transparent">
                      {chunks}
                    </span>
                    <motion.span 
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute -bottom-1 left-0 w-full h-[1.5px] bg-gradient-to-r from-brand-gold/80 via-amber-400/60 to-transparent origin-left" 
                    />
                  </span>
                )
              })}
            </h2>
          </motion.div>

          {/* Main Inspection Workbench: Lens (Left) + Editorial Panel (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* LEFT: Precision Optical Inspection Lens */}
            <div className="lg:col-span-7 flex flex-col gap-3 w-full">
              {/* Lens HUD Top Bar */}
              <div className="flex items-center justify-between font-mono text-[9px] uppercase tracking-widest text-muted-foreground px-1">
                <span className="flex items-center gap-1.5 text-foreground font-semibold">
                  <span className="w-1.5 h-1.5 bg-brand-gold" />
                  VISOR ÓTICO // {currentChapter.tag}
                </span>
                <span className="text-brand-gold font-mono">
                  MAG: {currentChapter.scale.toFixed(1)}X · COORD [{currentChapter.originX}, {currentChapter.originY}]
                </span>
              </div>

              {/* The Optical Lens Frame */}
              <div className="relative w-full aspect-square max-w-[560px] lg:max-w-none mx-auto bg-surface/30 dark:bg-surface/10 border border-border/50 rounded-none overflow-hidden shadow-xl">
                
                {/* Precision Corner Reticles */}
                <div className="absolute top-3 left-3 w-3.5 h-3.5 border-t-2 border-l-2 border-brand-gold/70 z-20 pointer-events-none" />
                <div className="absolute top-3 right-3 w-3.5 h-3.5 border-t-2 border-r-2 border-brand-gold/70 z-20 pointer-events-none" />
                <div className="absolute bottom-3 left-3 w-3.5 h-3.5 border-b-2 border-l-2 border-brand-gold/70 z-20 pointer-events-none" />
                <div className="absolute bottom-3 right-3 w-3.5 h-3.5 border-b-2 border-r-2 border-brand-gold/70 z-20 pointer-events-none" />
                
                {/* Center Laser Target Crosshair */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 z-20 opacity-30 pointer-events-none">
                  <div className="absolute top-1/2 left-0 w-full h-px bg-brand-gold" />
                  <div className="absolute top-0 left-1/2 w-px h-full bg-brand-gold" />
                  <div className="absolute inset-1 border border-brand-gold rounded-full" />
                </div>

                {/* The Responsive Panned & Zoomed 4K Logo */}
                <motion.div
                  className="absolute inset-0 w-full h-full"
                  animate={{
                    scale: currentChapter.scale,
                    transformOrigin: `${currentChapter.originX} ${currentChapter.originY}`,
                  }}
                  transition={{
                    duration: 0.65, // Snappy, dynamic, cinematic
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  {/* Light Mode Logo */}
                  <Image 
                    src="/brand/logo_dark_4k.png" 
                    alt="Movistrato Mark" 
                    fill 
                    className="object-contain dark:hidden drop-shadow-xl opacity-95 p-12 lg:p-14"
                    quality={95}
                    sizes="(max-width: 1024px) 100vw, 55vw"
                    priority
                  />
                  
                  {/* Dark Mode Logo */}
                  <Image 
                    src="/brand/logo_light_4k.png" 
                    alt="Movistrato Mark" 
                    fill 
                    className="object-contain hidden dark:block drop-shadow-xl opacity-95 p-12 lg:p-14"
                    quality={95}
                    sizes="(max-width: 1024px) 100vw, 55vw"
                    priority
                  />
                </motion.div>
              </div>
            </div>

            {/* RIGHT: The Chapter Navigation & Editorial Narrative */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-6 w-full">
              
              {/* Fast Chapter Scrubber Strip */}
              <div className="flex flex-col gap-2">
                <span className="font-mono text-[8px] uppercase tracking-widest text-muted-foreground">
                  SELEÇÃO RÁPIDA DE CAPÍTULO
                </span>
                <div className="grid grid-cols-7 gap-1 w-full" role="tablist">
                  {CHAPTERS.map((chap, idx) => {
                    const isActive = idx === currentIndex;
                    return (
                      <button
                        key={chap.id}
                        type="button"
                        onClick={() => setCurrentIndex(idx)}
                        aria-selected={isActive}
                        aria-label={`Capítulo 0${idx}: ${chap.tag}`}
                        className={`py-1.5 px-1 font-mono text-[9px] transition-all border text-center cursor-pointer ${
                          isActive
                            ? 'bg-brand-gold text-black font-semibold border-brand-gold shadow-[0_0_8px_rgba(217,166,46,0.5)]'
                            : 'bg-surface/30 dark:bg-surface/10 border-border/50 text-muted-foreground hover:border-brand-gold/50 hover:text-foreground'
                        }`}
                      >
                        0{idx}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Dynamic Narrative Card with Smooth Text Transitions */}
              <div className="relative min-h-[220px] sm:min-h-[240px] flex items-start p-5 sm:p-6 bg-surface/30 dark:bg-surface/10 border border-border/40">
                <div className="absolute top-0 left-0 w-1 h-full bg-brand-gold" aria-hidden="true" />

                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentChapter.id}
                    initial={{ opacity: 0, y: 8, filter: 'blur(3px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, y: -8, filter: 'blur(3px)' }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="flex flex-col gap-3 w-full"
                  >
                    <div className="flex items-center justify-between font-mono text-[9px] uppercase tracking-widest text-brand-gold border-b border-border/20 pb-2">
                      <span className="font-semibold">
                        {t(`chapters.${currentChapter.id}.title`)}
                      </span>
                      <span className="text-muted-foreground text-[8px]">
                        CAPÍTULO 0{currentIndex} / 06
                      </span>
                    </div>

                    <div className="font-sans text-sm sm:text-base leading-relaxed text-foreground/90 whitespace-pre-line">
                      {t.rich(`chapters.${currentChapter.id}.text`, {
                        blue: (chunks) => <span className="text-blue-500 font-semibold">{chunks}</span>,
                        gold: (chunks) => <span className="text-brand-gold font-semibold">{chunks}</span>,
                        red: (chunks) => <span className="text-red-500 font-semibold">{chunks}</span>,
                        stone: (chunks) => <span className="text-stone-400 font-semibold">{chunks}</span>,
                        emerald: (chunks) => <span className="text-emerald-500 font-semibold">{chunks}</span>,
                        br: () => <br />
                      })}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Bottom Nav Controller */}
              <div className="flex items-center justify-between gap-4 pt-2 border-t border-border/20">
                <div className="flex items-center gap-2">
                  <button 
                    type="button"
                    onClick={handlePrev}
                    className="w-10 h-10 flex items-center justify-center border border-border hover:border-brand-gold hover:text-brand-gold transition-colors focus-visible:outline-none cursor-pointer"
                    aria-label="Capítulo anterior"
                  >
                    <span className="font-sans font-light text-base">←</span>
                  </button>
                  <button 
                    type="button"
                    onClick={handleNext}
                    className="w-10 h-10 flex items-center justify-center border border-border hover:border-brand-gold hover:text-brand-gold transition-colors focus-visible:outline-none cursor-pointer"
                    aria-label="Próximo capítulo"
                  >
                    <span className="font-sans font-light text-base">→</span>
                  </button>
                </div>

                <span className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">
                  USA AS TECLAS [ ← / → ]
                </span>
              </div>

            </div>

          </div>

        </div>

      </Container>
    </section>
  );
}
