'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';

export function PageTransitionLoader() {
  const pathname = usePathname();
  const t = useTranslations('PageLoader');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a');
      if (!target) return;

      const href = target.getAttribute('href');
      const isTargetBlank = target.getAttribute('target') === '_blank';
      const isModifierClick = e.metaKey || e.ctrlKey || e.shiftKey || e.altKey;

      if (!href || isTargetBlank || isModifierClick) return;
      if (href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) return;

      try {
        const url = new URL(href, window.location.href);
        if (url.origin === window.location.origin && url.pathname !== window.location.pathname) {
          setProgress(0);
          setIsTransitioning(true);
        }
      } catch {
        // Safe fallback
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  useEffect(() => {
    if (!isTransitioning) return;
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const step = Math.floor(Math.random() * 14) + 8;
        return Math.min(prev + step, 100);
      });
    }, 60);

    return () => clearInterval(interval);
  }, [isTransitioning]);

  useEffect(() => {
    if (!isTransitioning) return;
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 950);

    return () => clearTimeout(timer);
  }, [pathname, isTransitioning]);

  return (
    <AnimatePresence>
      {isTransitioning && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, filter: 'blur(8px)' }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[9999] pointer-events-none flex flex-col items-center justify-center bg-background px-6 select-none"
        >
          {/* Top Amber-Gold Laser Beam */}
          <div className="fixed top-0 left-0 right-0 h-[2px] bg-border/20">
            <motion.div
              style={{ width: `${progress}%` }}
              className="h-full bg-gradient-to-r from-[#C88A1A] via-[#E5A93C] to-[#F5CA6E] shadow-[0_0_10px_rgba(229,169,60,0.5)] transition-all duration-100"
            />
          </div>

          <span className="font-display text-4xl sm:text-6xl text-foreground font-light tracking-tight mb-8">
            Movistrato
          </span>

          {/* Refined Amber-Gold Telemetry Bar */}
          <div className="w-full max-w-sm sm:max-w-md flex flex-col gap-3">
            <div className="flex justify-between items-center font-mono text-xs tracking-widest text-muted uppercase">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#E5A93C] rounded-full animate-ping opacity-75" />
                <span className="text-foreground font-medium">{progress === 100 ? t('ready') : t('initializing')}</span>
              </span>
              <span className="text-[#E5A93C] font-bold text-sm tracking-wider">{progress.toString().padStart(2, '0')}%</span>
            </div>

            <div className="w-full h-2.5 bg-background border border-[#E5A93C]/30 p-[2px] rounded-xs shadow-[0_0_12px_rgba(229,169,60,0.15)]">
              <motion.div
                style={{ width: `${progress}%` }}
                className="h-full bg-gradient-to-r from-[#C88A1A] via-[#E5A93C] to-[#F5CA6E] shadow-[0_0_8px_rgba(229,169,60,0.4)] transition-all duration-100 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
              </motion.div>
            </div>

            <div className="flex justify-between items-center font-mono text-[10px] text-muted/80 tracking-[0.2em] uppercase pt-1">
              <span>{t('tagline')}</span>
              <span className="text-[#E5A93C]/90 font-mono">SYS_OK</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
