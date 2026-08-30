"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export function HeroReveal({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1,
          },
        },
      }}
      className="w-full h-full flex flex-col justify-center"
    >
      {children}
    </motion.div>
  );
}

export function HeroTitleLine({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <div className={`overflow-hidden py-1 pr-6 -mr-6 ${className}`}>
      <motion.span
        className="block"
        variants={{
          hidden: { y: "110%", opacity: 0, rotateZ: 3 },
          visible: {
            y: "0%",
            opacity: 1,
            rotateZ: 0,
            transition: { 
              duration: 1.4, 
              ease: [0.16, 1, 0.3, 1],
              delay: delay 
            },
          },
        }}
      >
        {children}
      </motion.span>
    </div>
  );
}

export function HeroBlurLine({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.span
      className={`block ${className}`}
      variants={{
        hidden: { filter: "blur(12px)", opacity: 0, scale: 0.95 },
        visible: {
          filter: "blur(0px)",
          opacity: 1,
          scale: 1,
          transition: { 
            duration: 1.8, 
            ease: "easeOut",
            delay: delay 
          },
        },
      }}
    >
      {children}
    </motion.span>
  );
}

export function HeroFadeIn({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { 
            duration: 1.2, 
            ease: [0.16, 1, 0.3, 1],
            delay: delay 
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function AmbientGlow({ className = "" }: { className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 0.5, scale: 1.05 }}
      transition={{
        duration: 5,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "mirror",
        delay: 0.5
      }}
    />
  );
}
