"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FAQ_TABS } from "@/lib/cgpt-data";
import { GridBox } from "@/components/chaingpt/GridBox";

function TabBrackets({ active }: { active: boolean }) {
  if (!active) return null;
  return (
    <>
      <span className="absolute -left-1 -top-1 h-2 w-2 border-l border-t border-white/70" />
      <span className="absolute -right-1 -top-1 h-2 w-2 border-r border-t border-white/70" />
      <span className="absolute -bottom-1 -left-1 h-2 w-2 border-b border-l border-white/70" />
      <span className="absolute -bottom-1 -right-1 h-2 w-2 border-b border-r border-white/70" />
    </>
  );
}

export function FAQSection() {
  const [tabId, setTabId] = useState(FAQ_TABS[0].id);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const tab = FAQ_TABS.find((t) => t.id === tabId) ?? FAQ_TABS[0];

  return (
    <section id="faq" className="border-t border-white/[0.06] bg-black py-16 lg:py-20">
      <div className="container-middle mx-auto max-w-[1220px] px-5 lg:px-8">
        <GridBox className="overflow-hidden">
          {/* Header */}
          <div className="grid border-b border-white/[0.08] lg:grid-cols-2">
            <div className="border-b border-white/[0.08] p-8 lg:border-b-0 lg:border-r">
              <h2 className="text-3xl font-light leading-tight text-[#EFEFE5] sm:text-4xl lg:text-[2.75rem]">
                Frequently asked{" "}
                <span className="inline-block border border-white/25 px-3 py-0.5">Questions</span>
              </h2>
            </div>
            <div className="flex items-center p-8">
              <p className="max-w-sm text-sm leading-relaxed text-[#EFEFE5]/45">
                Can&apos;t find an answer to your question? Feel free to{" "}
                <a href="#about" className="underline underline-offset-4 hover:text-[#26F4D0]">
                  contact us.
                </a>
              </p>
            </div>
          </div>

          {/* Tabs */}
          <div
            role="tablist"
            aria-label="FAQ categories"
            className="flex flex-wrap gap-6 border-b border-white/[0.08] px-6 py-4 font-mono text-[10px] uppercase tracking-[0.18em] sm:gap-10 sm:px-8"
            onKeyDown={(e) => {
              const tabs = FAQ_TABS;
              const cur = tabs.findIndex((t) => t.id === tabId);
              if (e.key === "ArrowRight") {
                const next = (cur + 1) % tabs.length;
                setTabId(tabs[next].id);
                setOpenIndex(0);
              } else if (e.key === "ArrowLeft") {
                const prev = (cur - 1 + tabs.length) % tabs.length;
                setTabId(tabs[prev].id);
                setOpenIndex(0);
              }
            }}
          >
            {FAQ_TABS.map((t) => (
              <button
                key={t.id}
                type="button"
                role="tab"
                aria-selected={tabId === t.id}
                onClick={() => {
                  setTabId(t.id);
                  setOpenIndex(0);
                }}
                className={`relative px-2 py-1 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[rgba(38,244,208,0.4)] ${
                  tabId === t.id ? "text-[#EFEFE5]" : "text-[#EFEFE5]/35 hover:text-[#EFEFE5]/60"
                }`}
              >
                <TabBrackets active={tabId === t.id} />
                {t.label}
              </button>
            ))}
          </div>

          {/* Accordion */}
          <div>
            {tab.items.map((item, i) => {
              const open = openIndex === i;
              return (
                <div key={item.q} className="border-b border-white/[0.08] last:border-b-0">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(open ? null : i)}
                    aria-expanded={open}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[rgba(38,244,208,0.4)] sm:px-8"
                  >
                    <span className="text-sm text-[#EFEFE5]/90 sm:text-base">{item.q}</span>
                    <span className="shrink-0 text-lg font-light text-[#EFEFE5]/30">{open ? "−" : "+"}</span>
                  </button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-5 text-sm leading-relaxed text-[#EFEFE5]/45 sm:px-8">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </GridBox>
      </div>
    </section>
  );
}
