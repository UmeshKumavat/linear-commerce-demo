"use client";

import { CGPT } from "@/lib/cgpt-assets";
import { HEADER_NAV, SITE } from "@/lib/cgpt-data";
import { ThemeToggle } from "@/components/theme/ThemeToggle";

/** 2×2 grid of dots — "OUR ECOSYSTEM" icon */
function ProductMenuIcon() {
  return (
    <span className="cgpt-header-grid-icon" aria-hidden>
      <span />
      <span />
      <span />
      <span />
    </span>
  );
}

/** Chevron-down arrow for nav dropdowns */
function ChevronDown() {
  return (
    <svg
      width="7"
      height="4"
      viewBox="0 0 7 4"
      fill="none"
      className="cgpt-nav-chevron"
      aria-hidden
    >
      <path
        d="M0.5 0.5L3.5 3.5L6.5 0.5"
        stroke="currentColor"
        strokeWidth="1"
      />
    </svg>
  );
}

/**
 * Logo — rainbow gradient rounded-square icon + "ChainGPT" text.
 * Matches chaingpt.org exactly: gradient border frame with dark inner,
 * face SVG + eyes PNG layered, then the brand name.
 */
function HeaderLogo() {
  return (
    <a href="#intro" className="cgpt-header-logo" aria-label={SITE.name}>
      <img
        src="/linear-commerce-dark.jpeg"
        alt=""
        className="cgpt-brand-logo cgpt-brand-logo--dark"
        aria-hidden
      />
      <img
        src="/linear-commerce-light.png"
        alt=""
        className="cgpt-brand-logo cgpt-brand-logo--light"
        aria-hidden
      />
      <span className="cgpt-header-logo-text">{SITE.name}</span>
    </a>
  );
}

/**
 * LAUNCH DAPP CTA button — "••" dots + label text + corner SVG brackets.
 */
function LaunchDappLink() {
  return (
    <a href={SITE.ctaHref} className="cgpt-header-launch">
      <span className="cgpt-header-launch-inner">
        <span className="cgpt-header-launch-dots" aria-hidden>
          <span />
          <span />
        </span>
        <span>{SITE.cta}</span>
      </span>
      {/* Top-left corner bracket */}
      <img
        src={CGPT.corner}
        alt=""
        width={10}
        height={10}
        className="cgpt-header-launch-corner cgpt-header-launch-corner--tl"
        aria-hidden
      />
      {/* Bottom-right corner bracket (rotated 180°) */}
      <img
        src={CGPT.corner}
        alt=""
        width={10}
        height={10}
        className="cgpt-header-launch-corner cgpt-header-launch-corner--br"
        aria-hidden
      />
    </a>
  );
}

export function Header() {
  const ecosystem = HEADER_NAV[0]; // "Our Ecosystem" — highlighted first item
  const navLinks = HEADER_NAV.slice(1); // Remaining nav items

  return (
    <header className="cgpt-header" role="banner">
      <div className="cgpt-header-container">
        {/* Left gutter — logo */}
        <div className="cgpt-header-side">
          <HeaderLogo />
        </div>

        {/* Center nav — between the two rails */}
        <nav className="cgpt-header-mdl" aria-label="Main navigation">
          {/* Highlighted "OUR ECOSYSTEM" tab */}
          <a
            href={ecosystem.href}
            className="cgpt-product-menu-toggle"
            aria-current="page"
          >
            <span className="cgpt-product-menu-line" aria-hidden />
            <ProductMenuIcon />
            {ecosystem.label}
          </a>

          {/* Regular nav links with chevrons */}
          {navLinks.map((item) => (
            <a key={item.label} href={item.href} className="cgpt-nav-link">
              {item.label}
              {item.dropdown && <ChevronDown />}
            </a>
          ))}
        </nav>

        {/* Right gutter — theme toggle + CTA */}
        <div className="cgpt-header-actions">
          <ThemeToggle />
          <LaunchDappLink />
        </div>
      </div>
    </header>
  );
}
