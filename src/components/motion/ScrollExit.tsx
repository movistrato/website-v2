"use client";

import { motion, useScroll, useTransform, useReducedMotion, useSpring } from "framer-motion";
import { ReactNode, useRef } from "react";

export function ScrollExitWrapper({ 
  children, 
  className = "" 
}: { 
  children: ReactNode; 
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const opacity = useTransform(smoothProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(smoothProgress, [0, 1], [1, 0.95]);
  const filter = useTransform(smoothProgress, [0, 1], ["blur(0px)", "blur(12px)"]);

  return (
    <motion.div
      ref={ref}
      style={reduce ? {} : { opacity, scale, filter }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
