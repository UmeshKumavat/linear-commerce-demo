"use client";

import { BUYER_MODELS } from "@/lib/commerce-data";
import { GridBox } from "@/components/chaingpt/GridBox";
import { SectionHead } from "@/components/chaingpt/SectionHead";

export function BuyerEntrySection() {
  return (
    <section id="buyer-models" className="relative border-t border-white/[0.06] lc-section-bg py-16 lg:py-20">
      <div className="lc-page-column">
        <SectionHead title="Whatever your commerce model," titleAccent="we have built it before." />

        <div className="grid gap-0 md:grid-cols-3">
          {BUYER_MODELS.map((model, i) => (
            <GridBox
              key={model.title}
              corner={false}
              className="flex h-full flex-col p-6 sm:p-8"
            >
              <h3 className="text-lg font-light text-[#EFEFE5] sm:text-xl">{model.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-[#EFEFE5]/45">{model.desc}</p>
            </GridBox>
          ))}
        </div>

      </div>
    </section>
  );
}
