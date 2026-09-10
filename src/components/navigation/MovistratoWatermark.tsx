'use client';

import { motion } from 'framer-motion';

/**
 * MovistratoWatermark: Pure monumental architectural brand signature.
 * Features an ethereal golden shimmer wave flowing continuously across the letterforms.
 */
export function MovistratoWatermark() {
  return (
    <div className="w-full overflow-hidden select-none py-6 sm:py-10 my-2 relative flex justify-center items-center pointer-events-none">
      <motion.span
        className="font-serif text-[12.5vw] font-light leading-none tracking-tight uppercase block text-transparent bg-clip-text bg-[length:250%_100%] transition-all duration-700 bg-gradient-to-r from-foreground/[0.04] via-brand-gold/30 to-foreground/[0.04] dark:from-foreground/[0.06] dark:via-brand-gold/40 dark:to-foreground/[0.06]"
        animate={{
          backgroundPosition: ['200% 0', '-200% 0'],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        MOVISTRATO
      </motion.span>
    </div>
  );
}

