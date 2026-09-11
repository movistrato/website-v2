"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';

export function ZeroTrustStateGraphic() {
  const [pulseTrigger, setPulseTrigger] = useState(0);

  const handleTriggerPulse = () => {
    setPulseTrigger((prev) => prev + 1);
  };

  return (
    <div 
      className="w-full h-44 relative flex flex-col justify-between p-4 bg-surface/30 dark:bg-surface/10 border border-border/40 rounded-none overflow-hidden font-mono text-[9px] select-none group/schema transition-colors duration-500 hover:border-brand-gold/40 cursor-pointer"
      onClick={handleTriggerPulse}
      title="Clica para disparar uma transição de estado determinística"
    >
      {/* Precision Blueprint Grid */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:18px_18px] opacity-[0.035] dark:opacity-[0.05] pointer-events-none" 
        aria-hidden="true" 
      />

      {/* Header bar */}
      <div className="flex items-center justify-between text-muted-foreground border-b border-border/25 pb-2 relative z-10">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-brand-gold rotate-45" />
          <span className="text-foreground font-semibold tracking-wider text-[10px]">
            ESQUEMA 02 // PIPELINE DETERMINÍSTICO
          </span>
        </div>
        <span className="text-[8px] text-brand-gold tracking-widest font-mono">
          DISPARAR TRANSIÇÃO ↗
        </span>
      </div>

      {/* Architecture Visual: ACTION -> REDUCER -> IMMUTABLE STATE */}
      <div className="relative z-10 my-auto flex items-center justify-between gap-2 py-2">
        {/* Step 1: Explicit Action */}
        <div className="flex-1 p-2.5 border border-border/60 bg-background/80 flex flex-col gap-0.5 relative overflow-hidden">
          <span className="text-[7.5px] text-muted-foreground uppercase tracking-widest">01 / ENTRADA</span>
          <span className="text-foreground font-semibold tracking-wider text-[10px]">AÇÃO</span>
          <span className="text-[7.5px] text-muted-foreground/80">Intenção Explícita</span>
        </div>

        {/* Direction Connector 1 */}
        <div className="relative w-7 h-px bg-border/80 flex items-center justify-center shrink-0">
          <motion.div 
            key={`p1-${pulseTrigger}`}
            className="w-1.5 h-1.5 bg-brand-gold rotate-45 shadow-[0_0_8px_#D9A62E]"
            initial={{ x: -14, opacity: 0 }}
            animate={{ x: 14, opacity: [0, 1, 0] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
          />
        </div>

        {/* Step 2: Pure Function Transition */}
        <div className="flex-1 p-2.5 border border-brand-gold/50 bg-brand-gold/5 flex flex-col gap-0.5 relative shadow-[0_0_12px_rgba(217,166,46,0.08)]">
          <span className="text-[7.5px] text-brand-gold uppercase tracking-widest">02 / PROCESSO</span>
          <span className="text-brand-gold font-semibold tracking-wider text-[10px]">TRANSIÇÃO</span>
          <span className="text-[7.5px] text-brand-gold/80">Função Pura</span>
        </div>

        {/* Direction Connector 2 */}
        <div className="relative w-7 h-px bg-border/80 flex items-center justify-center shrink-0">
          <motion.div 
            key={`p2-${pulseTrigger}`}
            className="w-1.5 h-1.5 bg-brand-gold rotate-45 shadow-[0_0_8px_#D9A62E]"
            initial={{ x: -14, opacity: 0 }}
            animate={{ x: 14, opacity: [0, 1, 0] }}
            transition={{ duration: 1.2, delay: 0.6, repeat: Infinity, ease: "linear" }}
          />
        </div>

        {/* Step 3: Immutable Verified State */}
        <div className="flex-1 p-2.5 border border-border/60 bg-background/80 flex flex-col gap-0.5 text-right relative overflow-hidden">
          <span className="text-[7.5px] text-muted-foreground uppercase tracking-widest">03 / RESULTADO</span>
          <span className="text-foreground font-semibold tracking-wider text-[10px]">ESTADO</span>
          <span className="text-[7.5px] text-emerald-500 font-medium">Imutável</span>
        </div>
      </div>

      {/* Footer bar */}
      <div className="flex items-center justify-between border-t border-border/25 pt-2 text-[8px] text-muted-foreground relative z-10">
        <span className="flex items-center gap-1.5 text-emerald-500 font-medium">
          <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
          Zero Efeitos Secundários Ocultos
        </span>
        <span className="text-muted-foreground/80 font-mono">
          FLUXO UNIDIRECIONAL 100%
        </span>
      </div>
    </div>
  );
}
