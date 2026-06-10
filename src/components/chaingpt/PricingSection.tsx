"use client";

import { PRICING_TOOLS } from "@/lib/cgpt-data";
import { GridBox } from "@/components/chaingpt/GridBox";
import { PrimaryLink, SectionHead } from "@/components/chaingpt/SectionHead";

export function PricingSection() {
  return (
    <section id="our-pricing" className="border-t border-white/[0.06] bg-black py-16 lg:py-20">
      <div className="container-middle mx-auto max-w-[1220px] px-5 lg:px-8">
        <SectionHead
          title="Our Pricing"
          description='Linear Commerce offers flexible plans. Pay-as-you-go with credits — 1 credit = $0.01 USD.'
        />

        <p className="mb-8 font-mono text-[10px] uppercase tracking-[0.18em] text-[#EFEFE5]/35">
          Credits — &quot;LC Credits&quot;. 1 credit = $0.01
        </p>

        <div className="grid gap-0 sm:grid-cols-2 lg:grid-cols-3">
          {PRICING_TOOLS.map((tool, i) => (
            <GridBox
              key={tool.name}
              corner={false}
              className={`p-5 ${i > 0 ? "sm:-ml-px sm:mt-0 -mt-px" : ""}`}
            >
              <h3 className="text-sm font-medium text-[#EFEFE5]/90">{tool.name}</h3>
              <div className="mt-4 grid grid-cols-2 gap-4 border-t border-white/[0.06] pt-4">
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-wider text-[#EFEFE5]/30">Free daily</p>
                  <p className="mt-1 text-lg text-[#26F4D0]">{tool.free}</p>
                </div>
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-wider text-[#EFEFE5]/30">Per usage</p>
                  <p className="mt-1 text-lg text-[#EFEFE5]/70">{tool.paid}</p>
                </div>
              </div>
            </GridBox>
          ))}
        </div>

        <div className="mt-8 text-center">
          <PrimaryLink href="#">view full pricing</PrimaryLink>
        </div>
      </div>
    </section>
  );
}
