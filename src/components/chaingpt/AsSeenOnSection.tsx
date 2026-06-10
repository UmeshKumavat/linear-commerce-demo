"use client";

import { TESTIMONIALS, PARTNER_LOGOS } from "@/lib/cgpt-data";

function XIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="opacity-40">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export function AsSeenOnSection() {
  return (
    <section id="reviews" className="border-t border-white/[0.06] bg-black py-12 lg:py-16">
      <div className="container-middle mx-auto max-w-[1220px] px-5 lg:px-8">
        <div className="border border-white/[0.08]">
          <div className="grid lg:grid-cols-[100px_1fr]">
            <div className="hidden border-r border-white/[0.08] p-4 font-mono text-[9px] uppercase leading-relaxed tracking-[0.15em] text-[#EFEFE5]/35 lg:block">
              As<br />seen<br />on:
            </div>

            <div>
              {/* Testimonial cards */}
              <div className="grid divide-y divide-white/[0.08] lg:grid-cols-2 lg:divide-x lg:divide-y-0">
                {TESTIMONIALS.map((t) => (
                  <div key={t.handle} className="p-6 sm:p-8">
                    <div className="mb-4 flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-[10px] font-bold text-[#EFEFE5]/60">
                          {t.name[0]}
                        </div>
                        <div>
                          <div className="text-sm font-medium text-[#EFEFE5]/90">{t.name}</div>
                          <div className="text-xs text-[#EFEFE5]/35">{t.handle}</div>
                        </div>
                      </div>
                      <XIcon />
                    </div>
                    <p className="text-sm leading-relaxed text-[#EFEFE5]/55">{t.text}</p>
                  </div>
                ))}
              </div>

              {/* Partner logo row */}
              <div className="border-t border-white/[0.08] px-4 py-4">
                <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
                  {PARTNER_LOGOS.map((logo) => (
                    <span
                      key={logo}
                      className="text-[10px] font-medium uppercase tracking-[0.14em] text-[#EFEFE5]/20"
                    >
                      {logo}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
