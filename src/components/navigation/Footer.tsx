import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Container } from "../layout/Container";
import { LocaleSwitcher } from "./LocaleSwitcher";
import { MovistratoWatermark } from "./MovistratoWatermark";

export function Footer() {
  const t = useTranslations("Footer");
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-background pt-20 lg:pt-28 pb-14 sm:pb-16 relative z-10 border-t border-border overflow-hidden">
      {/* Background Architectural Grid Accent */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:40px_40px] opacity-[0.03] dark:opacity-[0.05] pointer-events-none" 
        aria-hidden="true" 
      />

      <Container className="px-6 lg:px-12 relative z-10">
        
        {/* MAIN NAVIGATION & BRAND GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 pb-12 lg:pb-16 border-b border-border/30">
          
          {/* BRAND COLUMN (Left 5 Cols on Desktop) */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-6">
            <div className="flex flex-col gap-4">
              <Link href="/" className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold rounded-sm w-fit group">
                <span className="font-serif text-3xl sm:text-4xl tracking-tight font-medium text-foreground group-hover:text-brand-gold transition-colors">
                  Movistrato
                </span>
              </Link>

              <p className="text-sm text-muted-foreground leading-relaxed max-w-sm font-sans">
                {t('tagline')}
              </p>
            </div>

            {/* Direct Contact Anchor */}
            <div className="pt-2">
              <a 
                href="mailto:contact@movistrato.com" 
                className="font-mono text-xs tracking-widest text-muted hover:text-brand-gold transition-colors inline-flex items-center gap-2 group uppercase"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold/80 group-hover:bg-brand-gold transition-colors" />
                <span>contact@movistrato.com</span>
                <span className="text-brand-gold opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
              </a>
            </div>
          </div>

          {/* STRUCTURED NAVIGATION MATRIX (Right 8 Cols on Desktop) */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8 lg:gap-10">
            
            {/* COLUMN 01: PRODUCT */}
            <div className="flex flex-col gap-5">
              <span className="font-mono text-[10px] text-brand-gold tracking-widest uppercase font-semibold">
                {t('product')}
              </span>
              <div className="flex flex-col gap-3.5">
                <Link href="/faro" className="font-mono text-xs tracking-widest uppercase text-muted hover:text-foreground hover:translate-x-0.5 transition-all w-fit flex items-center gap-1.5 group">
                  <span>FARO</span>
                  <span className="text-[9px] text-brand-gold opacity-70 group-hover:opacity-100 transition-opacity">↗</span>
                </Link>
              </div>
            </div>

            {/* COLUMN 02: COMPANY */}
            <div className="flex flex-col gap-5">
              <span className="font-mono text-[10px] text-brand-gold tracking-widest uppercase font-semibold">
                {t('company')}
              </span>
              <div className="flex flex-col gap-3.5">
                <Link href="/technology" className="font-mono text-xs tracking-widest uppercase text-muted hover:text-foreground hover:translate-x-0.5 transition-all w-fit">
                  {t('technology')}
                </Link>
                <Link href="/company" className="font-mono text-xs tracking-widest uppercase text-muted hover:text-foreground hover:translate-x-0.5 transition-all w-fit">
                  {t('company')}
                </Link>
                <Link href="/contact" className="font-mono text-xs tracking-widest uppercase text-muted hover:text-foreground hover:translate-x-0.5 transition-all w-fit">
                  {t('contact')}
                </Link>
              </div>
            </div>

            {/* COLUMN 03: CONNECT */}
            <div className="flex flex-col gap-5">
              <span className="font-mono text-[10px] text-brand-gold tracking-widest uppercase font-semibold">
                {t('connect')}
              </span>
              <div className="flex flex-col gap-3.5">
                <a 
                  href="https://github.com/movistrato" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="font-mono text-xs tracking-widest uppercase text-muted hover:text-foreground hover:translate-x-0.5 transition-all w-fit flex items-center gap-1.5 group"
                >
                  <span>GitHub</span>
                  <span className="text-brand-gold opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
                </a>
                <a 
                  href="https://linkedin.com/company/movistrato" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="font-mono text-xs tracking-widest uppercase text-muted hover:text-foreground hover:translate-x-0.5 transition-all w-fit flex items-center gap-1.5 group"
                >
                  <span>LinkedIn</span>
                  <span className="text-brand-gold opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
                </a>
              </div>
            </div>

            {/* COLUMN 04: LEGAL */}
            <div className="flex flex-col gap-5">
              <span className="font-mono text-[10px] text-brand-gold tracking-widest uppercase font-semibold">
                {t('legal')}
              </span>
              <div className="flex flex-col gap-3.5">
                <Link href="/privacy" className="font-mono text-xs tracking-widest uppercase text-muted hover:text-foreground hover:translate-x-0.5 transition-all w-fit">
                  {t('privacy')}
                </Link>
                <Link href="/terms" className="font-mono text-xs tracking-widest uppercase text-muted hover:text-foreground hover:translate-x-0.5 transition-all w-fit">
                  {t('terms')}
                </Link>
                <Link href="/cookies" className="font-mono text-xs tracking-widest uppercase text-muted hover:text-foreground hover:translate-x-0.5 transition-all w-fit">
                  {t('cookies')}
                </Link>
                <a 
                  href="https://www.livroreclamacoes.pt/inicio" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="font-mono text-xs tracking-widest uppercase text-muted hover:text-foreground hover:translate-x-0.5 transition-all w-fit flex items-center gap-1.5 group"
                >
                  <span>{t('complaints_book')}</span>
                  <span className="text-brand-gold opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* MONUMENTAL ANIMATED ARCHITECTURAL WATERMARK */}
        <MovistratoWatermark />

        {/* BOTTOM BASELINE: Copyright & Language Switcher */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 pt-6 border-t border-border/30 text-[10px] font-mono tracking-widest text-muted-foreground uppercase">
          <div>
            <span>© {year} MOVISTRATO · {t('all_rights_reserved')}</span>
          </div>
          
          <div className="flex items-center gap-3">
            <span className="text-muted-foreground/80">{t('language')}:</span>
            <LocaleSwitcher />
          </div>
        </div>

      </Container>
    </footer>
  );
}
