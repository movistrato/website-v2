"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";

export function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleLocaleChange = (newLocale: string) => {
    if (newLocale === locale) return;
    
    const currentScrollY = typeof window !== "undefined" ? window.scrollY : 0;
    
    // Preserve current path but switch locale without resetting scroll
    router.replace(pathname, { locale: newLocale, scroll: false });

    if (typeof window !== "undefined") {
      requestAnimationFrame(() => {
        window.scrollTo({ top: currentScrollY, behavior: "instant" });
      });
      setTimeout(() => {
        window.scrollTo({ top: currentScrollY, behavior: "instant" });
      }, 50);
    }
  };

  return (
    <div className="flex items-center gap-2 font-mono text-technical text-muted">
      <button
        onClick={() => handleLocaleChange("pt")}
        className={`hover:text-foreground transition-colors ${locale === "pt" ? "text-foreground font-medium" : ""}`}
        aria-current={locale === "pt" ? "true" : undefined}
      >
        PT
      </button>
      <span>/</span>
      <button
        onClick={() => handleLocaleChange("en")}
        className={`hover:text-foreground transition-colors ${locale === "en" ? "text-foreground font-medium" : ""}`}
        aria-current={locale === "en" ? "true" : undefined}
      >
        EN
      </button>
    </div>
  );
}
