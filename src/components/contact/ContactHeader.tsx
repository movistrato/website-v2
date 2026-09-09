import { useTranslations } from 'next-intl';

export function ContactHeader() {
  const t = useTranslations('Contact');

  return (
    <section className="relative w-full pt-12 pb-10 sm:pt-16 sm:pb-14 border-b border-border/60">
      {/* Structural technical metadata */}
      <div className="flex items-center justify-between mb-8">
        <div className="inline-flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-brand-gold animate-pulse rounded-full" aria-hidden="true" />
          <span className="font-mono text-[11px] tracking-widest uppercase text-brand-gold font-medium">
            {t('page_badge')}
          </span>
        </div>
        <span className="font-mono text-[10px] tracking-widest text-muted uppercase hidden sm:inline-block">
          ENGENHARIA · PRODUTO · PARCERIAS
        </span>
      </div>

      {/* Main Editorial Display Headline */}
      <div className="max-w-4xl">
        <h1 className="font-serif italic text-[clamp(2.5rem,5.5vw,5.5rem)] leading-[0.98] tracking-tight text-foreground mb-6">
          {t('page_title')}
        </h1>
        <p className="font-sans text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-[65ch]">
          {t('page_subtitle')}
        </p>
      </div>

      {/* Subtle corner crosshairs for architectural identity */}
      <div className="absolute bottom-[-5px] left-0 font-mono text-[9px] text-brand-gold/60 select-none pointer-events-none" aria-hidden="true">
        +
      </div>
      <div className="absolute bottom-[-5px] right-0 font-mono text-[9px] text-brand-gold/60 select-none pointer-events-none" aria-hidden="true">
        +
      </div>
    </section>
  );
}
