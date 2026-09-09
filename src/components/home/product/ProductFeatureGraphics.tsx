'use client';

import { motion } from 'framer-motion';

/**
 * Figure 1: Contextual Engine & Knowledge Graph
 * Demonstrates deterministic lexical retention analysis, memory node lattice and recall feedback.
 */
export function ContextualEngineGraphic() {
  return (
    <div className="relative w-full h-32 my-4 flex flex-col justify-center items-center select-none overflow-hidden">
      {/* Background Matrix Grid */}
      <div className="absolute inset-0 flex flex-col justify-between py-2 opacity-15 pointer-events-none" aria-hidden="true">
        <div className="w-full h-px border-b border-dashed border-border" />
        <div className="w-full h-px border-b border-dashed border-border" />
        <div className="w-full h-px border-b border-dashed border-border" />
      </div>

      <svg viewBox="0 0 260 84" className="w-full h-full max-w-[270px] overflow-visible relative z-10" fill="none">
        {/* Memory Lattice Interconnecting Lines */}
        <path
          d="M 30 42 L 80 20 L 130 50 L 180 24 L 230 42 M 80 20 L 130 20 L 180 50 M 30 42 L 80 62 L 130 50 L 180 62 L 230 42"
          stroke="currentColor"
          strokeOpacity="0.25"
          strokeWidth="1"
          strokeDasharray="2 3"
        />

        {/* Highlighted Recall Synaptic Vector */}
        <motion.path
          d="M 30 42 L 80 20 L 130 50 L 180 24 L 230 42"
          stroke="#D9A62E"
          strokeWidth="1.75"
          strokeLinecap="round"
          initial={{ pathLength: 0.3 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
        />

        {/* Traveling Synaptic Energy Pulse */}
        <motion.circle
          cx="80"
          cy="20"
          r="3"
          fill="#D9A62E"
          animate={{
            cx: [30, 80, 130, 180, 230],
            cy: [42, 20, 50, 24, 42],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />

        {/* Node 1: Vocabulary Input */}
        <circle cx="30" cy="42" r="3" fill="var(--surface)" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="30" cy="42" r="1.5" fill="#D9A62E" />

        {/* Node 2: Decay / Frequency Analysis */}
        <circle cx="80" cy="20" r="3.5" fill="var(--surface)" stroke="#D9A62E" strokeWidth="1.5" />
        <circle cx="80" cy="62" r="2.5" fill="var(--surface)" stroke="currentColor" strokeOpacity="0.4" strokeWidth="1" />

        {/* Node 3: Deterministic Core (Center) */}
        <rect x="123" y="43" width="14" height="14" rx="2" fill="var(--surface)" stroke="#D9A62E" strokeWidth="1.5" />
        <circle cx="130" cy="50" r="2" fill="#D9A62E" className="animate-pulse" />

        {/* Node 4: Dynamic Rebuild */}
        <circle cx="180" cy="24" r="3.5" fill="var(--surface)" stroke="#D9A62E" strokeWidth="1.5" />
        <circle cx="180" cy="62" r="2.5" fill="var(--surface)" stroke="currentColor" strokeOpacity="0.4" strokeWidth="1" />

        {/* Node 5: Output Session */}
        <circle cx="230" cy="42" r="4" fill="var(--surface)" stroke="#D9A62E" strokeWidth="1.5" />
        <circle cx="230" cy="42" r="2" fill="#D9A62E" />
      </svg>

      {/* Telemetry metadata footer */}
      <div className="w-full max-w-[270px] flex items-center justify-between text-[8px] font-mono text-muted-foreground pt-1 tracking-widest uppercase">
        <span>VOCABULÁRIO // ENTRADA</span>
        <span className="text-brand-gold">RETENÇÃO REAL-TIME</span>
        <span>SESSÃO DETERMINÍSTICA</span>
      </div>
    </div>
  );
}

/**
 * Figure 2: Native Rendering & Bare-Metal Architecture
 * Demonstrates bypass of web-wrappers and direct execution on Windows DirectX and Android Vulkan/NDK.
 */
export function NativeRenderingGraphic() {
  return (
    <div className="relative w-full h-32 my-4 flex flex-col justify-center items-center select-none overflow-hidden">
      {/* Background timeline markers */}
      <div className="absolute inset-0 flex justify-between px-3 py-2 opacity-15 pointer-events-none" aria-hidden="true">
        <div className="h-full w-px border-l border-dashed border-border" />
        <div className="h-full w-px border-l border-dashed border-border" />
        <div className="h-full w-px border-l border-dashed border-border" />
        <div className="h-full w-px border-l border-dashed border-border" />
      </div>

      <svg viewBox="0 0 260 84" className="w-full h-full max-w-[270px] overflow-visible relative z-10" fill="none">
        {/* Left: Dual Native Driver Ports */}
        {/* Port 1: Windows DirectX 12 */}
        <g>
          <rect x="14" y="16" width="46" height="20" rx="1.5" stroke="#D9A62E" strokeOpacity="0.8" strokeWidth="1.2" fill="var(--surface)" />
          <text x="21" y="29" fill="#D9A62E" fontSize="7" fontWeight="600" fontFamily="var(--font-jetbrains-mono), monospace" letterSpacing="0.08em">
            DX12
          </text>
          <circle cx="52" cy="26" r="1.5" fill="#D9A62E" />
          {/* Conduit trace merging to center bus */}
          <path d="M 60 26 L 82 26 L 96 42" stroke="#D9A62E" strokeWidth="1.2" strokeOpacity="0.7" />
        </g>

        {/* Port 2: Android Vulkan NDK */}
        <g>
          <rect x="14" y="48" width="46" height="20" rx="1.5" stroke="#D9A62E" strokeOpacity="0.8" strokeWidth="1.2" fill="var(--surface)" />
          <text x="20" y="61" fill="#D9A62E" fontSize="7" fontWeight="600" fontFamily="var(--font-jetbrains-mono), monospace" letterSpacing="0.08em">
            VULKAN
          </text>
          <circle cx="52" cy="58" r="1.5" fill="#D9A62E" />
          {/* Conduit trace merging to center bus */}
          <path d="M 60 58 L 82 58 L 96 42" stroke="#D9A62E" strokeWidth="1.2" strokeOpacity="0.7" />
        </g>

        {/* Center: Hardware Direct Bus Channel */}
        <line x1="96" y1="42" x2="134" y2="42" stroke="#D9A62E" strokeWidth="2" strokeLinecap="round" />

        {/* Center-Right: 120 FPS Silicon Raster Die */}
        <g>
          <rect x="134" y="20" width="48" height="44" rx="2" stroke="currentColor" strokeOpacity="0.35" strokeWidth="1" fill="var(--surface)" />
          <rect x="137" y="23" width="42" height="38" rx="1" stroke="#D9A62E" strokeOpacity="0.4" strokeWidth="0.75" strokeDasharray="2 2" fill="none" />
          
          {/* Readout */}
          <text x="143" y="38" fill="var(--foreground)" fontSize="8.5" fontWeight="700" fontFamily="var(--font-jetbrains-mono), monospace">
            120
          </text>
          <text x="162" y="38" fill="#D9A62E" fontSize="6.5" fontWeight="600" fontFamily="var(--font-jetbrains-mono), monospace">
            FPS
          </text>
          <text x="141" y="52" fill="#D9A62E" fontSize="6" fontWeight="500" fontFamily="var(--font-jetbrains-mono), monospace">
            8.33ms
          </text>

          {/* Corner tick marks */}
          <line x1="134" y1="20" x2="137" y2="20" stroke="#D9A62E" strokeWidth="1.5" />
          <line x1="134" y1="20" x2="134" y2="23" stroke="#D9A62E" strokeWidth="1.5" />
          <line x1="182" y1="64" x2="179" y2="64" stroke="#D9A62E" strokeWidth="1.5" />
          <line x1="182" y1="64" x2="182" y2="61" stroke="#D9A62E" strokeWidth="1.5" />
        </g>

        {/* Traveling Frame Pulse through Bus */}
        <motion.circle
          cx="96"
          cy="42"
          r="2.5"
          fill="#D9A62E"
          animate={{
            cx: [60, 96, 134, 182, 238],
            opacity: [0.2, 1, 1, 1, 0],
          }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
        />

        {/* Right: Triple-Buffer Swap Chain Plates */}
        {/* Frame Plate 0 (Back Buffer) */}
        <g className="opacity-40">
          <rect x="194" y="26" width="12" height="32" rx="1.5" stroke="currentColor" strokeWidth="1" fill="var(--surface)" />
          <line x1="197" y1="32" x2="203" y2="32" stroke="currentColor" strokeWidth="1" />
        </g>

        {/* Frame Plate 1 (Middle Buffer) */}
        <g className="opacity-70">
          <rect x="210" y="24" width="12" height="36" rx="1.5" stroke="currentColor" strokeWidth="1" fill="var(--surface)" />
          <line x1="213" y1="30" x2="219" y2="30" stroke="currentColor" strokeWidth="1" />
          <line x1="213" y1="35" x2="219" y2="35" stroke="#D9A62E" strokeWidth="1" />
        </g>

        {/* Frame Plate 2 (Active Scanout Buffer - 120Hz Output) */}
        <g>
          <rect x="226" y="20" width="14" height="44" rx="2" stroke="#D9A62E" strokeWidth="1.5" fill="var(--surface)" />
          <line x1="230" y1="28" x2="236" y2="28" stroke="#D9A62E" strokeWidth="1.2" />
          <line x1="230" y1="34" x2="236" y2="34" stroke="#D9A62E" strokeWidth="1.2" />
          <circle cx="233" cy="48" r="1.5" fill="#D9A62E" className="animate-pulse" />
        </g>

        {/* Output scan beam */}
        <line x1="244" y1="24" x2="248" y2="24" stroke="#D9A62E" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="244" y1="42" x2="252" y2="42" stroke="#D9A62E" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="244" y1="60" x2="248" y2="60" stroke="#D9A62E" strokeWidth="1.5" strokeLinecap="round" />
      </svg>

      {/* Telemetry metadata footer */}
      <div className="w-full max-w-[270px] flex items-center justify-between text-[8px] font-mono text-muted-foreground pt-1 tracking-widest uppercase">
        <span>WIN32 + ANDROID NDK</span>
        <span className="text-brand-gold">8.33MS // BUFFER</span>
        <span>120 FPS DISPLAY</span>
      </div>
    </div>
  );
}

/**
 * Figure 3: Adaptive Design & UI Scaffolding Dissolve
 * Demonstrates visual crutches fading away as fluency matures, transitioning into raw focus.
 */
export function AdaptiveDesignGraphic() {
  return (
    <div className="relative w-full h-32 my-4 flex flex-col justify-center items-center select-none overflow-hidden">
      <svg viewBox="0 0 260 84" className="w-full h-full max-w-[270px] overflow-visible relative z-10" fill="none">
        {/* Evolution Track Axis */}
        <line x1="20" y1="72" x2="240" y2="72" stroke="currentColor" strokeOpacity="0.2" strokeWidth="1" />

        {/* Stage 1: Level 01 (Heavy Scaffolding / Guides) */}
        <g className="opacity-75">
          <rect x="20" y="10" width="60" height="52" rx="2" stroke="currentColor" strokeOpacity="0.3" strokeWidth="1" fill="var(--surface)" />
          {/* Helper Subtitle lines */}
          <line x1="28" y1="18" x2="52" y2="18" stroke="#D9A62E" strokeWidth="1.5" />
          <line x1="28" y1="24" x2="68" y2="24" stroke="currentColor" strokeOpacity="0.3" strokeWidth="1" />
          <line x1="28" y1="30" x2="60" y2="30" stroke="currentColor" strokeOpacity="0.3" strokeWidth="1" />
          {/* Phonetic guide boxes */}
          <rect x="28" y="38" width="18" height="6" rx="1" fill="#D9A62E" fillOpacity="0.2" />
          <rect x="49" y="38" width="18" height="6" rx="1" fill="currentColor" fillOpacity="0.1" />
          <text x="32" y="56" fill="currentColor" strokeOpacity="0.6" fontSize="6" fontFamily="var(--font-jetbrains-mono), monospace">LVL 01</text>
        </g>

        {/* Transition Vector 1 -> 2 */}
        <path d="M 86 36 L 98 36" stroke="#D9A62E" strokeWidth="1" strokeDasharray="2 2" />

        {/* Stage 2: Level 05 (Scaffolding Fading Out) */}
        <g className="opacity-85">
          <rect x="100" y="10" width="60" height="52" rx="2" stroke="currentColor" strokeOpacity="0.4" strokeWidth="1" fill="var(--surface)" />
          <line x1="108" y1="18" x2="136" y2="18" stroke="#D9A62E" strokeWidth="1.5" />
          {/* Faded guides */}
          <line x1="108" y1="26" x2="144" y2="26" stroke="currentColor" strokeOpacity="0.2" strokeWidth="1" strokeDasharray="2 2" />
          <line x1="108" y1="34" x2="132" y2="34" stroke="currentColor" strokeOpacity="0.1" strokeWidth="1" strokeDasharray="2 2" />
          <text x="112" y="56" fill="#D9A62E" fontSize="6" fontFamily="var(--font-jetbrains-mono), monospace">LVL 05</text>
        </g>

        {/* Transition Vector 2 -> 3 */}
        <path d="M 166 36 L 178 36" stroke="#D9A62E" strokeWidth="1.5" />
        <polygon points="177,34 181,36 177,38" fill="#D9A62E" />

        {/* Stage 3: Level 10 (Raw Challenge / Pure Focus) */}
        <g>
          <rect x="180" y="10" width="60" height="52" rx="2" stroke="#D9A62E" strokeWidth="1.5" fill="var(--surface)" />
          {/* Pure Bold Editorial Word - Zero Crutches */}
          <rect x="188" y="24" width="44" height="6" rx="1" fill="#D9A62E" />
          <circle cx="210" cy="42" r="3" fill="#D9A62E" className="animate-pulse" />
          <text x="192" y="56" fill="#D9A62E" fontWeight="700" fontSize="6" fontFamily="var(--font-jetbrains-mono), monospace">DESAFIO CRU</text>
        </g>
      </svg>

      {/* Telemetry metadata footer */}
      <div className="w-full max-w-[270px] flex items-center justify-between text-[8px] font-mono text-muted-foreground pt-1 tracking-widest uppercase">
        <span>ANDAMENTO GUIADO</span>
        <span className="text-brand-gold">DEGRADAÇÃO VISUAL</span>
        <span>IMERSÃO PURA</span>
      </div>
    </div>
  );
}
