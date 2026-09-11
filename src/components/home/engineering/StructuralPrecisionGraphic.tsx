"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';

export function StructuralPrecisionGraphic() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="w-full h-44 relative flex flex-col justify-between p-4 bg-surface/30 dark:bg-surface/10 border border-border/40 rounded-none overflow-hidden font-mono text-[9px] select-none group/schema transition-colors duration-500 hover:border-brand-gold/40"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Precision Blueprint Grid Background */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:18px_18px] opacity-[0.035] dark:opacity-[0.05] pointer-events-none" 
        aria-hidden="true" 
      />

      {/* Header bar of schema */}
      <div className="flex items-center justify-between text-muted-foreground border-b border-border/25 pb-2 relative z-10">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-brand-gold rotate-45" />
          <span className="text-foreground font-semibold tracking-wider text-[10px]">
            ESQUEMA 01 // FRONTEIRAS SELADAS
          </span>
        </div>
        <span className={`text-[8px] tracking-widest transition-colors duration-300 ${isHovered ? 'text-brand-gold' : 'text-muted-foreground/70'}`}>
          {isHovered ? 'CONTRATO ATIVO' : 'ISO-STRUCT-01'}
        </span>
      </div>

      {/* Architecture Visual: Module A <== Strict Typed Contract Bridge ==> Module B */}
      <div className="relative z-10 my-auto flex items-center justify-between gap-3 py-2">
        {/* Module A: Domain Logic */}
        <div className={`flex-1 p-2.5 border transition-all duration-300 flex flex-col gap-1 bg-background/80 ${
          isHovered ? 'border-brand-gold/50 shadow-[0_0_15px_rgba(217,166,46,0.1)]' : 'border-border/60'
        }`}>
          <div className="flex items-center justify-between">
            <span className="text-[7.5px] text-muted-foreground uppercase tracking-widest">MÓDULO A</span>
            <span className="w-1 h-1 bg-brand-gold rounded-full" />
          </div>
          <span className="text-foreground font-semibold tracking-wider text-[10px]">
            DOMÍNIO
          </span>
          <span className="text-[7.5px] text-muted-foreground">
            Lógica de Negócio Isolada
          </span>
        </div>

        {/* Contract Conduit with Laser Pulse */}
        <div className="flex flex-col items-center justify-center px-1 shrink-0 relative w-24">
          <span className="text-[7px] text-brand-gold font-mono uppercase tracking-wider mb-1">
            CONTRATO ESTRITO
          </span>

          {/* Conduit Line */}
          <div className="w-full h-px bg-border/80 relative flex items-center justify-center overflow-hidden">
            {/* Travelling Photon */}
            <motion.div 
              className="absolute h-full w-8 bg-[linear-gradient(90deg,transparent,#D9A62E,transparent)] shadow-[0_0_8px_#D9A62E]"
              animate={{ x: ['-60px', '60px'] }}
              transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
            />
            {/* Center Lock Reticle */}
            <div className={`w-2 h-2 border transition-all duration-300 rotate-45 z-10 ${
              isHovered ? 'border-brand-gold bg-brand-gold scale-110 shadow-[0_0_8px_#D9A62E]' : 'border-brand-gold/60 bg-background'
            }`} />
          </div>

          <span className="text-[7px] text-muted-foreground/80 tracking-tight mt-1">
            Tipagem Pura // Sem Leak
          </span>
        </div>

        {/* Module B: Presentation Interface */}
        <div className={`flex-1 p-2.5 border transition-all duration-300 flex flex-col gap-1 text-right bg-background/80 ${
          isHovered ? 'border-brand-gold/50 shadow-[0_0_15px_rgba(217,166,46,0.1)]' : 'border-border/60'
        }`}>
          <div className="flex items-center justify-between flex-row-reverse">
            <span className="text-[7.5px] text-muted-foreground uppercase tracking-widest">MÓDULO B</span>
            <span className="w-1 h-1 bg-brand-gold rounded-full" />
          </div>
          <span className="text-foreground font-semibold tracking-wider text-[10px]">
            INTERFACE
          </span>
          <span className="text-[7.5px] text-muted-foreground">
            Renderização Desacoplada
          </span>
        </div>
      </div>

      {/* Footer bar with architecture guarantee */}
      <div className="flex items-center justify-between border-t border-border/25 pt-2 text-[8px] text-muted-foreground relative z-10">
        <span className="flex items-center gap-1.5 text-emerald-500 font-medium">
          <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
          Zero Acoplamento Circular
        </span>
        <span className="text-muted-foreground/80 font-mono">
          CONTRATOS AUDITADOS
        </span>
      </div>
    </div>
  );
}
