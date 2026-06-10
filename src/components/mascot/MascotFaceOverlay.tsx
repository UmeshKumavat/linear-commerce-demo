"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useId } from "react";
import type { LinxoExpression } from "@/components/mascot/LinxoMascot";

function Eyes({ expression }: { expression: LinxoExpression }) {
  switch (expression) {
    case "happy":
      return (
        <g stroke="#fff" strokeWidth="3.5" fill="none" strokeLinecap="round">
          <path d="M 28 36 Q 36 26 44 36" />
          <path d="M 56 36 Q 64 26 72 36" />
        </g>
      );
    case "focused":
      return (
        <g transform="translate(-4, 0)">
          <circle cx="34" cy="34" r="5.5" fill="#fff" />
          <circle cx="62" cy="34" r="5.5" fill="#fff" />
        </g>
      );
    case "thinking":
      return (
        <g>
          <circle cx="38" cy="34" r="7" fill="#fff" />
          <circle cx="66" cy="36" r="3.5" fill="#fff" />
        </g>
      );
    case "excited":
      return (
        <g stroke="#fff" strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M 24 26 L 34 36 L 24 46" />
          <path d="M 76 26 L 66 36 L 76 46" />
        </g>
      );
    default:
      return (
        <g>
          <circle cx="36" cy="34" r="6" fill="#fff" />
          <circle cx="64" cy="34" r="6" fill="#fff" />
        </g>
      );
  }
}

export function MascotFaceOverlay({ expression }: { expression: LinxoExpression }) {
  const uid = useId().replace(/:/g, "");
  const gradId = `face-grad-${uid}`;

  return (
    <div className="mascot-face-overlay pointer-events-none" aria-hidden>
      <svg viewBox="0 0 100 72" className="mascot-face-svg" fill="none">
        <defs>
          <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#26F4D0" />
            <stop offset="28%" stopColor="#724CE8" />
            <stop offset="52%" stopColor="#FC6756" />
            <stop offset="76%" stopColor="#F8CF3E" />
            <stop offset="100%" stopColor="#26F4D0" />
          </linearGradient>
        </defs>
        <rect x="4" y="4" width="92" height="64" rx="10" fill={`url(#${gradId})`} />
        <rect x="9" y="9" width="82" height="54" rx="7" fill="#060606" />
        <AnimatePresence mode="wait">
          <motion.g
            key={expression}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.85 }}
            transition={{ duration: 0.25 }}
          >
            <Eyes expression={expression} />
          </motion.g>
        </AnimatePresence>
      </svg>
    </div>
  );
}
