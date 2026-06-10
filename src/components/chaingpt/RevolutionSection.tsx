"use client";

import { PARTNER_LOGOS } from "@/lib/cgpt-data";

export function RevolutionSection() {
  return (
    <section id="ai-revolution" className="border-t border-white/[0.06] bg-black py-20 lg:py-28">
      <div className="container-middle mx-auto max-w-[1220px] px-5 lg:px-8">
        <div className="flex flex-col items-center justify-center py-12">
          <p className="mb-4 text-[10px] uppercase tracking-[0.35em] text-[#EFEFE5]/40">Join the</p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <div className="cgpt-gradient-border-ai px-8 py-3">
              <span className="text-4xl font-light tracking-tight text-[#EFEFE5] sm:text-5xl lg:text-6xl">
                AI
              </span>
            </div>
            <div className="cgpt-gradient-border-rev px-10 py-3">
              <span className="bg-gradient-to-r from-[#724CE8] via-[#26F4D0] to-[#FC6756] bg-clip-text text-4xl font-light tracking-tight text-transparent sm:text-5xl lg:text-6xl">
                Revolution
              </span>
            </div>
          </div>
        </div>

        <div className="mt-8 border border-white/[0.08]">
          <div className="grid lg:grid-cols-[120px_1fr]">
            <div className="flex items-center border-b border-white/[0.08] px-4 py-3 font-mono text-[9px] uppercase tracking-[0.2em] text-[#EFEFE5]/40 lg:border-b-0 lg:border-r">
              As seen on:
            </div>
            <div className="flex flex-wrap items-center gap-6 overflow-x-auto px-4 py-4">
              {PARTNER_LOGOS.map((logo) => (
                <span
                  key={logo}
                  className="whitespace-nowrap text-[11px] font-medium uppercase tracking-wider text-[#EFEFE5]/25 transition-colors hover:text-[#EFEFE5]/50"
                >
                  {logo}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
