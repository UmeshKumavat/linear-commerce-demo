"use client";

import { useState, useEffect } from "react";

const SERVICES = [
  { label: "COMMERCE DEVELOPMENT", href: "#services" },
  { label: "MARKETPLACE DEVELOPMENT", href: "#services" },
  { label: "CONVERSION OPTIMISATION", href: "#services" },
  { label: "STOREFRONT DESIGN", href: "#services" },
  { label: "COMMERCE OPERATIONS", href: "#services" },
  { label: "OMS · WMS · INVENTORY", href: "#services" },
  { label: "MOBILE COMMERCE", href: "#services" },
  { label: "AI AUTOMATION", href: "#services" },
] as const;

export function HeroServiceNav() {
  const [activeIndex, setActiveIndex] = useState(7);
  const [isHovering, setIsHovering] = useState(false);

  // Auto-cycle through services when not hovering
  useEffect(() => {
    if (isHovering) return;
    const id = setInterval(() => {
      setActiveIndex((i) => (i + 1) % SERVICES.length);
    }, 2200);
    return () => clearInterval(id);
  }, [isHovering]);

  return (
    <nav
      className="cgpt-service-nav"
      aria-label="What we solve"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Header label */}
      <div className="cgpt-service-nav-header">
        {/* <span className="cgpt-service-nav-header-dot" /> */}
        <span className="cgpt-service-nav-header-text">
          Explore All Services<span className="cgpt-service-nav-header-arrow">↗</span>
        </span>
      </div>

      {/* Service list */}
      <ul className="cgpt-service-nav-list">
        {SERVICES.map((svc, i) => (
          <li key={svc.label} className="cgpt-service-nav-item-wrap">
            <a
              href={svc.href}
              className={`cgpt-service-nav-item${i === activeIndex ? " cgpt-service-nav-item--active" : ""}`}
              onMouseEnter={() => setActiveIndex(i)}
            >
              <span className="cgpt-service-nav-item-bar" />
              <span className="cgpt-service-nav-item-text">{svc.label}</span>
              {i === activeIndex && (
                <span className="cgpt-service-nav-item-indicator" aria-hidden>
                  →
                </span>
              )}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
