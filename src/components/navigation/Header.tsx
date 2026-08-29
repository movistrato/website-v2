import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { ThemeToggle } from "./ThemeToggle";
import { LocaleSwitcher } from "./LocaleSwitcher";
import { Container } from "../layout/Container";
import { MobileNav } from "./MobileNav";

export function Header() {
  const t = useTranslations("Header");

  return (
    <header className="absolute top-0 left-0 right-0 z-50 w-full bg-transparent">
      <Container className="px-6 lg:px-12 max-w-none">
        <div className="flex items-center justify-between h-[72px] lg:h-[96px] w-full">
          
          {/* LEFT: Masthead (Fluid Editorial) */}
          <div className="flex-1 flex items-center h-full">
            <Link href="/" className="group flex flex-col items-start focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold rounded-sm pt-1">
              <span className="font-display text-[24px] lg:text-[28px] tracking-[-0.02em] font-medium text-foreground leading-none">Movistrato</span>
            </Link>
          </div>

          {/* CENTRE: Navigation (Desktop) */}
          <nav className="hidden lg:flex flex-1 justify-center items-center h-full gap-10">
            <Link 
              href="/faro" 
              className="group flex items-center gap-2 text-xs font-mono tracking-widest text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-gold uppercase pt-1"
            >
              <span className="text-[10px] text-muted-foreground opacity-50 group-hover:opacity-100 transition-opacity">[ 01 ]</span>
              <span className="font-medium group-hover:text-brand-gold transition-colors">{t("product")}</span>
            </Link>
            <Link 
              href="/technology" 
              className="group flex items-center gap-2 text-xs font-mono tracking-widest text-muted hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-gold uppercase pt-1"
            >
              <span className="text-[10px] text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">[ 02 ]</span>
              <span>{t("technology")}</span>
            </Link>
            <Link 
              href="/company" 
              className="group flex items-center gap-2 text-xs font-mono tracking-widest text-muted hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-gold uppercase pt-1"
            >
              <span className="text-[10px] text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">[ 03 ]</span>
              <span>{t("company")}</span>
            </Link>
          </nav>

          {/* RIGHT: Controls (Desktop) */}
          <div className="hidden lg:flex flex-1 justify-end items-center h-full gap-8">
            <div className="flex items-center gap-6">
              <LocaleSwitcher />
              <ThemeToggle />
            </div>
            <Link 
              href="/contact" 
              className="group flex items-center gap-2 text-xs font-mono tracking-widest text-foreground transition-colors hover:text-brand-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-gold uppercase"
            >
              <span>{t("contact")}</span>
              <span className="inline-block transition-transform group-hover:-translate-y-[2px] group-hover:translate-x-[2px] text-brand-gold" aria-hidden="true">↗</span>
            </Link>
          </div>

          {/* RIGHT: Controls (Mobile) */}
          <div className="flex lg:hidden flex-1 justify-end items-center h-full">
            <MobileNav />
          </div>
          
        </div>
      </Container>
    </header>
  );
}
