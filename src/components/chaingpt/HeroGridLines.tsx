"use client";

export function HeroGridLines() {
  return (
    <div className="cgpt-hero-grid pointer-events-none absolute inset-0 z-[1]" aria-hidden>
      <div className="cgpt-hero-grid-line cgpt-hero-grid-line--a" />
      <div className="cgpt-hero-grid-line cgpt-hero-grid-line--b" />
      <div className="cgpt-hero-grid-line cgpt-hero-grid-line--c" />
      <div className="cgpt-hero-grid-junction cgpt-hero-grid-junction--tl" />
      <div className="cgpt-hero-grid-junction cgpt-hero-grid-junction--tr" />
      <div className="cgpt-hero-grid-junction cgpt-hero-grid-junction--bl" />
      <div className="cgpt-hero-grid-junction cgpt-hero-grid-junction--br" />
    </div>
  );
}
