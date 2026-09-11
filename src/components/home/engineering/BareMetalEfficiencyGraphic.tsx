"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';

export function BareMetalEfficiencyGraphic() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="w-full h-44 relative flex flex-col justify-between p-4 bg-surface/30 dark:bg-surface/10 border border-border/40 rounded-none overflow-hidden font-mono text-[9px] select-none group/schema transition-colors duration-500 hover:border-brand-gold/40"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
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
            ESQUEMA 03 // ELIMINAÇÃO DE RUNTIME
          </span>
        </div>
        <span className={`text-[8px] tracking-widest transition-colors duration-300 ${isHovered ? 'text-brand-gold' : 'text-muted-foreground/70'}`}>
          {isHovered ? 'BYPASS ATIVO' : 'ISO-METAL-03'}
        </span>
      </div>

      {/* Architecture Visual: Layer 1 (Product) -> Direct Bypass Pipe -> Layer 2 (OS / Bare Metal) */}
      <div className="relative z-10 my-auto flex flex-col gap-1.5 py-1">
        {/* Layer 1: Product Code */}
        <div className="flex items-center justify-between px-3 py-1.5 bg-background/85 border border-border/60">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-brand-gold" />
            <span className="text-foreground font-semibold tracking-wider text-[10px]">
              CAMADA DE PRODUTO
            </span>
          </div>
          <span className="text-[7.5px] text-brand-gold font-mono uppercase">
            LÓGICA NATIVA FARO
          </span>
        </div>

        {/* Middleware Ghost Layer: Crossed Out / Bypassed */}
        <div className="relative flex items-center justify-between px-3 py-1 border border-dashed border-border/40 bg-surface/10 text-muted-foreground/60 overflow-hidden">
          {/* Vertical Direct Bypass Conduit with Travelling Photon */}
          <div className="absolute left-6 top-[-10px] bottom-[-10px] w-0.5 bg-brand-gold z-20 shadow-[0_0_8px_#D9A62E]">
            <motion.div 
              className="w-full h-3 bg-white"
              animate={{ y: [-10, 30] }}
              transition={{ repeat: Infinity, duration: 1.4, ease: "linear" }}
            />
          </div>

          <span className="pl-6 text-[8px] tracking-wider line-through decoration-red-500/50">
            EMULADORES WEB // INTERMEDIÁRIOS DE RUNTIME
          </span>
          <span className="text-[7.5px] text-red-500/80 font-mono uppercase bg-red-500/10 px-1 py-0.2 border border-red-500/20">
            ELIMINADO
          </span>
        </div>

        {/* Layer 3: Bare Metal OS / Hardware */}
        <div className={`flex items-center justify-between px-3 py-1.5 border transition-all duration-300 bg-background/85 ${
          isHovered ? 'border-brand-gold/60 shadow-[0_0_15px_rgba(217,166,46,0.12)]' : 'border-brand-gold/30'
        }`}>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-emerald-500" />
            <span className="text-foreground font-semibold tracking-wider text-[10px]">
              SISTEMA OPERATIVO & HARDWARE
            </span>
          </div>
          <span className="text-[7.5px] text-emerald-500 font-mono uppercase font-medium">
            EXECUÇÃO DIRETA
          </span>
        </div>
      </div>

      {/* Footer bar */}
      <div className="flex items-center justify-between border-t border-border/25 pt-2 text-[8px] text-muted-foreground relative z-10">
        <span className="flex items-center gap-1.5 text-emerald-500 font-medium">
          <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
          Zero Custos de Emulação
        </span>
        <span className="text-muted-foreground/80 font-mono">
          CHAMADAS NATIVAS DO SISTEMA
        </span>
      </div>
    </div>
  );
}
