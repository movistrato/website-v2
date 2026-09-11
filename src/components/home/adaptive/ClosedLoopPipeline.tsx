"use client";

import { motion } from 'framer-motion';

export interface PipelineStage {
  id: string;
  label: string;
  tag: string;
  metric: string;
  description: string;
}

interface ClosedLoopPipelineProps {
  stages: PipelineStage[];
  activeIndex: number;
  onSelectStage: (index: number) => void;
}

export function ClosedLoopPipeline({
  stages,
  activeIndex,
  onSelectStage
}: ClosedLoopPipelineProps) {
  const currentStage = stages[activeIndex];

  return (
    <div className="w-full flex flex-col gap-6 pt-2">
      {/* Circuit Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-border/20 font-mono text-[9px] tracking-widest uppercase text-muted-foreground">
        <span className="flex items-center gap-2 text-foreground font-semibold">
          <span className="w-1.5 h-1.5 bg-brand-gold" />
          CIRCUITO DETERMINÍSTICO DE FEEDBACK // 6 ESTÁGIOS
        </span>
        <span className="text-brand-gold font-medium">
          NÓ SELECIONADO: [ 0{activeIndex + 1} // {currentStage.label} ]
        </span>
      </div>

      {/* 6 Stations Container with Laser Conduit */}
      <div className="relative w-full">
        {/* Desktop Connecting Conduit */}
        <div className="hidden lg:block absolute left-[4%] right-[4%] top-4 -translate-y-1/2 h-[1.5px] bg-border/40 origin-left z-0 overflow-hidden">
          <motion.div
            className="w-28 h-full bg-[linear-gradient(90deg,transparent,#D9A62E,transparent)] shadow-[0_0_10px_#D9A62E]"
            animate={{
              x: ['-100%', '1200%'],
            }}
            transition={{
              repeat: Infinity,
              duration: 4.2,
              ease: 'linear',
            }}
          />
        </div>

        {/* Mobile Connecting Conduit */}
        <div className="block lg:hidden absolute top-4 bottom-4 left-4 -translate-x-1/2 w-[1.5px] bg-border/40 origin-top z-0 overflow-hidden">
          <motion.div
            className="h-20 w-full bg-[linear-gradient(180deg,transparent,#D9A62E,transparent)] shadow-[0_0_10px_#D9A62E]"
            animate={{
              y: ['-100%', '600%'],
            }}
            transition={{
              repeat: Infinity,
              duration: 4.2,
              ease: 'linear',
            }}
          />
        </div>

        {/* The 6 Node Buttons */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between relative pl-9 lg:pl-0 gap-6 lg:gap-2">
          {stages.map((stage, idx) => {
            const isActive = idx === activeIndex;

            return (
              <button
                key={stage.id}
                type="button"
                onClick={() => onSelectStage(idx)}
                aria-pressed={isActive}
                aria-label={`Estágio 0${idx + 1}: ${stage.label}`}
                className="flex flex-row lg:flex-col items-center justify-start lg:justify-center gap-4 lg:gap-2.5 relative z-10 group w-full lg:w-auto text-left lg:text-center focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-gold cursor-pointer"
              >
                {/* Station Reticle Box */}
                <div className="relative">
                  {isActive && (
                    <span 
                      className="absolute inset-[-4px] border border-brand-gold/60 pointer-events-none animate-ping opacity-60" 
                      aria-hidden="true" 
                    />
                  )}

                  <div
                    className={`w-7 h-7 lg:w-8 lg:h-8 flex items-center justify-center transition-all duration-300 shrink-0 border relative ${
                      isActive
                        ? 'bg-brand-gold text-black border-brand-gold shadow-[0_0_16px_rgba(217,166,46,0.6)] scale-110'
                        : 'bg-surface/80 border-border/70 group-hover:border-brand-gold/60 text-muted-foreground'
                    }`}
                  >
                    {isActive ? (
                      <div className="w-2 h-2 bg-black rotate-45" />
                    ) : (
                      <span className="font-mono text-[9px] font-semibold tracking-tighter">
                        0{idx + 1}
                      </span>
                    )}
                  </div>
                </div>

                {/* Connecting subtle line for desktop */}
                <div 
                  className={`hidden lg:block w-px h-3 bg-gradient-to-b transition-colors duration-300 ${
                    isActive ? 'from-brand-gold' : 'from-border/40'
                  } to-transparent`} 
                  aria-hidden="true"
                />

                {/* Node Metadata & Label */}
                <div className="flex flex-col items-start lg:items-center gap-0.5">
                  <span
                    className={`font-mono text-[11px] lg:text-[10px] uppercase tracking-widest font-semibold transition-colors duration-300 ${
                      isActive ? 'text-brand-gold' : 'text-foreground/80 group-hover:text-foreground'
                    }`}
                  >
                    {stage.label}
                  </span>
                  <span
                    className={`font-mono text-[8px] uppercase tracking-wider px-1 py-0.2 transition-all duration-300 ${
                      isActive
                        ? 'bg-brand-gold/15 text-brand-gold border border-brand-gold/30'
                        : 'text-muted-foreground/60 group-hover:text-muted-foreground'
                    }`}
                  >
                    {stage.tag}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Stage Inspection Card (Architectural, Low-profile & Informative) */}
      <motion.div
        key={currentStage.id}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        className="mt-4 p-4 lg:p-5 border border-border/40 bg-surface/25 dark:bg-surface/10 backdrop-blur-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-1 h-full bg-brand-gold" aria-hidden="true" />
        
        <div className="flex flex-col gap-1 sm:max-w-[70%]">
          <div className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-widest text-muted-foreground">
            <span className="text-brand-gold font-semibold">
              PASSO 0{activeIndex + 1} DE 06
            </span>
            <span>·</span>
            <span>{currentStage.tag}</span>
          </div>
          <h4 className="font-sans text-sm sm:text-base font-medium text-foreground tracking-tight">
            {currentStage.label}: <span className="text-muted-foreground font-normal">{currentStage.description}</span>
          </h4>
        </div>

        <div className="flex sm:flex-col items-baseline sm:items-end justify-between sm:justify-center border-t sm:border-t-0 sm:border-l border-border/20 pt-2 sm:pt-0 sm:pl-5 shrink-0 font-mono text-[9px] uppercase tracking-widest">
          <span className="text-muted-foreground">MÉTRICA CHAVE</span>
          <span className="text-brand-gold font-semibold text-xs sm:text-sm">
            {currentStage.metric}
          </span>
        </div>
      </motion.div>
    </div>
  );
}
