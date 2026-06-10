"use client";

import {
  LinxoMascot,
  expressionFromScroll,
  type LinxoExpression,
} from "@/components/mascot/LinxoMascot";

interface ChainGPTRobotProps {
  className?: string;
  eyeReveal?: number;
  expression?: LinxoExpression;
  /** When set (0–1), picks expression automatically from scroll progress. */
  scrollProgress?: number;
}

export function ChainGPTRobot({
  className = "",
  eyeReveal = 1,
  expression,
  scrollProgress,
}: ChainGPTRobotProps) {
  const resolvedExpression =
    expression ??
    (scrollProgress !== undefined
      ? expressionFromScroll(scrollProgress)
      : "neutral");

  return (
    <LinxoMascot
      className={className}
      eyeReveal={eyeReveal}
      expression={resolvedExpression}
    />
  );
}
