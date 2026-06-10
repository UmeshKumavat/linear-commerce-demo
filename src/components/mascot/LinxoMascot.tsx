"use client";

import { useId } from "react";

export type LinxoExpression =
  | "neutral"
  | "happy"
  | "focused"
  | "thinking"
  | "excited";

export type LinxoPose =
  | "default"
  | "point"
  | "open"
  | "inspect"
  | "tablet"
  | "wave";

interface LinxoMascotProps {
  className?: string;
  eyeReveal?: number;
  expression?: LinxoExpression;
  pose?: LinxoPose;
}

const CREAM = "#EDE6D8";
const CREAM_LIGHT = "#F5F0E8";
const CREAM_SHADOW = "#C9BFB2";
const JOINT = "#121212";

function FaceEyes({
  expression,
  reveal,
}: {
  expression: LinxoExpression;
  reveal: number;
}) {
  const o = Math.min(1, Math.max(0, reveal));
  if (o <= 0) return null;

  switch (expression) {
    case "happy":
      return (
        <g opacity={o} stroke="#fff" strokeWidth="4" fill="none" strokeLinecap="round">
          <path d="M 62 78 Q 72 66 82 78" />
          <path d="M 98 78 Q 108 66 118 78" />
        </g>
      );
    case "focused":
      return (
        <g opacity={o} transform="translate(-6, 0)">
          <circle cx="72" cy="74" r="7" fill="#fff" />
          <circle cx="108" cy="74" r="7" fill="#fff" />
        </g>
      );
    case "thinking":
      return (
        <g opacity={o}>
          <circle cx="78" cy="74" r="9" fill="#fff" />
          <circle cx="112" cy="78" r="4.5" fill="#fff" />
        </g>
      );
    case "excited":
      return (
        <g opacity={o} stroke="#fff" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M 58 64 L 70 76 L 58 88" />
          <path d="M 122 64 L 110 76 L 122 88" />
        </g>
      );
    default:
      return (
        <g opacity={o}>
          <circle cx="74" cy="74" r="7.5" fill="#fff" />
          <circle cx="106" cy="74" r="7.5" fill="#fff" />
        </g>
      );
  }
}

