import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { Container } from '@/components/layout/Container';
import { Grid } from '@/components/layout/Grid';

export default function HomePage() {
  const t = useTranslations('Hero');
  
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative w-full pt-16 pb-24 md:pt-32 md:pb-32 overflow-hidden bg-background">
        <Container>
          <Grid className="relative items-start min-h-[600px] lg:min-h-[720px]">
            
            {/* LEFT/TOP: Typography Layer (High Z-index) */}
            <div className="col-span-4 md:col-span-8 lg:col-start-1 lg:col-span-9 lg:row-start-1 z-20 pt-4 lg:pt-12 pointer-events-none">
              
              <div className="flex flex-col gap-6 lg:gap-12 w-full">
                {/* Technical Label (Anchored to top of headline) */}
                <div className="flex items-center gap-4">
                  <div className="w-8 h-[1px] bg-brand-gold" aria-hidden="true" />
                  <span className="font-mono text-xs md:text-sm text-muted tracking-[0.2em] uppercase">
                    {t('label')}
                  </span>
                </div>
                
                {/* Editorial Headline (Monumental, Staggered) */}
                <h1 className="font-display text-[var(--text-hero-display)] leading-[0.9] tracking-tight text-foreground uppercase mix-blend-normal">
                  <div className="block">{t('title_1')}</div>
                  <div className="block lg:ml-[12%] text-muted">{t('title_2')}</div>
                  <div className="block lg:ml-[4%]">{t('title_3')}</div>
                </h1>
              </div>

            </div>

            {/* RIGHT/BOTTOM: Product Visuals (Overlapped by Typography) */}
            <div className="col-span-4 md:col-span-8 lg:col-start-6 lg:col-span-7 lg:row-start-1 z-10 mt-16 lg:mt-32 relative flex justify-end">
              
              {/* Main FARO Dashboard (Anchored right, overlapping behind text) */}
              <div className="relative w-full aspect-[4/3] lg:aspect-[16/10] bg-surface rounded-sm overflow-hidden border border-border/60 shadow-2xl dark:shadow-none">
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 dark:ring-white/5 pointer-events-none z-10 rounded-sm" />
                <Image 
                  src="/products/faro/faro-desktop-dashboard.png" 
                  fill 
                  priority
                  quality={95}
                  className="object-cover object-left-top" 
                  alt="FARO Desktop Dashboard" 
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
              </div>

              {/* Secondary Layer: FARO Learning Crop (Precise, sharp crop) */}
              <div className="absolute -bottom-16 -left-8 lg:-left-24 w-48 lg:w-72 aspect-[4/3] bg-surface rounded-sm overflow-hidden border border-border/80 shadow-2xl dark:shadow-none z-30 hidden md:block">
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 dark:ring-white/5 pointer-events-none z-10 rounded-sm" />
                <Image 
                  src="/products/faro/faro-desktop-learning.png" 
                  fill 
                  quality={95}
                  className="object-cover object-[25%_45%]" 
                  alt="FARO Learning Experience Detail" 
                  sizes="(max-width: 1024px) 256px, 350px"
                />
              </div>
            </div>

            {/* BOTTOM: Information Architecture (Footer of Hero) */}
            <div className="col-span-4 md:col-span-8 lg:col-span-12 lg:row-start-2 z-30 mt-16 lg:mt-32 flex flex-col md:flex-row md:items-end justify-between gap-12 border-t border-border/40 pt-8">
              
              {/* CTA */}
              <Link 
                href="/faro" 
                className="group flex items-center gap-3 text-sm md:text-base font-medium border-b border-foreground hover:border-brand-gold pb-1.5 transition-colors w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold rounded-sm"
              >
                <span className="group-hover:text-brand-gold transition-colors tracking-wide">{t('cta')}</span>
              </Link>

              {/* Metadata Cluster */}
              <div className="flex flex-wrap md:flex-nowrap gap-12 md:gap-24">
                <div className="flex flex-col gap-1.5">
                  <span className="font-mono text-[10px] md:text-xs text-muted tracking-widest uppercase">{t('product_label')}</span>
                  <span className="text-sm md:text-base font-medium tracking-wide">{t('product_name')}</span>
                </div>
                <div className="flex flex-col gap-1.5">
                  <span className="font-mono text-[10px] md:text-xs text-muted tracking-widest uppercase">{t('platforms_label')}</span>
                  <span className="font-mono text-xs md:text-sm text-foreground tracking-wide">{t('platforms_list')}</span>
                </div>
              </div>

            </div>

          </Grid>
        </Container>
      </section>
      
      {/* Temporary visual boundary */}
      <div className="w-full h-px bg-border/40" />
    </>
  );
}
