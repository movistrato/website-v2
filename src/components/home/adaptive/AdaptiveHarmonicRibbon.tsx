'use client';

import { motion, useReducedMotion } from 'framer-motion';

interface AdaptiveHarmonicRibbonProps {
  className?: string;
}

/**
 * AdaptiveHarmonicRibbon
 * A living, multi-harmonic kinetic arch waveform representing the continuous,
 * fluid adaptation of software to human learning curves.
 * Features 3 phase-shifted harmonic strata, traveling energy photons,
 * amplitude measurement stems, and focal resonance beacons.
 */
export function AdaptiveHarmonicRibbon({ className = '' }: AdaptiveHarmonicRibbonProps) {
  const reduce = useReducedMotion();

  // Wave arch coordinates for SVG viewbox (0 0 1600 220)
  // Repeating continuous bezier arches that tile seamlessly
  const primeArchPath = 
    'M 0 110 Q 100 10, 200 110 T 400 110 T 600 110 T 800 110 T 1000 110 T 1200 110 T 1400 110 T 1600 110 T 1800 110 T 2000 110 T 2200 110 T 2400 110';
  
  const counterArchPath = 
    'M 0 110 Q 120 210, 240 110 T 480 110 T 720 110 T 960 110 T 1200 110 T 1440 110 T 1680 110 T 1920 110 T 2160 110 T 2400 110';

  const subHarmonicPath = 
    'M 0 110 Q 75 50, 150 110 T 300 110 T 450 110 T 600 110 T 750 110 T 900 110 T 1050 110 T 1200 110 T 1350 110 T 1500 110 T 1650 110 T 1800 110';

  return (
    <div className={`relative w-full h-32 sm:h-44 lg:h-52 overflow-hidden select-none flex items-center justify-center ${className}`}>
      
      {/* Background Architectural Amplitude Measurement Axis */}
      <div className="absolute inset-0 flex flex-col justify-between py-6 pointer-events-none opacity-20 dark:opacity-25" aria-hidden="true">
        <div className="w-full h-px border-b border-dashed border-border flex justify-between px-4 text-[7px] font-mono text-muted-foreground uppercase">
          <span>+1.0 MAX AMPLITUDE</span>
          <span className="text-brand-gold">CADÊNCIA ADAPTATIVA</span>
          <span>+1.0</span>
        </div>
        <div className="w-full h-px border-b border-border/40 flex justify-between px-4 text-[7px] font-mono text-muted-foreground uppercase">
          <span>0.0 BASELINE</span>
          <span className="text-foreground/70 font-mono">f(t) = λ · context(t)</span>
          <span>0.0</span>
        </div>
        <div className="w-full h-px border-b border-dashed border-border flex justify-between px-4 text-[7px] font-mono text-muted-foreground uppercase">
          <span>-1.0 MIN COHERENCE</span>
          <span className="text-brand-gold">RESSONÂNCIA EM TEMPO REAL</span>
          <span>-1.0</span>
        </div>
      </div>

      {/* Main Multi-Harmonic Kinetic SVG Wave Canvas */}
      <svg
        className="w-[200%] sm:w-[150%] lg:w-[130%] h-full overflow-visible relative z-10"
        viewBox="0 0 1600 220"
        preserveAspectRatio="none"
        fill="none"
      >
        <defs>
          {/* Luminous Golden Gradient for the Prime Arches */}
          <linearGradient id="primeGoldWave" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#D9A62E" stopOpacity="0.8" />
            <stop offset="25%" stopColor="#FFF4D0" stopOpacity="1" />
            <stop offset="50%" stopColor="#D9A62E" stopOpacity="0.9" />
            <stop offset="75%" stopColor="#FFF4D0" stopOpacity="1" />
            <stop offset="100%" stopColor="#D9A62E" stopOpacity="0.8" />
          </linearGradient>

          {/* Shaded Area Under Primary Arch */}
          <linearGradient id="waveAreaShade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#D9A62E" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#D9A62E" stopOpacity="0.0" />
          </linearGradient>

          {/* Glow Filter for Traveling Photons */}
          <filter id="goldGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* 1. Shaded Atmospheric Glow Under Prime Arches */}
        <motion.path
          d={primeArchPath}
          fill="none"
          stroke="url(#primeGoldWave)"
          strokeWidth="6"
          strokeOpacity="0.15"
          filter="url(#goldGlow)"
          animate={reduce ? {} : { x: [0, -400] }}
          transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
        />

        {/* 2. Counter-Oscillator Wave (Creates Acoustic Interference / Moiré Breathing) */}
        <motion.path
          d={counterArchPath}
          stroke="currentColor"
          strokeWidth="1.25"
          strokeOpacity="0.25"
          strokeDasharray="4 4"
          className="text-foreground"
          animate={reduce ? {} : { x: [0, -480] }}
          transition={{ repeat: Infinity, duration: 12, ease: 'linear' }}
        />

        {/* 3. Sub-Harmonic High-Frequency Ribbon (Denser Context Wave) */}
        <motion.path
          d={subHarmonicPath}
          stroke="#D9A62E"
          strokeWidth="1"
          strokeOpacity="0.45"
          strokeDasharray="2 3"
          animate={reduce ? {} : { x: [0, -300] }}
          transition={{ repeat: Infinity, duration: 6, ease: 'linear' }}
        />

        {/* 4. THE PRIME ARCH HARMONIC (Crisp, High-Definition Living Golden Arches) */}
        <motion.path
          d={primeArchPath}
          stroke="url(#primeGoldWave)"
          strokeWidth="2.25"
          strokeLinecap="round"
          strokeLinejoin="round"
          animate={reduce ? {} : { x: [0, -400] }}
          transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
        />

        {/* 5. Traveling Signal Photons Riding along the Arch Crests */}
        {!reduce && (
          <>
            {/* Photon Tracer 01 */}
            <motion.g
              animate={{ x: [0, -400] }}
              transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
            >
              {[100, 300, 500, 700, 900, 1100, 1300, 1500].map((cx, idx) => (
                <g key={`photon-crest-${idx}`}>
                  {/* Outer Pulsing Aura */}
                  <circle
                    cx={cx}
                    cy={10}
                    r="8"
                    stroke="#D9A62E"
                    strokeWidth="1"
                    strokeOpacity="0.5"
                    fill="none"
                    className="animate-ping"
                  />
                  {/* Outer Ring */}
                  <circle
                    cx={cx}
                    cy={10}
                    r="4"
                    fill="#D9A62E"
                    fillOpacity="0.3"
                  />
                  {/* Core Photon */}
                  <circle
                    cx={cx}
                    cy={10}
                    r="2.5"
                    fill="#FFF6CC"
                    stroke="#D9A62E"
                    strokeWidth="1"
                  />
                  {/* Vertical Amplitude Laser Stem down to Baseline */}
                  <line
                    x1={cx}
                    y1={14}
                    x2={cx}
                    y2={110}
                    stroke="#D9A62E"
                    strokeWidth="1"
                    strokeOpacity="0.25"
                    strokeDasharray="2 2"
                  />
                </g>
              ))}
            </motion.g>

            {/* Photon Tracer 02 (Troughs - Valley Photons) */}
            <motion.g
              animate={{ x: [0, -400] }}
              transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
            >
              {[200, 400, 600, 800, 1000, 1200, 1400, 1600].map((cx, idx) => (
                <g key={`photon-trough-${idx}`}>
                  <circle
                    cx={cx}
                    cy={210}
                    r="3"
                    fill="var(--surface)"
                    stroke="#D9A62E"
                    strokeWidth="1.5"
                  />
                  <circle
                    cx={cx}
                    cy={210}
                    r="1.5"
                    fill="#D9A62E"
                  />
                </g>
              ))}
            </motion.g>
          </>
        )}
      </svg>

      {/* Floating Center Radar Pill */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
        <div className="px-3.5 py-1.5 bg-background/80 dark:bg-background/90 backdrop-blur-md border border-brand-gold/40 shadow-lg flex items-center gap-2.5 font-mono text-[9px] tracking-widest uppercase text-foreground">
          <span className="w-1.5 h-1.5 bg-brand-gold rounded-full animate-ping" />
          <span className="text-brand-gold font-semibold">RESSONÂNCIA KINÉTICA</span>
          <span className="text-muted-foreground border-l border-border/40 pl-2">Δt &lt; 8.3ms</span>
        </div>
      </div>

    </div>
  );
}
