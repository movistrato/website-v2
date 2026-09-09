'use client';

import { useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Container } from '@/components/layout/Container';

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  const t = useTranslations('ServerError');

  useEffect(() => {
    console.error('System Runtime Exception isolated:', error);
  }, [error]);

  return (
    <main className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden pt-32 pb-24 bg-background transition-colors duration-300">
      <div 
        aria-hidden="true" 
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none -z-10"
      >
        <span className="font-display text-[160px] sm:text-[240px] lg:text-[320px] font-extralight text-foreground/[0.04] tracking-tighter leading-none">
          500
        </span>
      </div>

      <Container className="max-w-3xl px-6 lg:px-8 flex flex-col items-center text-center">
        <div className="flex items-center gap-2.5 px-3 py-1 mb-8 border border-red-500/30 bg-surface font-mono text-[11px] tracking-widest uppercase text-muted transition-colors">
          <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
          <span>{t('badge')}</span>
        </div>

        <h1 className="font-display text-4xl sm:text-6xl text-foreground font-light tracking-tight leading-[1.15] mb-6 transition-colors">
          {t('title')}
        </h1>

        <p className="font-body text-base sm:text-lg text-muted max-w-xl leading-relaxed mb-10 transition-colors">
          {t('description')}
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
          <button
            type="button"
            onClick={() => reset()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 py-3.5 bg-foreground text-background font-mono text-xs uppercase tracking-widest hover:bg-[var(--brand-gold)] hover:text-black transition-colors duration-200 cursor-pointer font-medium"
          >
            <span>↻</span>
            <span>{t('reset')}</span>
          </button>

          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-border bg-surface hover:bg-surface-elevated hover:border-foreground transition-colors font-mono text-xs uppercase tracking-widest text-muted hover:text-foreground cursor-pointer"
          >
            <span>{t('return_home')}</span>
          </Link>
        </div>

        <div className="mt-16 pt-6 border-t border-border/40 w-full flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-[10px] text-muted tracking-widest uppercase transition-colors">
          <span>{t('status')}</span>
          <span>{t('integrity')}</span>
        </div>
      </Container>
    </main>
  );
}
