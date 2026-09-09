'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

export function ContactInfoGrid() {
  const t = useTranslations('Contact');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const standards = [
    {
      num: t('standards.card1_num'),
      tag: t('standards.card1_tag'),
      title: t('standards.card1_title'),
      desc: t('standards.card1_desc'),
      status: 'DIRETO',
    },
    {
      num: t('standards.card2_num'),
      tag: t('standards.card2_tag'),
      title: t('standards.card2_title'),
      desc: t('standards.card2_desc'),
      status: 'CONFIDENCIAL',
    },
    {
      num: t('standards.card3_num'),
      tag: t('standards.card3_tag'),
      title: t('standards.card3_title'),
      desc: t('standards.card3_desc'),
      status: 'INDEPENDENTE',
    },
  ];

  const faqItems = [
    {
      tag: t('faq.items.0.tag'),
      q: t('faq.items.0.q'),
      a: t('faq.items.0.a'),
      idx: '01',
    },
    {
      tag: t('faq.items.1.tag'),
      q: t('faq.items.1.q'),
      a: t('faq.items.1.a'),
      idx: '02',
    },
    {
      tag: t('faq.items.2.tag'),
      q: t('faq.items.2.q'),
      a: t('faq.items.2.a'),
      idx: '03',
    },
    {
      tag: t('faq.items.3.tag'),
      q: t('faq.items.3.q'),
      a: t('faq.items.3.a'),
      idx: '04',
    },
  ];

  const toggleFaq = (idx: number) => {
    setOpenIndex(prev => (prev === idx ? null : idx));
  };

  return (
    <section className="w-full pt-16 sm:pt-24 border-t border-border/60 flex flex-col gap-20">
      {/* 03: Dialogue Standards */}
      <div className="flex flex-col gap-10">
        <div className="max-w-2xl">
          <span className="font-mono text-[10px] tracking-widest uppercase text-brand-gold font-medium mb-3 block">
            {t('standards.badge')}
          </span>
          <h2 className="font-serif italic text-3xl sm:text-4xl text-foreground mb-3">
            {t('standards.title')}
          </h2>
          <p className="font-sans text-sm sm:text-base text-muted-foreground leading-relaxed">
            {t('standards.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {standards.map((item) => (
            <article
              key={item.num}
              className="relative p-7 sm:p-8 border border-border/60 bg-surface/40 hover:border-brand-gold/60 hover:bg-surface/70 transition-all duration-300 flex flex-col justify-between group overflow-hidden"
            >
              {/* Corner crosshairs */}
              <span className="absolute top-2 left-2 font-mono text-[9px] text-border/60 group-hover:text-brand-gold/80 transition-colors select-none" aria-hidden="true">+</span>
              <span className="absolute top-2 right-2 font-mono text-[9px] text-border/60 group-hover:text-brand-gold/80 transition-colors select-none" aria-hidden="true">+</span>

              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-[10px] tracking-widest text-brand-gold font-medium">
                    {item.num} {'//'} {item.tag}
                  </span>
                  <span className="font-mono text-[9px] px-2 py-0.5 border border-border/60 text-muted-foreground uppercase tracking-widest group-hover:border-brand-gold/40 group-hover:text-foreground transition-colors">
                    {item.status}
                  </span>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl text-foreground mb-3 font-normal group-hover:text-brand-gold transition-colors">
                  {item.title}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Bottom architectural hairline */}
              <div className="w-full h-px bg-border/40 mt-8 group-hover:bg-brand-gold/40 transition-colors" />
            </article>
          ))}
        </div>
      </div>

      {/* 04: Interactive Architectural FAQ */}
      <div className="flex flex-col gap-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 max-w-4xl">
          <div>
            <span className="font-mono text-[10px] tracking-widest uppercase text-brand-gold font-medium mb-3 block">
              {t('faq.badge')}
            </span>
            <h2 className="font-serif italic text-3xl sm:text-4xl text-foreground mb-2">
              {t('faq.title')}
            </h2>
            <p className="font-sans text-sm sm:text-base text-muted-foreground leading-relaxed">
              {t('faq.subtitle')}
            </p>
          </div>
          <span className="font-mono text-[10px] text-muted tracking-wider uppercase shrink-0">
            {t('faq.hint')}
          </span>
        </div>

        <div className="flex flex-col gap-4 max-w-4xl">
          {faqItems.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={item.idx}
                className={`relative border transition-all duration-300 ${
                  isOpen
                    ? 'border-brand-gold bg-surface/80 shadow-sm'
                    : 'border-border/60 bg-surface/30 hover:border-border hover:bg-surface/50'
                }`}
              >
                {/* Accordion Trigger Header */}
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                  className="w-full p-6 sm:p-7 flex items-center justify-between gap-6 text-left focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-gold"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 min-w-0">
                    <span className="font-mono text-[11px] tracking-widest text-brand-gold font-medium shrink-0">
                      [{item.idx} {'//'} {item.tag}]
                    </span>
                    <span className="font-serif text-lg sm:text-xl text-foreground leading-snug">
                      {item.q}
                    </span>
                  </div>

                  {/* Tactile Toggle Icon */}
                  <div
                    className={`w-7 h-7 shrink-0 rounded-none border flex items-center justify-center transition-all duration-300 font-mono text-sm ${
                      isOpen
                        ? 'border-brand-gold bg-brand-gold/15 text-brand-gold rotate-45'
                        : 'border-border text-muted-foreground hover:border-brand-gold hover:text-foreground'
                    }`}
                    aria-hidden="true"
                  >
                    +
                  </div>
                </button>

                {/* Animated Collapsible Region */}
                <div
                  id={`faq-answer-${idx}`}
                  role="region"
                  aria-labelledby={`faq-header-${idx}`}
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-1 border-t border-border/30">
                      <div className="border-l-2 border-brand-gold/80 pl-4 py-1">
                        <p className="font-sans text-sm sm:text-base text-muted-foreground leading-relaxed">
                          {item.a}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
