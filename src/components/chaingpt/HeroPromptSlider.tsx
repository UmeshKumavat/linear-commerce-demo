"use client";

import { CGPT } from "@/lib/cgpt-assets";
import { HERO_PROMPTS } from "@/lib/cgpt-data";

const PROMPT_SPLITS: Record<string, { part1: string; part2: string }> = {
  "ANALYZE THIS TOKEN'S ON-CHAIN ACTIVITY AND MARKET TRENDS": {
    part1: "ANALYZE THIS TOKEN'S ON-CHAIN",
    part2: "ACTIVITY AND MARKET TRENDS",
  },
  "DEPLOY MY CUSTOM AI MODEL ON THIS DECENTRALIZED INFRASTRUCTURE": {
    part1: "DEPLOY MY CUSTOM AI MODEL ON THIS",
    part2: "DECENTRALIZED INFRASTRUCTURE",
  },
  "AUDIT AND DEPLOY MY ERC-20 SMART CONTRACT FOR POTENTIAL ISSUES": {
    part1: "AUDIT AND DEPLOY MY ERC-20 SMART",
    part2: "CONTRACT FOR POTENTIAL ISSUES",
  },
  "BUILD AN AI-POWERED TRADING BOT WITH A CUSTOM TOKEN ON BNB CHAIN": {
    part1: "BUILD AN AI-POWERED TRADING BOT",
    part2: "WITH A CUSTOM TOKEN ON BNB CHAIN",
  },
  "GENERATE AND MINT A CYBERPUNK-STYLE PFP NFT COLLECTION": {
    part1: "GENERATE AND MINT A CYBERPUNK-STYLE",
    part2: "PFP NFT COLLECTION",
  },
};

function splitPrompt(text: string) {
  const upper = text.toUpperCase();
  if (PROMPT_SPLITS[upper]) {
    return PROMPT_SPLITS[upper];
  }
  const words = upper.split(" ");
  const mid = Math.ceil(words.length / 2);
  return {
    part1: words.slice(0, mid).join(" "),
    part2: words.slice(mid).join(" "),
  };
}

export function HeroPromptSlider({ index }: { index: number }) {
  return (
    <div className="cgpt-hero-prompt-col cgpt-prompt-col">
      {/* 1. Top-left: square box (66x66px) with quote icon centered, has horizontal line extending right */}
      <div className="cgpt-hero-slider-quote">
        <img
          src={CGPT.quote}
          alt=""
          width={16}
          height={13}
          className="cgpt-prompt-quote-img"
          aria-hidden
        />
        <div className="cgpt-hero-quote-line" />
      </div>

      {/* 2. Below (connected, margin-bottom: -1px so borders merge): bordered text box */}
      <div className="cgpt-hero-slider-wrap">
        {/* Corner SVG sits at top-left of the prompt box */}
        <img
          src={CGPT.corner}
          alt=""
          width={12}
          height={12}
          className="cgpt-corner cgpt-corner--top-left"
          aria-hidden
        />
        <div className="cgpt-hero-slider-inner">
          <div className="cgpt-hero-slide">
            <p>
              <span className="cgpt-prompt-line-white">
                THE HARDER THE COMMERCE PROBLEM,
              </span>{" "}
              <span className="cgpt-prompt-line-muted">
                THE MORE WE WANT IT.
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* 3. Below that: ghost/secondary prompt in muted text */}
      <div className="cgpt-hero-prompt-secondary">
        THERE IS NO COMMERCE CHALLENGE TOO COMPLEX, TOO SPECIFIC, OR TOO
        UNCONVENTIONAL FOR US.
      </div>
    </div>
  );
}
