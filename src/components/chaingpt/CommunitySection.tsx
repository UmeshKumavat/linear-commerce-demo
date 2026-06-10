"use client";

import { CGPT } from "@/lib/cgpt-assets";
import { COMMUNITY_LINKS, PARTNER_LOGOS } from "@/lib/cgpt-data";
import { ExternalArrow, GridBox } from "@/components/chaingpt/GridBox";

function CommunityCell({
  label,
  title,
  badge,
  href,
  className = "",
}: {
  label: string;
  title: string;
  badge: string;
  href: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`group flex flex-col justify-between border-white/[0.08] p-8 transition-colors hover:bg-white/[0.02] ${className}`}
    >
      <div>
        <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#EFEFE5]/35">{label}</p>
        <div className="mt-3 flex items-center gap-2">
          <span className="text-2xl font-light text-[#EFEFE5] sm:text-3xl">{title}</span>
          <ExternalArrow />
        </div>
      </div>
      <span className="mt-8 inline-flex w-fit border border-white/15 px-3 py-1 font-mono text-[9px] uppercase tracking-[0.15em] text-[#EFEFE5]/50 transition-colors group-hover:border-[#26F4D0]/40 group-hover:text-[#26F4D0]/80">
        {badge}
      </span>
    </a>
  );
}

export function CommunitySection() {
  return (
    <section id="about" className="border-t border-white/[0.06] bg-black py-12 lg:py-16">
      <div className="container-middle mx-auto max-w-[1220px] px-5 lg:px-8">
        <GridBox corner={false} className="relative overflow-hidden">
          {/* 2x2 grid */}
          <div className="relative grid sm:grid-cols-2">
            <CommunityCell
              {...COMMUNITY_LINKS[0]}
              className="border-b sm:border-r"
            />
            <CommunityCell
              {...COMMUNITY_LINKS[1]}
              className="border-b"
            />
            <CommunityCell
              {...COMMUNITY_LINKS[2]}
              className="border-b sm:border-b-0 sm:border-r"
            />
            <CommunityCell
              {...COMMUNITY_LINKS[3]}
              className="border-b sm:border-b-0"
            />

            <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
              <div
                className="relative p-[3px]"
                style={{
                  background:
                    "linear-gradient(135deg, #724CE8, #26F4D0, #F8CF3E, #FC6756, #724CE8)",
                }}
              >
                <div className="relative bg-black p-3">
                  <img
                    src={CGPT.face}
                    alt=""
                    width={80}
                    height={72}
                    className="relative z-10 w-[72px] sm:w-[88px]"
                  />
                  <img
                    src={CGPT.eyes}
                    alt=""
                    className="absolute left-[28%] top-[34%] z-20 h-[22%] w-[44%] object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Partner ticker */}
          <div className="border-t border-white/[0.08] px-4 py-3">
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
              {PARTNER_LOGOS.map((logo) => (
                <span
                  key={logo}
                  className="text-[9px] font-medium uppercase tracking-[0.12em] text-[#EFEFE5]/20"
                >
                  {logo}
                </span>
              ))}
            </div>
          </div>
        </GridBox>
      </div>
    </section>
  );
}
