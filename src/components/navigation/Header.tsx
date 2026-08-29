import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { ThemeToggle } from "./ThemeToggle";
import { LocaleSwitcher } from "./LocaleSwitcher";
import { Container } from "../layout/Container";
import { Grid } from "../layout/Grid";

export function Header() {
  const t = useTranslations("Header");

  return (
    <header className="sticky top-0 z-50 w-full bg-background/90 backdrop-blur-md border-b border-border/40">
      <Container>
        <Grid className="items-center h-[84px]">
          {/* LEFT: Masthead */}
          <div className="col-span-3 flex items-center">
            <Link href="/" className="group flex flex-col items-start gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold rounded-sm p-1 -ml-1">
              <div className="w-8 h-[2px] bg-brand-gold" aria-hidden="true" />
              <span className="font-display text-[22px] tracking-tight leading-none uppercase">Movistrato</span>
            </Link>
          </div>

          {/* CENTRE: Navigation (Desktop only) */}
          <nav className="hidden lg:flex col-span-6 justify-center items-center gap-10">
            <Link 
              href="/faro" 
              className="group relative text-sm font-medium hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold rounded-sm px-2 py-1"
            >
              {t("product")}
              {/* Active structural underline */}
              <span className="absolute bottom-0 left-2 right-2 h-[2px] bg-brand-gold scale-x-100 origin-left" aria-hidden="true" />
            </Link>
            <Link href="/technology" className="text-sm text-muted hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold rounded-sm px-2 py-1">
              {t("technology")}
            </Link>
            <Link href="/company" className="text-sm text-muted hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold rounded-sm px-2 py-1">
              {t("company")}
            </Link>
          </nav>

          {/* RIGHT: Controls (Desktop only) */}
          <div className="hidden lg:flex col-span-3 justify-end items-center gap-8">
            <div className="flex items-center gap-6 border-r border-border/60 pr-8">
              <LocaleSwitcher />
              <ThemeToggle />
            </div>
            <Link 
              href="/contact" 
              className="group flex items-center gap-2 text-sm font-medium border-b border-foreground/30 hover:border-brand-gold transition-colors pb-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold rounded-sm"
            >
              {t("contact")}
              <span className="inline-block transition-transform group-hover:-translate-y-[2px] group-hover:translate-x-[2px] text-brand-gold" aria-hidden="true">↗</span>
            </Link>
          </div>

          {/* MOBILE RIGHT: Controls */}
          <div className="flex lg:hidden col-span-5 md:col-span-5 justify-end items-center gap-6">
            <div className="flex items-center gap-4 border-r border-border/60 pr-6">
              <LocaleSwitcher />
              <ThemeToggle />
            </div>
            <button className="text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold rounded-sm p-1 -mr-1" aria-label="Open Menu">
              Menu
            </button>
          </div>
        </Grid>
      </Container>
    </header>
  );
}
