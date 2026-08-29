import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Container } from "../layout/Container";
import { LocaleSwitcher } from "./LocaleSwitcher";

export function Footer() {
  const t = useTranslations("Footer");
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-background border-t border-border/10 pt-24 pb-12 relative z-10">
      <Container className="px-6 lg:px-12 max-w-none">
        
        {/* TOP ROW: Content Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-y-16 gap-x-8 mb-24">
          
          {/* BRAND COLUMN */}
          <div className="col-span-2 lg:col-span-2 flex flex-col gap-6">
            <Link href="/" className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold rounded-sm w-fit group">
              <span className="font-display text-3xl tracking-[-0.02em] font-medium text-foreground group-hover:text-brand-gold transition-colors">Movistrato</span>
            </Link>
          </div>

          {/* PRODUCT COLUMN */}
          <div className="col-span-1 flex flex-col gap-6">
            <span className="font-mono text-[10px] text-muted-foreground tracking-widest uppercase">{t('product')}</span>
            <div className="flex flex-col gap-4">
              <Link href="/faro" className="font-mono text-xs tracking-widest uppercase text-muted hover:text-foreground transition-colors w-fit">FARO</Link>
            </div>
          </div>

          {/* COMPANY COLUMN */}
          <div className="col-span-1 flex flex-col gap-6">
            <span className="font-mono text-[10px] text-muted-foreground tracking-widest uppercase">{t('company')}</span>
            <div className="flex flex-col gap-4">
              <Link href="/technology" className="font-mono text-xs tracking-widest uppercase text-muted hover:text-foreground transition-colors w-fit">{t('technology')}</Link>
              <Link href="/company" className="font-mono text-xs tracking-widest uppercase text-muted hover:text-foreground transition-colors w-fit">{t('company')}</Link>
              <Link href="/contact" className="font-mono text-xs tracking-widest uppercase text-muted hover:text-foreground transition-colors w-fit">{t('contact')}</Link>
            </div>
          </div>

          {/* CONNECT COLUMN */}
          <div className="col-span-1 flex flex-col gap-6">
            <span className="font-mono text-[10px] text-muted-foreground tracking-widest uppercase">{t('connect')}</span>
            <div className="flex flex-col gap-4">
              <a href="https://github.com/movistrato" target="_blank" rel="noopener noreferrer" className="font-mono text-xs tracking-widest uppercase text-muted hover:text-foreground transition-colors w-fit flex items-center gap-1 group">
                GitHub <span className="text-brand-gold opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
              </a>
              <a href="https://linkedin.com/company/movistrato" target="_blank" rel="noopener noreferrer" className="font-mono text-xs tracking-widest uppercase text-muted hover:text-foreground transition-colors w-fit flex items-center gap-1 group">
                LinkedIn <span className="text-brand-gold opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
              </a>
            </div>
          </div>

          {/* LEGAL COLUMN */}
          <div className="col-span-1 flex flex-col gap-6">
            <span className="font-mono text-[10px] text-muted-foreground tracking-widest uppercase">{t('legal')}</span>
            <div className="flex flex-col gap-4">
              <Link href="/privacy" className="font-mono text-xs tracking-widest uppercase text-muted hover:text-foreground transition-colors w-fit">{t('privacy')}</Link>
              <Link href="/terms" className="font-mono text-xs tracking-widest uppercase text-muted hover:text-foreground transition-colors w-fit">{t('terms')}</Link>
              <Link href="/cookies" className="font-mono text-xs tracking-widest uppercase text-muted hover:text-foreground transition-colors w-fit">{t('cookies')}</Link>
            </div>
          </div>
          
        </div>

        {/* BOTTOM ROW: Copyright & Controls */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 pt-8 border-t border-border/10">
          <span className="font-mono text-[10px] text-muted-foreground tracking-widest uppercase">© {year} Movistrato</span>
          
          <div className="flex items-center gap-4">
            <span className="font-mono text-[10px] text-muted-foreground tracking-widest uppercase">{t('language')}</span>
            <LocaleSwitcher />
          </div>
        </div>
      </Container>
    </footer>
  );
}
