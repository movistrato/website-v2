"use client";

import { motion } from 'framer-motion';

// --- OFFICIAL PLATFORM SVG LOGOS ---

function WebLogo({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20M12 2a14.5 14.5 0 0 1 0 20M2 12h20" />
    </svg>
  );
}

function AndroidLogo({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.551 0 .9993.4482.9993.9993.0001.5511-.4483.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.411 13.856 8 12 8s-3.5902.411-5.1367.9497L4.841 5.4467a.4161.4161 0 00-.5677-.1521.4157.4157 0 00-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3432-4.1021-2.6889-7.5743-6.1185-9.4396" />
    </svg>
  );
}

function WindowsLogo({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.95-1.801" />
    </svg>
  );
}

function AppleLogo({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.87c.6-1.13.99-2.7.83-4.27-1.42.06-3.07.94-3.95 1.98-.67.79-1.27 2.37-1.07 3.89 1.57.12 3.14-.85 3.82-2z" />
    </svg>
  );
}

function LinuxLogo({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12.003 0C8.36 0 6.64 3.06 6.64 6.77c0 1.13.19 2.27.56 3.32-.4.43-.84.97-1.28 1.63-.82 1.23-1.4 2.64-1.4 4.03 0 1.24.47 2.37 1.34 3.19.14.13.31.25.49.36-.08.31-.13.63-.13.96 0 1.95 2.48 3.53 5.54 3.53s5.54-1.58 5.54-3.53c0-.33-.05-.65-.13-.96.18-.11.35-.23.49-.36.87-.82 1.34-1.95 1.34-3.19 0-1.39-.58-2.8-1.4-4.03-.44-.66-.88-1.2-1.28-1.63.37-1.05.56-2.19.56-3.32C17.36 3.06 15.64 0 12.003 0zm-.01 1.76c2.4 0 3.61 2.12 3.61 5.01 0 1.05-.2 2.05-.59 2.92-.37.84-.93 1.54-1.62 1.99-.44.29-.93.45-1.4.45s-.96-.16-1.4-.45c-.69-.45-1.25-1.15-1.62-1.99-.39-.87-.59-1.87-.59-2.92 0-2.89 1.21-5.01 3.61-5.01z" />
    </svg>
  );
}

// --- PLATFORM DATA INTERFACE ---

interface PlatformItem {
  id: string;
  name: string;
  badge: string;
  status: 'available' | 'planned';
  Icon: React.ComponentType<{ className?: string }>;
}

interface PlatformsContinuityMatrixProps {
  availableLabel: string;
  plannedLabel: string;
  webText: string;
  androidText: string;
  windowsText: string;
  iosText: string;
  macosText: string;
  linuxText: string;
}

