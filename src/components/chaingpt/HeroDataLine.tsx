"use client";

import { useId, useLayoutEffect, useRef, useState } from "react";

type Axis = "h" | "v";

type Segment = { d: string; key: string; axis: Axis };

type Junction = { cx: number; cy: number; r: number };

type CircuitGeometry = {
  width: number;
  height: number;
  segments: Segment[];
  runnerPath: string;
  junctions: Junction[];
};

/** Matches grid: minmax(0,1fr) minmax(0,0.75fr) minmax(0,1fr) + column gap */
function getGridColumn3Start(main: HTMLElement): number {
  const style = window.getComputedStyle(main);
  const gap = parseFloat(style.columnGap) || 0;
  const available = main.clientWidth - 2 * gap;
  const col1 = available * (1 / 2.75);
  const col2 = available * (0.75 / 2.75);
  return col1 + gap + col2 + gap;
}

const BRANCH_LABEL_GAP = 14;

function getBranchEndX(
  rowEls: NodeListOf<HTMLElement>,
  mainRect: DOMRect,
  fallback: number,
): number {
  const arrowLefts = Array.from(rowEls)
    .map((li) => li.querySelector<HTMLElement>(".cgpt-hero-model-arrow"))
    .filter((arrow): arrow is HTMLElement => arrow !== null)
    .map((arrow) => arrow.getBoundingClientRect().left - mainRect.left);

  if (arrowLefts.length === 0) return fallback;

  return Math.min(...arrowLefts) - BRANCH_LABEL_GAP;
}

function buildCircuit(main: HTMLElement): CircuitGeometry | null {
  const mainRect = main.getBoundingClientRect();
  const width = mainRect.width;
  const height = mainRect.height;
  if (width < 1 || height < 1) return null;

  const headline = main.querySelector<HTMLElement>(".cgpt-hero-intro-headline");
  const subline = main.querySelector<HTMLElement>(".cgpt-hero-intro-subline");
  const actions = main.querySelector<HTMLElement>(".cgpt-hero-actions");
  const rowEls = main.querySelectorAll<HTMLElement>(".cgpt-hero-model-list li");

  let trunkY = height * 0.38;
  if (headline && subline) {
    const headlineRect = headline.getBoundingClientRect();
    const sublineRect = subline.getBoundingClientRect();
    trunkY = (headlineRect.bottom + sublineRect.top) / 2 - mainRect.top;
  } else if (headline) {
    trunkY = headline.getBoundingClientRect().bottom - mainRect.top + 14;
  }

  const junctionX = getGridColumn3Start(main);
  const branchEndX = getBranchEndX(
    rowEls,
    mainRect,
    actions ? actions.getBoundingClientRect().right - mainRect.left : width,
  );

  const rowYs = Array.from(rowEls).map((li) => {
    const rowRect = li.getBoundingClientRect();
    return rowRect.top + rowRect.height / 2 - mainRect.top;
  });

  const trunk = `M 0 ${trunkY} H ${junctionX}`;
  const busEndY = rowYs.length > 0 ? rowYs[rowYs.length - 1] : trunkY + 56;
  const bus = `M ${junctionX} ${trunkY} V ${busEndY}`;

  const segments: Segment[] = [
    { d: trunk, key: "trunk", axis: "h" },
    { d: bus, key: "bus", axis: "v" },
    ...rowYs.map((y, i) => ({
      d: `M ${junctionX} ${y} H ${branchEndX}`,
      key: `row-${i}`,
      axis: "h" as const,
    })),
  ];

  let runnerPath = `M 0 ${trunkY} H ${junctionX}`;
  for (const y of rowYs) {
    runnerPath += ` V ${y} H ${branchEndX} H ${junctionX}`;
  }

  const junctions: Junction[] = [
    { cx: junctionX, cy: trunkY, r: 2.5 },
    ...rowYs.map((y) => ({ cx: junctionX, cy: y, r: 2 })),
    ...rowYs.map((y) => ({ cx: branchEndX, cy: y, r: 2 })),
  ];

  return { width, height, segments, runnerPath, junctions };
}

export function HeroDataLine() {
  const uid = useId().replace(/:/g, "");
  const pathId = `hero-path-${uid}`;
  const gradHId = `hero-grad-h-${uid}`;
  const gradVId = `hero-grad-v-${uid}`;
  const glowId = `hero-glow-${uid}`;
  const circuitRef = useRef<HTMLDivElement>(null);
  const [geometry, setGeometry] = useState<CircuitGeometry | null>(null);

  useLayoutEffect(() => {
    const circuit = circuitRef.current;
    const main = circuit?.closest<HTMLElement>(".cgpt-hero-main");
    if (!main) return;

    const update = () => setGeometry(buildCircuit(main));

    update();

    const observer = new ResizeObserver(update);
    observer.observe(main);

    const list = main.querySelector(".cgpt-hero-model-list");
    if (list) observer.observe(list);

    window.addEventListener("resize", update);
    document.fonts?.ready.then(update);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  if (!geometry) {
    return <div ref={circuitRef} className="cgpt-hero-data-circuit" aria-hidden />;
  }

  const { width, height, segments, runnerPath, junctions } = geometry;

  return (
    <div ref={circuitRef} className="cgpt-hero-data-circuit" aria-hidden>
      <svg
        className="cgpt-hero-data-line"
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id={gradHId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f5ebe3" />
            <stop offset="45%" stopColor="#e8b896" />
            <stop offset="100%" stopColor="#c85a32" />
          </linearGradient>
          <linearGradient id={gradVId} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f5ebe3" />
            <stop offset="45%" stopColor="#e8b896" />
            <stop offset="100%" stopColor="#c85a32" />
          </linearGradient>
          <filter id={glowId} x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <path id={pathId} d={runnerPath} fill="none" stroke="none" />

        {segments.map(({ d, key, axis }) => (
          <g key={key}>
            <path
              className="cgpt-hero-data-line-base"
              d={d}
              fill="none"
              stroke="#353539"
              strokeWidth="1"
              vectorEffect="non-scaling-stroke"
            />
            <path
              className="cgpt-hero-data-line-grad cgpt-line-animaton cgpt-line-animaton--loop"
              d={d}
              fill="none"
              stroke={`url(#${axis === "v" ? gradVId : gradHId})`}
              strokeWidth="1"
              vectorEffect="non-scaling-stroke"
            />
          </g>
        ))}

        {junctions.map((j, i) => (
          <circle
            key={i}
            className="cgpt-hero-data-junction"
            cx={j.cx}
            cy={j.cy}
            r={j.r}
          />
        ))}

        <circle className="cgpt-hero-data-runner-svg" r="2" fill="#fff" filter={`url(#${glowId})`}>
          <animateMotion
            dur="8s"
            repeatCount="indefinite"
            rotate="0"
            calcMode="linear"
          >
            <mpath href={`#${pathId}`} />
          </animateMotion>
        </circle>
      </svg>
    </div>
  );
}
