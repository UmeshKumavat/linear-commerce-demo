"use client";

import { CLOSING_CTA } from "@/lib/commerce-data";
import { GridBox } from "@/components/chaingpt/GridBox";

export function ClosingCTASection() {
  return (
    <section id="contact" className="border-t border-white/[0.06] bg-black py-20 lg:py-28">
      <div className="lc-page-column">
        <GridBox className="px-6 py-12 text-center sm:px-10 sm:py-16">
          <h2 className="text-3xl font-light leading-tight text-[#EFEFE5] sm:text-4xl lg:text-5xl">
            {CLOSING_CTA.header}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-[#EFEFE5]/45 sm:text-base">
            {CLOSING_CTA.subline}
          </p>
          <a
            href="mailto:hello@linearcommerce.com"
            className="lc-hover-accent mt-8 inline-block border border-white/20 px-8 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-[#EFEFE5]"
          >
            {CLOSING_CTA.button}
          </a>
        </GridBox>
      </div>
    </section>
  );
}