function Arms({ pose }: { pose: LinxoPose }) {
  switch (pose) {
    case "point":
      return (
        <>
          <circle cx="34" cy="142" r="8" fill={JOINT} />
          <rect x="18" y="138" width="22" height="14" rx="7" fill={CREAM} stroke={CREAM_SHADOW} strokeWidth="0.8" />
          <circle cx="22" cy="158" r="7" fill={JOINT} />
          <rect x="10" y="154" width="22" height="28" rx="8" fill={CREAM} stroke={CREAM_SHADOW} strokeWidth="0.8" />
          <circle cx="166" cy="132" r="8" fill={JOINT} />
          <rect x="152" y="124" width="28" height="14" rx="7" fill={CREAM} stroke={CREAM_SHADOW} strokeWidth="0.8" transform="rotate(-18 166 131)" />
          <circle cx="186" cy="118" r="7" fill={JOINT} />
          <rect x="178" y="108" width="24" height="12" rx="6" fill={CREAM} stroke={CREAM_SHADOW} strokeWidth="0.8" transform="rotate(-28 190 114)" />
        </>
      );
    case "open":
      return (
        <>
          <circle cx="26" cy="128" r="8" fill={JOINT} />
          <rect x="8" y="118" width="26" height="14" rx="7" fill={CREAM} stroke={CREAM_SHADOW} strokeWidth="0.8" transform="rotate(-42 21 125)" />
          <circle cx="174" cy="128" r="8" fill={JOINT} />
          <rect x="166" y="118" width="26" height="14" rx="7" fill={CREAM} stroke={CREAM_SHADOW} strokeWidth="0.8" transform="rotate(42 179 125)" />
          <circle cx="12" cy="148" r="7" fill={JOINT} />
          <rect x="2" y="140" width="20" height="22" rx="8" fill={CREAM} stroke={CREAM_SHADOW} strokeWidth="0.8" transform="rotate(-30 12 151)" />
          <circle cx="188" cy="148" r="7" fill={JOINT} />
          <rect x="178" y="140" width="20" height="22" rx="8" fill={CREAM} stroke={CREAM_SHADOW} strokeWidth="0.8" transform="rotate(30 188 151)" />
        </>
      );
    case "inspect":
      return (
        <>
          <circle cx="34" cy="142" r="8" fill={JOINT} />
          <rect x="18" y="138" width="22" height="14" rx="7" fill={CREAM} stroke={CREAM_SHADOW} strokeWidth="0.8" />
          <circle cx="22" cy="158" r="7" fill={JOINT} />
          <rect x="10" y="154" width="22" height="28" rx="8" fill={CREAM} stroke={CREAM_SHADOW} strokeWidth="0.8" />
          <circle cx="178" cy="130" r="8" fill={JOINT} />
          <rect x="162" y="122" width="22" height="14" rx="7" fill={CREAM} stroke={CREAM_SHADOW} strokeWidth="0.8" />
          <circle cx="188" cy="108" r="18" stroke={CREAM_SHADOW} strokeWidth="2" fill="none" opacity="0.7" />
          <circle cx="188" cy="108" r="12" stroke={CREAM_LIGHT} strokeWidth="1.5" fill="rgba(255,255,255,0.08)" />
          <line x1="188" y1="126" x2="178" y2="138" stroke={CREAM_SHADOW} strokeWidth="2" />
        </>
      );
    case "tablet":
      return (
        <>
          <circle cx="40" cy="148" r="8" fill={JOINT} />
          <rect x="30" y="142" width="18" height="14" rx="7" fill={CREAM} stroke={CREAM_SHADOW} strokeWidth="0.8" />
          <circle cx="160" cy="148" r="8" fill={JOINT} />
          <rect x="150" y="142" width="18" height="14" rx="7" fill={CREAM} stroke={CREAM_SHADOW} strokeWidth="0.8" />
          <rect x="72" y="158" width="56" height="40" rx="6" fill="#1a1a1a" stroke={CREAM_SHADOW} strokeWidth="1" />
          <rect x="78" y="164" width="44" height="28" rx="3" fill="#0a0a0a" />
          <line x1="84" y1="172" x2="116" y2="172" stroke="#26F4D0" strokeWidth="1.5" opacity="0.6" />
          <line x1="84" y1="180" x2="108" y2="180" stroke="#724CE8" strokeWidth="1.5" opacity="0.5" />
        </>
      );
    case "wave":
      return (
        <>
          <circle cx="30" cy="118" r="8" fill={JOINT} />
          <rect x="16" y="96" width="22" height="28" rx="8" fill={CREAM} stroke={CREAM_SHADOW} strokeWidth="0.8" transform="rotate(-24 27 110)" />
          <circle cx="20" cy="88" r="7" fill={JOINT} />
          <path
            d="M 8 78 Q 14 68 22 74 Q 30 80 18 88"
            stroke={CREAM_SHADOW}
            strokeWidth="3.5"
            strokeLinecap="round"
            fill="none"
          />
          <circle cx="166" cy="142" r="8" fill={JOINT} />
          <rect x="160" y="138" width="22" height="14" rx="7" fill={CREAM} stroke={CREAM_SHADOW} strokeWidth="0.8" />
          <circle cx="178" cy="158" r="7" fill={JOINT} />
          <rect x="168" y="154" width="22" height="28" rx="8" fill={CREAM} stroke={CREAM_SHADOW} strokeWidth="0.8" />
          <ellipse cx="100" cy="28" rx="14" ry="10" fill="#fff" opacity="0.95" />
          <path d="M 94 30 Q 100 36 106 30" fill="#E879A9" opacity="0.9" />
        </>
      );
    default:
      return (
        <>
          <circle cx="34" cy="142" r="8" fill={JOINT} />
          <rect x="18" y="138" width="22" height="14" rx="7" fill={CREAM} stroke={CREAM_SHADOW} strokeWidth="0.8" />
          <circle cx="22" cy="158" r="7" fill={JOINT} />
          <rect x="10" y="154" width="22" height="28" rx="8" fill={CREAM} stroke={CREAM_SHADOW} strokeWidth="0.8" />
          <path
            d="M 6 182 Q 4 188 10 190 M 12 182 Q 14 188 20 190 M 18 182 Q 20 188 26 190"
            stroke={CREAM_SHADOW}
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          <circle cx="166" cy="142" r="8" fill={JOINT} />
          <rect x="160" y="138" width="22" height="14" rx="7" fill={CREAM} stroke={CREAM_SHADOW} strokeWidth="0.8" />
          <circle cx="178" cy="158" r="7" fill={JOINT} />
          <rect x="168" y="154" width="22" height="28" rx="8" fill={CREAM} stroke={CREAM_SHADOW} strokeWidth="0.8" />
        </>
      );
  }
}

