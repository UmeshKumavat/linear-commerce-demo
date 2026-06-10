"use client";

import { CGPT } from "@/lib/cgpt-assets";

export function HeroAsideRail() {
  return (
    <div className="cgpt-aside-rail">

      {/* Top: single active dot only */}
      <div className="cgpt-aside-rail-top">
        <span className="cgpt-aside-rail-dot cgpt-aside-rail-dot--active" />
      </div>

      {/* Spacer fills the gap between top dot and bottom cluster */}
      <div style={{ flex: 1 }} aria-hidden />

      {/* Bottom: navigation dots cluster + menu button */}
      <div className="cgpt-aside-rail-bottom">
        <div className="cgpt-aside-rail-dots">
          {[0, 1, 2, 3, 4].map((i) => (
            <span key={i} className="cgpt-aside-rail-dot" />
          ))}
        </div>
        <a href="#" className="cgpt-aside-menu-btn" aria-label="Open menu">
          <img src={CGPT.menuIcon} alt="" width={24} height={24} aria-hidden />
          <span className="cgpt-aside-rail-label">MENU</span>
        </a>
      </div>

    </div>
  );
}
