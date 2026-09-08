import type { Metadata } from 'next';
import { LegalPageLayout } from '@/components/layout/LegalPageLayout';

export const metadata: Metadata = {
  title: 'Política de Cookies · Movistrato',
  description: 'Informações sobre a utilização de cookies, telemetria e gestão de consentimento.',
};

export default function CookiesPolicyPage() {
  return (
    <LegalPageLayout
      tag="03 / TELEMETRIA & COOKIES"
      title="Política de Cookies"
      lastUpdated="ÚLTIMA ATUALIZAÇÃO: 08 DE SETEMBRO DE 2026"
      version="01.2026"
    >
      <section className="flex flex-col gap-4">
        <h2 className="font-display text-2xl text-[var(--foreground)] tracking-tight">
          01. O que são Cookies e Tecnologias de Telemetria?
        </h2>
        <p className="text-[var(--muted)]">
          Cookies são pequenos ficheiros de texto armazenados no dispositivo do utilizador que permitem preservar o estado da sessão, preferências operacionais e telemetria de diagnóstico. Na <strong>Movistrato</strong>, rejeitamos qualquer recolha invasiva de dados ou rastreamento com fins de monetização publicitária.
        </p>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="font-display text-2xl text-[var(--foreground)] tracking-tight">
          02. Categorias de Tecnologias Utilizadas
        </h2>
        <div className="flex flex-col gap-4">
          <div className="border border-[var(--border)] p-4 bg-[var(--surface)]">
            <h3 className="font-mono text-xs text-[var(--brand-gold)] uppercase tracking-wider mb-2">
              [ 01 ] Estritamente Necessários (Sempre Ativos)
            </h3>
            <p className="text-xs text-[var(--muted)] leading-relaxed">
              Essenciais para o funcionamento estrutural da plataforma. Incluem a seleção de idioma do sistema (Next-Intl), persistência do tema claro/escuro (Next-Themes) e o registo do seu consentimento RGPD/LGPD.
            </p>
          </div>

          <div className="border border-[var(--border)] p-4 bg-[var(--surface)]">
            <h3 className="font-mono text-xs text-[var(--foreground)] uppercase tracking-wider mb-2">
              [ 02 ] Desempenho e Telemetria de Sistema
            </h3>
            <p className="text-xs text-[var(--muted)] leading-relaxed">
              Permitem analisar métricas anónimas de latência, taxa de erros e estabilidade de execução bare-metal do software, sem associar o comportamento a identidades pessoais diretas.
            </p>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="font-display text-2xl text-[var(--foreground)] tracking-tight">
          03. Gestão e Revogação do Consentimento
        </h2>
        <p className="text-[var(--muted)]">
          Em qualquer momento, o utilizador pode revogar ou alterar a sua decisão de consentimento eliminando a chave de armazenamento local no seu navegador ou acedendo às preferências do sistema no banner de privacidade.
        </p>
      </section>
    </LegalPageLayout>
  );
}
