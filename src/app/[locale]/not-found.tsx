'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Link } from '@/i18n/routing';
import { Container } from '@/components/layout/Container';

export default function NotFoundPage() {
  const t = useTranslations('NotFound');

  return (
    <main className="relative w-full min-h-[90vh] flex items-center justify-center pt-28 pb-20 bg-background overflow-hidden select-none">
      {/* Precision Corner Crosshairs */}
      <div className="absolute top-24 left-8 font-mono text-[10px] text-muted opacity-40">┌ [0, 0]</div>
      <div className="absolute top-24 right-8 font-mono text-[10px] text-muted opacity-40">[100, 0] ┐</div>
      <div className="absolute bottom-10 left-8 font-mono text-[10px] text-muted opacity-40">└ [0, 100]</div>
      <div className="absolute bottom-10 right-8 font-mono text-[10px] text-muted opacity-40">[100, 100] ┘</div>

      <Container className="max-w-4xl px-6 flex flex-col items-center text-center relative z-10">
        {/* Top Radar Badge */}
        <div className="flex items-center gap-3 px-4 py-1.5 border border-border bg-surface font-mono text-[10px] sm:text-xs tracking-[0.25em] uppercase text-muted mb-6 shadow-xs">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
          <span className="text-foreground font-medium">{t('badge')}</span>
        </div>

        {/* Monumental High-Contrast 404 Graphic */}
        <div className="relative flex items-center justify-center my-1">
          <motion.h1
            initial={{ opacity: 0, scale: 0.94, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[110px] sm:text-[180px] lg:text-[230px] font-normal tracking-[-0.04em] text-foreground leading-none flex items-center gap-1 sm:gap-4"
          >
            <span>4</span>
            <span className="relative flex items-center justify-center text-[var(--brand-gold)]">
              0
              <span className="absolute w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[var(--brand-gold)] animate-pulse shadow-[0_0_15px_var(--brand-gold)]" />
            </span>
            <span>4</span>
          </motion.h1>
        </div>

        {/* Clear Headline */}
        <h2 className="font-display text-2xl sm:text-4xl text-foreground font-light tracking-tight mb-4">
          {t('title')}
        </h2>

        {/* Technical Description */}
        <p className="font-body text-sm sm:text-base text-muted max-w-lg leading-relaxed mb-10">
          {t('description')}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-foreground text-background font-mono text-xs uppercase tracking-widest hover:bg-[var(--brand-gold)] hover:text-black transition-colors duration-200 group cursor-pointer font-medium shadow-lg"
          >
            <span className="text-[var(--brand-gold)] group-hover:text-black transition-colors group-hover:-translate-x-1 duration-200">
              ←
            </span>
            <span>{t('return_home')}</span>
          </Link>

          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 border border-border bg-surface hover:bg-surface-elevated hover:border-foreground transition-colors font-mono text-xs uppercase tracking-widest text-muted hover:text-foreground cursor-pointer"
          >
            <span>{t('contact_support')}</span>
          </Link>
        </div>

        {/* Telemetry Status Line */}
        <div className="mt-12 pt-6 border-t border-border/40 w-full max-w-xl flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-[10px] text-muted tracking-widest uppercase">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />
            <span>{t('status')}</span>
          </span>
          <span>{t('integrity')}</span>
        </div>
      </Container>
    </main>
  );
}
