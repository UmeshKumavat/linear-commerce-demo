"use client";

interface AnimatedCircuitLineProps {
  className?: string;
  /** Stagger animation start per section */
  delay?: number;
  variant?: "full" | "short";
}

export function AnimatedCircuitLine({
  className = "",
  delay = 0,
  variant = "full",
}: AnimatedCircuitLineProps) {
  const uid = `cct-${delay}-${variant}`;
  const gradId = `cgptHGrad-${uid}`;

  const d =
    variant === "full"
      ? "M0 1 H1000"
      : "M0 1 H420";

  return (
    <svg
      className={`cgpt-section-circuit ${className}`}
      viewBox={variant === "full" ? "0 0 1000 2" : "0 0 420 2"}
      preserveAspectRatio="none"
      aria-hidden
    >
      <defs>
        <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#f5ebe3" />
          <stop offset="45%" stopColor="#e8b896" />
          <stop offset="100%" stopColor="#c85a32" />
        </linearGradient>
      </defs>
      <path d={d} stroke="#353539" strokeWidth="1" vectorEffect="non-scaling-stroke" />
      <path
        className="cgpt-line-animaton cgpt-line-animaton--loop"
        d={d}
        stroke={`url(#${gradId})`}
        strokeWidth="1"
        vectorEffect="non-scaling-stroke"
        style={{ animationDelay: `${delay}s` }}
      />
    </svg>
  );
}
