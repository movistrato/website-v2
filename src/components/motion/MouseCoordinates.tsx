"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export function MouseCoordinates() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const t = useTranslations("Index"); // fallback for some text if needed, or just hardcode technical text

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isVisible]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      className="absolute bottom-12 left-6 lg:left-12 z-50 pointer-events-none hidden lg:flex flex-col gap-1"
    >
      <div className="flex items-center gap-2">
        <span className="w-1 h-1 bg-brand-gold animate-pulse rounded-full" />
        <span className="font-mono text-[9px] tracking-widest text-brand-gold uppercase">
          Live Tracking
        </span>
      </div>
      <div className="font-mono text-[10px] text-muted-foreground tracking-wider flex gap-4 bg-background/50 backdrop-blur-md px-2 py-1 border border-border/20 rounded-sm">
        <span>X: {mousePosition.x.toString().padStart(4, "0")}</span>
        <span>Y: {mousePosition.y.toString().padStart(4, "0")}</span>
      </div>
    </motion.div>
  );
}
