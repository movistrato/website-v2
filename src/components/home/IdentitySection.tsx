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
}

const CHAPTERS: Chapter[] = [
  { id: '0', scale: 1.0, originX: '50%', originY: '50%' }, // Origens
  { id: '1', scale: 2.2, originX: '50%', originY: '65%' }, // As Quinas
  { id: '2', scale: 2.6, originX: '35%', originY: '35%' }, // Circuitos
  { id: '3', scale: 2.4, originX: '50%', originY: '50%' }, // O Centro (M)
  { id: '4', scale: 2.4, originX: '50%', originY: '18%' }, // A Coroa
  { id: '5', scale: 1.5, originX: '50%', originY: '50%' }, // O Sistema
  { id: '6', scale: 1.0, originX: '50%', originY: '50%' }, // O Manifesto
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

  // Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section className="relative w-full min-h-dvh flex flex-col justify-center bg-background overflow-hidden border-t border-border/40 py-24 lg:py-32">
      
      {/* Drifting Background Grid */}
      <motion.div 
        className="absolute inset-0 z-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-size-[40px_40px] opacity-[0.04] dark:opacity-[0.06]"
        animate={{ backgroundPosition: ['0px 0px', '40px 40px'] }}
        transition={{ repeat: Infinity, duration: 3, ease: 'linear' }}
        aria-hidden="true" 
      />

      <Container className="relative z-10 flex-1 flex flex-col justify-center">
        
        {/* PHASE 1: THE NAME */}
        <div className="w-full min-h-[80vh] flex flex-col justify-center items-center text-center mb-32">
          
          <motion.div
            className="max-w-3xl mx-auto mb-24 relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute -left-6 top-0 w-1 h-full bg-brand-gold/50" />
            <p className="font-serif italic text-2xl lg:text-4xl text-foreground leading-snug">
              {t('name.intro')}
            </p>
          </motion.div>

          <div className="w-full max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-8 mb-24">
            
            {/* MOVI */}
            <motion.div 
              className="flex flex-col items-center lg:items-start text-center lg:text-left flex-1"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-brand-gold mb-8 opacity-80">
                <motion.path 
                  d="M4 12h16M13 5l7 7-7 7" 
                  initial={{ pathLength: 0, opacity: 0, x: -10 }}
                  whileInView={{ pathLength: 1, opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
                />
              </svg>
              <h3 className="font-serif italic text-6xl md:text-7xl lg:text-8xl tracking-tighter text-foreground mb-6">
                MOVI
              </h3>
              <span className="font-mono text-[10px] tracking-widest uppercase text-brand-gold mb-4 border-b border-brand-gold/30 pb-2">
                {t('name.movi.label')}
              </span>
              <p className="font-sans text-sm lg:text-base text-foreground/70 max-w-[250px]">
                {t('name.movi.text')}
              </p>
            </motion.div>

            {/* PLUS */}
            <motion.div
              className="text-3xl font-light text-border"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              +
            </motion.div>

            {/* STRATO */}
            <motion.div 
              className="flex flex-col items-center lg:items-end text-center lg:text-right flex-1"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            >
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-brand-gold mb-8 opacity-80">
                <motion.path 
                  d="M12 2L2 7l10 5 10-5-10-5z" 
                  initial={{ pathLength: 0, opacity: 0, y: -10 }}
                  whileInView={{ pathLength: 1, opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
                />
                <motion.path 
                  d="M2 12l10 5 10-5" 
                  initial={{ pathLength: 0, opacity: 0, y: -10 }}
                  whileInView={{ pathLength: 1, opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
                />
                <motion.path 
                  d="M2 17l10 5 10-5" 
                  initial={{ pathLength: 0, opacity: 0, y: -10 }}
                  whileInView={{ pathLength: 1, opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
                />
              </svg>
              <h3 className="font-serif italic text-6xl md:text-7xl lg:text-8xl tracking-tighter text-foreground mb-6">
                STRATO
              </h3>
              <span className="font-mono text-[10px] tracking-widest uppercase text-brand-gold mb-4 border-b border-brand-gold/30 pb-2">
                {t('name.strato.label')}
              </span>
              <p className="font-sans text-sm lg:text-base text-foreground/70 max-w-[250px]">
                {t('name.strato.text')}
              </p>
            </motion.div>

          </div>

          <motion.div
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h4 className="font-serif italic text-3xl md:text-4xl text-brand-gold mb-4">
              MOVISTRATO
            </h4>
            <span className="font-mono text-sm tracking-[0.2em] uppercase text-foreground max-w-md leading-relaxed">
              {t('name.conclusion')}
            </span>
            
            <p className="mt-16 font-sans text-sm text-foreground/50 italic tracking-wide">
              {t('name.transition')}
            </p>
            <div className="w-[1px] h-16 bg-border mt-8" />
          </motion.div>
        </div>
        
        {/* PHASE 2: THE MARK & PRINCIPLES */}
        {/* Massive Section Title */}
        <motion.div 
          className="w-full mb-16 lg:mb-24 flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="font-mono text-[10px] tracking-widest uppercase text-brand-gold border-b border-brand-gold/30 pb-2 mb-6">
            {t('label')}
          </span>
          <h2 className="font-serif italic text-3xl md:text-5xl lg:text-6xl max-w-4xl tracking-tight text-foreground leading-[1.2]">
            {t.rich('title', {
              marker: (chunks) => (
                <span className="relative inline-block whitespace-nowrap">
                  <span className="relative z-10">{chunks}</span>
                  <span className="absolute bottom-2 lg:bottom-4 left-0 w-full h-3 lg:h-5 bg-brand-gold/40 -z-10 -rotate-1 origin-left"></span>
                </span>
              )
            })}
          </h2>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          
          {/* LEFT: The Camera Lens (Massive Logo) */}
          <div className="lg:col-span-7 flex justify-center w-full">
            <div className="relative w-full max-w-[500px] lg:max-w-[750px] aspect-square overflow-hidden bg-surface/30 backdrop-blur-sm border border-border/40 rounded-sm">
              
              {/* Corner brackets */}
              <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-brand-gold/60 z-20 transition-all duration-700" />
              <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-brand-gold/60 z-20 transition-all duration-700" />
              <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-brand-gold/60 z-20 transition-all duration-700" />
              <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-brand-gold/60 z-20 transition-all duration-700" />
              
              {/* Center crosshair */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 z-20 opacity-30">
                <div className="absolute top-1/2 left-0 w-full h-px bg-brand-gold" />
                <div className="absolute top-0 left-1/2 w-px h-full bg-brand-gold" />
              </div>

              {/* The Image that gets panned and zoomed */}
              <motion.div
                className="absolute inset-0 w-full h-full"
                animate={{
                  scale: currentChapter.scale,
                  transformOrigin: `${currentChapter.originX} ${currentChapter.originY}`,
                }}
                transition={{
                  duration: 1.4,
                  ease: [0.22, 1, 0.36, 1], // Cinematic smooth ease out
                }}
              >
                {/* Light Mode Logo */}
                <Image 
                  src="/brand/logo_maior_dark.png" 
                  alt="Movistrato Mark" 
                  fill 
                  className="object-contain dark:hidden drop-shadow-2xl opacity-90 p-12 lg:p-16"
                  quality={100}
                  sizes="(max-width: 1024px) 100vw, 70vw"
                  priority
                />
                
                {/* Dark Mode Logo */}
                <Image 
                  src="/brand/logo_maior_light.png" 
                  alt="Movistrato Mark" 
                  fill 
                  className="object-contain hidden dark:block drop-shadow-2xl opacity-90 p-12 lg:p-16"
                  quality={100}
                  sizes="(max-width: 1024px) 100vw, 70vw"
                  priority
                />
              </motion.div>
              
            </div>
          </div>

          {/* RIGHT: The Editorial Book Panel */}
          <div className="lg:col-span-5 flex flex-col gap-8 lg:pr-12 relative z-30">
            
            <motion.div 
              className="relative min-h-[300px] lg:min-h-[360px] flex items-start"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentChapter.id}
                  initial={{ opacity: 0, x: 20, filter: 'blur(4px)' }}
                  animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, x: -20, filter: 'blur(4px)' }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="flex flex-col gap-6 w-full"
                >
                  <h3 className="font-serif italic text-2xl lg:text-3xl text-brand-gold">
                    {t(`chapters.${currentChapter.id}.title`)}
                  </h3>
                  <div className="font-sans text-lg lg:text-xl leading-relaxed text-foreground">
                    {t.rich(`chapters.${currentChapter.id}.text`, {
                      blue: (chunks) => <span className="text-blue-500 font-medium">{chunks}</span>,
                      gold: (chunks) => <span className="text-brand-gold font-medium">{chunks}</span>,
                      red: (chunks) => <span className="text-red-500 font-medium">{chunks}</span>,
                      stone: (chunks) => <span className="text-stone-400 font-medium">{chunks}</span>,
                      emerald: (chunks) => <span className="text-emerald-500 font-medium">{chunks}</span>,
                      br: () => <br />
                    })}
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* Bottom Control Bar */}
            <div className="flex items-center gap-8 mt-4 pt-8 border-t border-border/30">
              
              <div className="flex items-center gap-4">
                <button 
                  onClick={handlePrev}
                  className="w-12 h-12 flex items-center justify-center rounded-full border border-border hover:border-brand-gold hover:text-brand-gold transition-colors focus-visible:outline-none"
                  aria-label="Previous chapter"
                >
                  <span className="font-sans font-light text-xl -translate-y-[1px]">←</span>
                </button>
                <button 
                  onClick={handleNext}
                  className="w-12 h-12 flex items-center justify-center rounded-full border border-border hover:border-brand-gold hover:text-brand-gold transition-colors focus-visible:outline-none"
                  aria-label="Next chapter"
                >
                  <span className="font-sans font-light text-xl -translate-y-[1px]">→</span>
                </button>
              </div>

              {/* Progress Indicator */}
              <div className="flex flex-col gap-2 flex-1">
                <div className="flex justify-between items-center font-mono text-[10px] tracking-widest text-muted-foreground">
                  <span>CHAPTER 0{currentIndex}</span>
                  <span>0{CHAPTERS.length - 1}</span>
                </div>
                <div className="w-full h-px bg-border/50 relative overflow-hidden">
                  <motion.div 
                    className="absolute top-0 left-0 h-full bg-brand-gold"
                    initial={{ width: 0 }}
                    animate={{ width: `${(currentIndex / (CHAPTERS.length - 1)) * 100}%` }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  />
                </div>
              </div>

            </div>

          </div>
          
        </motion.div>
        
      </Container>
    </section>
  );
}
