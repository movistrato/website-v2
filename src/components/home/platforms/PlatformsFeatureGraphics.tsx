'use client';

import { motion } from 'framer-motion';

/**
 * Graphic 001: Native Architecture
 * Demonstrates zero web-abstractions, direct native compilation per OS target.
 */
export function NativeArchitectureGraphic() {
  return (
    <div className="relative w-full h-28 my-3 flex flex-col justify-center items-center select-none overflow-hidden">
      {/* Background technical telemetry lines */}
      <div className="absolute inset-0 flex flex-col justify-between py-2 opacity-15 pointer-events-none" aria-hidden="true">
        <div className="w-full h-px border-b border-dashed border-border" />
        <div className="w-full h-px border-b border-dashed border-border" />
        <div className="w-full h-px border-b border-dashed border-border" />
      </div>

      <svg viewBox="0 0 250 76" className="w-full h-full max-w-[260px] overflow-visible relative z-10" fill="none">
        {/* Central Core: Bare-Metal Rust Engine */}
        <g>
          <rect x="95" y="20" width="60" height="36" rx="2" stroke="#D9A62E" strokeWidth="1.5" fill="var(--surface)" />
          <rect x="99" y="24" width="52" height="28" rx="1" stroke="currentColor" strokeOpacity="0.15" strokeWidth="0.75" fill="none" />
          <text x="105" y="36" fill="var(--foreground)" fontSize="7" fontWeight="700" fontFamily="var(--font-jetbrains-mono), monospace">
            NATIVE
          </text>
          <text x="105" y="47" fill="#D9A62E" fontSize="6.5" fontWeight="600" fontFamily="var(--font-jetbrains-mono), monospace">
            CORE
          </text>
          <circle cx="145" cy="38" r="2" fill="#D9A62E" className="animate-pulse" />
        </g>

        {/* Left Branch: Windows Win32 Target */}
        <g>
          <path d="M 95 30 L 65 30 L 52 20" stroke="#D9A62E" strokeWidth="1.2" strokeOpacity="0.8" />
          <rect x="12" y="10" width="40" height="20" rx="1.5" stroke="currentColor" strokeOpacity="0.3" strokeWidth="1" fill="var(--surface)" />
          <text x="18" y="23" fill="var(--foreground)" fontSize="6.5" fontWeight="600" fontFamily="var(--font-jetbrains-mono), monospace">
            WIN32
          </text>
        </g>

        {/* Left Branch: Android NDK Target */}
        <g>
          <path d="M 95 46 L 65 46 L 52 56" stroke="#D9A62E" strokeWidth="1.2" strokeOpacity="0.8" />
          <rect x="12" y="46" width="40" height="20" rx="1.5" stroke="currentColor" strokeOpacity="0.3" strokeWidth="1" fill="var(--surface)" />
          <text x="19" y="59" fill="var(--foreground)" fontSize="6.5" fontWeight="600" fontFamily="var(--font-jetbrains-mono), monospace">
            ANDROID
          </text>
        </g>

        {/* Right Branch: WebAssembly SIMD Target */}
        <g>
          <path d="M 155 38 L 185 38" stroke="#D9A62E" strokeWidth="1.5" />
          <rect x="185" y="28" width="52" height="20" rx="1.5" stroke="#D9A62E" strokeWidth="1.2" fill="var(--surface)" />
          <text x="191" y="41" fill="#D9A62E" fontSize="6.5" fontWeight="600" fontFamily="var(--font-jetbrains-mono), monospace">
            WASM AOT
          </text>
        </g>

        {/* Binary Data Pulse traveling from Core */}
        <motion.circle
          cx="125"
          cy="38"
          r="2.5"
          fill="#D9A62E"
          animate={{
            cx: [125, 95, 32],
            cy: [38, 30, 20],
          }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "linear" }}
        />
        <motion.circle
          cx="125"
          cy="38"
          r="2.5"
          fill="#D9A62E"
          animate={{
            cx: [125, 95, 32],
            cy: [38, 46, 56],
          }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "linear", delay: 0.5 }}
        />
        <motion.circle
          cx="125"
          cy="38"
          r="2.5"
          fill="#D9A62E"
          animate={{
            cx: [125, 155, 211],
          }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "linear", delay: 1 }}
        />
      </svg>

      {/* Telemetry metadata footer */}
      <div className="w-full max-w-[260px] flex items-center justify-between text-[8px] font-mono text-muted-foreground pt-1 tracking-widest uppercase">
        <span>ZERO-WRAPPER</span>
        <span className="text-brand-gold">BINÁRIOS NATIVOS</span>
        <span>AOT COMPILED</span>
      </div>
    </div>
  );
}

