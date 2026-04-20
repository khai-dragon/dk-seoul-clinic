"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

interface ParallaxImageProps {
  className?: string;
  label?: string;
  src?: string;
  alt?: string;
}

export default function ParallaxImage({
  className = "",
  label = "Image",
  src,
  alt,
}: ParallaxImageProps) {
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
        className="relative w-full h-full bg-gradient-to-br from-section-bg to-border-color"
      >
        {src ? (
          <Image
            src={src}
            alt={alt ?? label}
            fill
            sizes="100vw"
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-text-muted/40 text-[12px] tracking-[0.15em] uppercase">{label}</span>
          </div>
        )}
      </motion.div>
    </div>
  );
}
