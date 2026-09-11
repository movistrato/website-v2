'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';

type EngineMode = 'contextual' | 'native' | 'adaptive';

export function FaroInteractiveEngine() {
  const t = useTranslations('Product');
  const [activeMode, setActiveMode] = useState<EngineMode>('contextual');

  // Interactive state for Mode 1 (Contextual Engine recall simulation)
  const [isSimulatingRecall, setIsSimulatingRecall] = useState(false);
  const [recallScore, setRecallScore] = useState(42);

  // Interactive state for Mode 3 (Adaptive Level Slider)
  const [fluencyLevel, setFluencyLevel] = useState<1 | 5 | 10>(1);

  const handleSimulateRecall = () => {
    if (isSimulatingRecall) return;
    setIsSimulatingRecall(true);
    setTimeout(() => {
      setRecallScore(94);
      setIsSimulatingRecall(false);
    }, 900);
  };

  const modes: { id: EngineMode; index: string; label: string; title: string; body: string }[] = [
    {
      id: 'contextual',
      index: '01',
      label: 'ALGORITMO',
      title: t('features.f1_title'),
      body: t('features.f1_body'),
    },
    {
      id: 'native',
      index: '02',
      label: 'HARDWARE BARE-METAL',
      title: t('features.f2_title'),
      body: t('features.f2_body'),
    },
    {
      id: 'adaptive',
      index: '03',
      label: 'UI PROGRESSIVA',
      title: t('features.f3_title'),
      body: t('features.f3_body'),
    },
  ];

  return (
    <div className="w-full mt-10 border border-border/50 bg-surface/20 dark:bg-surface/10 backdrop-blur-md relative overflow-hidden shadow-lg">
      
      {/* Precision Corner Accents */}
      <div className="absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-brand-gold/70 pointer-events-none z-20" aria-hidden="true" />
      <div className="absolute top-0 right-0 w-3 h-3 border-r-2 border-t-2 border-brand-gold/70 pointer-events-none z-20" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-3 h-3 border-l-2 border-b-2 border-brand-gold/70 pointer-events-none z-20" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 border-brand-gold/70 pointer-events-none z-20" aria-hidden="true" />

      {/* Top Architecture Mode Selector Tabs */}
      <div className="grid grid-cols-1 md:grid-cols-3 border-b border-border/40 bg-surface/40 dark:bg-surface/20">
        {modes.map((mode) => {
          const isActive = activeMode === mode.id;
          return (
            <button
              key={mode.id}
              onClick={() => setActiveMode(mode.id)}
              className={`group relative p-5 lg:p-6 text-left flex flex-col gap-2 transition-all duration-300 focus-visible:outline-none ${
                isActive
                  ? 'bg-background/90 text-foreground'
                  : 'text-muted-foreground hover:text-foreground hover:bg-surface/30'
              }`}
            >
              {/* Active Golden Highlighter Line */}
              {isActive && (
                <motion.div
                  layoutId="activeEngineTab"
                  className="absolute top-0 left-0 right-0 h-[2px] bg-brand-gold shadow-[0_0_12px_#D9A62E]"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}

              <div className="flex items-center justify-between">
                <span className="font-mono text-[9px] tracking-widest uppercase text-brand-gold font-semibold flex items-center gap-2">
                  <span className={`w-1.5 h-1.5 rounded-none ${isActive ? 'bg-brand-gold animate-pulse' : 'bg-muted-foreground/40'}`} />
                  {mode.index} // {mode.label}
                </span>
                {isActive && (
                  <span className="font-mono text-[8px] uppercase tracking-wider text-brand-gold bg-brand-gold/10 px-1.5 py-0.5 border border-brand-gold/20">
                    ATIVO
                  </span>
                )}
              </div>

              <h3 className="font-sans text-sm lg:text-base font-semibold tracking-wide uppercase">
                {mode.title}
              </h3>
            </button>
          );
        })}
      </div>

      {/* Main Interactive Stage Body: 2-Column Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[360px]">
        
        {/* LEFT: Deep Narrative & Technical Principles */}
        <div className="col-span-1 lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-border/40 bg-surface/20 dark:bg-surface/10">
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-2 font-mono text-[9px] tracking-widest uppercase text-muted-foreground">
              <span>FARO ENGINE SPECIFICATION</span>
              <span>·</span>
              <span className="text-brand-gold">NATIVE RUNTIME</span>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeMode}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col gap-4"
              >
                <h4 className="font-display text-2xl lg:text-3xl tracking-tight text-foreground">
                  {modes.find((m) => m.id === activeMode)?.title}
                </h4>
                <p className="font-sans text-sm lg:text-[15px] text-foreground/80 dark:text-foreground/75 leading-relaxed">
                  {modes.find((m) => m.id === activeMode)?.body}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dynamic Technical Metric Tag */}
          <div className="pt-6 mt-6 border-t border-border/30 flex items-center justify-between text-[9px] font-mono text-muted-foreground uppercase tracking-widest">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
              SISTEMA DETERMINÍSTICO
            </span>
            <span className="text-brand-gold font-medium">
              {activeMode === 'contextual' && 'RETENÇÃO: 99.4%'}
              {activeMode === 'native' && '120 FPS // BARE-METAL'}
              {activeMode === 'adaptive' && 'CURVA: EXPONENCIAL'}
            </span>
          </div>
        </div>

        {/* RIGHT: Living Interactive Product Simulator Stage */}
        <div className="col-span-1 lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-center relative overflow-hidden bg-background/50">
          
          {/* Subtle Stage Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:20px_20px] opacity-[0.04] pointer-events-none" />

          <AnimatePresence mode="wait">
            
            {/* SIMULATION 1: MOTOR CONTEXTUAL */}
            {activeMode === 'contextual' && (
              <motion.div
                key="contextual"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.35 }}
                className="flex flex-col gap-6 relative z-10 w-full"
              >
                {/* Simulated FARO Context Challenge Card */}
                <div className="border border-border/60 bg-surface/70 dark:bg-surface/30 backdrop-blur-md p-5 sm:p-6 shadow-sm flex flex-col gap-4">
                  <div className="flex items-center justify-between border-b border-border/30 pb-3 text-[9px] font-mono tracking-widest uppercase text-muted-foreground">
                    <span className="flex items-center gap-2 text-foreground font-semibold">
                      <span className="w-1.5 h-1.5 bg-brand-gold rounded-none" />
                      RECONSTRUÇÃO LEXICAL EM TEMPO REAL
                    </span>
                    <span className="text-brand-gold bg-brand-gold/10 px-2 py-0.5 border border-brand-gold/20">
                      TOKEN: &quot;rehash&quot;
                    </span>
                  </div>

                  {/* Real FARO Exercise Prompt */}
                  <div className="py-2">
                    <p className="font-sans text-base sm:text-lg text-foreground font-medium leading-snug">
                      &quot;The whole crew decided to{' '}
                      <span className="inline-block border-b-2 border-brand-gold px-3 text-brand-gold font-semibold animate-pulse">
                        {isSimulatingRecall ? 'rehash...' : recallScore > 50 ? 'rehash' : '______'}
                      </span>{' '}
                      at the diner after the game.&quot;
                    </p>
                  </div>

                  {/* Algorithmic Status Bar */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-3 border-t border-border/30 text-[9px] font-mono uppercase tracking-widest">
                    <div className="flex flex-col gap-0.5">
                      <span className="text-muted-foreground">ÍNDICE DE RETENÇÃO</span>
                      <span className={`font-semibold ${recallScore > 50 ? 'text-emerald-500' : 'text-amber-500'}`}>
                        {recallScore}% ({recallScore > 50 ? 'CONSOLIDADO' : 'DECAIMENTO'})
                      </span>
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="text-muted-foreground">AÇÃO DO MOTOR</span>
                      <span className="text-brand-gold font-medium">
                        {recallScore > 50 ? 'AVANÇO DE SESSÃO' : 'REFORÇO ADAPTATIVO'}
                      </span>
                    </div>
                    <div className="hidden sm:flex flex-col gap-0.5">
                      <span className="text-muted-foreground">INTERVALO</span>
                      <span className="text-foreground">72H DETERMINÍSTICO</span>
                    </div>
                  </div>
                </div>

                {/* Tactile Simulation Trigger Button */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[8px] text-muted-foreground tracking-widest uppercase">
                    CLICA PARA OBSERVAR A RECONSTRUÇÃO:
                  </span>
                  <button
                    onClick={handleSimulateRecall}
                    disabled={isSimulatingRecall}
                    className="px-4 py-2 border border-brand-gold/60 bg-brand-gold/10 hover:bg-brand-gold hover:text-black transition-all duration-300 font-mono text-[10px] tracking-widest uppercase text-brand-gold font-semibold flex items-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSimulatingRecall ? (
                      <>
                        <span className="w-1.5 h-1.5 bg-brand-gold animate-ping" />
                        CALCULANDO VETOR...
                      </>
                    ) : (
                      <>
                        SIMULAR RECALL NO MOTOR →
                      </>
                    )}
                  </button>
                </div>
              </motion.div>
            )}

            {/* SIMULATION 2: RENDERIZAÇÃO NATIVA 120 FPS */}
            {activeMode === 'native' && (
              <motion.div
                key="native"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.35 }}
                className="flex flex-col gap-6 relative z-10 w-full"
              >
                {/* 120 FPS Frame Cadence Benchmark Matrix */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Card A: FARO Native */}
                  <div className="border border-brand-gold/60 bg-surface/70 dark:bg-surface/30 p-5 flex flex-col justify-between gap-4 relative shadow-sm">
                    <div className="flex items-center justify-between border-b border-border/30 pb-2">
                      <span className="font-mono text-[10px] text-brand-gold font-semibold tracking-widest uppercase">
                        FARO NATIVE (RUST)
                      </span>
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    </div>
                    
                    <div className="flex items-baseline gap-2">
                      <span className="font-mono text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
                        120
                      </span>
                      <span className="font-mono text-xs text-brand-gold font-semibold uppercase">
                        FPS CRAVADO
                      </span>
                    </div>

                    <div className="flex flex-col gap-2 font-mono text-[9px] uppercase tracking-wider text-muted-foreground border-t border-border/20 pt-3">
                      <div className="flex justify-between">
                        <span>TEMPO DE FRAME:</span>
                        <span className="text-foreground font-medium">8.33 ms (Orçamento)</span>
                      </div>
                      <div className="flex justify-between">
                        <span>LATÊNCIA DE DESENHO:</span>
                        <span className="text-emerald-500 font-medium">&lt; 1.2 ms</span>
                      </div>
                      <div className="flex justify-between">
                        <span>CONSUMO RAM:</span>
                        <span className="text-foreground font-medium">~42 MB</span>
                      </div>
                    </div>
                  </div>

                  {/* Card B: Traditional Web-Wrapper */}
                  <div className="border border-border/40 bg-surface/30 dark:bg-surface/10 p-5 flex flex-col justify-between gap-4 opacity-75">
                    <div className="flex items-center justify-between border-b border-border/30 pb-2">
                      <span className="font-mono text-[10px] text-muted-foreground tracking-widest uppercase">
                        WEB-WRAPPER COMUM
                      </span>
                      <span className="w-2 h-2 rounded-full bg-red-500/60" />
                    </div>
                    
                    <div className="flex items-baseline gap-2">
                      <span className="font-mono text-3xl sm:text-4xl font-bold text-muted-foreground tracking-tight">
                        ~54
                      </span>
                      <span className="font-mono text-xs text-muted-foreground uppercase">
                        FPS INSTÁVEL
                      </span>
                    </div>

                    <div className="flex flex-col gap-2 font-mono text-[9px] uppercase tracking-wider text-muted-foreground border-t border-border/20 pt-3">
                      <div className="flex justify-between">
                        <span>TEMPO DE FRAME:</span>
                        <span className="text-red-400 font-medium">16.6 ms - 45 ms</span>
                      </div>
                      <div className="flex justify-between">
                        <span>CAMADA EXTRA:</span>
                        <span className="text-muted-foreground">Chromium + V8</span>
                      </div>
                      <div className="flex justify-between">
                        <span>CONSUMO RAM:</span>
                        <span className="text-muted-foreground">~450 MB</span>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Substrate Architecture Banner */}
                <div className="border border-border/30 bg-surface/30 p-3 flex items-center justify-between text-[8px] sm:text-[9px] font-mono tracking-widest uppercase text-muted-foreground">
                  <span>DRIVER DIRECTX 12 (WIN32) · VULKAN NDK (ANDROID)</span>
                  <span className="text-brand-gold font-medium">ZERO JANK GARANTIDO</span>
                </div>
              </motion.div>
            )}

            {/* SIMULATION 3: DESIGN ADAPTATIVO // UI PROGRESSIVA */}
            {activeMode === 'adaptive' && (
              <motion.div
                key="adaptive"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.35 }}
                className="flex flex-col gap-6 relative z-10 w-full"
              >
                {/* Level Stepper Controller */}
                <div className="flex items-center justify-between border-b border-border/40 pb-3">
                  <span className="font-mono text-[9px] text-muted-foreground tracking-widest uppercase">
                    SELECIONA O NÍVEL DE FLUÊNCIA:
                  </span>
                  <div className="flex items-center gap-1.5">
                    {([1, 5, 10] as const).map((lvl) => (
                      <button
                        key={lvl}
                        onClick={() => setFluencyLevel(lvl)}
                        className={`px-3 py-1 font-mono text-[9px] tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                          fluencyLevel === lvl
                            ? 'bg-brand-gold text-black font-semibold shadow-sm'
                            : 'bg-surface border border-border/60 text-muted-foreground hover:text-foreground'
                        }`}
                      >
                        NÍVEL {lvl < 10 ? `0${lvl}` : lvl}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Interactive Scaffolding Dissolve Viewport */}
                <div className="border border-border/60 bg-surface/60 dark:bg-surface/20 p-6 flex flex-col gap-4 relative transition-all duration-500">
                  
                  <div className="flex items-center justify-between text-[9px] font-mono tracking-widest uppercase">
                    <span className="text-brand-gold font-semibold">
                      {fluencyLevel === 1 && 'ESTÁGIO 1: ANDAMENTO GUIADO (MULETAS VISUAIS ATIVAS)'}
                      {fluencyLevel === 5 && 'ESTÁGIO 2: TRANSIÇÃO PROGRESSIVA (DEGRAU COGNITIVO)'}
                      {fluencyLevel === 10 && 'ESTÁGIO 3: DESAFIO CRU (IMERSÃO TOTAL · ZERO MULETAS)'}
                    </span>
                    <span className="text-muted-foreground">
                      {fluencyLevel === 1 && 'SCAFFOLDING: 100%'}
                      {fluencyLevel === 5 && 'SCAFFOLDING: 40%'}
                      {fluencyLevel === 10 && 'SCAFFOLDING: 0%'}
                    </span>
                  </div>

                  {/* Dynamic Sentence with Progressive Crutch Dissolve */}
                  <div className="p-4 bg-background/80 border border-border/30 rounded-none flex flex-col gap-3">
                    <p className="font-display text-xl sm:text-2xl text-foreground tracking-tight leading-snug">
                      &quot;Whispers of the concrete jungle: decoding urban idioms.&quot;
                    </p>

                    {/* Phonetic & Helper Layer (Disappears as level increases) */}
                    <motion.div
                      animate={{
                        opacity: fluencyLevel === 1 ? 1 : fluencyLevel === 5 ? 0.35 : 0,
                        height: fluencyLevel === 10 ? 0 : 'auto',
                      }}
                      transition={{ duration: 0.4 }}
                      className="overflow-hidden flex items-center gap-3 font-mono text-[10px] text-brand-gold"
                    >
                      <span className="px-2 py-0.5 bg-brand-gold/10 border border-brand-gold/20">
                        /ˈkɒŋkriːt ˈdʒʌŋɡl/
                      </span>
                      <span className="text-muted-foreground text-[9px]">
                        {fluencyLevel === 1 ? 'Guia fonético e suporte semântico ativado' : 'Suporte visual em desvanecimento'}
                      </span>
                    </motion.div>
                  </div>

                  <p className="font-mono text-[8px] sm:text-[9px] text-muted-foreground tracking-widest uppercase">
                    {fluencyLevel === 1 && '→ O sistema oferece auxílio completo para consolidar a fundação vocabular.'}
                    {fluencyLevel === 5 && '→ Elementos de apoio começam a desaparecer à medida que a taxa de acerto estabiliza.'}
                    {fluencyLevel === 10 && '→ Todo o suporte visual é removido. O teu cérebro processa diretamente o idioma nativo.'}
                  </p>
                </div>

              </motion.div>
            )}

          </AnimatePresence>

        </div>

      </div>

    </div>
  );
}
