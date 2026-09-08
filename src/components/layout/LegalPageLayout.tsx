import { ReactNode } from 'react';
import { Link } from '@/i18n/routing';
import { Container } from './Container';

interface LegalPageLayoutProps {
  tag: string;
  title: string;
  lastUpdated: string;
  version?: string;
  children: ReactNode;
}

export function LegalPageLayout({
  tag,
  title,
  lastUpdated,
  version = '01.2026',
  children,
}: LegalPageLayoutProps) {
  return (
    <article className="w-full pt-32 pb-24 bg-[var(--background)] text-[var(--foreground)] min-h-screen">
      <Container className="max-w-4xl px-6 lg:px-8">
        
        {/* Interactive Return Button */}
        <nav aria-label="Voltar à página principal" className="mb-10">
          <Link
            href="/"
            className="inline-flex items-center gap-3 px-4 py-2 border border-[var(--border)] bg-[var(--surface)] hover:bg-[var(--surface-elevated)] hover:border-[var(--brand-gold)] transition-all duration-200 group cursor-pointer shadow-xs focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--brand-gold)]"
          >
            <span className="font-mono text-xs text-[var(--brand-gold)] group-hover:-translate-x-1 transition-transform duration-200">
              ←
            </span>
            <span className="font-mono text-xs tracking-wider uppercase text-[var(--foreground)] font-medium">
              Voltar ao Início
            </span>
          </Link>
        </nav>

        {/* Technical Header */}
        <header className="border-b border-[var(--border)] pb-10 mb-12">
          <div className="flex flex-wrap items-center gap-3 font-mono text-[11px] text-[var(--muted)] tracking-wider uppercase mb-6">
            <span className="text-[var(--brand-gold)]">●</span>
            <span>{tag}</span>
            <span className="opacity-40">/</span>
            <span>REV. {version}</span>
            <span className="opacity-40">/</span>
            <span>UE · PORTUGAL</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[var(--foreground)] tracking-tight leading-[1.1] mb-6">
            {title}
          </h1>

          <p className="font-mono text-xs text-[var(--muted)] uppercase tracking-wider">
            {lastUpdated}
          </p>
        </header>

        {/* Legal Text Body */}
        <div className="prose prose-invert max-w-none flex flex-col gap-12 font-body text-[15px] sm:text-base leading-relaxed text-[var(--foreground)]">
          {children}
        </div>

      </Container>
    </article>
  );
}
