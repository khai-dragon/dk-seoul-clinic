"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { type ReactNode } from "react";

interface HoverCardProps {
  href: string;
  children: ReactNode;
  className?: string;
}

export default function HoverCard({ href, children, className = "" }: HoverCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
      className="h-full"
    >
      <Link href={href} className={`block ${className}`}>
        {children}
      </Link>
    </motion.div>
  );
}
