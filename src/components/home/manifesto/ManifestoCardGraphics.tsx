'use client';

import { motion } from 'framer-motion';

/**
 * Graphic 01: Adaptive Curve
 * Represents user fluency, adaptive learning complexity curve and deterministic progression.
 */
export function AdaptiveCurveGraphic() {
  return (
    <div className="relative w-full h-28 my-3 flex flex-col justify-center items-center select-none overflow-hidden">
      {/* Background technical telemetry lines */}
      <div className="absolute inset-0 flex flex-col justify-between py-2 opacity-20 pointer-events-none" aria-hidden="true">
        <div className="w-full h-px border-b border-dashed border-border" />
        <div className="w-full h-px border-b border-dashed border-border" />
        <div className="w-full h-px border-b border-dashed border-border" />
      </div>

      <svg viewBox="0 0 240 76" className="w-full h-full max-w-[250px] overflow-visible relative z-10" fill="none">
        {/* Subtle grid ticks */}
        <line x1="20" y1="10" x2="20" y2="70" stroke="currentColor" strokeOpacity="0.1" strokeDasharray="2 3" />
        <line x1="120" y1="10" x2="120" y2="70" stroke="currentColor" strokeOpacity="0.1" strokeDasharray="2 3" />
        <line x1="220" y1="10" x2="220" y2="70" stroke="currentColor" strokeOpacity="0.1" strokeDasharray="2 3" />

        {/* Shaded Area Under Curve */}
        <path
          d="M 20 64 C 70 64, 100 48, 140 32 C 175 18, 195 14, 225 12 L 225 70 L 20 70 Z"
          fill="url(#goldGradientArea)"
          opacity="0.12"
        />

        {/* Background shadow curve */}
        <path
          d="M 20 64 C 70 64, 100 48, 140 32 C 175 18, 195 14, 225 12"
          stroke="currentColor"
          strokeOpacity="0.25"
          strokeWidth="1.5"
          strokeDasharray="2 2"
        />

        {/* Dynamic Main Adaptive Curve */}
        <motion.path
          d="M 20 64 C 70 64, 100 48, 140 32 C 175 18, 195 14, 225 12"
          stroke="#D9A62E"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0.2 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />

        {/* Continuous Traveling Learner Progress Packet */}
        <motion.circle
          r="2.5"
          fill="#FFF4D0"
          stroke="#D9A62E"
          strokeWidth="1.5"
          animate={{
            cx: [20, 55, 95, 140, 185, 225],
            cy: [64, 62, 50, 32, 17, 12],
            opacity: [0.2, 0.9, 1, 1, 0.9, 0.2],
          }}
          transition={{
            duration: 3.4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Node 1: Entry Point */}
        <circle cx="20" cy="64" r="2.5" fill="#D9A62E" />
        
        {/* Node 2: Adaptive Pivot with Continuous Pulsing Signal */}
        <circle cx="140" cy="32" r="3.5" fill="#D9A62E" />
        <circle cx="140" cy="32" r="6.5" stroke="#D9A62E" strokeWidth="1" strokeOpacity="0.6" className="animate-ping" />

        {/* Node 3: Mastery Milestone */}
        <circle cx="225" cy="12" r="3" fill="#D9A62E" />

        <defs>
          <linearGradient id="goldGradientArea" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#D9A62E" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#D9A62E" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      {/* Micro-telemetry labels */}
      <div className="w-full max-w-[250px] flex items-center justify-between text-[8px] font-mono text-muted-foreground pt-1 tracking-widest uppercase">
        <span>0% FLUÊNCIA</span>
        <span className="text-brand-gold">NÓ ADAPTATIVO</span>
        <span>PROGRESSÃO</span>
      </div>
    </div>
  );
}

/**
 * Graphic 02: Ubiquitous Continuity
 * Represents seamless sync across Desktop, Web/Tablet and Mobile with latency < 10ms.
 */
export function UbiquitousSyncGraphic() {
  return (
    <div className="relative w-full h-28 my-3 flex flex-col justify-center items-center select-none overflow-hidden">
      <svg viewBox="0 0 240 76" className="w-full h-full max-w-[250px] overflow-visible" fill="none">
        {/* Interconnecting Sync Wave Line */}
        <path
          d="M 64 34 L 102 34 M 148 34 L 180 34"
          stroke="#D9A62E"
          strokeWidth="1.5"
          strokeDasharray="3 3"
          strokeOpacity="0.8"
        />

        {/* Traveling Data Signal Dots with Continuous Movement */}
        <motion.circle
          cx="83"
          cy="34"
          r="2.5"
          fill="#D9A62E"
          animate={{ x: [-15, 15] }}
          transition={{ duration: 1.6, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        />
        <motion.circle
          cx="164"
          cy="34"
          r="2.5"
          fill="#D9A62E"
          animate={{ x: [-12, 12] }}
          transition={{ duration: 1.6, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 0.4 }}
        />

        {/* Device 1: Desktop Screen */}
        <g className="opacity-90">
          <rect x="16" y="14" width="48" height="34" rx="2" stroke="currentColor" strokeOpacity="0.4" strokeWidth="1.5" fill="var(--surface)" />
          <line x1="22" y1="22" x2="44" y2="22" stroke="currentColor" strokeOpacity="0.3" strokeWidth="1.5" />
          <line x1="22" y1="28" x2="36" y2="28" stroke="#D9A62E" strokeWidth="1.5" />
          {/* Monitor Stand */}
          <line x1="40" y1="48" x2="40" y2="56" stroke="currentColor" strokeOpacity="0.4" strokeWidth="1.5" />
          <line x1="28" y1="56" x2="52" y2="56" stroke="currentColor" strokeOpacity="0.4" strokeWidth="1.5" />
        </g>

        {/* Device 2: Tablet / Laptop */}
        <g className="opacity-90">
          <rect x="102" y="18" width="46" height="30" rx="2" stroke="currentColor" strokeOpacity="0.4" strokeWidth="1.5" fill="var(--surface)" />
          <line x1="108" y1="25" x2="134" y2="25" stroke="currentColor" strokeOpacity="0.3" strokeWidth="1.5" />
          <line x1="108" y1="31" x2="126" y2="31" stroke="#D9A62E" strokeWidth="1.5" />
          {/* Base */}
          <path d="M 96 48 L 154 48 L 150 53 L 100 53 Z" stroke="currentColor" strokeOpacity="0.3" strokeWidth="1" fill="var(--surface)" />
        </g>

        {/* Device 3: Mobile Phone */}
        <g className="opacity-90">
          <rect x="180" y="12" width="26" height="46" rx="3.5" stroke="currentColor" strokeOpacity="0.4" strokeWidth="1.5" fill="var(--surface)" />
          <line x1="188" y1="16" x2="198" y2="16" stroke="currentColor" strokeOpacity="0.4" strokeWidth="1" />
          <rect x="185" y="22" width="16" height="26" rx="1" fill="#D9A62E" fillOpacity="0.1" />
          <line x1="188" y1="28" x2="198" y2="28" stroke="#D9A62E" strokeWidth="1.5" />
          <line x1="188" y1="34" x2="194" y2="34" stroke="currentColor" strokeOpacity="0.3" strokeWidth="1.5" />
          <circle cx="193" cy="53" r="1" fill="currentColor" fillOpacity="0.4" />
        </g>
      </svg>

      {/* Micro-telemetry labels */}
      <div className="w-full max-w-[250px] flex items-center justify-between text-[8px] font-mono text-muted-foreground pt-1 tracking-widest uppercase">
        <span>DESKTOP</span>
        <span className="text-brand-gold">&lt; 10MS SYNC</span>
        <span>MOBILE</span>
      </div>
    </div>
  );
}

/**
 * Graphic 03: Native Performance
 * Represents bare-metal rendering, 120 FPS timeline and sub-millisecond calculation loops.
 * Features an active, riding 120 FPS pulse photon tracer, sequentially firing clock nodes,
 * and a live scanning memory bus.
 */
export function NativePerformanceGraphic() {
  return (
    <div className="relative w-full h-28 my-3 flex flex-col justify-center items-center select-none overflow-hidden">
      {/* Background timeline markers */}
      <div className="absolute inset-0 flex justify-between px-3 py-2 opacity-15 pointer-events-none" aria-hidden="true">
        <div className="h-full w-px border-l border-dashed border-border" />
        <div className="h-full w-px border-l border-dashed border-border" />
        <div className="h-full w-px border-l border-dashed border-border" />
        <div className="h-full w-px border-l border-dashed border-border" />
      </div>

      <svg viewBox="0 0 240 76" className="w-full h-full max-w-[250px] overflow-visible relative z-10" fill="none">
        {/* 120 FPS Cadence Frame Grid (8.33ms intervals) */}
        <line x1="15" y1="44" x2="225" y2="44" stroke="currentColor" strokeOpacity="0.2" strokeWidth="1" />

        {/* Native Pulse Signal Baseline Waveform */}
        <path
          d="M 15 44 L 45 44 L 50 18 L 56 60 L 62 44 L 100 44 L 105 18 L 111 60 L 117 44 L 155 44 L 160 18 L 166 60 L 172 44 L 210 44 L 215 18 L 221 60 L 225 44"
          stroke="#D9A62E"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeOpacity="0.9"
        />

        {/* Active 120 FPS Signal Tracer riding along the physical waveform */}
        <motion.circle
          r="2.5"
          fill="#FFF4D0"
          stroke="#D9A62E"
          strokeWidth="1"
          animate={{
            cx: [15, 45, 50, 56, 62, 100, 105, 111, 117, 155, 160, 166, 172, 210, 215, 221, 225],
            cy: [44, 44, 18, 60, 44, 44,  18,  60,  44,  44,  18,  60,  44,  44,  18,  60,  44],
            opacity: [0.2, 0.8, 1, 1, 0.8, 0.8, 1, 1, 0.8, 0.8, 1, 1, 0.8, 0.8, 1, 1, 0.2],
          }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Precision hardware clock nodes with sequential firing pulse */}
        {[
          { x: 50, delay: 0.3 },
          { x: 105, delay: 0.85 },
          { x: 160, delay: 1.4 },
          { x: 215, delay: 1.95 },
        ].map((node) => (
          <g key={node.x}>
            <circle cx={node.x} cy="18" r="2.5" fill="#D9A62E" />
            <motion.circle
              cx={node.x}
              cy="18"
              r="5"
              stroke="#D9A62E"
              strokeWidth="1"
              fill="none"
              animate={{
                opacity: [0.2, 0.8, 0.2],
                scale: [0.8, 1.4, 0.8],
              }}
              transition={{
                duration: 1.6,
                repeat: Infinity,
                delay: node.delay,
                ease: "easeInOut",
              }}
            />
          </g>
        ))}

        {/* Bottom Hardware Architecture Layer Strip with Live Scanning Memory Throughput */}
        <rect x="25" y="66" width="190" height="5" rx="1" fill="currentColor" fillOpacity="0.08" />
        <motion.rect
          y="66"
          width="45"
          height="5"
          rx="1"
          fill="#D9A62E"
          fillOpacity="0.4"
          animate={{ x: [25, 170, 25] }}
          transition={{
            duration: 2.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </svg>

      {/* Micro-telemetry labels */}
      <div className="w-full max-w-[250px] flex items-center justify-between text-[8px] font-mono text-muted-foreground pt-1 tracking-widest uppercase">
        <span>HARDWARE BARE-METAL</span>
        <span className="text-brand-gold">120 FPS // 8.33MS</span>
        <span>ZERO-JANK</span>
      </div>
    </div>
  );
}
