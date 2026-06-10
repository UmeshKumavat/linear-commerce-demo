"use client";

import { ROADMAP_ITEMS } from "@/lib/cgpt-data";
import { GridBox } from "@/components/chaingpt/GridBox";
import { PrimaryLink, SectionHead } from "@/components/chaingpt/SectionHead";

export function RoadmapSection() {
  return (
    <section id="roadmap" className="border-t border-white/[0.06] bg-black py-16 lg:py-20">
      <div className="container-middle mx-auto max-w-[1220px] px-5 lg:px-8">
        <SectionHead
          title="Explore our"
          titleAccent="Roadmap"
          description={
            <>
              This is a short version of our roadmap.{" "}
              <a href="#" className="underline underline-offset-4 hover:text-[#26F4D0]">
                Read full version here
              </a>
            </>
          }
        />

        <div className="mb-8 aspect-[1220/348] max-h-[200px] border border-white/[0.08] bg-gradient-to-r from-[#724CE8]/10 via-transparent to-[#26F4D0]/10 sm:max-h-[280px]" />

        <div className="flex gap-4 overflow-x-auto pb-4">
          {ROADMAP_ITEMS.map((item) => (
            <GridBox
              key={item.id}
              corner={false}
              className="min-w-[280px] shrink-0 p-5 sm:min-w-[300px]"
            >
              <div className="mb-4 flex items-center justify-between gap-2">
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#26F4D0]/70">
                  {item.id}
                </span>
                <span
                  className={`font-mono text-[9px] uppercase tracking-wider ${
                    item.status === "Completed"
                      ? "text-[#EFEFE5]/35"
                      : item.status === "In Progress"
                        ? "text-[#F8CF3E]/70"
                        : "text-[#26F4D0]/70"
                  }`}
                >
                  {item.status}
                </span>
              </div>
              <p className="text-sm font-medium text-[#EFEFE5]/80">{item.period}</p>
              <ul className="mt-4 space-y-2">
                {item.items.map((line) => (
                  <li key={line} className="text-xs leading-relaxed text-[#EFEFE5]/45">
                    • {line}
                  </li>
                ))}
              </ul>
              <div className="mt-5">
                <PrimaryLink href="#">More details</PrimaryLink>
              </div>
            </GridBox>
          ))}
        </div>
      </div>
    </section>
  );
}