export function LinxoMascot({
  className = "",
  eyeReveal = 1,
  expression = "neutral",
  pose = "default",
}: LinxoMascotProps) {
  const uid = useId().replace(/:/g, "");
  const borderGrad = `linxo-border-${uid}`;
  const bodyGrad = `linxo-body-${uid}`;
  const faceGlow = `linxo-glow-${uid}`;

  return (
    <svg
      viewBox="0 0 200 268"
      fill="none"
      className={className}
      aria-label="Linxo mascot"
      role="img"
    >
      <defs>
        <linearGradient id={borderGrad} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#26F4D0" />
          <stop offset="22%" stopColor="#724CE8" />
          <stop offset="48%" stopColor="#FC6756" />
          <stop offset="72%" stopColor="#F8CF3E" />
          <stop offset="100%" stopColor="#26F4D0" />
        </linearGradient>
        <linearGradient id={bodyGrad} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={CREAM_LIGHT} />
          <stop offset="100%" stopColor={CREAM_SHADOW} />
        </linearGradient>
        <filter id={faceGlow} x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <rect x="38" y="14" width="124" height="96" rx="22" fill={`url(#${bodyGrad})`} stroke={CREAM_SHADOW} strokeWidth="1.2" />
      <rect x="46" y="22" width="108" height="12" rx="4" fill={CREAM_SHADOW} opacity="0.35" />

      <circle cx="28" cy="58" r="14" fill={CREAM} stroke={CREAM_SHADOW} strokeWidth="1" />
      <circle cx="172" cy="58" r="14" fill={CREAM} stroke={CREAM_SHADOW} strokeWidth="1" />
      <circle cx="28" cy="58" r="6" fill={JOINT} opacity="0.85" />
      <circle cx="172" cy="58" r="6" fill={JOINT} opacity="0.85" />
      <path
        d="M 172 68 C 182 82 180 98 168 108"
        stroke={JOINT}
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />

      <rect
        x="52"
        y="36"
        width="96"
        height="58"
        rx="12"
        fill={`url(#${borderGrad})`}
        filter={`url(#${faceGlow})`}
      />
      <rect x="58" y="42" width="84" height="46" rx="8" fill="#060606" />
      <FaceEyes expression={expression} reveal={eyeReveal} />

      <rect x="88" y="110" width="24" height="14" rx="5" fill={CREAM_SHADOW} stroke={CREAM_SHADOW} strokeWidth="0.8" />

      <rect x="48" y="124" width="104" height="78" rx="18" fill={`url(#${bodyGrad})`} stroke={CREAM_SHADOW} strokeWidth="1.2" />
      <rect x="78" y="148" width="14" height="32" rx="7" fill={CREAM_SHADOW} opacity="0.45" />
      <rect x="108" y="148" width="14" height="32" rx="7" fill={CREAM_SHADOW} opacity="0.45" />
      <circle cx="68" cy="138" r="3" fill="#E879A9" />
      <circle cx="78" cy="138" r="3" fill="#F8CF3E" />
      <circle cx="88" cy="138" r="3" fill="#26F4D0" />

      <Arms pose={pose} />

      <circle cx="74" cy="206" r="8" fill={JOINT} />
      <rect x="62" y="202" width="24" height="32" rx="8" fill={CREAM} stroke={CREAM_SHADOW} strokeWidth="0.8" />
      <circle cx="74" cy="236" r="7" fill={JOINT} />
      <rect x="56" y="240" width="34" height="10" rx="3" fill={CREAM_SHADOW} stroke={CREAM_SHADOW} strokeWidth="0.6" />

      <circle cx="126" cy="206" r="8" fill={JOINT} />
      <rect x="114" y="202" width="24" height="32" rx="8" fill={CREAM} stroke={CREAM_SHADOW} strokeWidth="0.8" />
      <circle cx="126" cy="236" r="7" fill={JOINT} />
      <rect x="108" y="240" width="34" height="10" rx="3" fill={CREAM_SHADOW} stroke={CREAM_SHADOW} strokeWidth="0.6" />
    </svg>
  );
}

export function expressionFromScroll(progress: number): LinxoExpression {
  if (progress < 0.12) return "neutral";
  if (progress < 0.32) return "happy";
  if (progress < 0.52) return "focused";
  if (progress < 0.72) return "thinking";
  return "excited";
}
