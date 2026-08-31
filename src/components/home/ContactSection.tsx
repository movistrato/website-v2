'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Container } from '@/components/layout/Container';
import { motion } from 'framer-motion';

export function ContactSection() {
  const t = useTranslations('Contact');

  return (
    <section className="relative w-full py-32 lg:py-48 bg-background overflow-hidden border-t border-border/40">
      
      {/* Decorative architectural noise / lines */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,rgba(8,8,6,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(8,8,6,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[40px_40px]" aria-hidden="true" />

      {/* Subtle gold glow at the center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] max-w-2xl aspect-square bg-brand-gold/10 dark:bg-brand-gold/10 blur-[120px] rounded-full pointer-events-none" aria-hidden="true" />

      <Container className="relative z-10">
        <motion.div 
          className="flex flex-col items-center justify-center text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          
          <motion.span 
            className="font-mono text-[10px] tracking-widest uppercase text-brand-gold border-b border-brand-gold/30 pb-2 mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t('label')}
          </motion.span>

          <h2 className="font-serif italic text-[clamp(2.5rem,5vw,5.5rem)] leading-[1.1] tracking-tight text-foreground max-w-[22ch] mx-auto mb-16">
            {t('headline')}
          </h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          >
            <Link 
              href="/contact" 
              className="group relative inline-flex items-center justify-center gap-6 bg-brand-gold text-white dark:text-[#080806] px-12 py-6 overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-gold focus-visible:ring-offset-background"
            >
              {/* Button hover effect background slide */}
              <div className="absolute inset-0 bg-foreground translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] z-0" />
              
              <span className="relative z-10 font-mono text-sm tracking-widest uppercase font-medium group-hover:text-background transition-colors duration-500">{t('cta')}</span>
              <span className="relative z-10 text-2xl font-sans font-light leading-none transition-all duration-500 group-hover:translate-x-2 group-hover:text-background">→</span>
            </Link>
          </motion.div>

        </motion.div>
      </Container>
    </section>
  );
}
