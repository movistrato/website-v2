import type { Metadata } from 'next';
import { LegalPageLayout } from '@/components/layout/LegalPageLayout';

export const metadata: Metadata = {
  title: 'Política de Privacidade · Movistrato',
  description: 'Conformidade RGPD e LGPD sobre recolha, tratamento e proteção de dados na Movistrato.',
};

export default function PrivacyPage() {
  return (
    <LegalPageLayout
      tag="01 / CONFORMIDADE RGPD & LGPD"
      title="Política de Privacidade"
      lastUpdated="ÚLTIMA ATUALIZAÇÃO: 08 DE SETEMBRO DE 2026"
      version="01.2026"
    >
      <section className="flex flex-col gap-4">
        <h2 className="font-display text-2xl text-[var(--foreground)] tracking-tight">
          01. Responsável pelo Tratamento
        </h2>
        <p className="text-[var(--muted)]">
          A <strong>Movistrato</strong> (entidade coletiva com sede em Portugal, União Europeia) é a entidade responsável pelo tratamento dos dados pessoais recolhidos através deste website e das suas aplicações, garantindo a sua estrita conformidade com o Regulamento Geral sobre a Proteção de Dados (RGPD - Regulamento UE 2016/679) e com a Lei Geral de Proteção de Dados (LGPD - Lei n.º 13.709/2018).
        </p>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="font-display text-2xl text-[var(--foreground)] tracking-tight">
          02. Princípios de Minimização e Dados Recolhidos
        </h2>
        <p className="text-[var(--muted)]">
          Aplicamos uma arquitetura orientada ao princípio da minimização de dados. Apenas recolhemos as informações estritamente necessárias para a prestação de serviços:
        </p>
        <ul className="list-disc pl-5 flex flex-col gap-2 text-[var(--muted)]">
          <li><strong>Dados de Telemetria e Diagnóstico:</strong> Registos de desempenho de sistema e identificadores anónimos de sessão.</li>
          <li><strong>Dados de Contacto:</strong> Endereço de correio eletrónico e nome quando submetidos voluntariamente para comunicação institucional.</li>
          <li><strong>Cookies Técnicos e de Sessão:</strong> Informações de estado necessárias para a renderização e preferências de navegação.</li>
        </ul>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="font-display text-2xl text-[var(--foreground)] tracking-tight">
          03. Direitos dos Titulares dos Dados
        </h2>
        <p className="text-[var(--muted)]">
          Nos termos do RGPD e da LGPD, assiste a qualquer titular de dados o direito de aceder, retificar, atualizar, limitar, opor-se ao tratamento ou solicitar o apagamento definitivo dos seus dados pessoais. Pode ainda requerer a portabilidade dos dados fornecidos.
        </p>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="font-display text-2xl text-[var(--foreground)] tracking-tight">
          04. Segurança e Contacto Institucional
        </h2>
        <p className="text-[var(--muted)]">
          Todos os dados em trânsito e em repouso são protegidos por protocolos criptográficos seguros. Para exercer qualquer um dos seus direitos ou esclarecer dúvidas de privacidade, contacte o nosso Encarregado de Proteção de Dados através de <a href="mailto:privacy@movistrato.com" className="underline hover:text-[var(--brand-gold)] transition-colors">privacy@movistrato.com</a>.
        </p>
      </section>
    </LegalPageLayout>
  );
}
