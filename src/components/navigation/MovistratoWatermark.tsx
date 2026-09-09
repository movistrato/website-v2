'use client';

import { motion } from 'framer-motion';

/**
 * MovistratoWatermark: Monumental animated architectural brand signature.
 * Features an ethereal, infinite golden shimmer wave moving across the typography
 * and synchronized laser beams gliding along the bounding border lines.
 */
export function MovistratoWatermark() {
  return (
    <div className="w-full overflow-hidden select-none border-y border-border/20 py-4 sm:py-6 my-8 sm:my-12 relative flex items-center justify-between group cursor-default">
      {/* Laser beam gliding along top border */}
      <motion.div
        className="absolute top-[-1px] left-0 h-[1px] w-32 bg-gradient-to-r from-transparent via-brand-gold to-transparent pointer-events-none opacity-60"
        animate={{
          x: ['-100%', '800%'],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Left Non-Location Indicator */}
      <span className="font-mono text-[9px] tracking-widest text-muted-foreground/50 uppercase hidden md:block pl-2">
        ARQUITETURA NATIVA
      </span>

      {/* Monumental Wordmark with Continuous Golden Shimmer */}
      <div className="relative overflow-hidden mx-auto max-w-full flex justify-center">
        <motion.span
          className="font-display text-[12.5vw] font-light leading-none tracking-tighter uppercase block text-transparent bg-clip-text bg-[length:250%_100%] transition-all duration-700 bg-gradient-to-r from-foreground/[0.04] via-brand-gold/30 to-foreground/[0.04] dark:from-foreground/[0.06] dark:via-brand-gold/40 dark:to-foreground/[0.06] group-hover:via-brand-gold/60"
          animate={{
            backgroundPosition: ['200% 0', '-200% 0'],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          MOVISTRATO
        </motion.span>
      </div>

      {/* Right Indicator */}
      <span className="font-mono text-[9px] tracking-widest text-brand-gold/70 uppercase hidden md:flex items-center gap-2 pr-2">
        <span className="w-1.5 h-1.5 bg-brand-gold rounded-full animate-pulse" />
        SOFTWARE HOUSE
      </span>

      {/* Laser beam gliding along bottom border (delayed & reversed) */}
      <motion.div
        className="absolute bottom-[-1px] right-0 h-[1px] w-32 bg-gradient-to-r from-transparent via-brand-gold to-transparent pointer-events-none opacity-60"
        animate={{
          x: ['100%', '-800%'],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
      />
    </div>
  );
}