export function PlatformsContinuityMatrix({
  availableLabel,
  plannedLabel,
  webText,
  androidText,
  windowsText,
  iosText,
  macosText,
  linuxText,
}: PlatformsContinuityMatrixProps) {
  const availablePlatforms: PlatformItem[] = [
    { id: 'web', name: webText, badge: 'ZERO-SETUP', status: 'available', Icon: WebLogo },
    { id: 'android', name: androidText, badge: 'APK NATIVO', status: 'available', Icon: AndroidLogo },
    { id: 'windows', name: windowsText, badge: 'WINUI / NATIVO', status: 'available', Icon: WindowsLogo },
  ];

  const plannedPlatforms: PlatformItem[] = [
    { id: 'ios', name: iosText, badge: 'SWIFT NATIVO', status: 'planned', Icon: AppleLogo },
    { id: 'macos', name: macosText, badge: 'APPKIT / METAL', status: 'planned', Icon: AppleLogo },
    { id: 'linux', name: linuxText, badge: 'WAYLAND NATIVO', status: 'planned', Icon: LinuxLogo },
  ];

  return (
    <div className="flex flex-col gap-6 w-full font-mono">
      {/* 01. AVAILABLE PLATFORMS */}
      <div className="flex flex-col gap-3">
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-border/30 pb-2 text-[9px] uppercase tracking-widest text-muted-foreground">
          <span className="flex items-center gap-2 text-foreground font-semibold">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            {availableLabel}
          </span>
          <span className="text-brand-gold text-[8px] flex items-center gap-1.5">
            <span className="w-1 h-1 bg-brand-gold rounded-full" />
            SINCRONIZAÇÃO EM TEMPO REAL
          </span>
        </div>

        {/* 3 Active Platform Cards with Continuous Traveling Beam */}
        <div className="relative grid grid-cols-3 gap-2 sm:gap-2.5">
          {/* Traveling Photon Wire connecting all 3 cards */}
          <div className="absolute -top-1 left-2 right-2 h-0.5 bg-border/40 overflow-hidden pointer-events-none" aria-hidden="true">
            <motion.div
              className="h-full w-24 bg-[linear-gradient(90deg,transparent,#D9A62E,transparent)] shadow-[0_0_8px_#D9A62E]"
              animate={{ x: ['-80px', '340px'] }}
              transition={{ repeat: Infinity, duration: 3.2, ease: "linear" }}
            />
          </div>

          {availablePlatforms.map((plat) => {
            const IconComponent = plat.Icon;

            return (
              <div
                key={plat.id}
                className="group/card relative p-3 sm:p-3.5 bg-surface/40 dark:bg-surface/15 border border-border/60 hover:border-brand-gold/60 transition-all duration-300 flex flex-col justify-between gap-3 overflow-hidden shadow-sm"
              >
                {/* Top: Official Logo + Live Status */}
                <div className="w-full flex items-center justify-between">
                  <div className="text-muted-foreground group-hover/card:text-brand-gold transition-colors duration-300">
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <span className="text-[7.5px] text-emerald-500 font-mono tracking-wider font-medium flex items-center gap-1">
                    <span className="w-1 h-1 bg-emerald-500 rounded-full" />
                    ATIVO
                  </span>
                </div>

                {/* Bottom: Name & Technical Badge */}
                <div className="flex flex-col gap-0.5 pt-1 border-t border-border/20">
                  <span className="font-sans font-semibold text-sm sm:text-base text-foreground tracking-tight group-hover/card:text-brand-gold transition-colors">
                    {plat.name}
                  </span>
                  <span className="text-[7.5px] text-muted-foreground tracking-wider uppercase font-mono">
                    {plat.badge}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 02. PLANNED PLATFORMS */}
      <div className="flex flex-col gap-3 pt-2">
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-border/20 pb-2 text-[9px] uppercase tracking-widest text-muted-foreground/80">
          <span className="flex items-center gap-2 font-medium">
            <span className="w-1.5 h-1.5 border border-muted-foreground/60 rounded-full" />
            {plannedLabel}
          </span>
          <span className="text-[8px] text-muted-foreground/60">
            ROADMAP OFICIAL
          </span>
        </div>

        {/* 3 Planned Cards with Official Logos */}
        <div className="grid grid-cols-3 gap-2 sm:gap-2.5">
          {plannedPlatforms.map((plat) => {
            const IconComponent = plat.Icon;

            return (
              <div
                key={plat.id}
                className="group/planned relative p-3 bg-surface/15 dark:bg-surface/5 border border-dashed border-border/50 flex flex-col justify-between gap-2.5 opacity-75 hover:opacity-100 hover:border-border transition-all duration-300"
              >
                {/* Top: Logo + Roadmap Tag */}
                <div className="w-full flex items-center justify-between">
                  <div className="text-muted-foreground/70 group-hover/planned:text-foreground transition-colors duration-300">
                    <IconComponent className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-[7px] text-muted-foreground/60 tracking-wider uppercase font-mono">
                    ROADMAP
                  </span>
                </div>

                {/* Bottom: Platform Name & Architecture */}
                <div className="flex flex-col pt-0.5 border-t border-border/10">
                  <span className="font-sans font-medium text-xs sm:text-sm text-foreground/80 tracking-tight">
                    {plat.name}
                  </span>
                  <span className="text-[7px] text-muted-foreground/60 tracking-wider uppercase font-mono">
                    {plat.badge}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
