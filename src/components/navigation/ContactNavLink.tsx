'use client';

import { usePathname, Link } from '@/i18n/routing';

interface ContactNavLinkProps {
  label: string;
}

export function ContactNavLink({ label }: ContactNavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === '/contact';

  return (
    <Link 
      href="/contact" 
      aria-current={isActive ? 'page' : undefined}
      className={`group flex items-center gap-2 text-xs font-mono tracking-widest transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-gold uppercase ${
        isActive ? 'text-brand-gold font-medium' : 'text-foreground hover:text-brand-gold'
      }`}
    >
      <span>{label}</span>
      <span 
        className={`inline-block transition-transform text-brand-gold ${
          isActive ? '-translate-y-[2px] translate-x-[2px]' : 'group-hover:-translate-y-[2px] group-hover:translate-x-[2px]'
        }`} 
        aria-hidden="true"
      >
        ↗
      </span>
    </Link>
  );
}
