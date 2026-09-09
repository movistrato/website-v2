'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export function ContactDirectInfo() {
  const t = useTranslations('Contact');
  const [copied, setCopied] = useState(false);
  const email = t('direct.email_address');

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback if clipboard API is denied
    }
  };

  return (
    <aside className="relative flex flex-col justify-between p-8 sm:p-10 border border-border/60 bg-surface/40 overflow-hidden">
      {/* Structural Corner Crosshairs */}
      <div className="absolute top-1 left-2 font-mono text-[10px] text-border/80 select-none" aria-hidden="true">+</div>
      <div className="absolute top-1 right-2 font-mono text-[10px] text-border/80 select-none" aria-hidden="true">+</div>
      <div className="absolute bottom-1 left-2 font-mono text-[10px] text-border/80 select-none" aria-hidden="true">+</div>
      <div className="absolute bottom-1 right-2 font-mono text-[10px] text-border/80 select-none" aria-hidden="true">+</div>

      <div className="flex flex-col gap-8">
        {/* Section Header */}
        <div className="border-b border-border/40 pb-6">
          <span className="font-mono text-[10px] tracking-widest uppercase text-brand-gold font-medium mb-2 block">
            {t('direct.section_label')}
          </span>
          <h2 className="font-serif italic text-2xl sm:text-3xl text-foreground">
            {t('direct.title')}
          </h2>
          <p className="font-sans text-xs text-muted-foreground mt-2 leading-relaxed">
            {t('direct.subtitle')}
          </p>
        </div>

        {/* Channel 1: Primary Email Card */}
        <div className="flex flex-col gap-3 p-5 border border-border/60 bg-surface/70 hover:border-brand-gold/40 transition-colors">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] tracking-widest text-muted uppercase">
              {t('direct.email_label')}
            </span>
            <span className="inline-flex items-center gap-1.5 font-mono text-[9px] text-emerald-500 uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              ONLINE
            </span>
          </div>
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
            <a 
              href={`mailto:${email}`} 
              className="font-mono text-sm sm:text-base text-foreground hover:text-brand-gold transition-colors font-medium break-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-gold"
            >
              {email}
            </a>
            <button
              type="button"
              onClick={handleCopyEmail}
              className={`inline-flex items-center justify-center font-mono text-[10px] tracking-widest uppercase px-3.5 py-1.5 border transition-all active:scale-[0.97] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-gold shrink-0 ${
                copied
                  ? 'border-brand-gold bg-brand-gold/15 text-brand-gold font-semibold'
                  : 'border-border/80 hover:border-brand-gold text-muted-foreground hover:text-foreground bg-surface'
              }`}
              aria-label={copied ? t('direct.copied') : t('direct.copy_email')}
            >
              {copied ? t('direct.copied') : t('direct.copy_email')}
            </button>
          </div>
        </div>

        {/* Channel 2: Cadence Card */}
        <div className="p-5 border border-border/60 bg-surface/50 flex flex-col gap-1.5">
          <span className="font-mono text-[10px] tracking-widest text-muted uppercase">
            {t('direct.response_label')}
          </span>
          <span className="font-mono text-sm text-foreground font-medium">
            {t('direct.response_value')}
          </span>
          <span className="font-sans text-xs text-muted-foreground">
            {t('direct.response_note')}
          </span>
        </div>

        {/* Channel 3: Verified Ecosystem Links */}
        <div className="flex flex-col gap-2.5">
          <span className="font-mono text-[10px] tracking-widest text-muted uppercase">
            {t('direct.links_label')}
          </span>
          <div className="grid grid-cols-2 gap-2">
            <a
              href="https://github.com/movistrato"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 border border-border/60 bg-surface/50 hover:border-brand-gold hover:bg-surface/80 transition-all font-mono text-xs tracking-wider uppercase text-muted hover:text-foreground group"
            >
              <span>GitHub</span>
              <span className="text-brand-gold transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
            </a>
            <a
              href="https://linkedin.com/company/movistrato"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 border border-border/60 bg-surface/50 hover:border-brand-gold hover:bg-surface/80 transition-all font-mono text-xs tracking-wider uppercase text-muted hover:text-foreground group"
            >
              <span>LinkedIn</span>
              <span className="text-brand-gold transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
            </a>
          </div>
        </div>
      </div>

      {/* Channel 4: Dedicated Emblem Showcase Pedestal (Unobstructed & Clean) */}
      <div className="relative mt-10 pt-8 border-t border-border/40 flex flex-col items-center justify-center p-6 border border-border/60 bg-surface/60 group">
        {/* Subtle corner micro-accents */}
        <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-brand-gold/50" />
        <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-brand-gold/50" />
        <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-brand-gold/50" />
        <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-brand-gold/50" />

        <div className="relative w-28 h-28 sm:w-32 sm:h-32 mb-3 transition-transform duration-500 ease-out group-hover:scale-105">
          <Image
            src="/brand/logo_dark_4k.png"
            alt="Movistrato Emblem"
            fill
            className="object-contain dark:hidden transition-opacity"
            sizes="128px"
            quality={95}
          />
          <Image
            src="/brand/logo_light_4k.png"
            alt="Movistrato Emblem"
            fill
            className="object-contain hidden dark:block transition-opacity"
            sizes="128px"
            quality={95}
          />
        </div>

        <span className="font-mono text-[9px] tracking-widest uppercase text-brand-gold font-medium">
          {t('direct.emblem_label')}
        </span>
        <span className="font-mono text-[10px] text-muted-foreground mt-1 text-center tracking-tight">
          {t('direct.emblem_sub')}
        </span>
      </div>
    </aside>
  );
}
