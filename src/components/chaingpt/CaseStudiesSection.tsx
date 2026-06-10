"use client";

import { CASE_STUDIES } from "@/lib/commerce-data";
import { PrimaryLink, SectionHead } from "@/components/chaingpt/SectionHead";

export function CaseStudiesSection() {
  return (
    <section id="cases" className="border-t border-white/[0.06] bg-black py-16 lg:py-20">
      <div className="lc-page-column">
        <SectionHead title="The proof" titleAccent="is in the build." />

        <div className="mb-8 flex items-center justify-end gap-4">
          <PrimaryLink href="#contact">See all 24 case studies</PrimaryLink>
        </div>

        <div className="grid gap-0 md:grid-cols-3">
          {CASE_STUDIES.map((item, i) => (
            <a
              key={item.title}
              href="#contact"
              className="group border-y border-white/[0.08] bg-white/[0.02] p-6 transition-colors hover:border-[var(--lc-accent-border)] hover:bg-white/[0.04] sm:p-8"
            >
              <div className="mb-4 flex items-center justify-between gap-2">
                <span className="lc-text-accent font-mono text-[9px] uppercase tracking-wider">
                  {item.category}
                </span>
                <span className="text-[10px] text-[#EFEFE5]/30">{item.meta}</span>
              </div>
              <h3 className="text-lg font-light leading-snug text-[#EFEFE5] transition-colors group-hover:text-[var(--lc-accent)]">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#EFEFE5]/45">{item.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
