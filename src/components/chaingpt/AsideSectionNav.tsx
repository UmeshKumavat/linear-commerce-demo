"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CGPT } from "@/lib/cgpt-assets";
import { ASIDE_SECTIONS } from "@/lib/cgpt-data";

export function AsideSectionNav() {
  const [open, setOpen] = useState(false);
  const [pastIntro, setPastIntro] = useState(false);

  useEffect(() => {
    const onScroll = () => setPastIntro(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`fixed bottom-6 left-6 z-50 hidden items-center gap-2 rounded border border-white/[0.08] bg-black/90 px-3 py-2 backdrop-blur-md transition-opacity lg:flex ${
          pastIntro ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-label="All sections"
      >
        <img src={CGPT.menuIcon} alt="" width={24} height={24} />
        <span className="text-[10px] uppercase tracking-[0.2em] text-[#EFEFE5]/50">Menu</span>
        <img src={CGPT.sectionsBtn} alt="Sections" width={14} height={96} />
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.aside
              initial={{ x: -320 }}
              animate={{ x: 0 }}
              exit={{ x: -320 }}
              transition={{ type: "spring", damping: 28, stiffness: 320 }}
              className="fixed bottom-0 left-0 top-0 z-[70] w-[280px] border-r border-white/[0.08] bg-black"
            >
              <div className="flex items-center justify-between border-b border-white/[0.08] px-5 py-4">
                <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-[#EFEFE5]/50">
                  All Sections
                </span>
                <button type="button" onClick={() => setOpen(false)} aria-label="Close">
                  <img src={CGPT.closeIcon} alt="" width={20} height={20} />
                </button>
              </div>
              <nav className="flex flex-col p-3">
                {ASIDE_SECTIONS.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    onClick={() => setOpen(false)}
                    className="border-b border-white/[0.04] px-3 py-3 text-xs uppercase tracking-[0.18em] text-[#EFEFE5]/55 transition-colors hover:text-[#26F4D0]"
                  >
                    {s.label}
                  </a>
                ))}
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
