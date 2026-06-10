"use client";

import { DIFFERENTIATORS } from "@/lib/commerce-data";
import { GridBox } from "@/components/chaingpt/GridBox";
import { NumberBadge, SectionHead } from "@/components/chaingpt/SectionHead";

export function DifferentiatorSection() {
  return (
    <section id="differentiator" className="border-t border-white/[0.06] bg-black py-16 lg:py-20">
      <div className="lc-page-column">
        <SectionHead title={DIFFERENTIATORS.header} description={DIFFERENTIATORS.opening} />

        <div className="space-y-0">
          {DIFFERENTIATORS.points.map((point, i) => (
            <GridBox
              key={point.title}
              corner={false}
              className={`grid gap-6 p-6 sm:grid-cols-[100px_1fr] sm:p-8 ${i > 0 ? "-mt-px" : ""}`}
            >
              <NumberBadge num={String(i + 1).padStart(2, "0")} />
              <div>
                <h3 className="text-xl font-light text-[#EFEFE5]">{point.title}</h3>
                <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[#EFEFE5]/45">{point.desc}</p>
              </div>
            </GridBox>
          ))}
        </div>
      </div>
    </section>
  );
}
