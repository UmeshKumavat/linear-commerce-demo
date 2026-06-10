"use client";

import { CGPT } from "@/lib/cgpt-assets";
import { HERO_FEATURES } from "@/lib/cgpt-data";

const CUSTOM_FEATURE_LIST = [
  "D2C Commerce",
  "B2C Commerce",
  "B2B Commerce",
  "Launch Your Store",
  "Scale and Migrate",
  "Enterprise Commerce",
  "Supply Chain and Operations",
];

export function HeroFeatureSlider({ index }: { index: number }) {
  return (
    <div className="cgpt-feature-col">
      <div className="cgpt-feature-top-container">
        {/* 1. HEADER ROW (indicator + label + icon box) - now a link to contact */}
        <a
          href="#contact"
          className="cgpt-feature-upper-box hover:opacity-85 transition-opacity"
          style={{ textDecoration: "none" }}
        >
          <div
            className="cgpt-feature-upper-left"
            style={{ minWidth: 0, overflow: "hidden" }}
          >
            {/* <span
              className="cgpt-feature-upper-dot"
              style={{ flexShrink: 0 }}
            /> */}
            <span
              className="cgpt-feature-upper-text"
              style={{
                whiteSpace: "wrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              Get a free commerce audit&nbsp;→
            </span>
          </div>
          <div className="cgpt-feature-upper-right">
            <div className="cgpt-feature-logo-icon">
              <img
                src={CGPT.face}
                alt=""
                width={16}
                height={16}
                className="cgpt-feature-logo-face"
                aria-hidden
              />
              <img
                src={CGPT.eyes}
                alt=""
                width={10}
                height={10}
                className="cgpt-feature-logo-eyes"
                aria-hidden
              />
            </div>
          </div>
        </a>

        {/* 2. SCORE ROW (the active feature name box with arrowhead outside) - now a link to solutions */}
        <div className="cgpt-feature-lower-row">
          <div className="cgpt-feature-lower-line-wrap">
            <div className="cgpt-feature-lower-line" />
            <span className="cgpt-feature-lower-arrow">►</span>
          </div>
          <a
            href="#solutions"
            className="cgpt-feature-lower-box hover:opacity-85 transition-opacity"
            style={{ textDecoration: "none" }}
          >
            {/* Corner brackets */}
            <img
              src={CGPT.corner}
              alt=""
              width={8}
              height={8}
              className="cgpt-feature-box-corner cgpt-feature-box-corner--tl"
              aria-hidden
            />
            <img
              src={CGPT.corner}
              alt=""
              width={8}
              height={8}
              className="cgpt-feature-box-corner cgpt-feature-box-corner--br"
              aria-hidden
            />
            {/* SCORE TEXT */}
            <span className="cgpt-feature-score-text">
              SEE WHAT WE HAVE SOLVED ↗
            </span>
          </a>
        </div>

        {/* 3. FEATURE LIST (5 items, right-aligned) */}
        <ul className="cgpt-feature-list">
          {CUSTOM_FEATURE_LIST.map((item) => (
            <li key={item} className="cgpt-feature-item">
              <span className="cgpt-feature-item-chevron">◀</span>
              <span className="cgpt-feature-item-text">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
