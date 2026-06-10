"use client";

import { CGPT } from "@/lib/cgpt-assets";
import { FOOTER, SITE } from "@/lib/commerce-data";
import { ExternalArrow, GridBox } from "@/components/chaingpt/GridBox";

export function Footer() {
  return (
    <footer
      id="footer"
      className="cgpt-footer relative z-10 overflow-x-hidden border-t border-white/[0.06] bg-black pb-8 pt-12 lg:pb-12"
    >
      <div className="lc-page-column relative z-[1]">
        <GridBox className="overflow-hidden">
          <div className="border-b border-white/[0.08] p-6 sm:p-8">
            <div className="mb-6 flex items-start gap-3">
              <img src={CGPT.corner} alt="" width={15} height={15} className="mt-1 shrink-0 opacity-70" />
              <h3 className="text-lg font-light text-[#EFEFE5] sm:text-xl">{FOOTER.subscribe.title}</h3>
            </div>
            <form
              className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="flex-1 border-b border-white/15 pb-2">
                <label htmlFor="footer-email" className="sr-only">
                  Email
                </label>
                <input
                  id="footer-email"
                  type="email"
                  placeholder={FOOTER.subscribe.placeholder}
                  className="w-full bg-transparent text-sm text-[#EFEFE5] placeholder:text-[#EFEFE5]/30 outline-none"
                />
              </div>
              <button
                type="submit"
                className="lc-hover-accent cgpt-glitch shrink-0 border border-white/20 px-6 py-2.5 font-mono text-[10px] uppercase tracking-[0.2em] text-[#EFEFE5]"
              >
                {FOOTER.subscribe.button}
              </button>
            </form>
          </div>

          <div className="grid gap-8 p-6 sm:grid-cols-2 sm:p-8 lg:grid-cols-4 lg:gap-6">
            {FOOTER.columns.map((col) => (
              <div key={col.key}>
                <h4 className="mb-4 font-mono text-[10px] uppercase tracking-[0.18em] text-[#EFEFE5]/35">
                  {col.title}
                </h4>
                <ul className="space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-[13px] text-[#EFEFE5]/75 transition-colors hover:text-[var(--lc-accent)]"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="lg:text-right">
              <h4 className="mb-4 font-mono text-[10px] uppercase tracking-[0.18em] text-[#EFEFE5]/35 lg:text-right">
                Connect
              </h4>
              <ul className="space-y-2.5">
                {FOOTER.social.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-[#EFEFE5]/75 transition-colors hover:text-[var(--lc-accent)]"
                      {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    >
                      {link.label}
                      {link.external && <ExternalArrow />}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col items-center justify-between gap-3 border-t border-white/[0.08] px-6 py-4 sm:flex-row sm:px-8">
            <p className="text-[10px] text-[#EFEFE5]/30">
              © {new Date().getFullYear()} {SITE.name}®. All rights reserved.
            </p>
            <div className="flex gap-4">
              {FOOTER.legal.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-[10px] text-[#EFEFE5]/30 transition-colors hover:text-[#EFEFE5]/60"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </GridBox>
      </div>
    </footer>
  );
}
