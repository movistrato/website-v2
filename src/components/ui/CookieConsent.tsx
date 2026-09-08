'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from '@/i18n/routing';

const CONSENT_STORAGE_KEY = 'movistrato_cookie_consent_v1';

type ConsentChoice = 'all' | 'essential';

interface ConsentRecord {
  choice: ConsentChoice;
  timestamp: string;
}

export function CookieConsent() {
  const t = useTranslations('CookieConsent');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(CONSENT_STORAGE_KEY);
      if (!stored) {
        setIsVisible(true);
      }
    } catch {
      // In case localStorage is blocked by browser privacy settings
      setIsVisible(true);
    }
  }, []);

  const saveConsent = (choice: ConsentChoice) => {
    try {
      const payload: ConsentRecord = {
        choice,
        timestamp: new Date().toISOString(),
      };
      localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(payload));
    } catch {
      // Fail gracefully if storage quota exceeded or restricted
    }
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.aside
          role="region"
          aria-label={t('title')}
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.98 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          style={{ translateX: '-50%' }}
          className="fixed bottom-4 sm:bottom-6 left-1/2 w-[calc(100%-2rem)] max-w-xl z-50 bg-[var(--surface-elevated)] border border-[var(--border)] p-5 md:p-6 shadow-2xl backdrop-blur-sm"
        >
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between border-b border-[var(--border)] pb-2.5">
              <span className="font-mono text-[10px] tracking-wider text-[var(--muted)] uppercase">
                {t('label')}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand-gold)]" />
            </div>

            <h3 className="font-display text-lg text-[var(--foreground)] tracking-tight">
              {t('title')}
            </h3>

            <p className="text-xs leading-relaxed text-[var(--muted)] font-body">
              {t('description')}{' '}
              <Link
                href="/privacy"
                className="underline underline-offset-4 text-[var(--foreground)] hover:text-[var(--brand-gold)] transition-colors"
              >
                {t('learn_more')}
              </Link>
            </p>

            <div className="grid grid-cols-2 gap-2.5 pt-2">
              <button
                type="button"
                onClick={() => saveConsent('essential')}
                className="px-3 py-2 text-[11px] font-mono tracking-wider uppercase border border-[var(--border)] text-[var(--muted)] hover:text-[var(--foreground)] hover:border-[var(--foreground)] transition-colors cursor-pointer"
              >
                {t('essential_only')}
              </button>

              <button
                type="button"
                onClick={() => saveConsent('all')}
                className="px-3 py-2 text-[11px] font-mono tracking-wider uppercase bg-[var(--foreground)] text-[var(--background)] hover:bg-[var(--brand-gold)] hover:text-black transition-colors cursor-pointer font-medium"
              >
                {t('accept_all')}
              </button>
            </div>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
