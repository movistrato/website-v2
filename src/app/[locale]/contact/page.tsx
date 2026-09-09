import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { ContactHeader } from '@/components/contact/ContactHeader';
import { ContactForm } from '@/components/contact/ContactForm';
import { ContactDirectInfo } from '@/components/contact/ContactDirectInfo';
import { ContactInfoGrid } from '@/components/contact/ContactInfoGrid';

interface ContactPageProps {
  params: Promise<{
    locale: string;
  }>;
}

export async function generateMetadata({ params }: ContactPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Contact' });

  return {
    title: t('metadata_title'),
    description: t('metadata_desc'),
    openGraph: {
      title: t('metadata_title'),
      description: t('metadata_desc'),
    },
  };
}

export default function ContactPage() {
  return (
    <main className="w-full min-h-[100dvh] bg-background text-foreground flex flex-col justify-between overflow-x-hidden">
      <Container className="px-4 sm:px-6 lg:px-12 max-w-7xl pt-24 sm:pt-32 lg:pt-36 pb-20 sm:pb-28 flex flex-col gap-16 sm:gap-20">
        <ContactHeader />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Main Form Area */}
          <div className="lg:col-span-7 xl:col-span-8 min-w-0 max-w-full">
            <ContactForm />
          </div>

          {/* Direct Channels & Verified Pedestal Panel */}
          <div className="lg:col-span-5 xl:col-span-4 min-w-0 max-w-full">
            <ContactDirectInfo />
          </div>
        </div>

        {/* 03 & 04: Dialogue Standards & Frequent Inquiries */}
        <ContactInfoGrid />
      </Container>
    </main>
  );
}
