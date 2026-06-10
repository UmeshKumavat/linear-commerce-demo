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

  const leftWidth = Math.min(width * 0.38, 340);
  const rightWidth = Math.min(width * 0.32, 300);

  const quoteRight = 66;
  const promptRight = leftWidth;
  const featureLeft = width - rightWidth;

  // Line 1: quote box right-edge → upward bracket peak → feature panel dot
  const l1MidL = Math.max(160, featureLeft - 44);
  const l1MidR = Math.max(168, featureLeft - 32);
  const line1Path = `M ${quoteRight} 33 H 140 L 155 18 H ${l1MidL} L ${l1MidR} 30 H ${featureLeft + 19}`;
  const line1Nodes = [
    { x: 140,     y: 33 },
    { x: 155,     y: 18 },
    { x: l1MidL,  y: 18 },
    { x: l1MidR,  y: 30 },
  ];

  // Line 2: prompt box right-edge → diagonal up → score-box arrowhead
  const l2DiagEnd = Math.min(featureLeft, promptRight + 57);
  const line2Path = `M ${promptRight} 107 H ${promptRight + 20} L ${l2DiagEnd} 70 H ${featureLeft}`;
  const line2Nodes = [
    { x: promptRight + 20, y: 107 },
    { x: l2DiagEnd,        y: 70  },
  ];

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
          {/* Dark-mode runner: warm white → rust-orange */}
          <linearGradient id="hcl-grad-dark" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor="#f5ebe3" stopOpacity="0"    />
            <stop offset="18%"  stopColor="#f0ddd0" stopOpacity="0.9"  />
            <stop offset="58%"  stopColor="#c85a32" stopOpacity="1"    />
            <stop offset="100%" stopColor="#a84422" stopOpacity="0"    />
          </linearGradient>
          {/* Light-mode runner: visible dark-rust on gray bg */}
          <linearGradient id="hcl-grad-light" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor="#7a2e12" stopOpacity="0"    />
            <stop offset="18%"  stopColor="#a84422" stopOpacity="0.85" />
            <stop offset="58%"  stopColor="#6b2010" stopOpacity="1"    />
            <stop offset="100%" stopColor="#5c1e08" stopOpacity="0"    />
          </linearGradient>
        </defs>

        {/* ── Line 1 base trace ── */}
        <path
          d={line1Path}
          stroke="var(--cgpt-divider)"
          strokeWidth="1"
          opacity="0.55"
        />
        {/* Line 1 animated runner — dark mode */}
        <path
          className="cgpt-line-animaton cgpt-line-animaton--loop hcl-runner hcl-runner--dark"
          d={line1Path}
          pathLength={100}
          stroke="url(#hcl-grad-dark)"
          strokeWidth="1.5"
        />
        {/* Line 1 animated runner — light mode */}
        <path
          className="cgpt-line-animaton cgpt-line-animaton--loop hcl-runner hcl-runner--light"
          d={line1Path}
          pathLength={100}
          stroke="url(#hcl-grad-light)"
          strokeWidth="1.5"
        />
        {/* Line 1 junction nodes */}
        {line1Nodes.map((n, i) => (
          <rect
            key={`l1n${i}`}
            x={n.x - 2} y={n.y - 2}
            width={4} height={4}
            fill="var(--cgpt-divider)"
            opacity="0.6"
          />
        ))}

        {/* ── Line 2 base trace ── */}
        <path
          d={line2Path}
          stroke="var(--cgpt-divider)"
          strokeWidth="1"
          opacity="0.55"
        />
        {/* Line 2 animated runner — dark mode */}
        <path
          className="cgpt-line-animaton cgpt-line-animaton--loop hcl-runner hcl-runner--dark"
          d={line2Path}
          pathLength={100}
          stroke="url(#hcl-grad-dark)"
          strokeWidth="1.5"
          style={{ animationDelay: "1.5s" }}
        />
        {/* Line 2 animated runner — light mode */}
        <path
          className="cgpt-line-animaton cgpt-line-animaton--loop hcl-runner hcl-runner--light"
          d={line2Path}
          pathLength={100}
          stroke="url(#hcl-grad-light)"
          strokeWidth="1.5"
          style={{ animationDelay: "1.5s" }}
        />
        {/* Line 2 junction nodes */}
        {line2Nodes.map((n, i) => (
          <rect
            key={`l2n${i}`}
            x={n.x - 2} y={n.y - 2}
            width={4} height={4}
            fill="var(--cgpt-divider)"
            opacity="0.6"
          />
        ))}
      </svg>
    </div>
  );
}
