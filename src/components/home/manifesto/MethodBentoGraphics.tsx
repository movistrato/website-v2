'use client';

import { motion } from 'framer-motion';

/**
 * ContextualAlgorithmGraphic
 * An Awwwards-tier visual schematic representing human cognitive absorption analysis,
 * dynamic algorithmic synthesis, and zero-friction invisible interface calculation.
 */
export function ContextualAlgorithmGraphic() {
  const bars = [32, 58, 42, 85, 64, 98, 72, 90, 48, 76, 60, 94, 52, 68];

  return (
    <div className="relative w-full h-full min-h-[170px] flex flex-col justify-between select-none overflow-hidden p-1">
      {/* Background Architectural Grid & Axis */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="w-full h-full bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:24px_24px] opacity-[0.05] dark:opacity-[0.08]" />
        {/* Subtle Horizontal Baseline Guidelines */}
        <div className="absolute top-[25%] left-0 w-full h-px border-b border-dashed border-border/25" />
        <div className="absolute top-[55%] left-0 w-full h-px border-b border-dashed border-border/25" />
        <div className="absolute bottom-[20%] left-0 w-full h-px border-b border-border/40" />
      </div>

      {/* Top Telemetry Header */}
      <div className="flex items-center justify-between relative z-10 text-[9px] font-mono tracking-widest text-muted-foreground uppercase">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-brand-gold animate-pulse block" />
          <span className="text-foreground/90 font-medium">SÍNTESE CONTEXTUAL</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-brand-gold">f(x) = λ · context(t)</span>
          <span className="text-[8px] px-1 py-0.2 bg-brand-gold/10 border border-brand-gold/20 text-brand-gold">
            Δt &lt; 0.4ms
          </span>
        </div>
      </div>

      {/* Center Oscilloscope / Waveform & Spectrum Visualization */}
      <div className="relative w-full h-24 my-2 flex items-end justify-between gap-1 px-1 z-10">
        {/* Continuous Scanning Laser / Radar Bar */}
        <motion.div
          className="absolute top-0 bottom-0 w-[2px] bg-[linear-gradient(to_bottom,transparent,#D9A62E,transparent)] z-20 pointer-events-none"
          animate={{ x: ['0%', '100%', '0%'] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Dynamic Context Frequency Spectrum Bars */}
        {bars.map((height, i) => (
          <div key={i} className="flex-1 h-full flex flex-col justify-end items-center group/bar">
            <motion.div
              initial={{ height: '12%' }}
              whileInView={{ height: `${height}%` }}
              transition={{
                duration: 1.1,
                delay: i * 0.04,
                ease: [0.25, 1, 0.5, 1],
              }}
              className="w-full rounded-none relative overflow-hidden transition-colors duration-500 bg-border/40 group-hover:bg-brand-gold/50"
            >
              {/* Subtle living shimmer inside bars */}
              <motion.div
                className="w-full h-1 bg-brand-gold absolute top-0 left-0"
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: (i % 4) * 0.3,
                  ease: 'easeInOut',
                }}
              />
            </motion.div>
          </div>
        ))}

        {/* Superimposed Fluid Algorithmic SVG Wave Curve */}
        <svg
          viewBox="0 0 280 80"
          className="absolute inset-0 w-full h-full overflow-visible pointer-events-none z-15"
          fill="none"
        >
          {/* Shaded Area Under Wave */}
          <path
            d="M 0 60 Q 40 10, 80 45 T 160 30 T 240 18 T 280 12 L 280 75 L 0 75 Z"
            fill="url(#algoWaveGradient)"
            opacity="0.15"
          />

          {/* Glowing Golden Wave Path */}
          <path
            d="M 0 60 Q 40 10, 80 45 T 160 30 T 240 18 T 280 12"
            stroke="#D9A62E"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeOpacity="0.95"
          />

          {/* Active Travelling Signal Node */}
          <motion.circle
            r="3"
            fill="#FFF5D1"
            stroke="#D9A62E"
            strokeWidth="1.5"
            animate={{
              cx: [0, 40, 80, 120, 160, 200, 240, 280],
              cy: [60, 22, 45, 25, 30, 32, 18, 12],
              opacity: [0.2, 0.9, 1, 0.9, 1, 0.9, 1, 0.2],
            }}
            transition={{
              duration: 3.2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          {/* Focal Algorithmic Resonance Points */}
          <circle cx="80" cy="45" r="2.5" fill="#D9A62E" />
          <circle cx="160" cy="30" r="3" fill="#D9A62E" />
          <circle cx="240" cy="18" r="2.5" fill="#D9A62E" />
          <circle
            cx="160"
            cy="30"
            r="6"
            stroke="#D9A62E"
            strokeWidth="1"
            strokeOpacity="0.5"
            className="animate-ping"
          />

          <defs>
            <linearGradient id="algoWaveGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#D9A62E" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#D9A62E" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Bottom Architectural Telemetry Rubric */}
      <div className="flex items-center justify-between border-t border-border/30 pt-2 text-[8px] font-mono tracking-widest text-muted-foreground uppercase relative z-10">
        <span className="flex items-center gap-1.5">
          <span className="w-1 h-1 bg-emerald-500 rounded-full" />
          COGNITIVE COHERENCE: 99.4%
        </span>
        <span className="text-foreground/80">LATÊNCIA: INVISÍVEL</span>
      </div>
    </div>
  );
}

/**
 * NativeStackGraphic
 * An Awwwards-tier 3-tier architectural stack representing bare-metal native execution:
 * UI LAYER -> ENGINE CORE -> HARDWARE with live signal conduits and a 120 FPS frame cadence.
 */
export function NativeStackGraphic() {
  return (
    <div className="relative w-full h-full min-h-[170px] flex flex-col justify-between select-none overflow-hidden p-1">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="w-full h-full bg-[linear-gradient(45deg,transparent_25%,var(--border)_25%,var(--border)_50%,transparent_50%,transparent_75%,var(--border)_75%,var(--border)_100%)] bg-[size:16px_16px] opacity-[0.02] dark:opacity-[0.04]" />
      </div>

      {/* Top Telemetry Header with 120 FPS Live Cadence */}
      <div className="flex items-center justify-between relative z-10 text-[9px] font-mono tracking-widest text-muted-foreground uppercase">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-brand-gold rotate-45 block" />
          <span className="text-foreground/90 font-medium">EXECUÇÃO BARE-METAL</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-semibold text-brand-gold text-[10px] flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-ping" />
            120 FPS
          </span>
          <span className="text-[8px] px-1 py-0.2 bg-brand-gold/10 border border-brand-gold/20 text-brand-gold font-mono">
            8.33MS BUDGET
          </span>
        </div>
      </div>

      {/* Stack Layers with Interconnected Data Buslines */}
      <div className="relative flex flex-col gap-2 my-2 z-10">
        {/* Animated Connecting Vertical Data Bus Conduits */}
        <div className="absolute left-6 top-3 bottom-3 w-[2px] bg-border/40 z-0 pointer-events-none">
          {/* Photons moving vertically up and down the data bus */}
          <motion.div
            className="w-[2px] h-4 bg-brand-gold shadow-[0_0_8px_#D9A62E]"
            animate={{ y: [0, 64, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>

        {/* LAYER 01: UI LAYER */}
        <motion.div
          whileHover={{ x: 3 }}
          transition={{ duration: 0.2 }}
          className="group/layer relative z-10 border border-border/60 bg-surface/50 dark:bg-surface/30 backdrop-blur-sm px-3.5 py-2 flex items-center justify-between hover:border-brand-gold/60 transition-colors duration-300"
        >
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 border border-brand-gold bg-brand-gold/20 flex-shrink-0" />
            <div className="flex flex-col">
              <span className="font-mono text-[10px] uppercase tracking-wider font-semibold text-foreground group-hover/layer:text-brand-gold transition-colors">
                UI LAYER
              </span>
              <span className="font-mono text-[8px] text-muted-foreground tracking-widest uppercase">
                DIRECT VECTOR DRAW · ZERO DOM OVERHEAD
              </span>
            </div>
          </div>
          <span className="font-mono text-[8px] text-brand-gold bg-brand-gold/10 px-1.5 py-0.5 border border-brand-gold/20 tracking-wider">
            120 HZ SYNC
          </span>
        </motion.div>

        {/* LAYER 02: ENGINE CORE */}
        <motion.div
          whileHover={{ x: 3 }}
          transition={{ duration: 0.2 }}
          className="group/layer relative z-10 border border-border/60 bg-surface/40 dark:bg-surface/20 backdrop-blur-sm px-3.5 py-2 flex items-center justify-between hover:border-brand-gold/60 transition-colors duration-300"
        >
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 border border-brand-gold/80 bg-brand-gold/10 flex-shrink-0" />
            <div className="flex flex-col">
              <span className="font-mono text-[10px] uppercase tracking-wider font-semibold text-foreground group-hover/layer:text-brand-gold transition-colors">
                ENGINE CORE
              </span>
              <span className="font-mono text-[8px] text-muted-foreground tracking-widest uppercase">
                DETERMINISTIC MEMORY · SIMD BYTECODE
              </span>
            </div>
          </div>
          <span className="font-mono text-[8px] text-muted-foreground tracking-widest">
            LATÊNCIA &lt; 0.8MS
          </span>
        </motion.div>

        {/* LAYER 03: HARDWARE */}
        <motion.div
          whileHover={{ x: 3 }}
          transition={{ duration: 0.2 }}
          className="group/layer relative z-10 border border-border/60 bg-border/15 dark:bg-border/20 backdrop-blur-sm px-3.5 py-2 flex items-center justify-between hover:border-brand-gold/60 transition-colors duration-300"
        >
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 border border-border bg-border/40 flex-shrink-0" />
            <div className="flex flex-col">
              <span className="font-mono text-[10px] uppercase tracking-wider font-semibold text-foreground/90 group-hover/layer:text-brand-gold transition-colors">
                HARDWARE
              </span>
              <span className="font-mono text-[8px] text-muted-foreground tracking-widest uppercase">
                KERNEL BYPASS · NATIVE THREADING
              </span>
            </div>
          </div>
          <span className="font-mono text-[8px] text-emerald-500 font-medium tracking-wider flex items-center gap-1">
            <span className="w-1 h-1 rounded-full bg-emerald-500 inline-block" />
            DIRECT METAL
          </span>
        </motion.div>
      </div>

      {/* Bottom Architectural Telemetry Rubric */}
      <div className="flex items-center justify-between border-t border-border/30 pt-2 text-[8px] font-mono tracking-widest text-muted-foreground uppercase relative z-10">
        <span>PIPELINE: SEM WRAPPERS</span>
        <span className="text-brand-gold">JANK DETECTADO: 0.00%</span>
      </div>
    </div>
  );
}
