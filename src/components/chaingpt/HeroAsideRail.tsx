"use client";

import { CGPT } from "@/lib/cgpt-assets";

export function HeroAsideRail() {
  return (
    <div className="cgpt-aside-rail">
      <div className="cgpt-aside-rail-top">
        <div className="cgpt-aside-rail-dots">
          {[0, 1, 2, 3, 4].map((i) => (
            <span
              key={i}
              className={`cgpt-aside-rail-dot${i === 0 ? " cgpt-aside-rail-dot--active" : ""}`}
            />
          ))}
        </div>
        <span className="cgpt-aside-rail-label">INTRO</span>
      </div>
      <div className="cgpt-aside-rail-spine" aria-hidden />
      <a href="#" className="cgpt-aside-menu-btn" aria-label="Open menu">
        <img src={CGPT.menuIcon} alt="" width={24} height={24} />
        <span className="cgpt-aside-rail-label">MENU</span>
      </a>
    </div>
  );
}