/**
 * Graphic 002: Immediate Synchronization
 * Demonstrates context transport across nodes with latency < 10ms.
 */
export function ImmediateSyncGraphic() {
  return (
    <div className="relative w-full h-28 my-3 flex flex-col justify-center items-center select-none overflow-hidden">
      {/* Background subtle sync grid ticks */}
      <div className="absolute inset-0 flex justify-between px-3 py-2 opacity-15 pointer-events-none" aria-hidden="true">
        <div className="h-full w-px border-l border-dashed border-border" />
        <div className="h-full w-px border-l border-dashed border-border" />
        <div className="h-full w-px border-l border-dashed border-border" />
      </div>

      <svg viewBox="0 0 250 76" className="w-full h-full max-w-[260px] overflow-visible relative z-10" fill="none">
        {/* Device Node A: Source Node */}
        <g>
          <rect x="14" y="20" width="50" height="36" rx="2" stroke="currentColor" strokeOpacity="0.35" strokeWidth="1" fill="var(--surface)" />
          <line x1="20" y1="28" x2="42" y2="28" stroke="#D9A62E" strokeWidth="1.5" />
          <line x1="20" y1="34" x2="52" y2="34" stroke="currentColor" strokeOpacity="0.25" strokeWidth="1" />
          <line x1="20" y1="40" x2="38" y2="40" stroke="currentColor" strokeOpacity="0.25" strokeWidth="1" />
          <text x="20" y="50" fill="var(--foreground)" fontSize="6" fontFamily="var(--font-jetbrains-mono), monospace">DISP A</text>
        </g>

        {/* Central High-Speed Sync Bus */}
        <line x1="64" y1="38" x2="186" y2="38" stroke="currentColor" strokeOpacity="0.2" strokeWidth="1" />
        <line x1="64" y1="38" x2="186" y2="38" stroke="#D9A62E" strokeWidth="1.2" strokeDasharray="3 3" />

        {/* Center Sub-10ms Gate Badge */}
        <g>
          <rect x="99" y="24" width="52" height="28" rx="2" stroke="#D9A62E" strokeWidth="1.2" fill="var(--surface)" />
          <text x="105" y="37" fill="#D9A62E" fontSize="7" fontWeight="700" fontFamily="var(--font-jetbrains-mono), monospace">
            &lt; 10ms
          </text>
          <text x="105" y="47" fill="var(--foreground)" fontSize="6" fontWeight="500" fontFamily="var(--font-jetbrains-mono), monospace">
            LATÊNCIA
          </text>
        </g>

        {/* Traveling State Packets */}
        <motion.circle
          cx="64"
          cy="38"
          r="2.5"
          fill="#D9A62E"
          animate={{
            cx: [64, 99, 151, 186],
            opacity: [0, 1, 1, 0],
          }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.circle
          cx="186"
          cy="38"
          r="2"
          fill="#D9A62E"
          animate={{
            cx: [186, 151, 99, 64],
            opacity: [0, 1, 1, 0],
          }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        />

        {/* Device Node B: Target Node */}
        <g>
          <rect x="186" y="20" width="50" height="36" rx="2" stroke="#D9A62E" strokeWidth="1.5" fill="var(--surface)" />
          <line x1="192" y1="28" x2="214" y2="28" stroke="#D9A62E" strokeWidth="1.5" />
          <line x1="192" y1="34" x2="224" y2="34" stroke="currentColor" strokeOpacity="0.25" strokeWidth="1" />
          <line x1="192" y1="40" x2="210" y2="40" stroke="currentColor" strokeOpacity="0.25" strokeWidth="1" />
          <circle cx="226" cy="48" r="2" fill="#D9A62E" className="animate-pulse" />
          <text x="192" y="50" fill="#D9A62E" fontSize="6" fontWeight="600" fontFamily="var(--font-jetbrains-mono), monospace">DISP B</text>
        </g>
      </svg>

      {/* Telemetry metadata footer */}
      <div className="w-full max-w-[260px] flex items-center justify-between text-[8px] font-mono text-muted-foreground pt-1 tracking-widest uppercase">
        <span>ESTADO CONTÍNUO</span>
        <span className="text-brand-gold">RETOMA EXACTA</span>
        <span>ZERO CONFLICT</span>
      </div>
    </div>
  );
}

/**
 * Graphic 003: Offline Engine
 * Demonstrates local autonomous compute core, air-gapped deterministic operation.
 */
export function OfflineEngineGraphic() {
  return (
    <div className="relative w-full h-28 my-3 flex flex-col justify-center items-center select-none overflow-hidden">
      {/* Background timeline markers */}
      <div className="absolute inset-0 flex justify-between px-3 py-2 opacity-15 pointer-events-none" aria-hidden="true">
        <div className="h-full w-px border-l border-dashed border-border" />
        <div className="h-full w-px border-l border-dashed border-border" />
        <div className="h-full w-px border-l border-dashed border-border" />
      </div>

      <svg viewBox="0 0 250 76" className="w-full h-full max-w-[260px] overflow-visible relative z-10" fill="none">
        {/* External Network / Cloud Cutoff on the Left */}
        <g className="opacity-50">
          <circle cx="28" cy="38" r="14" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" fill="var(--surface)" />
          {/* Disconnect indicator */}
          <line x1="20" y1="30" x2="36" y2="46" stroke="#D9A62E" strokeWidth="1.5" />
          <text x="15" y="60" fill="var(--muted-foreground)" fontSize="6" fontFamily="var(--font-jetbrains-mono), monospace">CLOUD: OFF</text>
        </g>

        {/* Air-gap Isolation Boundary */}
        <line x1="56" y1="14" x2="56" y2="62" stroke="currentColor" strokeOpacity="0.25" strokeWidth="1" strokeDasharray="3 3" />
        <text x="50" y="10" fill="currentColor" strokeOpacity="0.3" fontSize="8" fontFamily="monospace">+</text>
        <text x="50" y="70" fill="currentColor" strokeOpacity="0.3" fontSize="8" fontFamily="monospace">+</text>

        {/* Autonomous Local Execution Unit (Center-Right) */}
        <g>
          {/* Outer Shield Housing */}
          <rect x="74" y="14" width="162" height="48" rx="2" stroke="#D9A62E" strokeWidth="1.2" fill="var(--surface)" />
          
          {/* Local Vector Storage */}
          <rect x="84" y="24" width="44" height="28" rx="1.5" stroke="currentColor" strokeOpacity="0.3" strokeWidth="1" fill="none" />
          <line x1="90" y1="30" x2="114" y2="30" stroke="currentColor" strokeOpacity="0.4" strokeWidth="1" />
          <line x1="90" y1="36" x2="120" y2="36" stroke="#D9A62E" strokeWidth="1.2" />
          <line x1="90" y1="42" x2="108" y2="42" stroke="currentColor" strokeOpacity="0.4" strokeWidth="1" />
          <text x="88" y="20" fill="#D9A62E" fontSize="5.5" fontWeight="600" fontFamily="var(--font-jetbrains-mono), monospace">LOCAL DB</text>

          {/* Direct Pipeline connection */}
          <path d="M 128 38 L 148 38" stroke="#D9A62E" strokeWidth="1.5" />

          {/* Autonomous Inference Core */}
          <rect x="148" y="22" width="76" height="32" rx="1.5" stroke="#D9A62E" strokeWidth="1.5" fill="var(--surface)" />
          <text x="156" y="34" fill="var(--foreground)" fontSize="7" fontWeight="700" fontFamily="var(--font-jetbrains-mono), monospace">
            100% LOCAL
          </text>
          <text x="156" y="46" fill="#D9A62E" fontSize="6" fontWeight="600" fontFamily="var(--font-jetbrains-mono), monospace">
            MOTOR ATIVO
          </text>
          <circle cx="212" cy="38" r="2" fill="#D9A62E" className="animate-pulse" />
        </g>

        {/* Local Memory Loop Pulse */}
        <motion.circle
          cx="128"
          cy="38"
          r="2.5"
          fill="#D9A62E"
          animate={{
            cx: [84, 128, 148, 212],
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>

      {/* Telemetry metadata footer */}
      <div className="w-full max-w-[260px] flex items-center justify-between text-[8px] font-mono text-muted-foreground pt-1 tracking-widest uppercase">
        <span>REDE DESLIGADA</span>
        <span className="text-brand-gold">AIR-GAPPED // RUST</span>
        <span>SEM SERVIDOR</span>
      </div>
    </div>
  );
}
