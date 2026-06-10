"use client";

import { useLayoutEffect, useRef, useState } from "react";

export function HeroConnectionLines() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 1000, height: 200 });

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const update = () => {
      setDimensions({
        width: container.clientWidth,
        height: container.clientHeight,
      });
    };
    update();

    const observer = new ResizeObserver(update);
    observer.observe(container);

    window.addEventListener("resize", update);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  const { width, height } = dimensions;

  // Width of columns:
  // Left column: 38% of container, max 340px.
  // Right column: 32% of container, max 300px.
  const leftWidth = Math.min(width * 0.38, 340);
  const rightWidth = Math.min(width * 0.32, 300);

  // Left prompt column starts at X = 0. Quote box has width 66.
  const quoteRight = 66;
  const promptRight = leftWidth;

  // Right feature column ends at X = width.
  const featureLeft = width - rightWidth;

  // Line 1: Quote box to DEPLOYING ON... dot (Y=30)
  // Starts at X=66, Y=33
  // Ends at X=featureLeft + 19, Y=30
  // Path: M 66 33 H 140 L 155 18 H (featureLeft - 44) L (featureLeft - 32) 30 H (featureLeft + 19)
  const line1Path = `M ${quoteRight} 33 H 140 L 155 18 H ${Math.max(160, featureLeft - 44)} L ${Math.max(168, featureLeft - 32)} 30 H ${featureLeft + 19}`;

  // Line 2: Prompt box right edge (X=promptRight, Y=107) to Score box arrowhead (Y=70)
  // Starts at X=promptRight, Y=107
  // Ends at X=featureLeft, Y=70
  // Path: M promptRight 107 H (promptRight + 20) L (promptRight + 20 + 37) 70 H featureLeft
  const line2Path = `M ${promptRight} 107 H ${promptRight + 20} L ${Math.min(featureLeft, promptRight + 57)} 70 H ${featureLeft}`;

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none hidden md:block"
      style={{ zIndex: 0, overflow: "visible" }}
    >
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ overflow: "visible" }}
      >
        <defs>
          <linearGradient id="heroGradH" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f5ebe3" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#e8b896" />
            <stop offset="100%" stopColor="#c85a32" />
          </linearGradient>
        </defs>

        {/* Line 1 Base */}
        <path
          d={line1Path}
          stroke="var(--cgpt-divider)"
          strokeWidth="1"
          opacity="0.3"
        />
        {/* Line 1 Animated Runner */}
        <path
          className="cgpt-line-animaton cgpt-line-animaton--loop"
          d={line1Path}
          stroke="url(#heroGradH)"
          strokeWidth="1"
        />

        {/* Line 2 Base */}
        <path
          d={line2Path}
          stroke="var(--cgpt-divider)"
          strokeWidth="1"
          opacity="0.3"
        />
        {/* Line 2 Animated Runner */}
        <path
          className="cgpt-line-animaton cgpt-line-animaton--loop"
          d={line2Path}
          stroke="url(#heroGradH)"
          strokeWidth="1"
          style={{ animationDelay: "1.5s" }}
        />
      </svg>
    </div>
  );
}
