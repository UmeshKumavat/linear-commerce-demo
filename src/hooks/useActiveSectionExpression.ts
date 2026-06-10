"use client";

import { useEffect, useState } from "react";
import type { LinxoExpression } from "@/components/mascot/LinxoMascot";

const SECTION_EXPRESSIONS: Record<string, LinxoExpression> = {
  intro: "neutral",
  "unlimited-solutions": "focused",
  solutions: "happy",
  cases: "focused",
  ecosystem: "thinking",
  "our-pricing": "neutral",
  "our-token": "happy",
  team: "thinking",
  roadmap: "focused",
  faq: "neutral",
  "ai-revolution": "excited",
  reviews: "happy",
  about: "excited",
};

const WATCHED_SECTIONS = Object.keys(SECTION_EXPRESSIONS);

export function useActiveSectionExpression() {
  const [expression, setExpression] = useState<LinxoExpression>("neutral");

  useEffect(() => {
    const ratios = new Map<string, number>();

    const pick = () => {
      let bestId = "intro";
      let best = 0;
      for (const [id, ratio] of ratios) {
        if (ratio > best) {
          best = ratio;
          bestId = id;
        }
      }
      setExpression(SECTION_EXPRESSIONS[bestId] ?? "neutral");
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          ratios.set(entry.target.id, entry.intersectionRatio);
        }
        pick();
      },
      {
        threshold: [0, 0.1, 0.25, 0.4, 0.55, 0.7, 0.85, 1],
        rootMargin: "-35% 0px -35% 0px",
      },
    );

    for (const id of WATCHED_SECTIONS) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return expression;
}
