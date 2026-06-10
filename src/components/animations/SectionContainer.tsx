"use client";

import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";

interface SectionContainerProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function SectionContainer({
  children,
  className = "",
  id,
}: SectionContainerProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.section
      ref={ref}
      id={id}
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className={`relative border-t border-white/[0.06] py-16 ${className}`}
    >
      <div className="absolute left-0 top-0 h-px w-8 bg-[#26F4D0]/60" />
      <div className="absolute right-0 top-0 h-px w-8 bg-[#26F4D0]/30" />
      {children}
    </motion.section>
  );
}
