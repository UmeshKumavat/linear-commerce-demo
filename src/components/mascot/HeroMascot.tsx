"use client";

import { HeroWebGL } from "@/components/chaingpt/HeroWebGL";
import { useActiveSectionExpression } from "@/hooks/useActiveSectionExpression";

/** Full-viewport 3D mascot — matches chaingpt.org hero */
export function HeroMascot() {
  const expression = useActiveSectionExpression();
  return <HeroWebGL expression={expression} />;
}
