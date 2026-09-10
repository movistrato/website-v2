'use client';

import { useEffect, useRef } from 'react';

/**
 * HeroAtmosphere
 * An ultra-subtle, non-intrusive atmospheric lighting and architectural grid field.
 * Breathes with autonomous, slow organic harmonic cycles (no user action needed),
 * while responding with soft cinematic inertia to mouse movements.
 * Zero UI pollution: strictly atmospheric depth behind the typography.
 */
export function HeroAtmosphere() {
  const containerRef = useRef<HTMLDivElement>(null);
  const auraRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    let animationFrameId: number;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let time = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const container = containerRef.current;
      if (!container) return;
      const rect = container.getBoundingClientRect();
      targetX = e.clientX - rect.left;
      targetY = e.clientY - rect.top;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Autonomous smooth rendering loop
    const animate = () => {
      time += 0.012;

      // When mouse hasn't moved yet or is still, create an autonomous floating Lissajous drift
      const autoDriftX = Math.sin(time * 0.7) * 45 + Math.cos(time * 0.3) * 20;
      const autoDriftY = Math.cos(time * 0.5) * 35 + Math.sin(time * 0.2) * 15;

      const destX = (targetX || (window.innerWidth * 0.3)) + autoDriftX;
      const destY = (targetY || (window.innerHeight * 0.4)) + autoDriftY;

      // Heavy, silky smooth inertia damping (spring feel)
      currentX += (destX - currentX) * 0.035;
      currentY += (destY - currentY) * 0.035;

      if (auraRef.current) {
        auraRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none z-0"
      aria-hidden="true"
    >
      {/* Autonomous Floating & Interactive Warmth Core */}
      <div
        ref={auraRef}
        className="absolute top-0 left-0 w-[550px] sm:w-[700px] lg:w-[850px] h-[350px] sm:h-[450px] lg:h-[550px] rounded-full opacity-60 dark:opacity-80 blur-[130px] transition-opacity duration-1000"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(217, 166, 46, 0.12) 0%, rgba(217, 166, 46, 0.04) 45%, transparent 75%)',
          willChange: 'transform',
        }}
      />

      {/* Secondary Counter-Aura for depth */}
      <div
        className="absolute top-[60%] right-[10%] w-[400px] h-[300px] rounded-full blur-[140px] opacity-40 dark:opacity-60 animate-pulse duration-[7000ms]"
        style={{
          background:
            'radial-gradient(circle, rgba(217, 166, 46, 0.08) 0%, rgba(245, 158, 11, 0.02) 60%, transparent 80%)',
        }}
      />

      {/* Subtle, sparse architectural coordinate crosshairs that pulse polyrhythmically */}
      <div className="absolute top-[22%] left-[12%] text-brand-gold/20 font-mono text-[9px] animate-pulse duration-[5000ms] select-none">
        +
      </div>
      <div className="absolute top-[35%] right-[18%] text-brand-gold/25 font-mono text-[9px] animate-pulse duration-[6500ms] delay-1000 select-none">
        +
      </div>
      <div className="absolute bottom-[20%] left-[45%] text-brand-gold/15 font-mono text-[9px] animate-pulse duration-[8000ms] delay-500 select-none">
        +
      </div>
    </div>
  );
}
