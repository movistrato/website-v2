import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Container } from '@/components/layout/Container';
import { HeroReveal, HeroTitleLine, HeroBlurLine, HeroFadeIn } from '@/components/motion/HeroReveal';
import { ScrollIndicator } from '@/components/motion/ScrollIndicator';
import { ScrollExitWrapper } from '@/components/motion/ScrollExit';
import { ManifestoSection } from '@/components/home/ManifestoSection';
import { ProductSection } from '@/components/home/ProductSection';
import { AdaptiveSystemSection } from '@/components/home/AdaptiveSystemSection';

import { SectionDivider } from '@/components/ui/SectionDivider';

export default function HomePage() {
  const t = useTranslations('Hero');
  
  return (
    <main className="w-full flex flex-col">
      <HeroReveal>
        <ScrollExitWrapper>
          <section className="relative w-full min-h-dvh flex flex-col justify-center overflow-hidden bg-background pt-22 lg:pt-24 pb-6 lg:pb-12">
          
          {/* Subtle engineering/research grid background */}
          <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-size-[40px_40px] opacity-[0.03] dark:opacity-[0.05]" aria-hidden="true" />
          
          {/* Ambient Glow */}
          <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-[60vw] h-[40vh] bg-brand-gold/5 dark:bg-brand-gold/10 blur-[120px] rounded-full pointer-events-none z-0" aria-hidden="true" />

          <Container className="px-6 lg:px-12 max-w-none flex-1 flex flex-col relative z-10 w-full h-full justify-center">
            
            <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between w-full mt-0 lg:mt-8 mb-4 lg:mb-8 gap-10 lg:gap-8">
              
              {/* LEFT: Massive Serif Typography */}
              <div className="w-full lg:w-[66%] xl:w-[68%] flex flex-col relative z-10 border-l-2 border-brand-gold/20 pl-6 lg:pl-10 pr-2 lg:pr-6">
                <h1 className="font-display text-[clamp(2.5rem,8.4vw,8.5rem)] leading-[0.85] tracking-[-0.03em] text-foreground uppercase">
                  <HeroTitleLine><span className="block">{t('title_1')}</span></HeroTitleLine>
                  {/* Editorial Italic Contrast with Brand Accent */}
                  <HeroBlurLine delay={0.4} className="ml-[5%] lg:ml-[10%] text-brand-gold italic font-light tracking-normal lowercase origin-left">
                    <span className="block bg-linear-to-r from-brand-gold to-amber-500 bg-clip-text text-transparent">{t('title_2')}</span>
                  </HeroBlurLine>
                  <HeroTitleLine delay={0.2}><span className="block ml-[10%] lg:ml-[20%]">{t('title_3')}</span></HeroTitleLine>
                </h1>
              </div>

              {/* RIGHT: Technical Data Grid / Abstract */}
              <div className="w-full lg:w-[34%] xl:w-[32%] flex flex-col gap-8 lg:pb-2 relative z-10">
                 
                 <HeroFadeIn delay={0.6} className="font-mono text-xs leading-relaxed text-muted-foreground tracking-wide flex flex-col gap-6">
                   
                   {/* Abstract Text block */}
                   <div className="pr-4">
                     <p className="flex items-center gap-3 mb-6">
                       <span className="bg-brand-gold/10 dark:bg-brand-gold/20 text-brand-gold px-2 py-0.5 rounded-none font-medium tracking-widest text-[9px] border border-brand-gold/30">001</span>
                       <span className="text-foreground tracking-widest uppercase">{t('system_status')}</span>
                       <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse ml-auto" />
                     </p>
                     <p className="text-sm border-l border-border/60 pl-4">{t('abstract')}</p>
                   </div>
                   
                   {/* HUD / Blueprint Data Module */}
                   <div className="grid grid-cols-2 gap-px bg-border/40 border border-border/40 w-full shadow-2xl">
                     <div className="bg-surface/80 backdrop-blur-md p-4 flex flex-col gap-2">
                       <span className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground/80">{t('product_label')}</span>
                       <span className="font-serif italic text-lg text-foreground">{t('product_name')}</span>
                     </div>
                     <div className="bg-surface/80 backdrop-blur-md p-4 flex flex-col gap-2">
                       <span className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground/80">{t('focus_label')}</span>
                       <span className="font-mono text-[10px] uppercase tracking-widest text-foreground mt-auto">{t('focus_value')}</span>
                     </div>
                     <div className="bg-surface/80 backdrop-blur-md p-4 flex flex-col gap-2 col-span-2">
                       <span className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground/80 flex justify-between">
                         <span>{t('platforms_label')}</span>
                         <span className="text-brand-gold">{t('platforms_badge')}</span>
                       </span>
                       <div className="flex justify-between items-end mt-2">
                         <span className="font-mono text-xs uppercase text-foreground">{t('platforms_list')}</span>
                         <span className="font-mono text-[9px] text-muted-foreground">{t('dev_badge')}</span>
                       </div>
                     </div>
                   </div>
                   
                 </HeroFadeIn>

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

          <ScrollIndicator />
        </section>
        </ScrollExitWrapper>
      </HeroReveal>

      <ManifestoSection />
      
      <SectionDivider />
      
      <ProductSection />
      
      <SectionDivider />
      
      <AdaptiveSystemSection />

    </main>
  );
}
