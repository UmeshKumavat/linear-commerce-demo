"use client";

import { TOKEN_FEATURES } from "@/lib/cgpt-data";
import { GridBox } from "@/components/chaingpt/GridBox";
import { PrimaryLink, SectionHead } from "@/components/chaingpt/SectionHead";

export function TokenSection() {
  return (
    <section id="our-token" className="border-t border-white/[0.06] bg-black py-16 lg:py-20">
      <div className="container-middle mx-auto max-w-[1220px] px-5 lg:px-8">
        <GridBox className="overflow-hidden">
          <div className="grid lg:grid-cols-2">
            <div className="border-b border-white/[0.08] p-8 lg:border-b-0 lg:border-r">
              <SectionHead
                title="$LCXP"
                description="The Linear Commerce ecosystem is backed by the $LCXP token. Gain voting power, access premium AI tools, and more."
              />
              <div className="mt-8 aspect-square max-w-[280px] border border-white/[0.08] bg-gradient-to-br from-[#724CE8]/20 via-[#26F4D0]/10 to-[#FC6756]/10" />
            </div>
            <div className="p-8">
              <p className="mb-6 font-mono text-[10px] uppercase tracking-[0.18em] text-[#EFEFE5]/35">
                Features of the token
              </p>
              <ul className="space-y-4">
                {TOKEN_FEATURES.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-3 border-b border-white/[0.06] pb-4 text-sm text-[#EFEFE5]/75 last:border-0"
                  >
                    <span className="h-1 w-1 rounded-full bg-[#26F4D0]" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <PrimaryLink href="#">Buy $LCXP</PrimaryLink>
                <PrimaryLink href="#">Stake now</PrimaryLink>
              </div>
            </div>
          </div>
        </GridBox>
      </div>
    </section>
  );
}
