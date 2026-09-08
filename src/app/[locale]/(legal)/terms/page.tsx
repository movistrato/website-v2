import type { Metadata } from 'next';
import { LegalPageLayout } from '@/components/layout/LegalPageLayout';

export const metadata: Metadata = {
  title: 'Termos e Condições · Movistrato',
  description: 'Termos e condições gerais de utilização do ecossistema e software Movistrato.',
};

export default function TermsPage() {
  return (
    <LegalPageLayout
      tag="02 / TERMOS & CONDIÇÕES DE UTILIZAÇÃO"
      title="Termos e Condições"
      lastUpdated="ÚLTIMA ATUALIZAÇÃO: 08 DE SETEMBRO DE 2026"
      version="01.2026"
    >
      <section className="flex flex-col gap-4">
        <h2 className="font-display text-2xl text-[var(--foreground)] tracking-tight">
          01. Enquadramento e Aceitação
        </h2>
        <p className="text-[var(--muted)]">
          Os presentes Termos e Condições regulam o acesso e a utilização do website e das plataformas digitais da <strong>Movistrato</strong>, empresa com sede em Portugal. Ao navegar ou interagir com os nossos sistemas, o utilizador declara expressamente conhecer e aceitar integralmente as disposições aqui estipuladas.
        </p>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="font-display text-2xl text-[var(--foreground)] tracking-tight">
          02. Propriedade Intelectual e Software Proprietário
        </h2>
        <p className="text-[var(--muted)]">
          Todo o conteúdo visual, arquitetura de software, código-fonte, marcas registadas, logótipos e sistemas proprietários — incluindo expressamente a plataforma <strong>FARO</strong> e os seus motores adaptativos — são propriedade exclusiva da Movistrato, encontrando-se protegidos pelas leis nacionais e internacionais de direitos de autor e propriedade industrial.
        </p>
        <p className="text-[var(--muted)]">
          É estritamente proibida qualquer reprodução, engenharia reversa, descompilação, distribuição ou exploração comercial não autorizada por escrito pela Movistrato.
        </p>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="font-display text-2xl text-[var(--foreground)] tracking-tight">
          03. Responsabilidade e Disponibilidade
        </h2>
        <p className="text-[var(--muted)]">
          A Movistrato empenha-se em manter a estabilidade, segurança e integridade contínua dos seus serviços. Não obstante, o acesso pode ser temporariamente suspenso para manutenção estrutural ou por contingências alheias ao nosso controlo direto, sem que daí decorra direito a indemnização.
        </p>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="font-display text-2xl text-[var(--foreground)] tracking-tight">
          04. Lei Aplicável e Jurisdição
        </h2>
        <p className="text-[var(--muted)]">
          Os presentes Termos regem-se pela lei portuguesa. Para a resolução de qualquer litígio emergente da interpretação, validade ou execução deste contrato, as partes acordam fixar a competência exclusiva dos tribunais da jurisdição de Portugal, com renúncia expressa a qualquer outro.
        </p>
      </section>
    </LegalPageLayout>
  );
}
