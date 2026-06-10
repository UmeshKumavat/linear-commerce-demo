"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CGPT } from "@/lib/cgpt-assets";
import { AWARDS, GATEWAY_STATS, PRODUCT_STEPS } from "@/lib/cgpt-data";

export function UnlimitedSolutions() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % PRODUCT_STEPS.length);
    }, 3000);
    return () => clearInterval(id);
  }, []);

  const step = PRODUCT_STEPS[index];

  return (
    <section id="unlimited-solutions" className="relative border-t border-white/[0.06] bg-black py-16 lg:py-20">
      <div className="container-middle mx-auto max-w-[1220px] px-5 lg:px-8">
        {/* Product slider */}
        <div className="mx-auto max-w-[640px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={step.num}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.45 }}
              className="flex items-center gap-6 border border-white/[0.08] bg-white/[0.02] px-6 py-5"
            >
              <div className="flex items-center gap-2 text-2xl font-light tabular-nums text-[#EFEFE5]/25">
                <img src={CGPT.indicator} alt="" width={5} height={6} />
                {step.num}
              </div>
              <div className="text-base font-normal text-[#EFEFE5]/90">{step.title}</div>
            </motion.div>
          </AnimatePresence>
          <div className="mt-4 flex justify-center gap-1.5">
            {PRODUCT_STEPS.map((s, i) => (
              <button
                key={s.num}
                type="button"
                onClick={() => setIndex(i)}
                className={`h-1 rounded-full transition-all ${i === index ? "w-6 bg-[#26F4D0]" : "w-2 bg-white/15"}`}
                aria-label={`Step ${s.num}`}
              />
            ))}
          </div>
        </div>

        {/* Gateway stats */}
        <div className="mt-20 border-t border-white/[0.08] pt-16 text-center">
          <h2 className="text-3xl font-light leading-tight text-[#EFEFE5] sm:text-4xl">
            Your Gateway
            <br />
            <span className="text-[#EFEFE5]/40">To Commerce AI</span>
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm text-[#EFEFE5]/40">
            For individuals, developers, and businesses.
          </p>
          <div className="mt-12 grid grid-cols-3 gap-6">
            {GATEWAY_STATS.map((s) => (
              <div key={s.label}>
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#EFEFE5]/35">{s.label}</p>
                <p className="mt-2 text-2xl font-light text-[#26F4D0] sm:text-3xl">{s.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Awards marquee */}
        <div className="mt-16 border border-white/[0.08] py-4">
          <p className="mb-4 text-center font-mono text-[9px] uppercase tracking-[0.25em] text-[#EFEFE5]/30">
            Awarded by
          </p>
          <div className="overflow-hidden">
            <div className="flex animate-marquee gap-10 whitespace-nowrap px-4">
              {[...AWARDS, ...AWARDS].map((award, i) => (
                <span
                  key={`${award}-${i}`}
                  className="text-[11px] font-medium uppercase tracking-wider text-[#EFEFE5]/25"
                >
                  {award}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
