import { type ReactNode } from "react";
import { CGPT } from "@/lib/cgpt-assets";

export function GridBox({
  children,
  className = "",
  corner = true,
}: {
  children: ReactNode;
  className?: string;
  corner?: boolean;
}) {
  return (
    <div className={`relative border-y border-white/[0.08] bg-black ${className}`}>
      {corner && (
        <div className="absolute left-0 top-0 z-10">
          <img src={CGPT.corner} alt="" width={15} height={15} className="opacity-80" />
        </div>
      )}
      {children}
    </div>
  );
}

export function ExternalArrow() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="inline-block opacity-60">
      <path d="M1 9L9 1M9 1H3M9 1V7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}
