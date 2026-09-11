'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Container } from '@/components/layout/Container';
import { motion } from 'framer-motion';

export function ContactSection() {
  const t = useTranslations('Contact');
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('contact@movistrato.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  // Extract last word for gold editorial accent
  const headline = t('headline');
  const words = headline.split(' ');
  const lastWord = words.pop() || '';
  const leadingWords = words.join(' ');

  const principles = [
    {
      num: t('standards.card1_num'),
      tag: t('standards.card1_tag'),
      desc: t('standards.card1_desc'),
    },
    {
      num: t('standards.card2_num'),
      tag: t('standards.card2_tag'),
      desc: t('standards.card2_desc'),
    },
    {
      num: t('standards.card3_num'),
      tag: t('standards.card3_tag'),
      desc: t('standards.card3_desc'),
    },
  ];

  return (
    <section className="relative w-full py-24 sm:py-32 lg:py-40 bg-background text-foreground overflow-hidden border-t border-border/40">
      
      {/* Precision Corner Reticles */}
      <div className="absolute top-6 left-6 w-3 h-3 border-l border-t border-border/40 pointer-events-none" aria-hidden="true" />
      <div className="absolute top-6 right-6 w-3 h-3 border-r border-t border-border/40 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-6 left-6 w-3 h-3 border-l border-b border-border/40 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-6 right-6 w-3 h-3 border-r border-b border-border/40 pointer-events-none" aria-hidden="true" />

      {/* Subtle Blueprint Grid Accent */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:48px_48px] opacity-[0.025] dark:opacity-[0.04] pointer-events-none" 
        aria-hidden="true" 
      />

      {/* Warm Ambient Architectural Aura */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] max-w-3xl aspect-square bg-[radial-gradient(circle,rgba(217,166,46,0.08)_0%,rgba(217,166,46,0.02)_40%,transparent_70%)] blur-[90px] rounded-full pointer-events-none" 
        aria-hidden="true" 
      />

      <Container className="relative z-10 max-w-5xl flex flex-col items-center text-center gap-14 sm:gap-16">
        
        {/* Top Telemetry & Section Identity */}
        <motion.div 
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-between gap-3 w-full border-b border-border/30 pb-4 font-mono text-[9px] uppercase tracking-widest text-muted-foreground"
        >
          <div className="flex items-center gap-2 text-foreground font-semibold">
            <motion.span 
              animate={{ rotate: [45, 225, 45] }}
              transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
              className="w-1.5 h-1.5 bg-brand-gold inline-block" 
            />
            <span>{t('label')}</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-muted-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              CANAL ATIVO
            </span>
            <span className="text-border">|</span>
            <span className="text-brand-gold font-mono">
              38°43&apos;N 9°08&apos;W · RESPOSTA 24–48H
            </span>
          </div>
        </motion.div>

        {/* Monumental Editorial Headline */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center gap-4 max-w-3xl"
        >
          <h2 className="font-serif italic text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight text-foreground leading-[1.1] sm:leading-[1.08]">
            {leadingWords}{' '}
            <span className="relative inline-block text-brand-gold font-normal px-1">
              <span className="bg-gradient-to-r from-brand-gold via-amber-300 to-brand-gold bg-clip-text text-transparent">
                {lastWord}
              </span>
              <motion.span 
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="absolute -bottom-1 left-0 w-full h-[1.5px] bg-gradient-to-r from-brand-gold/80 via-amber-400/60 to-transparent origin-left" 
              />
            </span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-muted-foreground max-w-xl leading-relaxed mt-2">
            {t('direct.subtitle')}
          </p>
        </motion.div>

        {/* Structured Dialogue Protocols Triptych */}
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 w-full text-left"
        >
          {principles.map((item, idx) => (
            <div 
              key={idx}
              className="flex flex-col gap-2 p-5 bg-surface/30 dark:bg-surface/10 border border-border/40 relative group hover:border-brand-gold/50 transition-colors duration-300"
            >
              <div className="flex items-center justify-between font-mono text-[9px] uppercase tracking-widest text-muted-foreground border-b border-border/20 pb-2">
                <span className="text-brand-gold font-semibold flex items-center gap-1.5">
                  <span className="w-1 h-1 bg-brand-gold" />
                  {item.tag}
                </span>
                <span className="text-[8px] opacity-70">0{idx + 1}</span>
              </div>
              <p className="font-sans text-xs text-muted-foreground leading-relaxed mt-1">
                {item.desc}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Transmission Actions Console */}
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 w-full max-w-2xl mx-auto"
        >
          {/* Primary Action Button */}
          <Link 
            href="/contact" 
            className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-4 bg-brand-gold text-black px-7 py-3.5 sm:px-8 sm:py-4 overflow-hidden border border-brand-gold shadow-[0_0_24px_rgba(217,166,46,0.18)] transition-all duration-300 hover:shadow-[0_0_32px_rgba(217,166,46,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold cursor-pointer whitespace-nowrap"
          >
            <div className="absolute inset-0 bg-foreground translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] z-0" />
            <span className="relative z-10 font-mono text-xs tracking-widest uppercase font-semibold group-hover:text-background transition-colors duration-300">
              {t('cta')}
            </span>
            <span className="relative z-10 text-base font-sans font-light leading-none transition-transform duration-300 group-hover:translate-x-1.5 group-hover:text-background">
              →
            </span>
          </Link>

          {/* Direct Email Clipboard Trigger */}
          <button 
            type="button"
            onClick={handleCopyEmail}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 py-3.5 sm:py-4 border border-border/60 bg-surface/30 dark:bg-surface/10 hover:border-brand-gold/60 font-mono text-xs tracking-wider text-foreground transition-all duration-200 cursor-pointer focus-visible:outline-none whitespace-nowrap"
            aria-label="contact@movistrato.com"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
            <span className="text-muted-foreground font-mono">contact@movistrato.com</span>
            <span className="text-[10px] font-mono text-brand-gold font-semibold pl-1">
              {copied ? t('direct.copied') : t('direct.copy_email')}
            </span>
          </button>
        </motion.div>

        {/* Telemetry Footnote */}
        <div className="font-mono text-[8px] sm:text-[9px] uppercase tracking-widest text-muted-foreground/60 -mt-6">
          {t('standards.card1_tag')} · {t('standards.card2_tag')} · {t('standards.card3_tag')}
        </div>

      </Container>
    </section>
  );
}

