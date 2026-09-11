import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Container } from '@/components/layout/Container';
import { HeroReveal, HeroTitleLine, HeroBlurLine, HeroFadeIn } from '@/components/motion/HeroReveal';
import { ScrollIndicator } from '@/components/motion/ScrollIndicator';
import { ScrollExitWrapper } from '@/components/motion/ScrollExit';
import { ManifestoSection } from '@/components/home/ManifestoSection';
import { ProductSection } from '@/components/home/ProductSection';
import { AdaptiveSystemSection } from '@/components/home/AdaptiveSystemSection';
import { PlatformsSection } from '@/components/home/PlatformsSection';
import { CompanySection } from '@/components/home/CompanySection';
import { EngineeringSection } from '@/components/home/EngineeringSection';
import { IdentitySection } from '@/components/home/IdentitySection';
import { ContactSection } from '@/components/home/ContactSection';

import { HeroAtmosphere } from '@/components/home/hero/HeroAtmosphere';
import { SectionDivider } from '@/components/ui/SectionDivider';
import { TickerMarquee } from '@/components/motion/TickerMarquee';

export default function HomePage() {
  const t = useTranslations('Hero');
  
  return (
    <main className="w-full flex flex-col">
      <HeroReveal>
        <ScrollExitWrapper>
          <section className="relative w-full min-h-dvh flex flex-col justify-center overflow-hidden bg-background pt-24 sm:pt-28 lg:pt-32 pb-8 sm:pb-10 lg:pb-14">
          
          {/* Subtle engineering grid background */}
          <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-size-[40px_40px] opacity-[0.03] dark:opacity-[0.05]" aria-hidden="true" />
          
          {/* Intelligent, living ambient warmth field (Autonomous & interactive, zero UI noise) */}
          <HeroAtmosphere />

          <Container className="px-6 lg:px-12 flex-1 flex flex-col relative z-10 w-full h-full justify-center my-auto">
            
            <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between w-full my-auto gap-8 lg:gap-10 xl:gap-14">
              
              {/* LEFT: Massive Editorial Serif Typography */}
              <div className="w-full lg:w-[58%] xl:w-[60%] flex flex-col relative z-10 border-l-2 border-brand-gold/30 pl-4 sm:pl-6 lg:pl-8 pr-2">
                <h1 className="font-display text-[clamp(2.75rem,10.2vw,3.65rem)] sm:text-[clamp(3.5rem,7.5vw,4.5rem)] lg:text-[clamp(3.85rem,4.8vw,5.5rem)] xl:text-[clamp(4.6rem,5.2vw,6.4rem)] 2xl:text-[7rem] leading-[0.94] sm:leading-[0.92] lg:leading-[0.92] xl:leading-[0.90] tracking-[-0.03em] text-foreground uppercase">
                  <HeroTitleLine><span className="block">{t('title_1')}</span></HeroTitleLine>
                  {/* Editorial Italic Contrast with Living Golden Warmth */}
                  <HeroBlurLine delay={0.3} className="ml-[4%] sm:ml-[6%] lg:ml-[8%] my-0.5 sm:my-1 text-brand-gold italic font-light tracking-normal lowercase origin-left">
                    <span 
                      className="block bg-[linear-gradient(110deg,#D9A62E_20%,#FFF6CC_48%,#D9A62E_75%)] bg-[length:200%_100%] bg-clip-text text-transparent animate-shimmer drop-shadow-[0_0_24px_rgba(217,166,46,0.3)]"
                      style={{ WebkitTextFillColor: 'transparent' }}
                    >
                      {t('title_2')}
                    </span>
                  </HeroBlurLine>
                  <HeroTitleLine delay={0.2}><span className="block ml-[8%] sm:ml-[12%] lg:ml-[16%]">{t('title_3')}</span></HeroTitleLine>
                </h1>
              </div>

              {/* RIGHT: Pure, Architectural Blueprint with Precision Hairline Beam */}
              <div className="w-full lg:w-[42%] xl:w-[40%] max-w-lg lg:max-w-none flex flex-col gap-6 lg:gap-8 lg:pb-1 relative z-10">
                 
                 <HeroFadeIn delay={0.5} className="font-mono text-xs leading-relaxed text-muted-foreground tracking-wide flex flex-col gap-6">
                   
                   {/* Abstract Text block */}
                   <div className="pr-4">
                     <p className="flex items-center gap-3 mb-4">
                       <span className="bg-brand-gold/10 dark:bg-brand-gold/20 text-brand-gold px-2 py-0.5 rounded-none font-medium tracking-widest text-[9px] border border-brand-gold/30">
                         001
                       </span>
                       <span className="text-foreground tracking-widest uppercase font-semibold text-[11px]">
                         {t('system_status')}
                       </span>
                       <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse ml-auto" />
                     </p>
                     <p className="text-sm border-l-2 border-brand-gold/30 pl-4 text-muted-foreground/90 font-sans leading-relaxed">
                       {t('abstract')}
                     </p>
                   </div>
                   
                   {/* Precision Architectural Blueprint Card with Hairline Light Trace */}
                   <div className="relative p-[1px] overflow-hidden group shadow-2xl">
                     {/* Continuous 4s perimeter light tracer */}
                     <div 
                       className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_310deg,rgba(217,166,46,0.55)_360deg)] animate-beam-spin pointer-events-none opacity-40 group-hover:opacity-75 transition-opacity duration-500" 
                       aria-hidden="true" 
                     />
                     <div className="relative grid grid-cols-2 gap-px bg-border/40 w-full">
                       <div className="bg-surface/85 backdrop-blur-md p-4 flex flex-col gap-2 transition-colors hover:bg-surface">
                         <span className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground/80">{t('product_label')}</span>
                         <span className="font-serif italic text-xl text-foreground font-medium">{t('product_name')}</span>
                       </div>
                       <div className="bg-surface/85 backdrop-blur-md p-4 flex flex-col gap-2 transition-colors hover:bg-surface">
                         <span className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground/80">{t('focus_label')}</span>
                         <span className="font-mono text-[10px] uppercase tracking-widest text-foreground font-semibold mt-auto">{t('focus_value')}</span>
                       </div>
                       <div className="bg-surface/85 backdrop-blur-md p-4 flex flex-col gap-2 col-span-2 transition-colors hover:bg-surface">
                         <span className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground/80 flex justify-between">
                           <span>{t('platforms_label')}</span>
                           <span className="text-brand-gold font-medium">{t('platforms_badge')}</span>
                         </span>
                         <div className="flex justify-between items-end mt-2">
                           <span className="font-mono text-xs uppercase text-foreground font-medium tracking-wider">{t('platforms_list')}</span>
                           <span className="font-mono text-[9px] text-muted-foreground/90 bg-border/20 px-1.5 py-0.5 border border-border/40">{t('dev_badge')}</span>
                         </div>
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
 
      {/* Architectural Ticker Divider between Hero and Manifesto */}
      <div className="w-full my-16 sm:my-20 lg:my-28 relative z-20 overflow-hidden">
        <TickerMarquee />
      </div>

      <ManifestoSection />
      
      <SectionDivider />
      
      <ProductSection />
      
      <SectionDivider />
      
      <AdaptiveSystemSection />

      <SectionDivider />
      
      <EngineeringSection />

      <SectionDivider />

      <PlatformsSection />

      <SectionDivider />

      <CompanySection />

      <SectionDivider />

      <IdentitySection />

      <ContactSection />

    </main>
  );
}
