"use client";

import { useEffect, useState } from "react";
import { CGPT } from "@/lib/cgpt-assets";
import { AnimatedCircuitLine } from "@/components/chaingpt/AnimatedCircuitLine";
import { useScrollProgress } from "@/hooks/useScrollProgress";

const SECTION_IDS = [
  "intro",
  "buyer-models",
  "unlimited-solutions",
  "services",
  "cases",
  "ecosystem",
  "our-pricing",
  "our-token",
  "team",
  "roadmap",
  "faq",
  "ai-revolution",
  "reviews",
  "about",
  "differentiator",
  "contact",
];

const RAIL_LEFT = "var(--lc-rail-inset)";
const RAIL_RIGHT = "var(--lc-rail-inset)";

export function PageVerticalLines() {
  const progress = useScrollProgress();
  const [docHeight, setDocHeight] = useState(4000);
  const [sectionTops, setSectionTops] = useState<number[]>([]);
  const [scrollY, setScrollY] = useState(0);
  const [viewportH, setViewportH] = useState(900);
  const [introBounds, setIntroBounds] = useState({ top: 0, bottom: 0 });

  useEffect(() => {
    const measure = () => {
      const root = document.getElementById("page-root");
      const measured =
        root?.offsetHeight ??
        document.documentElement.scrollHeight;
      setDocHeight(measured);
      setScrollY(window.scrollY);
      setViewportH(window.innerHeight);
      const tops: number[] = [];
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (el) tops.push(el.offsetTop);
      }
      setSectionTops(tops.sort((a, b) => a - b));
      const intro = document.getElementById("intro");
      if (intro) {
        setIntroBounds({
          top: intro.offsetTop,
          bottom: intro.offsetTop + intro.offsetHeight,
        });
      }
    };

    const onScroll = () => {
      setScrollY(window.scrollY);
      measure();
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(document.body);
    ro.observe(document.documentElement);
    const root = document.getElementById("page-root");
    if (root) ro.observe(root);
    window.addEventListener("resize", measure);
    window.addEventListener("load", measure);
    window.addEventListener("scroll", onScroll, { passive: true });
    const t = setTimeout(measure, 600);
    const t2 = setTimeout(measure, 2000);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
      window.removeEventListener("load", measure);
      window.removeEventListener("scroll", onScroll);
      clearTimeout(t);
      clearTimeout(t2);
    };
  }, []);

  const railFillPercent = progress * 100;

  return (
    <>
      {/* Fixed vertical rails — continuous header to footer */}
      <div className="lc-page-rails" aria-hidden>
        <div className="lc-page-rail lc-page-rail--left">
          <div
            className="lc-page-rail-fill"
            style={{ height: `${railFillPercent}%` }}
          />
        </div>
        <div className="lc-page-rail lc-page-rail--right">
          <div
            className="lc-page-rail-fill"
            style={{ height: `${railFillPercent}%` }}
          />
        </div>
      </div>

      {/* Section circuit connectors between rails */}
      <div
        className="cgpt-page-lines pointer-events-none absolute inset-x-0 top-0 z-[2]"
        style={{ height: docHeight }}
        aria-hidden
      >
        <div className="cgpt-page-circuit absolute inset-x-0 top-0 h-full">
        {sectionTops.map((top, i) => {
          if (SECTION_IDS[i] === "intro") return null;

          const reveal = Math.min(
            1,
            Math.max(0, (scrollY + viewportH * 0.7 - top) / 280),
          );

          return (
            <div
              key={`${top}-${i}`}
              className="cgpt-section-circuit-row absolute"
              style={{ top, left: RAIL_LEFT, right: RAIL_RIGHT }}
            >
              <AnimatedCircuitLine delay={i * 1.35} />

              {/* Left junction */}
              <div
                className="cgpt-circuit-node cgpt-circuit-node--left"
                style={{ opacity: 0.35 + reveal * 0.65 }}
              >
                <img src={CGPT.indicatorLight} alt="" width={5} height={6} />
              </div>

              {/* Right junction */}
              <div
                className="cgpt-circuit-node cgpt-circuit-node--right"
                style={{ opacity: 0.25 + reveal * 0.55 }}
              >
                <img src={CGPT.indicator} alt="" width={5} height={6} />
              </div>

              {/* Vertical pulse traveling down left rail at this section */}
              <div
                className="cgpt-circuit-pulse"
                style={{
                  opacity: reveal,
                  animationDelay: `${i * 0.9}s`,
                }}
              />
            </div>
          );
        })}

        {/* Extra mid-page connectors between sections */}
        {sectionTops.slice(0, -1).map((top, i) => {
          const next = sectionTops[i + 1];
          if (!next) return null;
          const mid = top + (next - top) * 0.5;
          if (mid >= introBounds.top && mid <= introBounds.bottom) return null;
          return (
            <div
              key={`mid-${mid}`}
              className="cgpt-section-circuit-row absolute opacity-40"
              style={{ top: mid, left: RAIL_LEFT, right: RAIL_RIGHT }}
            >
              <AnimatedCircuitLine delay={i * 1.35 + 0.6} variant="short" />
            </div>
          );
        })}
        </div>
      </div>
    </>
  );
}
