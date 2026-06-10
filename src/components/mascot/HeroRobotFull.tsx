"use client";

import { LinxoMascot } from "@/components/mascot/LinxoMascot";

export function HeroRobotFull({ eyeReveal = 1 }: { eyeReveal?: number }) {
  return (
    <div
      className="pointer-events-none relative z-10 flex w-[140px] flex-col items-center sm:w-[170px]"
      aria-hidden
    >
      <LinxoMascot
        className="w-full"
        eyeReveal={eyeReveal}
        expression={
          eyeReveal < 0.3 ? "neutral" : eyeReveal < 0.7 ? "happy" : "excited"
        }
      />

      <div className="-mt-1 flex flex-col items-center">
        <div className="h-3 w-[110%] border border-[#353539] bg-[#0c0c0c]" />
        <div className="h-2 w-[130%] border-x border-b border-[#353539] bg-[#080808]" />
      </div>
    </div>
  );
}
