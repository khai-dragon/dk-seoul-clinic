"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ParallaxImageProps {
  className?: string;
  label?: string;
}

export default function ParallaxImage({ className = "", label = "Image" }: ParallaxImageProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1]);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        style={{ y, scale }}
        className="w-full h-full bg-gradient-to-br from-section-bg to-border-color flex items-center justify-center"
      >
        <span className="text-text-muted/40 text-[12px] tracking-[0.15em] uppercase">{label}</span>
      </motion.div>
    </div>
  );
}
