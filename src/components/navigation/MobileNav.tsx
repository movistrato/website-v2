"use client";

import { useState, useEffect } from "react";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { ThemeToggle } from "./ThemeToggle";
import { LocaleSwitcher } from "./LocaleSwitcher";

export function MobileNav() {
  const t = useTranslations("Header");
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scrolling when the menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    if (isOpen) {
      window.addEventListener("keydown", handleEscape);
    }
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen]);

  return (
    <div className="lg:hidden">
      {/* Trigger Button */}
      <button
        type="button"
        className="flex items-center justify-center py-2 px-1 text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold rounded-sm z-50 relative"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        <span className="font-mono text-[11px] tracking-widest uppercase mr-3 font-medium min-w-[50px] text-right">
          {isOpen ? "Close" : "Menu"}
        </span>
        <div className="relative w-5 h-3.5 flex flex-col justify-between overflow-hidden">
          <span 
            className={`w-full h-[1.5px] bg-foreground origin-left transition-transform duration-300 ease-out ${isOpen ? "rotate-45 translate-y-[0px] w-[140%]" : ""}`} 
            aria-hidden="true" 
          />
          <span 
            className={`w-full h-[1.5px] bg-foreground transition-opacity duration-300 ease-out ${isOpen ? "opacity-0" : "opacity-100"}`} 
            aria-hidden="true" 
          />
          <span 
            className={`w-full h-[1.5px] bg-foreground origin-left transition-transform duration-300 ease-out ${isOpen ? "-rotate-45 -translate-y-[0px] w-[140%]" : ""}`} 
            aria-hidden="true" 
          />
        </div>
      </button>

      {/* Overlay Menu */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 bg-background flex flex-col transition-opacity duration-300 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        aria-hidden={!isOpen}
      >
        {/* Spacer for header */}
        <div className="h-[72px] sm:h-[84px] w-full" />
        
        <div className="flex-1 flex flex-col pt-12 pb-8 px-8 sm:px-12 overflow-y-auto">
          <nav className="flex flex-col gap-10">
            <Link 
              href="/faro" 
              onClick={() => setIsOpen(false)}
              className="group flex flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold w-fit"
            >
              <span className="font-mono text-[10px] text-muted-foreground tracking-widest uppercase mb-2 group-hover:text-foreground transition-colors">01</span>
              <span className="font-display text-[44px] leading-[0.85] tracking-[-0.02em] uppercase text-foreground group-hover:text-brand-gold transition-colors">{t("product")}</span>
            </Link>
            <Link 
              href="/technology" 
              onClick={() => setIsOpen(false)}
              className="group flex flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold w-fit"
            >
              <span className="font-mono text-[10px] text-muted-foreground tracking-widest uppercase mb-2 group-hover:text-foreground transition-colors">02</span>
              <span className="font-display text-[44px] leading-[0.85] tracking-[-0.02em] uppercase text-foreground group-hover:text-brand-gold transition-colors">{t("technology")}</span>
            </Link>
            <Link 
              href="/company" 
              onClick={() => setIsOpen(false)}
              className="group flex flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold w-fit"
            >
              <span className="font-mono text-[10px] text-muted-foreground tracking-widest uppercase mb-2 group-hover:text-foreground transition-colors">03</span>
              <span className="font-display text-[44px] leading-[0.85] tracking-[-0.02em] uppercase text-foreground group-hover:text-brand-gold transition-colors">{t("company")}</span>
            </Link>
            <Link 
              href="/contact" 
              onClick={() => setIsOpen(false)}
              className="group flex flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold w-fit mt-6"
            >
              <span className="font-mono text-[10px] text-muted-foreground tracking-widest uppercase mb-2 group-hover:text-foreground transition-colors">04</span>
              <span className="font-display text-[32px] leading-[0.85] tracking-[-0.02em] uppercase text-foreground group-hover:text-brand-gold transition-colors flex items-center gap-4">
                {t("contact")}
                <span className="text-brand-gold font-sans text-2xl font-light">↗</span>
              </span>
            </Link>
          </nav>
          
          <div className="mt-auto pt-12 flex flex-row items-center justify-between border-t border-border/10">
            <LocaleSwitcher />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </div>
  );
}
