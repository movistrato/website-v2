"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface AdaptiveTelemetryCockpitProps {
  activeIndex: number;
  stageName: string;
}

export function AdaptiveTelemetryCockpit({ activeIndex, stageName }: AdaptiveTelemetryCockpitProps) {
  const [cycle, setCycle] = useState(4820);
  const [measuredLatency, setMeasuredLatency] = useState(8.3);

  // Simulate real-time continuous closed-loop telemetry updates
  useEffect(() => {
    const interval = setInterval(() => {
      setCycle((prev) => prev + 1);
      // Deterministic slight fluctuation around sub-16ms budget
      const nextLatency = Number((7.4 + Math.sin(Date.now() / 1200) * 2.2).toFixed(1));
      setMeasuredLatency(nextLatency);
    }, 1800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-px bg-border/40 border border-border/40 font-mono text-[10px] tracking-widest uppercase">
      {/* Box 1: LOOP STATUS */}
      <div className="bg-surface/40 dark:bg-surface/20 p-4 lg:p-5 flex flex-col justify-between gap-3 relative overflow-hidden group">
        {/* Subtle background glow */}
        <div 
          className="absolute -right-10 -bottom-10 w-28 h-28 bg-brand-gold/5 rounded-full blur-2xl pointer-events-none" 
          aria-hidden="true" 
        />

        <div className="flex items-center justify-between border-b border-border/20 pb-2">
          <span className="text-muted-foreground flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-brand-gold/70" />
            LOOP STATUS
          </span>
          <span className="text-[9px] text-muted-foreground/80 font-mono">
            SYNC: 120HZ
          </span>
        </div>

        <div className="flex items-baseline justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-foreground font-semibold tracking-wider text-xs sm:text-sm">
              ACTIVE CONTINUOUS
            </span>
          </div>

          <span className="text-brand-gold text-[9px] font-mono tracking-normal">
            CYCLE #{cycle.toLocaleString()}
          </span>
        </div>

        {/* 6 Stage Segmented Progress Indicator */}
        <div className="pt-2 border-t border-border/20 flex flex-col gap-1.5">
          <div className="flex items-center justify-between text-[8px] text-muted-foreground">
            <span>CIRCUITO ATIVO</span>
            <span className="text-brand-gold font-medium">
              ESTÁGIO 0{activeIndex + 1} // {stageName}
            </span>
          </div>
          <div className="grid grid-cols-6 gap-1 w-full" aria-hidden="true">
            {Array.from({ length: 6 }).map((_, idx) => {
              const isActive = idx === activeIndex;
              return (
                <div
                  key={idx}
                  className={`h-1.5 transition-all duration-300 ${
                    isActive
                      ? 'bg-brand-gold shadow-[0_0_8px_rgba(217,166,46,0.8)] scale-y-125'
                      : 'bg-border/60 dark:bg-border/40'
                  }`}
                />
              );
            })}
          </div>
        </div>
      </div>

      {/* Box 2: RESPOSTA ADAPTATIVA */}
      <div className="bg-surface/40 dark:bg-surface/20 p-4 lg:p-5 flex flex-col justify-between gap-3 relative overflow-hidden group">
        <div className="flex items-center justify-between border-b border-border/20 pb-2">
          <span className="text-muted-foreground flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-brand-gold/70" />
            RESPOSTA ADAPTATIVA
          </span>
          <span className="text-[9px] text-brand-gold font-mono">
            {measuredLatency}MS ATUAL
          </span>
        </div>

        <div className="flex items-baseline justify-between gap-2">
          <span className="text-foreground font-semibold tracking-wider text-xs sm:text-sm">
            &lt; 16MS DETERMINÍSTICO
          </span>
          <span className="text-[9px] text-muted-foreground font-mono">
            BUDGET: 16.6MS
          </span>
        </div>

        {/* Compact Micro Oscilloscope Latency Meter */}
        <div className="pt-2 border-t border-border/20 flex flex-col gap-1">
          <div className="relative w-full h-7 bg-background/50 border border-border/30 overflow-hidden flex items-center">
            {/* 16.6ms Ceiling Benchmark Line */}
            <div 
              className="absolute left-0 right-0 top-1 border-b border-dashed border-red-500/40 pointer-events-none flex justify-end pr-1"
              title="16.6ms frame budget limit"
            >
              <span className="text-[7px] text-red-500/70 font-mono tracking-tighter">MAX 16.6ms</span>
            </div>

            {/* Dynamic Waveform Graph */}
            <svg 
              className="w-full h-full text-brand-gold overflow-visible" 
              viewBox="0 0 200 30" 
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <motion.path
                d="M 0,20 L 20,20 L 35,12 L 45,22 L 60,18 L 75,9 L 85,21 L 105,15 L 120,22 L 135,11 L 150,19 L 165,13 L 180,21 L 200,16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0.9, opacity: 0.8 }}
                animate={{
                  opacity: [0.7, 1, 0.7],
                  strokeDashoffset: [0, -30]
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2.5,
                  ease: "linear"
                }}
              />
            </svg>

            {/* Scanning Laser Dot */}
            <motion.div
              className="absolute top-0 bottom-0 w-1 bg-brand-gold shadow-[0_0_8px_#D9A62E] pointer-events-none"
              animate={{
                left: ['0%', '100%']
              }}
              transition={{
                repeat: Infinity,
                duration: 2.5,
                ease: "linear"
              }}
            />
          </div>

          <div className="flex items-center justify-between text-[8px] text-muted-foreground/90">
            <span>ZERO-DELAY PIPELINE</span>
            <span className="text-emerald-500 font-medium flex items-center gap-1">
              <span className="w-1 h-1 bg-emerald-500 rounded-full" />
              0 JITTER / NO DROPPED FRAMES
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
