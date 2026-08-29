import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Container } from '@/components/layout/Container';

export default function HomePage() {
  const t = useTranslations('Hero');
  
  return (
    <>
      {/* HERO SECTION - Typographic Minimalist (Anthropic-inspired) */}
      <section className="relative w-full min-h-[100dvh] flex flex-col justify-center overflow-hidden bg-background pt-[88px] lg:pt-[96px] pb-12 lg:pb-24">
        
        {/* Subtle engineering/research grid background */}
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:40px_40px] opacity-[0.03] dark:opacity-[0.05]" aria-hidden="true" />
        
        {/* Ambient Glow */}
        <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-[60vw] h-[40vh] bg-brand-gold/5 dark:bg-brand-gold/10 blur-[120px] rounded-full pointer-events-none z-0" aria-hidden="true" />

        <Container className="px-6 lg:px-12 max-w-none flex-1 flex flex-col relative z-10 w-full h-full justify-center">
          
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between w-full mt-12 lg:mt-24 mb-16 gap-16 lg:gap-8">
            
            {/* LEFT: Massive Serif Typography */}
            <div className="w-full lg:w-[65%] flex flex-col relative z-10">
              <h1 className="font-display text-[length:clamp(3.5rem,7.5vw,8.5rem)] leading-[0.85] tracking-[-0.03em] text-foreground uppercase">
                <span className="block">{t('title_1')}</span>
                {/* Editorial Italic Contrast with Brand Accent */}
                <span className="block ml-[5%] lg:ml-[10%] text-brand-gold italic font-light tracking-normal lowercase">{t('title_2')}</span>
                <span className="block ml-[10%] lg:ml-[20%]">{t('title_3')}</span>
              </h1>
            </div>

            {/* RIGHT: Technical Mono Abstract */}
            <div className="w-full lg:w-[30%] flex flex-col gap-8 lg:pb-3 relative z-10">
               
               {/* Structural separator line */}
               <div className="w-12 h-[1px] bg-brand-gold/40 hidden lg:block" aria-hidden="true" />
               
               <div className="font-mono text-xs leading-relaxed text-muted-foreground tracking-wide flex flex-col gap-6">
                 <div>
                   <p className="flex items-center gap-3 mb-4">
                     <span className="bg-brand-gold/10 dark:bg-brand-gold/20 text-brand-gold px-2 py-0.5 rounded-sm font-medium tracking-widest text-[10px] border border-brand-gold/20">001</span>
                     <span className="text-foreground tracking-widest">MOVISTRATO</span>
                   </p>
                   <p>{t('abstract')}</p>
                 </div>
                 
                 <div className="flex flex-col gap-1 p-4 bg-surface/50 backdrop-blur-sm border border-border/40 rounded-sm">
                   <p className="text-foreground uppercase flex justify-between items-center">
                     <span>{t('product_label')}</span>
                     <span className="text-brand-gold">{t('product_name')}</span>
                   </p>
                   <p className="text-muted-foreground mt-2">{t('platforms_list')}</p>
                   <p className="text-foreground mt-1 flex items-center gap-2">
                     <span className="w-1.5 h-1.5 rounded-full bg-green-500/80 animate-pulse" />
                     {t('abstract_status')}
                   </p>
                 </div>
               </div>

               {/* Naked, refined CTA */}
               <Link 
                  href="/faro" 
                  className="group flex items-center gap-3 font-mono text-xs tracking-widest uppercase text-foreground hover:text-brand-gold transition-colors focus-visible:outline-none w-fit pt-2"
               >
                 <span>{t('cta')}</span>
                 <span className="text-xl font-sans font-light leading-none transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
               </Link>
            </div>

          </div>

        </Container>
      </section>
    </>
  );
}
