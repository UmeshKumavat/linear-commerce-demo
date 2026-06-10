"use client";

import { ECOSYSTEM_LAYERS } from "@/lib/cgpt-data";
import { GridBox } from "@/components/chaingpt/GridBox";
import { NumberBadge, SectionHead } from "@/components/chaingpt/SectionHead";

export function EcosystemSection() {
  return (
    <section id="ecosystem" className="border-t border-white/[0.06] bg-black py-16 lg:py-20">
      <div className="container-middle mx-auto max-w-[1220px] px-5 lg:px-8">
        <SectionHead
          title="The Ecosystem"
          titleAccent="behind Linear Commerce"
          description="Stay updated on our product ecosystem — from sub-products to integrations to AI models, & way more!"
        />

        <div className="space-y-0">
          {ECOSYSTEM_LAYERS.map((layer, i) => (
            <GridBox
              key={layer.num}
              corner={false}
              className={`grid gap-6 p-6 sm:grid-cols-[120px_1fr] sm:p-8 ${i > 0 ? "-mt-px" : ""}`}
            >
              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#EFEFE5]/30">Layer</p>
                <NumberBadge num={layer.num} />
              </div>
              <div>
                <h3 className="text-xl font-light text-[#EFEFE5]">{layer.title}</h3>
                <p className="mt-2 max-w-2xl text-sm text-[#EFEFE5]/45">{layer.desc}</p>
                <div className="mt-4 h-24 border border-white/[0.06] bg-gradient-to-r from-[#724CE8]/10 via-[#26F4D0]/5 to-transparent" />
              </div>
            </GridBox>
          ))}
        </div>
      </div>
    </section>
  );
}
