"use client";

import { useLayoutEffect, useRef, useState } from "react";

function ResponsiveTopStrokeBox({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ w: 421, h: 96 });

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => {
      setSize({ w: el.clientWidth, h: el.clientHeight });
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const { w, h } = size;

  const dA = `M 157.5 ${h - 2} H ${w - 15} L ${w - 2} ${h - 15}`;
  const dB = `M 2 ${h - 15} V 15 L 15 2 H ${w - 2}`;

  return (
    <div ref={ref} className="cgpt-hero-heading-top relative w-fit">
      {children}
      <div className="absolute inset-0 pointer-events-none">
        <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} fill="none" style={{ overflow: "visible" }}>
          <path d={dA} stroke="url(#hsA)" strokeWidth="2.5" strokeLinecap="round" />
          <path d={dB} stroke="url(#hsB)" strokeWidth="2.5" strokeLinecap="round" />
          <defs>
            <linearGradient id="hsA" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop stopColor="#F8CF3E" />
              <stop offset="1" stopColor="#FC6756" />
            </linearGradient>
            <linearGradient id="hsB" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0.236" stopColor="#724CE8" />
              <stop offset="1" stopColor="#26F4D0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function ResponsiveBottomStrokeBox({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ w: 115, h: 88 });

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => {
      setSize({ w: el.clientWidth, h: el.clientHeight });
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const { w, h } = size;

  const dC = `M 2 2 V ${h - 15} L 15 ${h - 2} H ${w / 2}`;
  const dD = `M ${w / 2} ${h - 2} H ${w - 15} L ${w - 2} ${h - 15} V 15 L ${w - 15} 2`;

  return (
    <div ref={ref} className="cgpt-hero-heading-bottom relative w-fit">
      {children}
      <div className="absolute inset-0 pointer-events-none">
        <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} fill="none" style={{ overflow: "visible" }}>
          <path d={dC} stroke="url(#hsC)" strokeWidth="2.5" strokeLinecap="round" />
          <path d={dD} stroke="url(#hsD)" strokeWidth="2.5" strokeLinecap="round" />
          <defs>
            <linearGradient id="hsC" x1="0" y1="0" x2={w} y2={h}>
              <stop stopColor="#724CE8" />
              <stop offset="1" stopColor="#26F4D0" />
            </linearGradient>
            <linearGradient id="hsD" x1={w / 2} y1={h} x2={w} y2="0">
              <stop stopColor="#F8CF3E" />
              <stop offset="1" stopColor="#FC6756" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

export function HeroHeadings() {
  return (
    <div className="pb-1">
      <p className="uppercase text-[var(--cgpt-text)] opacity-40" style={{ fontSize: "0.6875rem", letterSpacing: "0.28em", marginBottom: "0.25rem", lineHeight: "1.3" }}>
        BUILT FOR COMPLEXITY.
      </p>
      <p className="uppercase text-[var(--cgpt-text)] opacity-40" style={{ fontSize: "0.6875rem", letterSpacing: "0.28em", marginBottom: "0.5rem", lineHeight: "1.3" }}>
        BUILT FOR SCALE.
      </p>
      <div
        className="cgpt-hero-heading"
        style={{ ["--cgpt-hero-title-size" as any]: "clamp(1.5rem, 3.2vw, 2.25rem)" }}
      >
        <ResponsiveTopStrokeBox>
          <h4 className="cgpt-heading-4 whitespace-nowrap" style={{ whiteSpace: "nowrap" }}>
            FOR BUSINESSES THAT HAVE OUTGROWN
          </h4>
        </ResponsiveTopStrokeBox>
        <ResponsiveBottomStrokeBox>
          <h4 className="cgpt-heading-4 whitespace-nowrap" style={{ whiteSpace: "nowrap" }}>
            THEMSELVES.
          </h4>
        </ResponsiveBottomStrokeBox>
      </div>
    </div>
  );
}
