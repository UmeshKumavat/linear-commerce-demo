"use client";

import { useState } from "react";
import { TEAM_MEMBERS } from "@/lib/cgpt-data";
import { GridBox } from "@/components/chaingpt/GridBox";
import { SectionHead } from "@/components/chaingpt/SectionHead";

const TABS = ["THE TEAM", "Advisors & Ambassadors"];

export function TeamSection() {
  const [tab, setTab] = useState(0);

  return (
    <section id="team" className="border-t border-white/[0.06] bg-black py-16 lg:py-20">
      <div className="container-middle mx-auto max-w-[1220px] px-5 lg:px-8">
        <SectionHead
          title="Faces behind"
          titleAccent="Linear Commerce"
          description="Learn more about our core team, and get familiar with our partners & advisors"
        />

        <div
          role="tablist"
          aria-label="Team categories"
          className="mb-8 flex flex-wrap gap-4 border-b border-white/[0.08] pb-4"
          onKeyDown={(e) => {
            if (e.key === "ArrowRight") setTab((t) => (t + 1) % TABS.length);
            else if (e.key === "ArrowLeft") setTab((t) => (t - 1 + TABS.length) % TABS.length);
          }}
        >
          {TABS.map((t, i) => (
            <button
              key={t}
              type="button"
              role="tab"
              aria-selected={tab === i}
              onClick={() => setTab(i)}
              className={`flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[rgba(38,244,208,0.4)] ${
                tab === i ? "text-[#EFEFE5]" : "text-[#EFEFE5]/35 hover:text-[#EFEFE5]/60"
              }`}
            >
              {t}
              <span className="text-[#EFEFE5]/25">
                [{i === 0 ? "45" : "22"}]
              </span>
            </button>
          ))}
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM_MEMBERS.map((member) => (
            <GridBox key={member.name} corner={false} className="p-5">
              <div className="mb-4 aspect-[4/3] border border-white/[0.06] bg-gradient-to-br from-white/[0.05] to-transparent" />
              <h3 className="text-base font-medium text-[#EFEFE5]">{member.name}</h3>
              <p className="mt-1 text-sm text-[#EFEFE5]/45">{member.role}</p>
              <p className="mt-2 font-mono text-[9px] uppercase tracking-wider text-[#26F4D0]/60">
                {member.dept}
              </p>
            </GridBox>
          ))}
        </div>
      </div>
    </section>
  );
}
