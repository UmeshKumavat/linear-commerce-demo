"use client";

import { SERVICES } from "@/lib/commerce-data";
import { GridBox } from "@/components/chaingpt/GridBox";
import { NumberBadge, PrimaryLink, SectionHead, TagList } from "@/components/chaingpt/SectionHead";

export function SolutionsSection() {
  return (
    <section id="services" className="border-t border-white/[0.06] bg-black py-16 lg:py-20">
      <div className="lc-page-column">
        <SectionHead title="One team." titleAccent="Every layer of your commerce system." />

        <div className="space-y-0">
          {SERVICES.map((sol, i) => (
            <GridBox
              key={sol.num}
              corner={false}
              className={`grid gap-6 border-t-0 p-6 sm:p-8 lg:grid-cols-[100px_1fr_auto] lg:items-start ${i > 0 ? "-mt-px" : ""}`}
            >
              <NumberBadge num={sol.num} />
              <div>
                <h3 className="text-xl font-light leading-snug text-[#EFEFE5] sm:text-2xl">
                  {sol.title}
                </h3>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#EFEFE5]/45">{sol.desc}</p>
                <div className="mt-5">
                  <TagList tags={sol.tags} />
                </div>
              </div>
              <div className="flex items-end lg:justify-end">
                <PrimaryLink href="#contact">{sol.cta}</PrimaryLink>
              </div>
            </GridBox>
          ))}
        </div>
      </div>
    </section>
  );
}
