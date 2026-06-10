"use client";

import { type ReactNode, useId } from "react";

export function SectionHead({
  title,
  titleAccent,
  description,
  id,
}: {
  title: string;
  titleAccent?: string;
  description?: ReactNode;
  id?: string;
}) {
  const gradId = useId().replace(/:/g, "");

  return (
    <div id={id} className="section-head-cols relative mb-10 grid gap-6 border-b border-white/[0.08] pb-8 lg:grid-cols-2 lg:items-end">
      <div className="cgpt-section-head-line pointer-events-none absolute -left-5 -right-5 bottom-0 hidden lg:block" aria-hidden>
        <svg viewBox="0 0 1000 2" preserveAspectRatio="none" className="h-px w-full">
          <defs>
            <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f5ebe3" />
              <stop offset="45%" stopColor="#e8b896" />
              <stop offset="100%" stopColor="#c85a32" />
            </linearGradient>
          </defs>
          <path d="M0 1 H1000" stroke="#353539" strokeWidth="1" vectorEffect="non-scaling-stroke" />
          <path
            className="cgpt-line-animaton cgpt-line-animaton--loop"
            d="M0 1 H1000"
            stroke={`url(#${gradId})`}
            strokeWidth="1"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </div>
      <div>
        <h2 className="text-3xl font-light leading-tight text-[#EFEFE5] sm:text-4xl lg:text-[2.5rem]">
          {title}
          {titleAccent && (
            <>
              <br />
              <span className="lc-text-accent-gradient">{titleAccent}</span>
            </>
          )}
        </h2>
      </div>
      {description && (
        <p className="max-w-md text-sm leading-relaxed text-[#EFEFE5]/45 lg:ml-auto">
          {description}
        </p>
      )}
    </div>
  );
}

export function NumberBadge({ num }: { num: string }) {
  return (
    <div className="relative inline-flex items-center justify-center px-3 py-1 font-mono text-sm text-[#EFEFE5]/70">
      <span className="absolute left-0 top-0 h-2 w-2 border-l border-t border-[var(--lc-accent-border)]" />
      <span className="absolute right-0 top-0 h-2 w-2 border-r border-t border-[var(--lc-accent-border)]" />
      <span className="absolute bottom-0 left-0 h-2 w-2 border-b border-l border-[var(--lc-accent-border)]" />
      <span className="absolute bottom-0 right-0 h-2 w-2 border-b border-r border-[var(--lc-accent-border)]" />
      {num}
    </div>
  );
}

export function TagList({ tags }: { tags: readonly string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className="border border-white/10 px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-[#EFEFE5]/45"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

export function PrimaryLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      className="lc-hover-accent inline-flex items-center gap-2 border border-white/15 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.14em] text-[#EFEFE5]/70"
    >
      {children}
    </a>
  );
}
